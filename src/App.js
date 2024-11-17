
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './Loginpage';
import Home from './Home';

import { DataProvider } from "./context/DataContext";
import LayoutPages from './LayoutPages';
import Paydetail from './Paydetail';

function App() {
  return (
    <div className="App">  
       
    <DataProvider>
    <Routes>
      <Route path='/chitscheme' element = {  <Loginpage></Loginpage>}> </Route>
      <Route element= {<LayoutPages />}> 
      <Route path='/Home' element ={ <Home></Home>} >  </Route> 
      <Route path='/Paydetail' element={<Paydetail></Paydetail>} />
     </Route>         
      </Routes>  
      </DataProvider>     
    </div>
  );
}

export default App;
