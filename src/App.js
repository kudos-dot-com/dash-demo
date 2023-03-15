import './App.css';
import { Fragment } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
    {/* <Navbar/> */}
    <Sidebar/>
    </Fragment>
  );
}

export default App;