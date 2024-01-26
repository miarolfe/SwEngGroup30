FROM python:3.9

RUN pip install django djangorestframework

WORKDIR /app

COPY ./life_insurance_back_project /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]