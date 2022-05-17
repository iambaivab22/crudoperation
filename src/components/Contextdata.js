import { createContext,useReducer } from "react";
import React  from 'react';
import Reducer from "./Reducer";



    // for initial data

   const initialstate={
    layouts:[
      
    
    ]

    
};

//    creating context

   export const Maindata=createContext(initialstate);

   export const Dataprovider=({children})=>{
       const [state,dispatch]=useReducer(Reducer,initialstate);
       const removedata=(id)=>{
           console.log(`item ${id} is deleted`)
           dispatch({
               type:'delete',
               removeid:id
           })
       }


       const adddata=(newdata)=>{
       
        dispatch({
            type:'add',
            newid:newdata
        })
    }


    const editdata=(editdatas)=>{
       
        dispatch({
            type:'edit',
            editid:editdatas
        })
    }


       return(
           <Maindata.Provider value={{layouts:state.layouts,removedata,adddata,editdata}}>
               {children}
           </Maindata.Provider>
       )
   }




   


    
    
  

