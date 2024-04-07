from fastapi import APIRouter
from services.quoteRequestService import insertQuoteRequestToDB, deleteQuoteRequestFromDatabase, getAllQuoteRequestsFromDB
from pydantic import BaseModel
from routes.premium_routes import MedicalHistory
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
async def deleteQuoteRequest(userId : str, quote : dict) -> None:
    # print(f"quoteRequestId = {userId}\n")
    deleteQuoteRequestFromDatabase(userId, quote)

@quoteRequestRouter.get("/get")
async def getAllQuoteRequests() -> None:
    data = getAllQuoteRequestsFromDB()
    return data