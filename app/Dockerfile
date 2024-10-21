FROM php:7.4-apache
COPY . /var/www/html/
RUN apt update && apt upgrade
RUN apt install vsftpd
RUN systemctl status vsftpd