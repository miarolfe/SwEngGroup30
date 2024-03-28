from models.quoteItem import QuoteItem
from pydantic import BaseModel

class QuoteListItem(BaseModel):
    entryLevelRecommendation : QuoteItem
    highLevelRecommendation : QuoteItem
    premiumLevelRecommendation  : QuoteItem
    comment: str
    timestamp: str