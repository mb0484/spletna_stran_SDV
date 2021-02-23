import sqlite3

connection = sqlite3.connect('../database.db')


connection.executescript('''
    DROP TABLE IF EXISTS dogodkiVKoledarju;

    CREATE TABLE dogodkiVKoledarju (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        dogodekDatum TEXT NOT NULL,
        dogodekOpis TEXT NOT NULL
    );
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