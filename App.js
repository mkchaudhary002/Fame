import React from 'react';
import { Nav, NavItem, NavLink,Card,Button,CardFooter,CardBody,CardImg,CardTitle,CardHeader,Col ,Row} from "shards-react";
import './App.css';
import pic from "./im/b.jpg";

class App extends React.Component {
  render(){
    return(
      <div>
        <div className="app">bouncer</div>
      <Nav justified>
      <NavItem > 
        <NavLink active href="#">HOME</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">IPHONE</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">STORE</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">IPAD</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">MACBOOK</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">ACCESORIES</NavLink>
      </NavItem>
    </Nav>
    <div className="ap"></div>
         <Row className="mt-1">
         <Col>
        </Col>
        <Col>
          <Card>
            <CardImg top src={pic} />
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top src={pic} />
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg bottom src={pic} />
          </Card>
        </Col>
        <Col>
         </Col>
      </Row>
<div className="app1 mt-4"><h2>best Seller</h2></div>
<Nav justified>
      <NavItem > 
        <NavLink active href="#">HOME</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">IPHONE</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">STORE</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">IPAD</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">MACBOOK</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">ACCESORIES</NavLink>
      </NavItem>
    </Nav>
    <Row className="mt-1">
         <Col>
        </Col>
        <Col>
          <Card>
            <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
         </Col>
      </Row>
      <Row className="mt-3">
         <Col>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
          <Card>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
          </Card>
        </Col>
        <Col>
        </Col>
         
      </Row>
      <div className="app2 mt-3"><h2>Load More</h2></div>
      <div className="ap"></div>
     
      <Row className="mt-4"> 
      <Col></Col>
        <Col>
        {/* <i class="material-icons text-center">motorcycle</i> */}
        <h4>FREE SHOPPING</h4>
        <p>Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it.</p>
        </Col>
        <Col><h4>100% REFUND</h4>
        <p>Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it.</p>
        </Col>
        <Col><h4>SUPPORT 24/7</h4>
        <p>Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it.</p>        
        </Col>
        <Col></Col>
      </Row>
      <div className="app3 mt-3"><h2>Latest News</h2></div>
      {/* <Row>
        <Col></Col>
      <Col>
          
          <CardImg top src={pic} nmnmnnm/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
        
        </Col>
        <Col>
          
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
        </Col>
        <Col>
          <CardImg top src={pic}/>
            <p className="text-center mt-3">Apple Macbook Pro</p>
            <h3 className="txt">*****</h3>
            <h6 className="txt">$498</h6>
        </Col>
        <Col></Col>
      </Row> */}

      <Row className="mt-4"> 
      <Col></Col>
        <Col>
        <h4>BOUNCER</h4>
        <p>Many users already have downloaded Bootstrap from MaxCDN when visiting another site.As a result, it will be loaded from cache when they visit your site, which leads to faster loading time.</p>
        </Col>
        <Col><h4>Fallow us</h4>
        <p>Many users already have downloaded Bootstrap from MaxCDN when visiting another site.</p>
        </Col>
        <Col><h4>Contact Us</h4>
        <p>Many users already have downloaded Bootstrap from MaxCDN when visiting another site.</p>        
        </Col>
        <Col></Col>
      </Row>
      
    </div>
    )
  }
}
export default App;