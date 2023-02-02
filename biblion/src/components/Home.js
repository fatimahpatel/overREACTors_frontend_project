import Carousel from 'react-bootstrap/Carousel';





const Home = () => {
    return (
        <><Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/10252340/pexels-photo-10252340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg"
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
            src="https://images.pexels.com/photos/1115692/pexels-photo-1115692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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