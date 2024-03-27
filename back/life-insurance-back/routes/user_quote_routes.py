from services.userQuoteListService import getAllUser
from fastapi import APIRouter
userQuoteListRouter = APIRouter()






@userQuoteListRouter.get("/api/user/quotelists")
async def getAllUsers():
    return getAllUser()
