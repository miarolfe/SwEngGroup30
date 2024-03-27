from config.database import authUserCollection
from models.quoteListItem import QuoteListItem
from bson import ObjectId

def serialiseAuthUser(doc) -> dict:
    return {
        "_id": str(doc["_id"]),
        "email": doc["email"],
        "employeeStatus": doc["employeeStatus"],
        "quoteHistory": doc["quoteHistory"]
    }

def serialiseQuoteHistory(quoteHistory) -> list[dict]:
    retValue = []
    for quote in quoteHistory:
        retValue.append(serialiseQuoteHistoryItem(quote))
    return retValue

def serialiseQuoteHistoryItem(quote) -> dict:
    return {
        "entryLevelRecommendation":serialiseIndividualQuote(quote["entryLevelRecommendation"]),
        "highLevelRecommendation":serialiseIndividualQuote(quote["highLevelRecommendation"]),
        "premiumLevelRecommendation": serialiseIndividualQuote(quote["premiumLevelRecommendation"]),
        "comment": quote["comment"],
        "timestamp": quote["timestamp"]
    }

def serialiseIndividualQuote(quote) -> dict:
    retValue = {
        "premium": quote["premium"],
        "amountInsured": quote["amountInsured"],
        "yearInsured": quote["yearInsured"],
        "comment":quote["comment"]
    }
    return retValue

def serialiseAuthUsers(documents) -> list[dict]:
    retValue = []
    for doc in documents:
        retValue.append(serialiseAuthUser(doc))
    return retValue




# for testing purpose
def getAllUser():
    users = authUserCollection.find()
    return serialiseAuthUsers(users)

def getQuoteHistoryForAnUser(userId : str) -> dict:
    user = authUserCollection.find_one({"_id": ObjectId(userId)})
    return serialiseAuthUser(user)


def addQuoteToList(newQuote : dict, userId : str) -> None:
    print("inside service function\n")
    print(f"newQuote: {newQuote}\n")
    authUserCollection.update_one({"_id": ObjectId(userId)}, {"$push":{"quoteHistory": newQuote}})

