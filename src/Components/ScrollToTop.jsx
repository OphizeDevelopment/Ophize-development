import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';


const ScrollToTop = () => {
  const [isvisible, setIsvisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
        setIsvisible(true);
    }else{
        setIsvisible(false);
    }
  };

  const scrollToTop =()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
  }

  return(
    <>
    <div className="fixed bottom-5 right-5 z-50">
        {isvisible &&(
            <div onClick={scrollToTop} className="text-blue-500 cursor-pointer">
                <FaArrowCircleUp className="text-4xl" />
            </div>
        )}
    </div>
    </>
  )
};

export default ScrollToTop;
