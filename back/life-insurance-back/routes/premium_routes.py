from fastapi import APIRouter
from config.database import collection_name as user_collection, collection_disease as disease_collection
from schemas.users_schema import users_serialiser
from pydantic import BaseModel
from services.premiumCalculationService import calculatePremium
from services.riskCalculationService import calculateAgeFromDOB
premium_calculator_router = APIRouter()

@premium_calculator_router.get("/")
def helloWorld():
    return "Hello World"



@premium_calculator_router.get("/api/premium/{userId}/{userSocialMediaName}")
async def getPremiumForUser(userId : str, userSocialMediaName : str):
    users = users_serialiser(user_collection.find())
    return calculatePremium(users[0], userId)

class MedicalHistory(BaseModel):
    patientName: str
    dateOfBirth : str
    sex : str
    occupation : str
    yearlyIncomeInEuro : float
    residenceCountry : str
    weightInKG : float
    heightInCM : float
    exerciseHourPerWeek : int
    smokingHistory : int
    drinkingHistory : int
    hereditaryConditions : list[str]
    healthConditions : list[str]





@premium_calculator_router.post("/api/premium/{userId}")
async def getPremiumForUser(userId : str, user : MedicalHistory):

    print(f"req.body = {user}\n")
    userDictionary : dict = {}
    userDictionary["patientName"] = user.patientName
    userDictionary["age"] = calculateAgeFromDOB(user.dateOfBirth)
    userDictionary["sex"] = user.sex
    userDictionary["hereditaryConditions"] = user.hereditaryConditions
    userDictionary["healthConditions"] = user.healthConditions
    userDictionary["drinkingHistory"] = user.drinkingHistory
    userDictionary["smokingHistory"] = user.smokingHistory
    userDictionary["exerciseHourPerWeek"] = user.exerciseHourPerWeek
    userDictionary["occupation"] = user.occupation
    userDictionary["yearlyIncomeInEuro"] = user.yearlyIncomeInEuro
    userDictionary["residenceCountry"] = user.residenceCountry
    userDictionary["weightInKG"] = user.weightInKG
    userDictionary["heightInCM"] = user.heightInCM

    if(userDictionary["age"] < 0):
        return "Please enter a valid age"
    elif(userDictionary["age"] >= 70):
        return "Sorry but we are unable to insure you for health insurance as your age exceeds our age limit"
    else:
        return calculatePremium(userDictionary, userId)
