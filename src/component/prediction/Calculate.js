import React from 'react'
import {state, useState} from 'react';
import { useAsync } from "react-async";
import Result from "./Result";
import GridLoader from "react-spinners/GridLoader";


export default function Calculate({formData}) {

    
    const [p1Name, setp1]= useState('wait');
    const [p2Name, setp2]= useState('');
    const [p1WP, setp1WP]= useState('');
    const [p2WP, setp2WP]= useState('');

    const [loading, setLoading]=useState(true)
    

    const loadResult=()=>{
        console.log(formData);

        fetch("http://localhost:8080/api/prediction",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then((response)=>{
            console.log("New match predicting")
            setLoading(false);
            console.log(response); 
            return response.json()
        }).then(data => {
            console.log(data)
            
            setp1(data.p1Name)
            setp2(data.p2Name)
            setp1WP(data.p1WinPercentage)
            setp2WP(data.p2WinPercentage)
        });
    }
    
    const Calculation=()=> {
        const { data, error, isPending } = useAsync({ promiseFn: loadResult })
        return null
    }

    const OptionalPage=()=>{
        if(loading){
            return(
                <div className="Loader">
                <GridLoader color={"#F89C06"} loading={loading} size={50} />
                </div>
            )
        }else{
            return <Result p1={p1Name} p2={p2Name} p1WP={p1WP} p2={p2WP} />
        }
    }

    return (
        <>
        <div className="prediction">
            <div> 
                { Calculation() } 
                { OptionalPage() }
            </div>
        </div>
        </>
       
    )
  
}
