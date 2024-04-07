from fastapi import APIRouter, Header, HTTPException
from services.quoteRequestService import insertQuoteRequestToDB, deleteQuoteRequestFromDatabase, getAllQuoteRequestsFromDB
from pydantic import BaseModel
from routes.premium_routes import MedicalHistory
from config.database import authUserCollection
from bson import ObjectId

quoteRequestRouter = APIRouter(
    prefix="/api/quoteRequest"
)

class QuoteQuest(BaseModel):
    userId : str
    medicalRecord: MedicalHistory
    timestamp: str


# @quoteRequestRouter.post("/api/quoteRequest/add")
# async def insertQuoteRequest(data):
#     # print(f"type: {type(data)}, data: {data}\n")
#     # quoteRequest = {}
#     # quoteRequest["userId"] = data.userId
#     # quoteRequest["medicalRecord"] = data.medicalRecord
#     insertQuoteRequestToDB(data)

@quoteRequestRouter.delete("/{userId}")
async def deleteQuoteRequest(userId : str, quote : dict, authId : str = Header(None)) -> None:
    # print(f"quoteRequestId = {userId}\n")
    userSearch = {}
    try:
        userSearch = authUserCollection.find_one({"_id": ObjectId(authId)})
    except:
        raise HTTPException(status_code=401, detail="User not Logged in")
    
    if not userSearch:
        raise HTTPException(status_code=401, detail="User not Logged in")

    deleteQuoteRequestFromDatabase(userId, quote)

@quoteRequestRouter.get("/get")
async def getAllQuoteRequests(authId : str = Header(None)) -> None:
    userSearch = {}
    try:
        userSearch = authUserCollection.find_one({"_id": ObjectId(authId)})
    except:
        raise HTTPException(status_code=401, detail="User not Logged in")
    
    if not userSearch:
        raise HTTPException(status_code=401, detail="User not Logged in")

    data = getAllQuoteRequestsFromDB()
    return data