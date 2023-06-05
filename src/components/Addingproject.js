import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddata } from '../store/Projectdataslice'
import { useNavigate } from 'react-router-dom'
import {FileBase64} from 'react-file-base64'



const Addingproject = () => {
  const nav=useNavigate()
  const [newdata,setNewdata]=useState({})
  const inputChange=(e)=>{
    setNewdata({...newdata,[e.target.name]:e.target.value})
    console.log(newdata);
   
  }
  const dipatch=useDispatch()
  
  const submitForm=(e)=>{
    e.preventDefault()
    dipatch(adddata(newdata))
    nav('/')
}
  return (
    <div className='addprodiv'>
      {/* <FileBase64
                multiple={false}
                onDone={(res)=>{
                  setNewdata({...newdata,image:res.base64})
                }}


                /> */}
        <div className='addsubdiv'>
           <form onSubmit={submitForm}> 
                <div class="mb-3">
                    <label class="form-label">Project Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='projectname' value={newdata.projectname} onChange={inputChange}></input>

                </div>
                <div class="mb-3">
                    <label class="form-label">Project image</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='projectimage' value={newdata.projectimage} onChange={inputChange}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Discription</label>
                    <input type="textarea" class="form-control" id="exampleInputPassword1" name='projectdiscription' value={newdata.projectdiscription} onChange={inputChange}></input>
                </div>
                
               
                
                <div class="mb-3">
                                 
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Id</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" name='id' value={newdata.id} onChange={inputChange}></input>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
         </form>
     </div>
  </div>
  )
}

export default Addingproject