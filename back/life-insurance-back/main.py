from fastapi import FastAPI
from routes.users_routes import user_api_router
from routes.premium_routes import premium_calculator_router
from routes.quote_service_routes import quoteRequestRouter
import pymongo
from fastapi.middleware.cors import CORSMiddleware
from config.database import collection_name as user_collection, collection_disease as disease_collection
app = FastAPI()

app.include_router(user_api_router)
app.include_router(premium_calculator_router)
app.include_router(quoteRequestRouter)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust to your needs, "" allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)