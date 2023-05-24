import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselFadeExample.css'; // Import your custom CSS file

function CarouselFadeExample() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/pangea.webp"
                        alt="First slide"
                        style={{maxWidth: "500px"}}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/openai.png"
                        alt="Second slide"
                        style={{maxWidth: "500px"}}

                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/techconnect.jpeg"
                        alt="Third slide"
                        style={{maxWidth: "500px"}}

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselFadeExample;