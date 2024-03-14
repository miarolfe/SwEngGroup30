from fastapi import FastAPI
from routes.users_routes import user_api_router

app = FastAPI()

app.include_router(user_api_router)

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