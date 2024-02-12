from fastapi import APIRouter
from models.users_model import User
from config.database import collection_name
from schemas.users_schema import users_serialiser, user_serialiser
from bson import ObjectId

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