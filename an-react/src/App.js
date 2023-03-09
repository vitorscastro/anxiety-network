import {Outlet} from 'react-router-dom';
import Navbar from './component/Navbar';

export default function App() {
  const topics = ['person', 'skill'];

  return (
    <>
      <Navbar topics={topics} />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}
