import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Person(id) {
   const url = "http://localhost:8000/person";
   const [personResponse, setPersonResponse] = useState(null);
   //const {id} = useParams();

   useEffect(() => {
      if (id) {
         fetch(id > 0 ? url + "/{id}" : url)
            .then(res => res.json())
            .then(obj => {
               setPersonResponse(obj);
            });
      }
   }, [id]);

   if (!personResponse) {
      return <></>
   }

   let output = personResponse.map(p => (
      <div className="card mb-3" key={p[0]}>
         <div className="card-body">
            <p className="card-text">{p[1] + " " + p[2]}</p>
         </div>
      </div>
   ));

   debugger;

   return (
      // <div>{`person ${personResponse}`}</div>
      <>
         {output}
      </>
   )
}
