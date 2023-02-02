import Carousel from 'react-bootstrap/Carousel';
import picOne from "./picOne.png";
import picTwo from "./picTwo.png";
import picThree from "./picThree.png";





const Home = () => {
    return (
        <><Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Biblion</h3>
            <p>Discover Your Next Page-Turner</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picTwo}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Biblion</h3>
            <p>Discover Your Next Page-Turner</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picThree}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Biblion</h3>
            <p>
            Discover Your Next Page-Turner
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
        
        </>


      );
}
 
export default Home;