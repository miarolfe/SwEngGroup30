type QuoteDetails = {
    premium: number;
    amountInsured: number;
    maxYearInsured: number;
};

type ReturnedQuotes = {
    entryLevelRecommendation: QuoteDetails;
    highLevelRecommendation: QuoteDetails;
    premiumLevelRecommendation: QuoteDetails;
}
