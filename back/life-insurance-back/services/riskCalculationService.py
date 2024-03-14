
import pymongo
from config.database import collection_name as user_collection, collection_disease as disease_collection
from schemas.users_schema import users_serialiser, user_serialiser
from bson import ObjectId
BASE_RISK_SCORE = 10
SMOKING_RISK_PROPORTION = 0.15
DRINKING_RISK_PROPORTION = 0.1
DISEASE_RISK_PROPORTION = 0.6
EXCERCISE_RISK_PROPORTION = 0.1
diseaseCursor : pymongo.cursor.Cursor = disease_collection.find()
diseaseDict : dict = []
HereditaryRisk : dict = []
for disease in diseaseCursor:
    diseaseName : str = disease["Name"]
    score : int = disease["Score"]
    diseaseDict[diseaseName.casefold()] = score
    HereditaryRisk[diseaseName.casefold()] = disease["HereditaryRisk"]

def getRiskScoreFromUserHealthCondition(user : dict) -> float:
    riskScoreFromHealthDisease : float =  ((calculateRiskScorefromHereditaryConditions(user) + calculateRiskScoreFromMedicalHistory(user)) * DISEASE_RISK_PROPORTION) + BASE_RISK_SCORE
    riskScoreFromHabbit : float = (getRiskScoreFromSmokingHistory(user) * SMOKING_RISK_PROPORTION) + (getRiskScoreFromDrinkingHistory(user) * DRINKING_RISK_PROPORTION) - (getDeductionFromHabbit(user) * EXCERCISE_RISK_PROPORTION)
    totalRiskScore = riskScoreFromHealthDisease + riskScoreFromHabbit
    return totalRiskScore



def getDeductionFromHabbit(user : dict) -> float:
    exerciseHourPerWeek : float = user["exerciseHourPerWeek"]
    if exerciseHourPerWeek < 3:
        return 0
    elif exerciseHourPerWeek < 5:
        return 0.03
    elif exerciseHourPerWeek < 10:
        return 0.125
    elif exerciseHourPerWeek < 15:
        return 0.25
    elif exerciseHourPerWeek < 20:
        return 0.375
    else:
        return 0.5



def getRiskScoreFromSmokingHistory(user : dict) -> float:
    smokingYears : int = user["smokingHistory"]
    if smokingYears < 3:
        return 0
    elif smokingYears < 5:
        return 0.124
    elif smokingYears < 10:
        return 0.348
    elif smokingYears < 15:
        return 0.756
    elif smokingYears < 20:
        return 0.8653
    elif smokingYears < 25:
        return 0.921
    else:
        return 1.0
    
def getRiskScoreFromDrinkingHistory(user : dict) -> float:
    drinkingYears : int = user["drinkingHistory"]
    if drinkingYears < 3:
        return 0
    elif drinkingYears < 5:
        return 0.056
    elif drinkingYears < 10:
        return 0.2465
    elif drinkingYears < 15:
        return 0.3657
    elif drinkingYears < 20:
        return 0.5237
    elif drinkingYears < 25:
        return 0.75482
    elif drinkingYears < 30:
        return 0.8562
    else:
        return 1.0

def calculateRiskScorefromHereditaryConditions(user : dict) -> float:
    riskScore : float = 0.0
    hereditaryConditionsOfUser : list[str] = user['hereditaryConditions']
    for hereditaryCondition in hereditaryConditionsOfUser:
        hereditaryConditionInLoweCase : str = hereditaryCondition.casefold()
        try:
            riskScore = riskScore + (diseaseDict[hereditaryConditionInLoweCase] * HereditaryRisk[hereditaryConditionInLoweCase])
        except KeyError:
            # unknown disease -> increment the riskScore by 3 multiply by 0.2 (hereditary risk score)
            riskScore = riskScore + (3 * 0.2)
    return riskScore

def calculateRiskScoreFromMedicalHistory(user : dict) -> int:
    riskScore : int = 0
    healthConditions : list[str] = user["healthConditions"]
    for healthProblem in healthConditions:
        try:
            score : int = diseaseDict[healthProblem.casefold()]
            riskScore = riskScore + score
        except KeyError:
            # unknown disease -> increment score by 3
            score = score + 3
    return riskScore


# def get_calculation(user : dict):
#     # user = user_collection.find_one({"_id": ObjectId(id)})
#     diseaseList = disease_collection.find()
    
#     #find hereditary and health conditions and puts them into one unique list
#     combined_conditions = user['hereditaryConditions'] + user['healthConditions']
#     unique_combined_conditions = list(set(combined_conditions))
    
#     #check names from lists and use score to calculate insurance
#     baseCost = 1000
#     insuranceCost = 0
#     for disease in diseaseList:
#         diseaseName = disease['Name']
#         if diseaseName.casefold() in (name.casefold() for name in unique_combined_conditions):
#             diseaseScore = disease['Score']
#             insuranceCost = calculate_insurance_cost(diseaseScore, baseCost)
#             if insuranceCost == 666:
#                 print("Disease: {} has an incorrect score. please change!!!".format(diseaseName))
#                 return {"status": "422 Unprocessable Entity"}
#             else:
#                 baseCost = insuranceCost
    
#     if insuranceCost < 3000:
#         results = "Your total health insurance is €{:0.2f} per year".format(insuranceCost)
#         return results
#     else:
#         results = "Unfortunatly we are to provide coverage through our company as your estimated cost is too high"
#         return results

# def calculate_insurance_cost(score, cost):
#     errorCode = 666
#     score = int(score)
#     #define the additional costs or multipliers for each score
#     additional_costs = {
#         1: 0.00,  # 0% increase
#         2: 0.10,  # 10% increase
#         3: 0.20,  # 20% increase
#         4: 0.50,  # 50% increase
#         5: 1.00,  # 100% increase (doubles the cost)
#     }
#     #calculate the cost
#     if score in additional_costs:
#         additional_cost = additional_costs[score]
#         total_cost = cost * (1 + additional_cost)
#     else:
#         print("Invalid score. Score must be between 1 and 5. Check database")
#         return errorCode

#     return total_cost