import { useState, useEffect, useRef } from 'react';

export default function Person(props) {
   const submitPersonUrl = "http://localhost:8000/person";
   //let person = props.item.map(p => <)
   const [editing, setEditing] = useState(false);
   const [firstName, setFirstName] = useState(props.firstName);
   const [lastName, setLastName] = useState(props.lastName);
   // const firstName = useRef(props.firstName);
   // const lastName = useRef(props.lastName);
   const firstNameInput = useRef(null);
   const lastNameInput = useRef(null);

   function editClick(e) {
      e.preventDefault();
      setEditing(!editing);
   }

   function submitClick(e) {
      e.preventDefault();

      const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            id: props.id,
            firstName: firstNameInput.current.value,
            lastName: lastNameInput.current.value
         })
      };
      fetch(submitPersonUrl, requestOptions)
         .then(res => res.json()
         .then(
            setFirstName(firstNameInput.current.value),
            setLastName(lastNameInput.current.value),
            setEditing(!editing),
         ));
   }

   if (editing) {
      return (
         <>
            <div className="card mb-3">
               <div className="card-body">
                  <label htmlFor="firstNameInput">
                     First name
                  </label>
                  <input
                     id="firstNameInput"
                     type="text"
                     className="mx-1"
                     defaultValue={firstName}
                     ref={firstNameInput}
                  ></input>
                  <label htmlFor="lastNameInput">
                     Last name
                  </label>
                  <input
                     id="lastNameInput"
                     type="text"
                     className="mx-1"
                     defaultValue={lastName}
                     ref={lastNameInput}
                  ></input>
                  <button
                     type="button"
                     className="btn btn-info mx-1"
                     onClick={submitClick}
                  >Submit</button>
                  <button
                     type="button"
                     className="btn btn-info mx-1"
                     onClick={editClick}
                  >Cancel</button>
               </div>
            </div>
         </>
      );
   } else {
      return (
         <>
            <div className="card mb-3">
               <div className="card-body">
                  <p className="card-text">{firstName + " " + lastName}</p>
                  <button
                     type="button"
                     className="btn btn-info"
                     onClick={editClick}
                  >Edit</button>
               </div>
            </div>
         </>
      );
   }
}