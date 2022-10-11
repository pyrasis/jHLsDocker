#!/bin/sh

python3 manage.py migrate
gunicorn exampleapp.wsgi -b unix:/tmp/gunicorn.sock -D
nginx
