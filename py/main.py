from typing import Union
from fastapi import FastAPI, Depends
import psycopg2
import psycopg2.extras
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class Person(BaseModel):
   id: int
   firstName: str
   lastName: str

app = FastAPI()

origins = [
   "http://localhost:3000"
]

app.add_middleware(
   CORSMiddleware,
   allow_origins = origins,
   allow_credentials = True,
   allow_methods = ["*"],
   allow_headers = ["*"],
)

def setup_db():
   conn = psycopg2.connect(
      host="localhost",
      database="postgres",
      user="postgres",
      password="pgpass0hyes")
   try:
      yield conn
   finally:
      conn.close()

@app.get("/")
def read_root():
   return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
   return {"item_id": item_id, "q": q}

@app.get("/test_db_conn")
def test_db_connect(conn = Depends(setup_db)):
   cur = conn.cursor()
   cur.execute("SELECT * FROM person")
   row = cur.fetchone()
   return {"status": "success: " + str(row)}

@app.get("/person")
def get_person(conn = Depends(setup_db)):
   cur = conn.cursor(cursor_factory=psycopg2.extras.NamedTupleCursor)
   cur.execute("SELECT * FROM person")
   rows = cur.fetchall()
   cur.close()
   return (rows)

@app.post("/person")
def update_person(person: Person, conn = Depends(setup_db)):
   cur = conn.cursor()
   cur.close()
   return "abc"