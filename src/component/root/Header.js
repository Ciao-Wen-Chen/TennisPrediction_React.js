import React from 'react'
import './Root.css';

export default function Header() {
  return (
    <div>
        <div className="headerSection">
            <div className="section">
                <div className="title_in_welcome_header">
                    Hight Accuracy Tennis Result Prediction
                </div>
                <div className="content_in_welcome_header">
                    You can predict that who will be win in the touranment by inputing touranment 
                    and player information.<br></br>
                </div>
                
            </div>
            <div className="section">
                <div className="title_in_welcome_header">
                    Powerful Artificial Neural Network
                </div>
                <div className="content_in_welcome_header">
                    Demonstrate a strong factor-type covariance structure.
                </div>
            </div>
            <div className="section">
                <div className="title_in_welcome_header">
                    Trace Each Tennis tournament on the fly 
                </div>
                <div className="content_in_welcome_header">
                    Live Data won't let you miss any exciting tennis tournament
                </div>
            </div>

        </div>
    </div>
  )
}
