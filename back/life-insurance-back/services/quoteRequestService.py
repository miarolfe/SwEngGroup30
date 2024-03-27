from config.database import quoteRequestCollection
from services.userQuoteListService import addQuoteToList
from datetime import datetime
from bson import ObjectId
def getCurrentDateAndTime():
    # Get the current date and time
    currentDate = datetime.now()
    
    # Format the date and time as "YYYY-MM-DD HH:MM"
    formattedDatetime = currentDate.strftime("%Y-%m-%d %H:%M")
    
    return formattedDatetime



def insertQuoteRequestToDB(data : dict) -> None:
    data["timestamp"] = getCurrentDateAndTime()
    id = quoteRequestCollection.insert_one(data)


def deleteQuoteRequestFromDatabase(quoteRequestId : str, quote : dict) -> None:
    ret = quoteRequestCollection.delete_one({"userId": ObjectId(quoteRequestId)})
    addQuoteToList(newQuote=quote, userId=quoteRequestId)


def serializeQuoteRequest(documents):
    retVal = []
    for document in documents:
        doc = {
            "userId" : str(document["userId"]),
            "medicalRecord" : document["medicalRecord"],
            "timestamp": document["timestamp"]
        }
        retVal.append(doc)   
    return retVal

def getAllQuoteRequestsFromDB() -> list[dict]:
    documents = quoteRequestCollection.find()
    return serializeQuoteRequest(documents)