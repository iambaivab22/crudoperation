import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Maindata } from './Contextdata';
import './Crudtable.css';
const Crudtable = () => {
  const {layouts,removedata}=useContext(Maindata);
  console.log(layouts);
  
  return (
    <div className="container">
    <table className="table table-striped">
    <tr>
      <th>Layout </th>
      <th>Name </th>
      <th>Capacity </th>
      <th>Status </th>
      <th>Image </th>
      <th>Edit </th>
      <th>Delete </th>
    </tr>

   {layouts.length<=0?
   (
     <div className="d-flex justify-content-center align-items-center flex-column bg-light  ">
     <div ><h1>sorry no layouts yet </h1></div>
    <div> <h6>click the add button to add the layout </h6></div>
     </div>
   ): layouts.map((item)=>{
      return (
        <>
        <tr>
        <td>{item.layout}</td>
        <td>{item.name}</td>
        <td>{item.capacity}</td>
        <td>{item.status}</td>
        {/* <td> <img src={item.image} width="80" height="70"></img></td> */}
        <td>{item.image}</td>
        <td><Link to={`/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
        <td><button className="btn btn-danger delete" onClick={()=>removedata(item.id)}>Delete</button></td>

    </tr>
        </>
      )
    })
   
    
   }

    
    </table>

    </div>
  )
}

export default Crudtable