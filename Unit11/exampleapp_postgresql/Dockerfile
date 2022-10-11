FROM alpine:latest

RUN apk add tzdata
ENV TZ=Asia/Seoul

RUN apk add python3 py3-pip postgresql-dev python3-dev musl-dev nginx gcc

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
ADD default.conf /etc/nginx/http.d/default.conf

RUN pip install django gunicorn psycopg2

ADD ./ /var/www/exampleapp
WORKDIR /var/www/exampleapp
RUN chmod +x entrypoint.sh

EXPOSE 80

ENTRYPOINT ./entrypoint.sh
