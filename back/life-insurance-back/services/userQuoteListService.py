from config.database import authUserCollection



def serialiseAuthUser(doc) -> dict:
    return {
        "email": doc["email"],
        "employeeStatus": doc["employeeStatus"]
    }


def serialiseAuthUsers(documents) -> list[dict]:
    retValue = []
    for doc in documents:
        retValue.append(serialiseAuthUser(doc))
    return retValue


def getAllUser():
    users = authUserCollection.find()
    return serialiseAuthUsers(users)

