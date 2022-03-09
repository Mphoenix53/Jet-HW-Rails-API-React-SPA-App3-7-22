import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import Jet from './Jet'

const Jets = (props)=>{
  const {jets} = useContext(DataContext)
  useEffect(()=>{
    console.log('Jets mounted')
  },[])
  const renderJets = ()=> {
    return jets.map((j)=>{
      return <Jet key={j.id}{...j}/>
    })
  }
  return(
    <div className='border'>

     <h1>Jets</h1>

     <div className='border'>
       <code>{renderJets()}</code>
      </div> 

      <div className='border'>
       <code>{JSON.stringify(jets)}</code>
      </div> 

    </div>
  )
}

export default Jets