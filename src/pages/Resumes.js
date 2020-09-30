import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import FsLightbox from "fslightbox-react";
import { Link } from 'react-router-dom';

function Resumes(){
  const [toggler, setToggler] = useState(false);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState({});
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() =>{
    axios.get('/api/achievements')
        .then(response =>{
          console.log(response.data);
          setAchievements(response.data);
        })
    axios.get('/api/skills')
      .then(response =>{
        setSkills(response.data);
      })
    axios.get('/api/experience')
      .then(response =>{
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Achievements" icon="star" />
          <div className="mi-resume mt-30">
            <div className="mi-resume-summary">
            </div>
            <div className="mi-resume-details">
              <h6 className="mi-resume-company">Chief Executive Award received for leading the implementation of the <Link to="/resume" onClick={() => setToggler(!toggler)}>SPACE programme.</Link></h6>
            </div>
            <FsLightbox
                toggler={ toggler }
                sources={ [achievements.spaceAwardImage] }
            />
          </div>
          <div className="mi-resume mt-30">
            <div className="mi-resume-summary">
            </div>
            <div className="mi-resume-details">
              <h6 className="mi-resume-company">Attended New Zealand Hi-Tech Awards in 2019 for the finalist in the category for Hi-Tech Solution for the Agritech Sector.</h6>
            </div>
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
        </div>
      </div>
      <div className="mi-skills-area mi-section">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map(skill => (
                  <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                    <Progress title={skill.title} percentage={skill.value} />
                  </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
