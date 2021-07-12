import sqlite3

connection = sqlite3.connect('../database.db')


connection.executescript('''
    ALTER TABLE slika_k_clanku ADD COLUMN pripis TEXT;
''')

cur = connection.cursor()

cur.execute("INSERT INTO dogodkiVKoledarju (dogodekDatum, dogodekOpis) VALUES (?, ?)",
            ('22-2-2021', "Predstavitev spletne strani")
            )

cur.execute("INSERT INTO dogodkiVKoledarju (dogodekDatum, dogodekOpis) VALUES (?, ?)",
            ('23-2-2021', "Upam da danes kaj naredim")
            )

connection.commit()
connection.close()