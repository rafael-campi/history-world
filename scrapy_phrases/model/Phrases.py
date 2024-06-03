from typing import Optional
from datetime import datetime

class Phrase:

    def __init__(self, id: int, phrase: str, author_id: int, date: Optional[datetime] = None):
        self.id = id
        self.phrase = phrase
        self.date = date
    

