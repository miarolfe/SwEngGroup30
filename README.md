# SwEng Group 30

## Setup
Make sure you have [Docker](https://www.docker.com/) installed. Set your working directory to the root of the repository and run the following command:
```bash
docker compose build && docker compose up
```
This will build and run the SwEng Group 30 project.

## Technologies
Front-end: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)

Back-end: [Django](https://www.djangoproject.com/#:~:text=Django%20is%20a%20high%2Dlevel,Ridiculously%20fast.), [Django REST framework](https://www.django-rest-framework.org/)

DevOps: [Docker](https://www.docker.com/), [Git](https://git-scm.com/), [GitHub](https://github.com/), [GitHub Actions](https://github.com/features/actions)

To run back end:
in the 'back' directory make .env file with just 
'MONGODB_URI=mongodb+srv://reecewebb:WinningGroup@lifeinsurancecluster.nglevcg.mongodb.net/?retryWrites=true&w=majority'

then in life-insurance-back make a virtual environment with 'python -m venv venv'
in the same directory activate the virtual environment with '.\venv\Scripts\activate'
then use 'uvicorn main:app' to run it
when in local host add /docs at the end e.g. http://127.0.0.1:8000/docs