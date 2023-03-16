import { useState, useEffect, useRef } from 'react';

export default function Person(props) {
   //let person = props.item.map(p => <)
   const [editing, setEditing] = useState(false);
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
   }

   if (editing) {
      return (
         <>
            <div className="card mb-3">
               <div className="card-body">
                  <input
                     type="text"
                     placeholder={props.firstName}
                     ref={firstNameInput}
                  ></input>
                  <input
                     type="text"
                     placeholder={props.lastName}
                     ref={lastNameInput}
                  ></input>
                  <button
                     type="button"
                     className="btn btn-info"
                     onClick={submitClick}
                  >Submit</button>
                  <button
                     type="button"
                     className="btn btn-info"
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
                  <p className="card-text">{props.firstName + " " + props.lastName}</p>
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