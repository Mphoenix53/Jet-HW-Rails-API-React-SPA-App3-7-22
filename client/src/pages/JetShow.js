
import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const JetShow = (props)=>{
  const params = useParams()
  const {state} = useLocation()

  useEffect(()=>{
    getJetFromProvider()
    getJetsFromAPI()
    setJetFromRouter(state)
  },[])

  
  const [jetFromDataProvider, setJetFromDataProvider] = useState(null)
  const [jetFromAPI, setJetFromAPI] = useState(null)
  const [jetFromRouter, setJetFromRouter] = useState(null)
  const {jets} = useContext(DataContext)

  const getJetsFromAPI = async()=>{
    try{
      let res = await axios.get(`/api/jets/${params.id}`)
      setJetFromAPI(res.data)
    }catch(err){
      alert('err')
    }
  }

  const getJetFromProvider =()=>{

    let jet = jets.find(j=> j.id === parseInt(params.id))
    setJetFromDataProvider(jet)
  }

  return(
    <div className='border'>
     <h1>Jet Show</h1> 
     <p>id: {params.id}</p>
     <p>jetFromDataProvider</p>
     <code>{JSON.stringify(jetFromDataProvider)}</code>
     <p>jetFromAPI</p>
     <code>{JSON.stringify(jetFromAPI)}</code>
     <p>jetFromRouter</p>
     <code>{JSON.stringify(jetFromRouter)}</code>
    </div>
  )
}

export default JetShow