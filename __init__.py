import sqlite3
import bcrypt
from flask import Flask, render_template, request, url_for, flash, redirect
from werkzeug import exceptions

def get_db_connection():
    conn = sqlite3.connect('/var/www/spletna_stran_SDV/spletna_stran_SDV/database.db') #/var/www/spletna_stran_SDV/spletna_stran_SDV/
    conn.row_factory = sqlite3.Row
    return conn

def get_post(post_id):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id = ?',
                        (post_id,)).fetchone()
    conn.close()
    if post is None:
        exceptions.abort(404)
    return post

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your secret key'

salt = bcrypt.gensalt()
hashed_pass_for_objavi = b'$2b$12$VXXd1rQe7iSFjUjhekn4r.ZHx0QOvTcJhnapgTpeT5DZCQ6nGHTFK'
hashed_pass_for_edit = b'$2b$12$I3uVKhGPMc4fwsFMvGwFF.5Zn.sS2skgDXJ8CTG7GA1TkUemiRF9y'
hashed_pass_for_delete = b'$2b$12$LmoDxi1PxmQYGZDGDXlCgu7SQb72UFnAgaskoIG2eXCzElpRnIsby'

@app.route('/')
def index():
    conn = get_db_connection()
    zadnje_slike = conn.execute('SELECT * FROM slika_k_clanku ORDER BY created DESC').fetchall()

    zadnji_clanki = conn.execute('SELECT id, short_content, image1Smaller FROM clanek ORDER BY created DESC').fetchall()

    stZadnjihSlikZaPrikaz = 6

    if (len(zadnje_slike) > stZadnjihSlikZaPrikaz):
        zadnje_slike = zadnje_slike[0:stZadnjihSlikZaPrikaz]

    stZadnjihClankovZaPrikaz = 4

    if (len(zadnji_clanki) > stZadnjihClankovZaPrikaz):
        zadnji_clanki = zadnji_clanki[0:stZadnjihClankovZaPrikaz]

    conn.close()

    return render_template('index.html', zadnje_slike=zadnje_slike, zadnji_clanki=zadnji_clanki)

@app.route('/novice')
def novice():
    conn = get_db_connection()
    clanek = conn.execute('SELECT * FROM clanek ORDER BY created DESC').fetchone()

    clanek_ostale_slike = conn.execute('SELECT * FROM slika_k_clanku WHERE clanek_id = ?',
                        (clanek['id'],)).fetchall()

    zadnje_slike = conn.execute('SELECT * FROM slika_k_clanku ORDER BY created DESC').fetchall()

    zadnji_clanki = conn.execute('SELECT * FROM clanek ORDER BY created DESC').fetchall()

    stZadnjihSlikZaPrikaz = 6

    if (len(zadnje_slike) > stZadnjihSlikZaPrikaz):
        zadnje_slike = zadnje_slike[0:stZadnjihSlikZaPrikaz]

    conn.close()
    if clanek is None:
        return exceptions.abort(404)
    return render_template('novice.html', clanek=clanek, clanek_ostale_slike=clanek_ostale_slike, zadnje_slike=zadnje_slike, zadnji_clanki=zadnji_clanki)

@app.route('/<int:novica_id>')
def get_novica(novica_id):
    conn = get_db_connection()
    clanek = conn.execute('SELECT * FROM clanek WHERE id = ?',
                        (novica_id,)).fetchone()
    clanek_ostale_slike = conn.execute('SELECT * FROM slika_k_clanku WHERE clanek_id = ?',
                        (novica_id,)).fetchall()

    zadnje_slike = conn.execute('SELECT * FROM slika_k_clanku ORDER BY created DESC').fetchall()

    zadnji_clanki = conn.execute('SELECT * FROM clanek ORDER BY created DESC').fetchall()

    stZadnjihSlikZaPrikaz = 6

    if (len(zadnje_slike) > stZadnjihSlikZaPrikaz):
        zadnje_slike = zadnje_slike[0:stZadnjihSlikZaPrikaz]

    conn.close()
    if clanek is None:
        return exceptions.abort(404)
    return render_template('novice.html', clanek=clanek, clanek_ostale_slike=clanek_ostale_slike, zadnje_slike=zadnje_slike, zadnji_clanki=zadnji_clanki)

@app.route('/<int:novica_id>/edit', methods=('GET', 'POST'))
def edit_novica(novica_id):
    if request.method == 'GET':
        conn = get_db_connection()
        clanek = conn.execute('SELECT * FROM clanek WHERE id = ?',
                            (novica_id,)).fetchone()
        clanek_ostale_slike = conn.execute('SELECT * FROM slika_k_clanku WHERE clanek_id = ?',
                            (novica_id,)).fetchall()
        conn.close()
        if clanek is None:
            exceptions.abort(404)
    if request.method == 'POST':
        title = request.form.get("title")
        subtitle = request.form.get("subtitle")
        vsebina = request.form.get("vsebina")
        povzetek = request.form.get("povzetek")
        image1 = request.form.get("image1")
        image1Smaller = request.form.get("image1Smaller")
        othr_images = request.form.getlist('othr_images[]')
        password = request.form.get("password")

        if bcrypt.checkpw(b'' + password.encode('utf-8'), hashed_pass_for_edit):

            if not title:
                flash('Title is required!')
            if not subtitle:
                flash('Sub title is required!')
            if not vsebina:
                flash('Content is required!')
            if not povzetek:
                flash('Short description is required!')
            if not image1:
                flash('At least one image is required!')
            else:
                conn = get_db_connection()
                conn.execute('UPDATE clanek SET title = ?, subtitle = ?, content = ?, short_content = ?, image1 = ?, image1Smaller = ?'
                            ' WHERE id = ?',
                            (title, subtitle, vsebina, povzetek, image1, image1Smaller, novica_id))

                changed_images = request.args['changed_images']

                if (changed_images == 'true'):
                    conn.execute('DELETE FROM slika_k_clanku WHERE clanek_id = ?', (novica_id,))

                    if (othr_images):
                        for image in othr_images:
                            conn.execute('INSERT INTO slika_k_clanku (clanek_id, image_blob) VALUES (?, ?)', (novica_id, image))

                conn.commit()
                conn.close()
                return redirect(url_for('index'))
        else:
            return exceptions.abort(401)

    return render_template('edit.html', clanek=clanek, clanek_ostale_slike=clanek_ostale_slike, index_clanek_edit=novica_id)

@app.route('/<int:novica_id>/delete', methods=('POST',))
def delete_novica(novica_id):
    password = request.form.get("password")

    if bcrypt.checkpw(b'' + password.encode('utf-8'), hashed_pass_for_delete):
        conn = get_db_connection()
        conn.execute('DELETE FROM clanek WHERE id = ?', (novica_id,))
        conn.execute('DELETE FROM slika_k_clanku WHERE clanek_id = ?', (novica_id,))
        conn.commit()
        conn.close()
        return redirect(url_for('index'))
    else:
        return exceptions.abort(401)

@app.route('/koledar')
def koledar():
    return render_template('koledar.html')

@app.route('/skupine')
def skupine():
    return render_template('skupine.html')

@app.route('/create', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        title = request.form.get("title")
        subtitle = request.form.get("subtitle")
        vsebina = request.form.get("vsebina")
        povzetek = request.form.get("povzetek")
        image1 = request.form.get("image1")
        image1Smaller = request.form.get("image1Smaller")
        othr_images = request.form.getlist('othr_images[]')
        password = request.form.get("password")

        if bcrypt.checkpw(b'' + password.encode('utf-8'), hashed_pass_for_objavi):
            if not title:
                flash('Title is required!')
            if not subtitle:
                flash('Sub title is required!')
            if not vsebina:
                flash('Content is required!')
            if not povzetek:
                flash('Short description is required!')
            if not image1:
                flash('At least one image is required!')
            else:
                conn = get_db_connection()
                cursor = conn.cursor()
                cursor.execute('INSERT INTO clanek (title, subtitle, content, short_content, image1, image1Smaller) VALUES (?, ?, ?, ?, ?, ?)',
                            (title, subtitle, vsebina, povzetek, image1, image1Smaller))
                clanek_id = cursor.lastrowid;
                print("clanek id je", clanek_id)

                if (othr_images):
                    for image in othr_images:
                        cursor.execute('INSERT INTO slika_k_clanku (clanek_id, image_blob) VALUES (?, ?)', (clanek_id, image))

                conn.commit()
                conn.close()
                return redirect(url_for('index'))
        else:
            return exceptions.abort(401)

    return render_template('create.html')
