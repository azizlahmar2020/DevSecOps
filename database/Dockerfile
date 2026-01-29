FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=devsecopsdb
ENV MYSQL_USER=devsecops
ENV MYSQL_PASSWORD=devsecops

COPY init.sql /docker-entrypoint-initdb.d/
