import React, { useEffect, useState } from "react";
import axios from 'axios'
// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [jets, setJets] = useState([]);
  
  useEffect(()=>{
    console.log('DataProvider mounted')
    getJets()
  },[])

  const getJets = async()=>{
    try{
      let res = await axios.get('/api/jets')
      console.log(res)
      setJets(res.data)
    } catch(err){
      alert('err getting jets')
    }
  }

  const deleteJet = async(id)=>{
    try{
      let res = await axios.delete(`/api/jets/${id}`)
      let filteredJets = jets.filter(j=> j.id )
    }catch(err){
      alert('err in deleting')
    }
  }


  // create an object that will be 'global state'
  const jetProviderThing = {
    getJets,
    deleteJet,
    jets,
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={jetProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
