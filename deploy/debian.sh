#!/bin/bash
apt-get install -y apache2

cd $(dirname $0)
cp vhost.conf /etc/apache2/sites-available/pensjonat-tulipan.pl

cd ..
mkdir -p /var/www
ln -s $(pwd) /var/www/pensjonat-tulipan.pl

a2ensite pensjonat-tulipan.pl
/etc/init.d/apache2 reload
