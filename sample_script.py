#!/usr/bin/env python3

import bcrypt

#salt = bcrypt.gensalt()
#hashed = b'$2b$12$iwxCSPfd/n9NAY5iW3/FDObDhyWRsAVxSkYUc2tRuH2Z/KoCf7hv.' #bcrypt.hashpw(passwd, salt)

passwd_objava = b'kreiraj_objavo_vincencij'
passwd_edit_objava = b'uredi_objavo_vincencij'
passwd_delete_objava = b'izbrisi_objavo_vincencij'

#salt = bcrypt.gensalt()
#hashed = bcrypt.hashpw(passwd_delete_objava, salt)
hashed = b'$2b$12$LmoDxi1PxmQYGZDGDXlCgu7SQb72UFnAgaskoIG2eXCzElpRnIsby'

print(hashed)

if bcrypt.checkpw(passwd_delete_objava, hashed):
    print("match")
else:
    print("does not match")