import React from 'react'
import './Root.css';

export default function Header() {
  return (
    <div>
        <div className="headerSection">
            <div className="section">
                <div className="title_in_welcome_header">
                    High Accuracy Tennis Prediction Model
                </div>
                <div className="content_in_welcome_header">
                This application provides the prediction service for Tennis tournaments. 
                By entering the information about players and tournaments, 
                you can get a 93% accuracy result.
                </div>
                
            </div>
            <div className="section">
                <div className="title_in_welcome_header">
                    Powerful Machine Learning Neural Network
                </div>
                <div className="content_in_welcome_header">
                The term network refers to interconnected nodes like the human brain. <br></br>
                This model is trained by 19 attributes from players and 3 attributes 
                from tournaments.
                </div>
            </div>
            <div className="section">
                <div className="title_in_welcome_header">
                    Trace the Current Tennis tournament in Real-Time
                </div>
                <div className="content_in_welcome_header">
                Live Data won't let you miss any exciting tennis tournament, <br></br>
                trace the score on the page and prediction the result with our service!
                </div>
            </div>

        </div>
    </div>
  )
}
