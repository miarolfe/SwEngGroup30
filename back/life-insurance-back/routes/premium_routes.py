from fastapi import APIRouter, HTTPException, Header
from config.database import collection_name as user_collection, authUserCollection
from schemas.users_schema import users_serialiser
from pydantic import BaseModel
from services.premiumCalculationService import calculatePremium
from services.riskCalculationService import calculateAgeFromDOB
from bson import ObjectId

premium_calculator_router = APIRouter(
    prefix="/api/premium"
)

@premium_calculator_router.get("/")
def helloWorld():
    return "Hello World"



@premium_calculator_router.get("/{userId}/{userSocialMediaName}")
async def getPremiumForUser(userId : str, userSocialMediaName : str, authId : str = Header(None)):
    userSearch = {}
    try:
        userSearch = authUserCollection.find_one({"_id": ObjectId(authId)})
    except:
        raise HTTPException(status_code=401, detail="User not Logged in")
    
    if not userSearch:
        raise HTTPException(status_code=401, detail="User not Logged in")

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





@premium_calculator_router.post("/{userId}")
async def getPremiumForUser(userId : str, user : MedicalHistory, authId : str = Header(None)):
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
