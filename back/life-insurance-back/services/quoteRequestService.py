from config.database import quoteRequestCollection
from datetime import datetime
from pydantic import BaseModel
import json
def getCurrentDateAndTime():
    # Get the current date and time
    currentDate = datetime.now()
    
    # Format the date and time as "YYYY-MM-DD HH:MM"
    formattedDatetime = currentDate.strftime("%Y-%m-%d %H:%M")
    
    return formattedDatetime



def insertQuoteRequestToDB(data : dict) -> None:
    data["Timestamp"] = getCurrentDateAndTime()
    id = quoteRequestCollection.insert_one(data)


def deleteQuoteRequestFromDatabase(quoteRequestId : str) -> None:
    ret = quoteRequestCollection.delete_one({"userId": quoteRequestId})
    print(f"ret = {ret}\n")


def serializeQuoteRequest(documents):
    retVal = []
    for document in documents:
        doc = {
            "userId" : document["userId"],
            "medicalRecord" : document["medicalRecord"],
            "timestamp": document["Timestamp"]
        }
        retVal.append(doc)   
    return retVal

def getAllQuoteRequestsFromDB() -> list[dict]:
    documents = quoteRequestCollection.find()
    return serializeQuoteRequest(documents)