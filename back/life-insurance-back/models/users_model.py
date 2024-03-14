from datetime import date
from pydantic import BaseModel

class User(BaseModel):
    patientName: str
    dateOfBirth: str 
    sex: str
    occupation: str
    yearlyIncomeInEuro: int
    residenceCountry: str
    weightInKG: float
    heightInCM: float
    exerciseHourPerWeek: int
    smokingHistory: int
    drinkingHistory: int
    hereditaryConditions: list[str]
    healthConditions: list[str]