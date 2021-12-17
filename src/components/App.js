import { useEffect, useState } from "react";

import { Fetch } from "./fetch";




function App() {
 
  const {loading,data,error}=Fetch("https://reqres.in/api/users");


  return loading?(
    
    "..loding"

  ):error?(

    "..error"
  ):(

   <h1>my name is {data?.data[0].first_name}</h1>

  )

 

}

export default App;
