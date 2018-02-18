NAME = $1
openssl genrsa -out $NAME-key.pem 2048
openssl req -new -key $NAME-key.pem -out $NAME-csr.pem -extensions req_ext -config ssl.conf -subj '/CN=demo.api/O=Demo API/C=US/L=Los Angeles/OU=API'
openssl x509 -req -in $NAME-csr.pem -days 36500 -signkey $NAME-key.pem -out $NAME-cert.pem -extensions req_ext -extfile ssl.conf
openssl dhparam -out $NAME-dh.pem 2048
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $NAME-cert.pem
