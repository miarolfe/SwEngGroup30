from services import riskCalculationService
from services.userQuoteListService import addQuoteToList
from services.quoteRequestService import insertQuoteRequestToDB, getCurrentDateAndTime
from bson import ObjectId
ENTRY_LEVEL_INSURED_AMOUNT = 300000
HIGH_LEVEL_INSURED_AMOUNT = 500000
PREMIUM_LEVEL_INSURED_AMOUNT = 700000
LEVEL_BASE = 100000

NUMBER_OF_YEAR_INSURED = 50

INCREASE_PER_PERCENTAGE = 4500

def calculatePremium(user : dict) -> dict:
    riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)

    if (riskScore/100) > 85:
        return{
            "message" : "Sorry, we are unable to calculate premium for you. Please consult with our underwriters"
        }
    
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

    entryLevelComment = "This is a standard recommendation suitable for most users."
    highLevelComment = "This recommendation offers higher coverage for those seeking additional security."
    premiumLevelComment = "This premium recommendation is for users prioritising extensive coverage."
    
    entryLevelRecommendation : dict = {
        "premium": entryLevelCost,
        "amountInsured" : ENTRY_LEVEL_INSURED_AMOUNT,
        "maxYearInsured" : NUMBER_OF_YEAR_INSURED,
        "comment" : entryLevelComment
    }
    highLevelRecommendation : dict = {
        "premium": highLevelCost,
        "amountInsured" : HIGH_LEVEL_INSURED_AMOUNT,
        "maxYearInsured" : NUMBER_OF_YEAR_INSURED,
        "comment" : highLevelComment
    }
    premiumLevelRecommendation : dict = {
        "premium": premiumLevelCost,
        "amountInsured" : PREMIUM_LEVEL_INSURED_AMOUNT,
        "maxYearInsured" : NUMBER_OF_YEAR_INSURED,
        "comment" : premiumLevelComment
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
    riskPercentage : float = riskScore/100
    tolerance : float = (riskPercentage/5) * INCREASE_PER_PERCENTAGE
    totalAmount : float = tolerance + ENTRY_LEVEL_INSURED_AMOUNT
    yearlyPremimun : float = totalAmount/NUMBER_OF_YEAR_INSURED
    monthlyPremium : float = yearlyPremimun / 12
    return monthlyPremium

    

def calculateHighLevelPremium(riskScore : float) -> float:
    # riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    riskPercentage : float = riskScore/100
    tolerance : float = (riskPercentage/5) * INCREASE_PER_PERCENTAGE
    totalAmount : float = tolerance + HIGH_LEVEL_INSURED_AMOUNT
    yearlyPremimun : float = totalAmount/NUMBER_OF_YEAR_INSURED
    monthlyPremium : float = yearlyPremimun / 12
    return monthlyPremium


def calculatePremiumLevelPremium(riskScore : float) -> float:
    # riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    riskPercentage : float = riskScore/100
    tolerance : float = (riskPercentage/5) * INCREASE_PER_PERCENTAGE
    totalAmount : float = tolerance + PREMIUM_LEVEL_INSURED_AMOUNT
    yearlyPremimun : float = totalAmount/NUMBER_OF_YEAR_INSURED
    monthlyPremium : float = yearlyPremimun / 12
    return monthlyPremium

