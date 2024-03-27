from fastapi import APIRouter
from services.quoteRequestService import insertQuoteRequestToDB, deleteQuoteRequestFromDatabase, getAllQuoteRequestsFromDB

quoteRequestRouter = APIRouter()

@quoteRequestRouter.post("/api/quoteRequest/add")
async def insertQuoteRequest(data : dict):
    print(f"type: {type(data)}, data: {data}\n")
    insertQuoteRequestToDB(data)

@quoteRequestRouter.delete("/api/quoteRequest/{quoteRequestId}")
async def deleteQuoteRequest(quoteRequestId : str) -> None:
    print(f"quoteRequestId = {quoteRequestId}\n")
    deleteQuoteRequestFromDatabase(quoteRequestId)

@quoteRequestRouter.get("/api/quoteRequest/get")
async def getAllQuoteRequests() -> None:
    data = getAllQuoteRequestsFromDB()
    return data