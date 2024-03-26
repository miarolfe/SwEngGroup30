from fastapi import APIRouter
from services.quoteRequestService import insertQuoteRequestToDB, deleteQuoteRequestFromDatabase

quoteRequestRouter = APIRouter()

# class QuoteRequest(BaseModel):
#     userId : str
#     medicalRecord : str



@quoteRequestRouter.post("/api/quoteRequest/add")
async def insertQuoteRequest(data : dict):
    print(f"type: {type(data)}, data: {data}\n")
    insertQuoteRequestToDB(data)

@quoteRequestRouter.delete("/api/quoteRequest/{quoteRequestId}")
async def deleteQuoteRequest(quoteRequestId : str) -> None:
    print(f"quoteRequestId = {quoteRequestId}\n")
    deleteQuoteRequestFromDatabase(quoteRequestId)