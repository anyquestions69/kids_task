FROM php:7.4-apache
COPY . /var/www/html/
RUN apt-get update && apt-get upgrade
RUN apt-get install vsftpd
RUN systemctl status vsftpd