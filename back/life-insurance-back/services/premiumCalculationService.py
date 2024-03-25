from services import riskCalculationService

ENTRY_LEVEL_INSURED_AMOUNT = 300000
HIGH_LEVEL_INSURED_AMOUNT = 500000
PREMIUM_LEVEL_INSURED_AMOUNT = 700000
LEVEL_BASE = 100000

NUMBER_OF_YEAR_INSURED = 50

def calculatePremium(user : dict) -> dict:
    riskScore : float = riskCalculationService.getRiskScoreFromUserHealthCondition(user)
    entryLevelCost = calculateEntryLevelPremium(riskScore)
    highLevelCost = calculateHighLevelPremium(riskScore)
    premiumLevelCost = calculatePremiumLevelPremium(riskScore)
    NUMBER_OF_YEAR_INSURED = riskCalculationService.getYearsInsuredLeft(user)
    
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
    return {
        "entryLevelRecommendation" : entryLevelRecommendation,
        "highLevelRecommendation" : highLevelRecommendation,
        "premiumLevelRecommendation" : premiumLevelRecommendation
    }


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
