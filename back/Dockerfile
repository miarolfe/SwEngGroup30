FROM python:3.9

RUN pip install fastapi

RUN pip install "uvicorn[standard]"

WORKDIR /app

COPY ./life-insurance-back /app

EXPOSE 8000

CMD ["python", "app.py"]