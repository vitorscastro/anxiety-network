import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Person from './Person';

export default function PersonList(id) {
   const url = "http://localhost:8000/person";
   const [personResponse, setPersonResponse] = useState(null);

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
      <Person
         firstName={p[1]}
         lastName={p[2]}
         key={p[0]}
      />
   ));

   return (
      <>
         {output}
      </>
   )
}
