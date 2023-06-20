import React from "react";
// import image1 from './images/image1.png'
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";
import image11 from "./images/image11.png";
import arrowL from "./images/Vector.png";
import arrowR from "./images/Vector2.png";
import small from "./images/Ellipse 1.png";
import phone from "./images/phone.png";
import location from "./images/loc.png";

const LandingPage = () => {
  return (
    <div className="home">
      <section className="bgcoffee">
        <nav>
          <h2>CofeShop</h2>
          <ul>
            <li>Gallery</li>
            <li>Prices for Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
        {/* <img className="bgcoffee" src={image2} alt="" /> */}
        <div className="brown">
          <div className="first">
            <h1>
              YOUR <br /> COFFEE. <br /> YOUR WAY.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <button>Order</button>
          </div>
          <div className="second">
            <img src={image3} alt="" />
            <div className="third">
              <img src={image2} alt="" />
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <h1>
          THE COFFEE <br /> WE WORK WITH
        </h1>
        <div className="flex2">
          <div>
            <img src={image3} alt="" />
            <p>Espresso</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div>
            <img src={image5} alt="" />
            <p>Black Coffee</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div>
            <img src={image6} alt="" />
            <p>Latte</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
        <div className="sec2b">
          <h1>POPULAR COFFEE</h1>
          <div className="flex3">
            <img src={arrowL} alt="" />
            <img className="imgg" src={image7} alt="" />
            <img src={arrowR} alt="" />
          </div>
          <div className="flex4">
            <img src={small} alt="" />
            <img className="bgwhite" src={small} alt="" />
            <img src={small} alt="" />
          </div>
        </div>
      </section>
      <section className="section3">
        <h1>POPULAR DESTINATION FOR COFFEE LOVERS</h1>
        <div className="flex">
          <img src={image8} alt="" />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
          </div>
        </div>
        <button>Get a booking</button>
      </section>
      <section className="section4">
        <div className="flex">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="flex2">
          <img className="imgg" src={image10} alt="" />
          <div className="flex3">
            <img src={image9} alt="" />
            <img src={image11} alt="" />
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="sec5">
          <h1>ANY QUESTIONS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Phone Number" />
          <textarea type="text" placeholder="Your question" />
          <button>Send</button>
        </form>
      </section>
      <footer>
        <div>
          <h1>CofeShop</h1>
          <p>Privacy Policy</p>
        </div>
        <div className="flex">
          <img src={phone} alt="" />
          <p>+000 000 000 000</p>
        </div>
        <div className="flex2">
          <img src={location} alt="" />
          <p>Na Plzeňce 1166/0 150 00</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
