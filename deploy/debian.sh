#!/bin/bash
apt-get install apache2 php5 libapache2-mod-php5

cd $(dirname $0)
ln -s $(pwd) /var/www/pensjonat-tulipan.pl

