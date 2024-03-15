from fastapi import APIRouter
from models.users_model import User
from config.database import collection_name, collection_disease
from schemas.users_schema import users_serialiser, user_serialiser
from bson import ObjectId

#get routes need to be fixed, causing RECURSION ERROR

user_api_router = APIRouter()

# retrieve
@user_api_router.get("/")
async def get_users():
    users = users_serialiser(collection_name.find())
    return users

@user_api_router.get("/{id}")
async def get_user(id: str):
    return users_serialiser(collection_name.find_one({"_id": ObjectId(id)}))


# post
@user_api_router.post("/")
async def create_user(user: User):
    _id = collection_name.insert_one(dict(user))
    return users_serialiser(collection_name.find({"_id": _id.inserted_id}))


# update
@user_api_router.put("/{id}")
async def update_user(id: str, user: User):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {
        "$set": dict(user)
    })
    return users_serialiser(collection_name.find({"_id": ObjectId(id)}))

# delete
@user_api_router.delete("/{id}")
async def delete_user(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
    return {"status": "ok"}

@user_api_router.get("/{id}/calc")
async def get_calculation(id: str):
    user = collection_name.find_one({"_id": ObjectId(id)})
    diseaseList = collection_disease.find()
    print(f"user type = {type(user)}\n")
    print(f"diseaseList type = {type(diseaseList)}, values: {diseaseList}\n")
    print(f"user['healthConditions'] = {user['healthConditions']}\n")
    #find hereditary and health conditions and puts them into one unique list
    combined_conditions = user['hereditaryConditions'] + user['healthConditions']
    unique_combined_conditions = list(set(combined_conditions))
    
    #check names from lists and use score to calculate insurance
    baseCost = 1000
    insuranceCost = 0
    for disease in diseaseList:
        diseaseName = disease['Name']
        if diseaseName.casefold() in (name.casefold() for name in unique_combined_conditions):
            diseaseScore = disease['Score']
            insuranceCost = calculate_insurance_cost(diseaseScore, baseCost)
            if insuranceCost == 666:
                print("Disease: {} has an incorrect score. please change!!!".format(diseaseName))
                return {"status": "422 Unprocessable Entity"}
            else:
                baseCost = insuranceCost
    
    if insuranceCost < 3000:
        results = "Your total health insurance is €{:0.2f} per year".format(insuranceCost)
        return results
    else:
        results = "Unfortunatly we are to provide coverage through our company as your estimated cost is too high"
        return results

def calculate_insurance_cost(score, cost):
    errorCode = 666
    score = int(score)
    #define the additional costs or multipliers for each score
    additional_costs = {
        1: 0.00,  # 0% increase
        2: 0.10,  # 10% increase
        3: 0.20,  # 20% increase
        4: 0.50,  # 50% increase
        5: 1.00,  # 100% increase (doubles the cost)
    }
    #calculate the cost
    if score in additional_costs:
        additional_cost = additional_costs[score]
        total_cost = cost * (1 + additional_cost)
    else:
        print("Invalid score. Score must be between 1 and 5. Check database")
        return errorCode

    return total_cost