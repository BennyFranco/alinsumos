#!bin/bash
cd dist
find . -type f -exec curl -u $FTP_USER:$FTP_PASS --ftp-create-dirs -T {} ftp://$FTP_DOMAIN/alinsumos/{} \;
