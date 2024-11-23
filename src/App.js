
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './Loginpage';
import Home from './Home';

import { DataProvider } from "./context/DataContext";
import LayoutPages from './LayoutPages';
import Paydetail from './Paydetail';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
import { AdminViewPage } from './AdminViewPage';

function App() {

  return (
    <div className="App">  
       
    <DataProvider>
    <Routes>
      <Route path='/chitscheme' element = {  <Loginpage></Loginpage>}> </Route>
      <Route path = '/adminPassword' element={ <AdminLogin></AdminLogin>} > </Route>    
      <Route element= {<LayoutPages />}> 
      <Route path='/Home' element ={ <Home></Home>} >  </Route> 
      <Route path='/Paydetail' element={<Paydetail></Paydetail>} />
      <Route path='/adminViewPage' element = {<AdminViewPage></AdminViewPage>}></Route>
      <Route path = '/adminPage' element = {<AdminPage></AdminPage>} ></Route>
     </Route>         
      </Routes>  
      </DataProvider>     
    </div>
  );
}

export default App;
