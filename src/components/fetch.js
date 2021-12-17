import { useState,useEffect } from "react"


 export function Fetch(url){
  
    const [loading,setloading]=useState();
    const [error,seterror]=useState();
    const [data,setdata]=useState();

    
    useEffect(()=>{
      

        setloading(true)

        fetch(url).then((x)=>x.json()).then((data)=>{
   
              setloading(false)
              setdata(data)


        }).catch((e)=>{
             
            setloading(false)
            seterror(e)

        })
       
  
         
  
      
    
        
  
    },[])
   
    return{

        loading,
        data,
        error,
    }
  
   }