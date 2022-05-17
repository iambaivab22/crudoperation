import React,{useState} from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Maindata } from './Contextdata';
import { useHistory } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const Add = () => {

  const [layout,setlayout]=useState();
  const [name,setname]=useState();
  const [capacity,setcapacity]=useState();
  const [image,setimage]=useState();
  const [check,setcheck]=useState();
  function checkboxhandler(e){
       if(e.target.checked){
         setcheck("checked");
       }else{
         setcheck("not checked")
       }
      
  }
  
  const {adddata}=useContext(Maindata);
  const history=useHistory();
  function createtable(){
    const newdata={
      id:uuid(),
      layout:layout,
      name:name,
      capacity:capacity,
      status:check,
      image:image
    }

    adddata(newdata);
    history.push('/');
    
  }
   
  
  return (
    <div className="main">
    
      <div className="for_form">
      <div className="form">
      <label for="layout">Layout:</label>
  <select name="cars" id="cars" value={layout}   onChange={(e) => setlayout(e.target.value)}>
    <option value="selectlayout">Select Layout</option>
    <option value="Modern">Modern</option>
    <option value="Classic">Classic</option>
    <option value="Light">Light</option>
  </select><br></br>
  <br></br>

  <label for ="name">Name:</label>
  <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
  <br></br>
  <br></br>

  <label for ="name">Capacity:</label>
  <input type="text" placeholder="Enter Number of capacity" value={capacity} onChange={(e)=>{setcapacity(e.target.value)}}></input>
  <br></br>
  <br></br>

  <label for ="name">Status:</label>
  <input type="checkbox" id="status" name="status" value="status" onChange={checkboxhandler}></input>
  <br></br>
  <br></br>

  <label for ="name">image:</label>
  <input type="file"
       id="avatar" name="avatar"
       onChange={(e)=>{setimage(e.target.files[0].name)}}
       accept="image/png, image/jpeg"></input>
       <br></br>
  <br></br>

  
  <button className=" btn btn-dark btns" onClick={createtable}>Create Table</button>

  <Link to="/" className=" btn btn-danger btns">Cancel</Link>

   


             </div>
             </div>
    </div>
  )
}

export default Add;