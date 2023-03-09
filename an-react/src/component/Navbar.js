import {Link} from 'react-router-dom';

function Navbar({title, topics}) {
   let listItems = topics.map((item, index) => {
      return (
         <li className="nav-item" key={index}>
            <Link to={`/${item}`} className="nav-link">{item}</Link>
         </li>
      )
   })

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         <div className="container">
            <a
               href="#"
            >
               {title}
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               {listItems}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar;