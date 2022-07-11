import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/useAxios';
import { createContext, useState } from 'react';

// Create Context
export const ImageContext=createContext();



function App() {
  const [searchImg,setSearchImg]=useState("");
  const{response,isLoading,error,fetchData}=useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response);

  const value={
    response,
    isLoading,
    error,
    fetchData,
    searchImg,
    setSearchImg
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField/>
      </Jumbotron>
      <Images/>
    </ImageContext.Provider>
  );
}

export default App;
