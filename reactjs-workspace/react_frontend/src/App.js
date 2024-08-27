
	import '../src/App.css';
	import ListEmployeeComponent from './components/ListEmployeeComponent'
	import HeaderComponent from './components/HeaderComponent';
	import FooterComponent from './components/FooterComponent';
  import {BrowserRouter,Routes,Route} from 'react-router-dom';
  import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

	export default function App() {
  	return (
    	<div>

	    <HeaderComponent/>

      <BrowserRouter>

      <div className='conainer'>
          <Routes>
                  <Route path='/' element={<ListEmployeeComponent/>}></Route>
                  <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
                  <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
				  <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
          </Routes>

      </div>
      </BrowserRouter>
    
    	<FooterComponent/>

 	   </div>
  	);
	}

	
