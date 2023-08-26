import react, { useEffect } from "react";
import { UilShoppingCart } from "@iconscout/react-unicons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

const Header = () => {
  const [cartNumber, setCartNumber] = react.useState(0);

  useEffect(() => {
    const cartWatchesArray = JSON.parse(localStorage.getItem("cart"));
    if (cartWatchesArray) {
      setCartNumber(cartWatchesArray.length);
    }
  },);

  return (

<Navbar id="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="titleItem" >BerXy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-end">
            <Nav.Link href="/collection" className="nav-item" >Collection</Nav.Link>
            <Nav.Link href="/cart" className="nav-item">Cart <UilShoppingCart id="cartIcon" size={30} />
              <span id="cartNumber">{cartNumber}</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    // <div id="header">
    //   <div id="topBar">
    //     <div id="topBarItemsCenter">
    //       <div id="discountText">25% Off Selected Items </div>
    //       <div>
    //         |
    //         <button id="discountLink" href="#">
    //           {" "}
    //           Learn More
    //         </button>
    //       </div>
    //     </div>
    //     <div id="topBarItemsRight">
    //       {/* <div id="settings">

    //         <div className="user-box">
    //         <div className="user-id">
    //             <div className="user-name">Language</div>
    //             <div className="dropdown-arrow"></div>
    //             <div className="dropdown-menu">
    //               <ul>
    //                 <li>English</li>
    //                 <li>Español</li>
    //                 <li>Français</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
            
    //         <div id="location">Location</div>
    //       </div> */}
    //     </div>
    //   </div>
    //   <div id="nav">
    //     <div id="items">
    //       <div className="titleItem">
    //         <a href="/home" className="titleItem">
    //           BER<div id="xMarksTheSpot">X</div>Y
    //         </a>
    //       </div>
    //       <div id="navigate">
    //         <a className="nav-item" href="/collection">
    //           COLLECTION
    //         </a>
    //         <a className="nav-item" href="/cart">
    //           CART <UilShoppingCart id="cartIcon" size={30} />
    //           <span id="cartNumber">{cartNumber}</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
