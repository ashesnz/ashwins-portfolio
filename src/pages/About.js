import React, { useState, useEffect } from "react";
import axios from 'axios';
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function About(){
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  const renderHobbies = (hobbies) => {
    return (
        <div className="row justify-content-center">
          <div className="col-12">
            <ul>
              {hobbies.map(hobby => {
                return <li key={hobby.title}>{hobby.title}</li>
              })}
            </ul>
          </div>
        </div>
    );
  }

  useEffect(() =>{
    axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div>
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  {information.aboutContent}
                </p>
                <ul>
                  {/* {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>} */}
                  {!information.age ? null : <li>
                    <b>Age</b> {information.age} Years
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.language ? null : <li>
                    <b>Languages</b> {information.language}
                  </li>}
                  {!information.nationality ? null : <li>
                    <b>Nationality</b> {information.nationality}
                  </li>}
                  {!information.hobbies ? null : <li>
                    <b>Hobbies</b> {renderHobbies(information.hobbies)}
                  </li>}
                  {!information.address ? null : <li>
                    <b>Address</b> {information.address}
                  </li>}
                </ul>
                <a href={information.cvfile} className="mi-button">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
