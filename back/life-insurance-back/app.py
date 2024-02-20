from typing import Union
from fastapi import FastAPI
import uvicorn

class Application:
    def __init__(self):
        self.app = FastAPI()
    
    def run(self):
        uvicorn.run(self.app, host="0.0.0.0", port=8000)

    def configure_routes(self):
        @self.app.get("/")
        async def read_root():
            return {"Hello": "World"}

        # @self.app.get("/items/{item_id}")
        # async def read_item(item_id: int, q: Union[str, None] = None):
        #     return {"item_id": item_id, "q": q}

app = Application()
app.configure_routes()
app.run()