def user_serialiser(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["patientName"],
        "DOB": user["dateOfBirth"],
        "sex": user["sex"],
        "occupation": user["occupation"],
        "yearlyIncomeInEuro": user["yearlyIncomeInEuro"],
        "residenceCountry": user["residenceCountry"],
        "weightInKG": user["weightInKG"],
        "heightInCM": user["heightInCM"],
        "exerciseHourPerWeek": user["exerciseHourPerWeek"],
        "smokingHistory": user["smokingHistory"],
        "drinkingHistory": user["drinkingHistory"],
        "hereditaryConditions": user["hereditaryConditions"],
        "healthConditions": user["healthConditions"]       
    }

def users_serialiser(users) -> list:
    return [users_serialiser(user) for user in users]