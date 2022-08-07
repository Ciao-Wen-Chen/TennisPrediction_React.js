import React from 'react'
import {state, useState} from 'react';
import { Paper } from '@material-ui/core';

export default function Result({p1, p2, p1WP, p2WP, formData}) {
    console.log('p1WP: '+p1WP);
    console.log('p2WP: '+p2WP);

    const p1WPInt = parseInt(p1WP)
    const p2WPInt = parseInt(p2WP)
    
    var p1left=0;
    var p2Right=0;

    var p1WPPersent=0;
    var p2WPPersent=0;

    const decideWhoIsP1=()=>{
        if(p1WPInt>p2WPInt){
            p1left = ((p1WPInt-50)*360)/100;
            p2Right = ((p2WPInt)*360)/100;
            p1WPPersent = p1WPInt;
            p2WPPersent = p2WPInt;

            return p1;
        }else{
            p1left = ((p2WPInt-50)*360)/100;
            p2Right = ((p1WPInt)*360)/100;
            p1WPPersent = p2WPInt;
            p2WPPersent = p1WPInt;
            return p2;
        }
    }
    const decideWhoIsP2=()=>{
        if(p1WPInt>p2WPInt){
            return p2;
        }else{
            return p1;
        }
    }
    const p1Place = decideWhoIsP1();
    const p2Place = decideWhoIsP2();
    
    document.documentElement.style.setProperty('--b0to180', 180+'deg');
    document.documentElement.style.setProperty('--b180to360', p1left+'deg');
    document.documentElement.style.setProperty('--ydegree', p2Right+'deg');

    var p1Rank=0;
    var p1Point=0;
    var p1Hand=0;
    var p1Height=0;

    var p2Rank=0;
    var p2Point=0;
    var p2Hand=0;
    var p2Height=0;

    const optionalRender=()=>{
        console.log(formData.p1 +" and "+ p1Place)
        if(formData.p1+" "===p1Place){
            p1Rank=formData.p1Rank;
            p1Point=formData.p1Point;
            p1Hand=formData.p1Hand;
            p1Height=formData.p1Height;

            p2Rank=formData.p2Rank;
            p2Point=formData.p2Point;
            p2Hand=formData.p2Hand;
            p2Height=formData.p2Height;

        }else if(formData.p2+" "===p1Place){
            console.log(formData.p2Rank + " and nothing")
            p1Rank=formData.p2Rank;
            p1Point=formData.p2Point;
            p1Hand=formData.p2Hand;
            p1Height=formData.p2Height;

            p2Rank=formData.p1Rank;
            p2Point=formData.p1Point;
            p2Hand=formData.p1Hand;
            p2Height=formData.p1Height;
        }
    }
    
    return (
        <div>
            <div>{optionalRender()}</div>
            <Paper elevation={2} sx={{width:"65%", margin:"100px 0px 0px 250px", background: "rgba(0,0,0,0.5)"}}>
                <div class="titleLabelResult">&#128081; Possibilities Of Victory</div>
            </Paper>
            <Paper elevation={2} sx={{width:"65%", margin:"10px 0px 0px 250px", background: "rgba(0,0,0,0.5)"}}>
                <div class="row">
                    {/* left graphic */}
                    <div class="col-sm">
                        <div class="progress blue">
                        <span class="progress-left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">{p1WPPersent}%</div>
                        </div>
                    </div>
                    {/* left player details */}
                    <div class="col-sm">
                    <div class="titleLabelResult" style={{margin:"10px 0px 0px 0px"}}>
                        &#128100; Player Name &#160; <br></br>
                        <span class="subTitleLabelResult">{p1Place}</span><br></br>
                        &#128100; Rank &#160; 
                        <span class="subTitleLabelResult">{p1Rank}</span><br></br>
                        &#128100; Point &#160; 
                        <span class="subTitleLabelResult">{p1Point}</span><br></br>
                        &#128100; Hand &#160; 
                        <span class="subTitleLabelResult">{p1Hand}</span><br></br>
                        &#128100; Height &#160; 
                        <span class="subTitleLabelResult">{p1Height}</span><br></br>
                    </div>
                    </div>
                    {/* right graphic */}
                    <div class="col-sm">
                        <div class="progress yellow">
                        <span class="progress-left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">{p2WPPersent}%</div>
                        </div>
                    </div>
                    {/* right player details */}
                    <div class="col-sm">
                    <div class="titleLabelResult" style={{margin:"10px 0px 0px 0px"}}>
                        &#128100; Player Name &#160; <br></br>
                        <span class="subTitleLabelResult">{p2Place}</span><br></br>
                        &#128100; Rank &#160; 
                        <span class="subTitleLabelResult">{p2Rank}</span><br></br>
                        &#128100; Point &#160; 
                        <span class="subTitleLabelResult">{p2Point}</span><br></br>
                        &#128100; Hand &#160; 
                        <span class="subTitleLabelResult">{p2Hand}</span><br></br>
                        &#128100; Height &#160; 
                        <span class="subTitleLabelResult">{p2Height}</span><br></br>
                    </div>
                    </div>
                </div>
            </Paper>
            <Paper elevation={2} sx={{width:"65%", margin:"10px 0px 0px 250px", background: "rgba(0,0,0,0.5)"}}>
                <div class="row">
                    <div className="titleLabelResult">
                        &#127918; Match Name &#160; 
                        <span class="subTitleLabelResult">{formData.matchName}</span><br></br>
                        &#127934; Match Surface &#160; 
                        <span class="subTitleLabelResult">{formData.matchSurface}</span><br></br>
                        &#127942; Match Level &#160; 
                        <span class="subTitleLabelResult">{formData.matchLevel}</span><br></br>
                    </div>
                </div>
            </Paper>
            
        </div>
  )
}
