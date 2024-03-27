from fastapi import FastAPI
from routes.users_routes import user_api_router
from routes.premium_routes import premium_calculator_router
from routes.quote_service_routes import quoteRequestRouter
import pymongo
from fastapi.middleware.cors import CORSMiddleware
from config.database import collection_name as user_collection, collection_disease as disease_collection
app = FastAPI()

app.include_router(user_api_router)
app.include_router(premium_calculator_router)

app.include_router(quoteRequestRouter)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust to your needs, "" allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)




# import json

# filePath = 'Disease.json'

# with open(filePath, 'r') as file:
#         file_content = file.read()
#         diseases = json.loads(file_content)

# objectIdField = diseases.get('ObjectID')
# nameField = diseases.get('Name')
# scoreField = diseases.get('Score')

# riskScore = 1
# checkZero = False           #if no diseases at all

# for i in range(len(nameField)):
#         user_input = input("Do you have " + nameField[i] + " (Yes/No): ")
#         if user_input.lower() == "yes":
#                 riskScore *= int(scoreField[i])
#                 checkZero = True

# if not checkZero:
#         riskScore = 0


# print("Your risk score is:", riskScore)