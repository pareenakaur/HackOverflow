import React from 'react';
import './styles.css'; 
import gsap from "gsap";
import { useEffect } from 'react';


function Start() {
    useEffect(() => {
        gsap.from("h2 div", 1.5, {
          yPercent: 100,
          ease: "power4.inOut",
          stagger: {
            amount: 0.25,
          },
        });
    
        gsap.to("h2", 1.5, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
          stagger: {
            amount: 0.25,
          },
        });
    
        document.addEventListener("DOMContentLoaded", function () {
          let overlay = document.querySelector(".overlay");
          overlay.addEventListener("click", function () {
            gsap.to("h2 div", 1.5, {
              yPercent: -100,
              ease: "power4.inOut",
              stagger: {
                amount: 0.5,
              },
            });
    
            gsap.to(
              "h2",
              1.5,
              {
                clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
                ease: "power4.inOut",
                stagger: {
                  amount: 0.5,
                },
              },
              0
            );
    
            gsap.to(".overlay", 2, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              ease: "power4.inOut",
            });
    
            gsap.to(".img", 2, {
              clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
              ease: "power4.inOut",
              stagger: {
                amount: 1.5,
              },
            });
    
            gsap.to(".loader", 2, {
              clipPath: "polygon(0% 0%, 100% 0%,100% 0%, 0% 0%)",
              ease: "power4.inOut",
              delay: 2,
            });
          });
        });
      }, []); // Empty dependency array to run only once when the component mounts
    
  return (
    <div>
      <div className="loader">
        <div className="img">
          <img src="./world.jpg" alt="img1" />
        </div>
        <div className = "img">
            <img src = "./bitcoin.jpg" alt = "img2" />
        </div>
        <div className = "img">
            <img src = "./newspaper.jpg" alt = "img3" />
        </div>
        <div className = "img">
            <img src = "./stocks.jpg" alt = "img5" />
        </div>
        <div className = "img">
            <img src = "./citibank.png" alt = "img6" />
        </div>
    </div>
        
      

      <div className="overlay">
        <div className="wrapper">
          <div className="static-txt">The One and Only</div>
          <ul className="dynamic-txts">
            <li>
              <span>Newsletter</span>
            </li>
            <li>
              <span>Networker</span>
            </li>
            <li>
              <span>Advisor</span>
            </li>
            <li>
              <span>Partner</span>
            </li>
          </ul>
        </div>

        <div className="logo-container1">
          <img src="./logo.png" alt="our logo" />
        </div>
      </div>
    </div>
  );
}

export default Start;