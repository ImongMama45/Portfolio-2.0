import React, { useRef, useEffect } from "react";
import "./StyleComponets/style.css";

function App() {
  // Refs for DOM elements we want to interact with
  const scrollableRef = useRef(null);
  const samplesRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const projectLeftButton = useRef(null);
  const projectRightButton = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    // Smooth scrolling functionality
    const leftButton = leftBtnRef.current;
    const rightButton = rightBtnRef.current;
    const scrollable = scrollableRef.current;

    leftButton.addEventListener("click", () => {
      scrollable.scrollBy({ left: -200, behavior: "smooth" });
    });

    rightButton.addEventListener("click", () => {
      scrollable.scrollBy({ left: 200, behavior: "smooth" });
    });


    

    // Project slider functionality
    const projectLeft_Button = projectLeftButton.current;
    const projectRight_Button = projectRightButton.current;
    const scrollable_project = samplesRef.current;

    projectLeft_Button.addEventListener("click", () => {
      scrollable_project.scrollBy({ left: -200, behavior: "smooth" });
    });

    projectRight_Button.addEventListener("click", () => {
      scrollable_project.scrollBy({ left: 200, behavior: "smooth" });
    });


    return () => {
      leftButton.removeEventListener("click", () => {});
      rightButton.removeEventListener("click", () => {});
      projectLeft_Button.removeEventListener("click", () => {});
      projectRight_Button.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="App">
      <div>
        <header>
          <nav>
            <ul className="navbar">
              <li className="logo">
                <img src="/Assets/images/logo.png" alt="ligo" />
              </li>
              <input type="checkbox" id="menu-toggle" className="menu-toggle" />
              <label htmlFor="menu-toggle" className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </label>
              <span className="menu">
                <li><a href="#hero" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills" id="products-menu">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </span>
            </ul>
          </nav>
        </header>

        <section id="hero">
          <div className="overlay"></div>
          <div className="white"></div>
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Your future software partner on the run!</p>
          </div>
          <button>CHECK ME OUT</button>
        </section>

        <section id="about">
          <img src="/Assets/images/bilog na muka.png" alt="pic" />
          <div className="description">
            <h2>About Me</h2>
            <p>
              Hello! I'm Quert Russel S. Lalisan, a passionate 2nd-year IT student at Dalubhasaan ng Lungsod ng Lucena.
              (5'6ft) tall born in the year 2005, April 5. I like to draw and design stuff, learning to create efficient
              and beautiful websites.
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills / Expertise</h2>
          <div className="skills-container">
            <button
              className="scroll-btn left-btn"
              aria-label="Scroll Left"
              ref={leftBtnRef}
            >
              &lt;
            </button>
            <div className="skills-scrollable" ref={scrollableRef}>
              <div className="myskills">
                <img src="/Assets/images/html.png" alt="" />
                <div>HTML</div>
              </div>
              <div className="myskills">
                <img src="/Assets/images/css.png" alt="" />
                <div>CSS</div>
              </div>
              <div className="myskills">
                <img
                  src="/Assets/images/javascript-logo-javascript-icon-transparent-free-png.webp"
                  alt=""
                />
                <div>JavaScript</div>
              </div>
              <div className="myskills">
                <img src="/Assets/images/5339184.png" alt="" />
                <div>Responsive Web Design</div>
              </div>
              <div className="myskills">
                <img src="/Assets/images/canva.png" alt="" />
                <div>Problem Solving and Debugging</div>
              </div>
              <div className="myskills">
                <img src="/Assets/images/laptop.png" alt="" />
                <div>Future Aspiration: Software Development</div>
              </div>
              <div className="myskills">
                <img src="/Assets/images/graphic.png" alt="" />
                <div>Graphic Artist</div>
              </div>
            </div>
            <button
              className="scroll-btn right-btn"
              aria-label="Scroll Right"
              ref={rightBtnRef}
            >
              &gt;
            </button>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-slider" >
            <button className="project-scroll-btn project-left-btn" aria-label="Scroll Left" ref={projectLeftButton}>&lt;</button>
            <div className="slider-wrapper" ref={samplesRef}>
              <div className="projects-samples">
                <div className="projeckko">
                  <img src="/Assets/images/lori-gil.png" alt="HTML Project" />
                  <p>Lori and Gil's Website</p>
                  <a href="https://github.com/ImongMama45">View</a>
                </div>
                <div className="projeckko">
                  <img src="/Assets/images/Art.png" alt="art" />
                  <p>Art Portfolio</p>
                  <a href="https://www.instagram.com/kabutogan69/">View</a>
                </div>
                <div className="projeckko">
                  <img src="/Assets/images/enrollment.png" alt="HTML Project" />
                  <p>My Personal Website</p>
                  <a href=" https://imongmama45.github.io/portfolio/">View</a>
                </div>
              </div>
            </div>
            <button className="project-scroll-btn project-right-btn" aria-label="Scroll Right" ref={projectRightButton}>&gt;</button>
          </div>
        </section>

        <footer>
          <ul className="social-links-horizontal">
            {/* Social links */}
          </ul>
          <p>&copy; 2024 MyPortfolio. All rights reserved designed & coded by Quert.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
