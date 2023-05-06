import React, { useRef, useEffect } from "react";
import Section1 from "./components/section1";
import AboutMe from "./components/aboutSection";
import Keyskills from "./components/keyskills.js";
import Projects from "./components/Projects";

import "./App.css";
// import axios from "axios"
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import { Grid } from "@material-ui/core";
import Footer from "./components/Footer";

const App = () => {
  const handleScrollWindow = () => {
    const section1elem = homeRef.current;
    document
      .querySelectorAll("a")
      .forEach(a => a.setAttribute("target", "_blank"));

    if (window.pageYOffset >= section1elem.scrollHeight * 0.4) {
      aboutMeTitle.current.style.animation = "fromLeft 0.75s";
      aboutMeTitle.current.style.opacity = "1";
      aboutmeHrRef.current.style.animation = "fromLeft 0.75s ";
      aboutmeHrRef.current.style.animationDelay = "0.25s";

      setTimeout(() => {
        aboutmeHrRef.current.style.opacity = "1";
      }, 1000);
    }
    if (window.pageYOffset >= section1elem.scrollHeight * 0.6) {
      aboutMeTable.current.style.animation = "fromLeft 0.75s ";
      aboutMeTable.current.style.opacity = "1";
      aboutMeDes.current.style.animation = "fromRight 0.75s ";
      aboutMeDes.current.style.opacity = "1";
      myImgRef.current.style.animation = "fadeOut 0.75s ";
      myImgRef.current.style.opacity = "1";
    }

    if (window.pageYOffset >= section1elem.scrollHeight * 0.8) {
      whatToExpectRef.current.style.animation = "fromLeft 0.75s ";
      whatToExpectRef.current.style.opacity = "1";
      whatToExpectRef1.current.style.animation = "fromLeft 0.75s ";
      whatToExpectRef1.current.style.opacity = "1";

      whatToExpectRef2.current.style.animation = "fromLeft 0.75s ";
      whatToExpectRef2.current.style.animationDelay = "0.2s";
      whatToExpectRef3.current.style.animation = "fromLeft 0.75s ";
      whatToExpectRef3.current.style.animationDelay = "0.3s";
      whatToExpectRef4.current.style.animation = "fromLeft 0.75s ";
      whatToExpectRef4.current.style.animationDelay = "0.4s";
      //   whatToExpectRef2.current.style.opacity = "1";

      setTimeout(() => {
        whatToExpectRef2.current.style.opacity = "1";
      }, 300);
      setTimeout(() => {
        whatToExpectRef3.current.style.opacity = "1";
      }, 400);
      setTimeout(() => {
        whatToExpectRef4.current.style.opacity = "1";
      }, 500);
    }

    if (window.pageYOffset >= section1elem.scrollHeight * 1.25) {
      keyskillsRef.current.style.opacity = "1";
      keySkillEachRef.current.style.animation = "fromLeft 0.75s ";
      keySkillEachRef.current.style.opacity = "1";
    }
    if (window.pageYOffset >= section1elem.scrollHeight * 1.6) {
      projectsTitle.current.style.animation = "fromRight 0.75s";
      projectsTitle.current.style.opacity = "1";
      projectsHr.current.style.animation = "fromRight 0.75s ";
      projectsHr.current.style.animationDelay = "0.25s";

      setTimeout(() => {
        projectsHr.current.style.opacity = "1";
      }, 1000);
    }

    if (window.pageYOffset >= section1elem.scrollHeight * 1.65) {
      project1Ref.current.style.animation = "fadeOut2 0.75s";
      project1Ref.current.style.opacity = "1";
      project2Ref.current.style.animation = "fadeOut2 0.75s";
      project2Ref.current.style.animationDelay = "0.2s";
      project3Ref.current.style.animation = "fadeOut2 0.75s";
      project3Ref.current.style.animationDelay = "0.3s";
      project4Ref.current.style.animation = "fadeOut2 0.75s";
      project4Ref.current.style.animationDelay = "0.4s";

      project6Ref.current.style.animation = "fadeOut2 0.75s";
      project6Ref.current.style.animationDelay = "0.7s";
      setTimeout(() => {
        project2Ref.current.style.opacity = "1";
      }, 300);
      setTimeout(() => {
        project3Ref.current.style.opacity = "1";
      }, 400);
      setTimeout(() => {
        project4Ref.current.style.opacity = "1";
      }, 500);

      setTimeout(() => {
        project6Ref.current.style.opacity = "1";
      }, 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollWindow);
    // return window.removeEventListener("scroll", handleScrollWindow);
  });

  let homeRef = useRef(null);
  let aboutmeRef = useRef(null);
  let aboutMeTable = useRef(null);
  let aboutMeTitle = useRef(null);
  let aboutMeDes = useRef(null);
  let aboutmeHrRef = useRef(null);
  let myImgRef = useRef(null);

  let whatToExpectRef = useRef(null);
  let whatToExpectRef1 = useRef(null);
  let whatToExpectRef2 = useRef(null);
  let whatToExpectRef3 = useRef(null);
  let whatToExpectRef4 = useRef(null);
  let keyskillsRef = useRef(null);
  let keySkillEachRef = useRef(null);
  let projectsTitle = useRef(null);
  let projectsHr = useRef(null);
  let project1Ref = useRef(null);
  let project2Ref = useRef(null);
  let project3Ref = useRef(null);
  let project4Ref = useRef(null);
  let project6Ref = useRef(null);

  let projectsRef = useRef(null);

  const scrollToRef = ref => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleScrollToAbout = () => scrollToRef(aboutmeRef);

  const handleScrollToHome = () => scrollToRef(homeRef);
  const handleScrollToKeyskills = () => scrollToRef(keyskillsRef);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" style={{ overflowX: "hidden" }}>
          <Grid item xs={12} ref={homeRef}>
            <Section1 handleScrollToAbout={handleScrollToAbout} />
          </Grid>
          <Grid item xs={12}>
            <AboutMe
              aboutmeRef={aboutmeRef}
              aboutMeTitle={aboutMeTitle}
              aboutmeHrRef={aboutmeHrRef}
              aboutMeTable={aboutMeTable}
              aboutMeDes={aboutMeDes}
              myImgRef={myImgRef}
              whatToExpectRef={whatToExpectRef}
              whatToExpectRef1={whatToExpectRef1}
              whatToExpectRef2={whatToExpectRef2}
              whatToExpectRef4={whatToExpectRef4}
              whatToExpectRef3={whatToExpectRef3}
              handleScrollToHome={handleScrollToHome}
              handleScrollToKeyskills={handleScrollToKeyskills}
            />
          </Grid>
          <Grid item xs={12}>
            <Keyskills
              keyskillRef={keyskillsRef}
              keySkillEachRef={keySkillEachRef}
            />
          </Grid>
          <Grid item xs={12} ref={projectsRef}>
            <Projects
              projectsTitle={projectsTitle}
              projectsHr={projectsHr}
              project1Ref={project1Ref}
              project2Ref={project2Ref}
              project3Ref={project3Ref}
              project4Ref={project4Ref}
              project6Ref={project6Ref}
            />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </>
  );
};

export default App;
