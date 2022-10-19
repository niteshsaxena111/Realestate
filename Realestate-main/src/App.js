
import './App.css';

import Cards from './components/Cards/Card';
import NavBar from './components/NavBar/NavBar';
import SearchForm from './components/SearchForm/SearchForm';
import file from './file';
import file2 from './searchData'
import {useState} from 'react'
function App() {
  const [data,setData]=useState({})

 const getSearchData=(formValue)=>{
  const newdata= formValue
  setData(newdata)
  console.log(newdata)
  console.log("hi")

 }


  return (
    <div className="App">
      <NavBar/>
      
      <SearchForm handleSubmit={getSearchData} dataSearch={file2}/>
      <Cards data={file} search={data}/>
    </div>
  );
}

export default App;
