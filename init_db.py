import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO dogodkiVKoledarju (dogodekDatum, dogodekOpis) VALUES (?, ?)",
            ('22-2-2021', "Predstavitev spletne strani")
            )

cur.execute("INSERT INTO slika_k_clanku (dogodekDatum, dogodekOpis) VALUES (?, ?)",
            ('23-2-2021', "Upam da danes kaj naredim")
            )

connection.commit()
connection.close()