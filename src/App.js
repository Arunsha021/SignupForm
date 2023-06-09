import React from 'react';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import SearchBar from './Searchbar';

const App = () => {
 

  return (
    <div style={{display:'flex',height:'650px', flexDirection:'column',background:'grey',backgroundSize:'contain',}}>
    <div>
        <SignupForm/>
        <Dashboard/>
        <SearchBar/>  
    
        </div>
        </div>
  )}

  export default App;