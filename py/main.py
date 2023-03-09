from contextlib import asynccontextmanager
from typing import Union
from fastapi import FastAPI
import psycopg2

@asynccontextmanager
async def lifespan(app: FastAPI):
   conn = psycopg2.connect(
      host="localhost",
      database="postgres",
      user="postgres",
      password="pgpass0hyes")

app = FastAPI(lifespan=lifespan)

@app.get("/")
def read_root():
   return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
   return {"item_id": item_id, "q": q}

@app.get("/test_db_conn")
def test_db_connect():
   cur = conn.cursor()
   cur.execute("SELECT * FROM person")
   row = cur.fetchone()
   return {"status": "success: " + str(row)}