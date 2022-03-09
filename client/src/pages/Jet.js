import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../providers/DataProvider';

const Jet = (props)=>{
  const {deleteJet} = useContext(DataContext)
  const navigate = useNavigate()
  const {id, name, topspeed} = props
  return(
    <div className='border'>
     <h1>Jet: {id}</h1> 
     <p>{name}</p>
     <p>{topspeed}</p>
     <div className='border' style={{display:'flex', justifyContent:'space-between'}}>
       <p onClick={()=>navigate(`/jets/${id}/edit`)}>Edit</p>
       <p onClick={()=>deleteJet(id)}>Delete</p>
       <p onClick={()=>navigate(`/jets/${id}`, {state: props})}>Show</p>
     </div>
    </div>
  )
};

export default Jet