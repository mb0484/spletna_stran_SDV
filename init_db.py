import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO clanek (title, subtitle, content, short_content, image1) VALUES (?, ?, ?, ?, ?)",
            ('First Post', 'First sub post', 'content', 'short content', '')
            )

cur.execute("INSERT INTO slika_k_clanku (clanek_id, image_blob) VALUES (?, ?)",
            (1, 'UoiuhkJHLkjhKJhlkJhlkJHlkjHLkjhlkJHlkJHlkjhLKjh')
            )

connection.commit()
connection.close()