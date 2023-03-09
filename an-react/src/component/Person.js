import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Person() {
   const url = "http://localhost:8000/test_db_conn";
   const [personResponse, setPersonResponse] = useState({});

   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(obj => {
            setPersonResponse(obj);
         });
   }, []);

   return (
      <div>{`person ${personResponse.status}`}</div>
   )
}
