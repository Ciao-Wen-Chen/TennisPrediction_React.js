import React from 'react'
import './Root.css';
import Carousel from './Carousel'
import Header from './Header'


export default function Root() {
  return (
    <>
    <div className="rootPage">
      <div>
        {/* <div class="col-sm-1">
        </div> */}

        <div>
          <div className="bodySection">
            
            <div className="carousel">
              <Carousel/>
            </div>
            <div className="header">
              <Header/>
            </div>
          </div>
        </div>

        {/* <div class="col-sm-1">
        </div> */}

        {/* <a href="#" class="myButton">orange</a> */}
      </div>

    </div>
   </>
  )
}
