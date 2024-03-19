FROM python:3.9

WORKDIR /app

COPY ./life-insurance-back /app

RUN pip install -r requirements.txt

RUN python -m uvicorn main:app --reload

EXPOSE 8000

