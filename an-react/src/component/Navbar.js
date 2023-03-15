import {Link} from 'react-router-dom';

function Navbar({title, topics}) {
   let listItems = topics.map((item, index) => {
      return (
         <li className="nav-item" key={index}>
            <Link to={`/${item}`} className="nav-link text-white">{item}</Link>
         </li>
      )
   })

   return (
      <div className="row mx-0 bg-primary">
         <nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               {listItems}
            </ul>
         </nav>
      </div>
   )
}

export default Navbar;