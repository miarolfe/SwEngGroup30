from services import riskCalculationService
from services.userQuoteListService import addQuoteToList
from services.quoteRequestService import insertQuoteRequestToDB, getCurrentDateAndTime
from bson import ObjectId
ENTRY_LEVEL_INSURED_AMOUNT = 300000
HIGH_LEVEL_INSURED_AMOUNT = 500000
PREMIUM_LEVEL_INSURED_AMOUNT = 700000
LEVEL_BASE = 100000

NUMBER_OF_YEAR_INSURED = 50

def calculatePremium(user : dict, userId : str) -> dict:
    riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    if riskScore >= 80:
        print("Too risky\n")
        data = {}
        data["userId"] = ObjectId(userId)
        data["medicalRecord"] = user
        data["timestamp"] = getCurrentDateAndTime()
        print(f"Quote Request: {data}\n")
        insertQuoteRequestToDB(data)
        return {
        "entryLevelRecommendation" : {},
        "highLevelRecommendation" : {},
        "premiumLevelRecommendation" : {},
        "comment" : "Sorry, we are unable to provide you with a quotation.\nYour quotation request is sent to our underwriter.\nOnce our underwriter has processed your request. The result will appear in your quote history.\n "
        }
    entryLevelCost = calculateEntryLevelPremium(riskScore)
    highLevelCost = calculateHighLevelPremium(riskScore)
    premiumLevelCost = calculatePremiumLevelPremium(riskScore)
    NUMBER_OF_YEAR_INSURED = riskCalculationService.getYearsInsuredLeft(user)
    comment : str = "This is an example of comment message"
    entryLevelRecommendation : dict = {
        "premium": entryLevelCost,
        "amountInsured" : ENTRY_LEVEL_INSURED_AMOUNT,
        "maxYearInsured" : NUMBER_OF_YEAR_INSURED,
        "comment" : "This is an example of comment message"
    }
    highLevelRecommendation : dict = {
        "premium": highLevelCost,
        "amountInsured" : HIGH_LEVEL_INSURED_AMOUNT,
        "maxYearInsured" : NUMBER_OF_YEAR_INSURED,
        "comment" : "This is an example of comment message"
    }
    premiumLevelRecommendation : dict = {
        "premium": premiumLevelCost,
        "amountInsured" : PREMIUM_LEVEL_INSURED_AMOUNT,
        "maxYearInsured" : NUMBER_OF_YEAR_INSURED,
        "comment" : "This is an example of comment message"
    }
    rec = {
        "entryLevelRecommendation" : entryLevelRecommendation,
        "highLevelRecommendation" : highLevelRecommendation,
        "premiumLevelRecommendation" : premiumLevelRecommendation,
        "comment" : comment
    }

    addQuoteToList(rec, userId)

    return rec


def calculateEntryLevelPremium(riskScore : float) -> float:
    # riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    tolerance : float = LEVEL_BASE * riskScore
    totalAmount : float = tolerance + ENTRY_LEVEL_INSURED_AMOUNT
    yearlyPremimun : float = totalAmount/NUMBER_OF_YEAR_INSURED
    monthlyPremium : float = yearlyPremimun / 12
    return monthlyPremium/100

def calculateHighLevelPremium(riskScore : float) -> float:
    # riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    tolerance : float = LEVEL_BASE * riskScore
    totalAmount : float = tolerance + HIGH_LEVEL_INSURED_AMOUNT
    yearlyPremimun : float = totalAmount/NUMBER_OF_YEAR_INSURED
    monthlyPremium : float = yearlyPremimun / 12
    return monthlyPremium/100


def calculatePremiumLevelPremium(riskScore : float) -> float:
    # riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    tolerance : float = LEVEL_BASE * riskScore
    totalAmount : float = tolerance + PREMIUM_LEVEL_INSURED_AMOUNT
    yearlyPremimun : float = totalAmount/NUMBER_OF_YEAR_INSURED
    monthlyPremium : float = yearlyPremimun / 12
    return monthlyPremium/100
