from fastapi import APIRouter, Request
from config.database import collection_name as user_collection, collection_disease as disease_collection
from schemas.users_schema import users_serialiser
import random
from pydantic import BaseModel
from services.premiumCalculationService import calculatePremium
premium_calculator_router = APIRouter()


@premium_calculator_router.get("/api/premium/{name}")
async def getPremiumForUser(name : str):
    users = users_serialiser(user_collection.find())
    return calculatePremium(users[0])

class UserRequestObject(BaseModel):
    patientName: str
    age : int
    hereditaryConditions : list[str]
    healthConditions : list[str]
    drinkingHistory : int
    smokingHistory : int
    exerciseHourPerWeek : int




@premium_calculator_router.post("/api/premium/")
async def getPremiumForUser(user : UserRequestObject):

    print(f"req.body = {user}\n")
    userDictionary : dict = {}
    userDictionary["patientName"] = user.patientName
    userDictionary["age"] = user.age
    userDictionary["hereditaryConditions"] = user.hereditaryConditions
    userDictionary["healthConditions"] = user.healthConditions
    userDictionary["drinkingHistory"] = user.drinkingHistory
    userDictionary["smokingHistory"] = user.smokingHistory
    userDictionary["exerciseHourPerWeek"] = user.exerciseHourPerWeek
    # users = users_serialiser(user_collection.find())
    # size : int = len(users)
    # print(f"users type = {users}\n")
    if(user.age < 0):
        return "Please enter a valid age"
    elif(user.age >= 70):
        return "Sorry but we are unable to insure you for health insurance as your age exceeds our age limit"
    else:
        return calculatePremium(userDictionary)
    # return user