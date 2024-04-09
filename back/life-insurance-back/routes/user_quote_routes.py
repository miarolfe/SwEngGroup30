from services.userQuoteListService import addQuoteToList, getQuoteHistoryForAnUser
from fastapi import APIRouter, Header, HTTPException
from models.quoteListItem import QuoteListItem, QuoteItem
from services.quoteRequestService import getCurrentDateAndTime
from config.database import authUserCollection
from schemas.users_schema import users_serialiser
from bson import ObjectId

userQuoteListRouter = APIRouter(
    prefix="/api/user/quotelist"
)

@userQuoteListRouter.get("/{userId}")
def getEntireQuoteHistory(userId : str, authId : str = Header(None)):
    userSearch = {}
    try:
        userSearch = authUserCollection.find_one({"_id": ObjectId(authId)})
        print(userSearch)
    except:
        raise HTTPException(status_code=401, detail="User not Logged in")
    
    if not userSearch:
        raise HTTPException(status_code=401, detail="User not Logged in")
    
    return getQuoteHistoryForAnUser(userId)

def convertQuoteListItemToDict(quote : QuoteListItem) -> dict:
    retValue = {
        "entryLevelRecommendation":convertQuoteItemToDict(quote.entryLevelRecommendation),
        "highLevelRecommendation":convertQuoteItemToDict(quote.highLevelRecommendation),
        "premiumLevelRecommendation": convertQuoteItemToDict(quote.premiumLevelRecommendation),
        "comment": quote.comment,
        "timestamp": getCurrentDateAndTime()
    }
    return retValue
def convertQuoteItemToDict(quoteItem : QuoteItem) -> dict:
    return {
        "premium": quoteItem.premium,
        "amountInsured": quoteItem.amountInsured,
        "yearInsured": quoteItem.yearInsured,
        "comment":quoteItem.comment
    }

# @userQuoteListRouter.put("/api/user/quotelist/{userId}")
# async def updateUserQuoteList(userId : str, newQuote:QuoteListItem):
#     print(f"newQuote in route: {newQuote}\n")
#     addQuoteToList(convertQuoteListItemToDict(newQuote), userId)