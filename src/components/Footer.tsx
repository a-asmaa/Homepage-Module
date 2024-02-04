import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return ( <footer >
    <Row> 
        <Col> 
        We make technology produce productive, adaptable and sustainable business experiences.
        </Col>
        <Col>
            <h3>Company</h3> 
                      
            <ul >
                <li>
                <a href={"/pricing"} target={"_self"}>
                    About 
                </a>
                </li>
                <li className="py-3">
                <a href={"/features"} target={"_self"}>
                    Careers
                </a>
                </li>

                <li className="py-3">
                <a href={"/features"} target={"_self"}>
                    Mobile
                </a>
                </li>
            </ul>
        </Col>
        <Col>
            Contact
            Help/FAQ
            Press
            Affilates
        </Col>
        <Col>

            Media
            News 
            photo
            video
        </Col>
        <Col>
            {/* TODO: social media links */}
            Discover our app 
        </Col>
    </Row>
   

    <div>All rights reserved@Linkdevelopment.com </div>
    </footer> );
}
 
export default Footer;