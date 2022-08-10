import Carousel from 'react-bootstrap/Carousel';
import './Root.css';

function UncontrolledExample() {
  return (
    <>
        <Carousel slide={false}>
        <Carousel.Item>
            <img
              className="fist_welcome_pic"
              src="/moneyTennis_crop.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
            <div className="caption">
              <div class="row">
                <div class="col-sm-8">
                  <h3 className="first_caption">
                    Tennis Result prediction </h3>
                  <p className="first_caption_sub">
                    The accuracy of the reault is 92%</p>
                </div>
                <div class="col-sm-4">
                  <a href="/prediction" class="Btn_tryme">Try Now</a>
                </div>
              </div>
            </div>
              
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
              className="fist_welcome_pic"
              src="/deepLearning_crop.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="caption">
              <div class="row">
                <div class="col-sm-8">
                  <h3 className="first_caption">
                    Deep Learning model</h3>
                  <p className="first_caption_sub">
                    Powerful artificial neural network <br></br>
                    with a user-friendly interface
                  </p>
                </div>
                <div class="col-sm-4">
                <a href="/prediction" class="Btn_tryme">Try Now</a>
                </div>
              </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="fist_welcome_pic"
              src="/liveGame_crop.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="caption">
              <div class="row">
                <div class="col-sm-8">
                  <h3 className="first_caption">
                    Live Tennis data</h3>
                  <p className="first_caption_sub">
                    Track the in-play game information</p>
                </div>
                <div class="col-sm-4">
                <a href="/prediction" class="Btn_tryme">Try Now</a>
              </div>
              </div>
              </div>

              
            </Carousel.Caption>
          </Carousel.Item>

          
          
        </Carousel>
    </>
  );
}

export default UncontrolledExample;