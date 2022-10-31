import React, { useEffect,useState } from 'react'
import person from "../img/person.png"

function Introduction() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(() => {
        // Accessing scss variable "--background-color"
        // and "--text-color" using plain JavaScript
        // and changing the same according to the state of "darkTheme"
        const root = document.documentElement;
        root?.style.setProperty("--offsetY",offset
        );
       
      }, [offset]);

    console.log(offset);
    console.log("dd",document.documentElement.style)

  return (
    <div className="intro">
        <div className="salute">
          <div className="saluteTextContainer">
            <h1 className="saluteText">Hi</h1>
          </div>
          <div className="saluteImgContainer">
            <img src={person} alt="" className="saluteImg" />
          </div>
        </div>
        <div className="nameContainer">
          <h2 className="name">I'm Can</h2>
        </div>
        <div className="jobTitleContainer dark">
          <h2 className="jobTitle">a Web Developer</h2>
        </div>
        <div className="jobTitleContainer purple">
          <h2 className="jobTitle">and Designer</h2>
        </div>
      </div>
  )
}

export default Introduction