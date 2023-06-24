import React,{useState} from "react";
import authContext from "./authContext";

const AuthProvider=(props)=>{
    const [userDetails,setUserDetails]=useState({});
    return(
    <authContext.Provider value={[userDetails,setUserDetails]}>
        {props.children}
    </authContext.Provider>
    )
}

export default AuthProvider;
