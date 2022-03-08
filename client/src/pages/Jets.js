import React, { useContext } from 'react'
import { DataContext } from '../providers/DataProvider'

const Jets = (props)=>{
  const {jets} = useContext(DataContext)
  return(
    <div className='border'>
     <h1>Jets</h1>
      <div className='border'>
       <code>{JSON.stringify(jets)}</code>
      </div> 
    </div>
  )
}

export default Jets