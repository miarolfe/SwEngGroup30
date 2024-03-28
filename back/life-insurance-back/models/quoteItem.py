from pydantic import BaseModel

class QuoteItem(BaseModel):
    premium : str
    amountInsured : float
    yearInsured: float
    comment: str

    