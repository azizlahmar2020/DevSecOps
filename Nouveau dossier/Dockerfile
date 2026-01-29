FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=foyerdb
ENV MYSQL_USER=foyer
ENV MYSQL_PASSWORD=foyer

COPY init.sql /docker-entrypoint-initdb.d/
