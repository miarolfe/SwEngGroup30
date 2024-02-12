from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

#ENTER USERNAME AND PASSWORD THEN RUN CODE
uri = "mongodb+srv://<username>:<password>@lifeinsurancecluster.nglevcg.mongodb.net/?retryWrites=true&w=majority"
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
