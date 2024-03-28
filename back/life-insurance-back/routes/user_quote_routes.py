from services.userQuoteListService import addQuoteToList, getQuoteHistoryForAnUser
from fastapi import APIRouter
from models.quoteListItem import QuoteListItem, QuoteItem
from services.quoteRequestService import getCurrentDateAndTime
userQuoteListRouter = APIRouter()

@userQuoteListRouter.get("/api/user/quotelist/{userId}")
def getEntireQuoteHistory(userId : str):
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