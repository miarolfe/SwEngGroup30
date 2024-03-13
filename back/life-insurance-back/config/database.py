from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os
load_dotenv()

uri : str = os.getenv("MONGODB_URI")
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
    
db = client.user_app

collection_name = db["users_app"]


db2 = client.DiseaseList
collection_disease = db2["DiseaseList"]

diseases = list(collection_disease.find())
riskScore = 0

for disease in diseases:
    diseaseName = disease["Name"]
    userResponse = input(f"Do you have {diseaseName}? (Yes/No): ").lower()
    if userResponse == "yes":
        riskScore += int(disease["Score"])

print(f"Your total risk score is: {riskScore}")

