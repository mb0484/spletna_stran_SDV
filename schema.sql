DROP TABLE IF EXISTS clanek;
DROP TABLE IF EXISTS slika_k_clanku;

CREATE TABLE clanek (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    content TEXT NOT NULL,
    short_content TEXT NOT NULL,
    image1 BLOB NOT NULL
    /*ostaliImagesId REFERENCES slika_k_clanku(ID)*/
);

CREATE TABLE slika_k_clanku (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    clanek_id INTEGER NOT NULL,
    image_blob BLOB NOT NULL,
    FOREIGN KEY (clanek_id) REFERENCES clanek (id)
);