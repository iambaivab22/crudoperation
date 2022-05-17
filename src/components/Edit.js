import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Maindata } from './Contextdata';
import { useHistory } from 'react-router-dom';
// import {v4 as uuid} from 'uuid';

const Edit = (props) => { 

  // const [layout,setlayout]=useState();
  // const [name,setname]=useState();
  // const [capacity,setcapacity]=useState();
  // const [image,setimage]=useState();
  // const [check,setcheck]=useState();
  // function checkboxhandler(e){
  //      if(e.target.checked){
  //        setcheck("checked");
  //      }else{
  //        setcheck("not checked")
  //      }
      
  // }

  const [selectedlayout,setselectedlayout]=useState({
    id:'',
    layout:'',
    name:'',
    capacity:'',
    check:'',
    image:null

  })
  
  const {layouts,editdata}=useContext(Maindata);
  const currentlayoutid=props.match.params.id;
  console.log(currentlayoutid);
  const history=useHistory();

  useEffect(()=>{
const layoutid=currentlayoutid;
const layoutdata=layouts.find(item=>item.id===layoutid)
setselectedlayout(layoutdata);
console.log(layoutdata);


  },[])
  function edithandler(){
      editdata(selectedlayout);
    history.push('/');
    
  }


  // for edit handler

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("the click functin is called");
    console.log(value);
    setselectedlayout({
      ...selectedlayout,
      [name]: value,
    });
  }



  








  return (
    <div className="main">
    
      <div className="for_form">
      <div className="form">
      <label for="layout">Layout:</label>
  <select name="layout" id="cars" onChange={handleChange} value={selectedlayout.layout}>
    <option value="selectlayout">Select Layout</option>
    <option value="Modern">Modern</option>
    <option value="Classic">Classic</option>
    <option value="Light">Light</option>
  </select><br></br>
  <br></br>

  <label for ="name">Name:</label>
  <input type="text" placeholder="Enter Name" value={selectedlayout.name} name="name" onChange={handleChange}></input>
  <br></br>
  <br></br>

  <label for ="capacity">Capacity:</label>
  <input type="number" placeholder="Enter Number of capacity"  value={selectedlayout.capacity} name="capacity" onChange={handleChange} ></input>
  <br></br>
  <br></br>

  <label for ="status">Status:</label>
  <input type="checkbox" id="status" name="status" onChange={handleChange} value={selectedlayout.status}  ></input>
  <br></br>
  <br></br>

  <label for ="name">image:</label>
  <input type="file"
       id="avatar" 
       accept="image/png, image/jpeg"
       name="image" 
      
      

        ></input>

       <br></br>
  <br></br>

  
  <button className=" btn btn-dark btns" onClick={edithandler} >Edit</button>

  <Link to="/" className=" btn btn-danger btns">Cancel</Link>

   


             </div>
             </div>
    </div>
  )
}

export default Edit;