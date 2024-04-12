# Software Engineering Project: Group 30

## Setup

### Running with API on AWS
Note: This method is only possible with our EC2 instance being kept active

cd into front/life-insurance-front

Then run:
```bash
npm install
```
Which installs all required packages

Then build the project with:
```bash
npm run build
```
Then run it with:
```bash
npm start
```

### Running API Locally:
Change the root address of all api requests from http://18.168.50.21:80 to http://0.0.0.0:8000

Make sure you have [Docker](https://www.docker.com/) installed. Set your working directory to the root of the repository and run the following command:
```bash
docker compose build && docker compose up
```
This will build and run the SwEng Group 30 project.

When you're done running the project, run the following command:
```bash
docker compose down
```

## Technologies
Front-end: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)

Back-end: [FastAPI](https://fastapi.tiangolo.com/), [Amazon Lex](https://aws.amazon.com/lex/)

DevOps: [Docker](https://www.docker.com/), [Git](https://git-scm.com/), [GitHub](https://github.com/)