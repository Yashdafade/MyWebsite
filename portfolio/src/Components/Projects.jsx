import React from 'react'

const Projects = () => {
    return (
        <>
            <section class="projects" id="projects" data-aos="fade">
                <div className="project-container">
                    <h1 data-aos="fade-up">My Projects</h1>
                    <div className="box project-1">
                        <div className="project-image" data-aos="fade-up" >
                            <img src="./Assets/JMD Website.png" alt="JMDWebsiteImg" />
                        </div>
                        <div className="project-1-text" data-aos="fade-up">
                            <h2>JMD Group Website(HomePage)</h2>
                            <p>Designed and developed JMD Groups' website during a one-month internship using Figma, HTML, CSS, JavaScript, and Bootstrap. Collaborated with a team of five to ensure a responsive and visually appealing digital presence.</p>
                            <div className="links">
                                <a href="https://jmdgrps.com/" target='_blank'><i class='bx bx-link-external'></i>Live Demo</a>
                                <a href="https://github.com/Padminithorat/Padminithorat.github.io" target='_blank'><i class='bx bxl-github'></i>Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="box project-2">
                        <div className="project-1-text" data-aos="fade-up">
                            <h2>Weather App(ReactJS)</h2>
                            <p>Created a weather app using ReactJS, incorporating the OpenWeather API to showcase real-time weather information, including temperature, humidity, and wind speed. Implemented dynamic image rendering based on the current weather conditions.</p>
                            <div className="links">
                                <a href="https://yashdafade.github.io/weatherappreact/" target='_blank'><i class='bx bx-link-external'></i>Live Demo</a>
                                <a href="https://github.com/Yashdafade/weatherappreact" target='_blank'><i class='bx bxl-github'></i>Github</a>
                            </div>
                        </div>
                        <div className="project-image" data-aos="fade-up">
                            <img src="./Assets/WeatherApp.png" alt="WeatherAppImg" />
                        </div>
                    </div>

                    <div className="box project-3">
                        <div className="project-image" data-aos="fade-up">
                            <img src="./Assets/Calculator.png" alt="JMDWebsiteImg" />
                            {/* <img src="https://drive.google.com/file/d/1_Stit-7ZMJAbVXq5crMJZuNLvGvpRMGy/view?usp=drive_link" alt="JMDWebsiteImg" /> */}
                        </div>
                        <div className="project-1-text" data-aos="fade-up">
                            <h2>Web Calculator(HTML,Css & JS)</h2>
                            <p>Created a fully functional calculator application using a combination of HTML for structuring, CSS for styling, and JavaScript for dynamic functionality. The app showcases my proficiency in problem-solving with JavaScript, providing users with an interactive and efficient calculator tool.</p>
                            <div className="links">
                                <a href="https://yashdafade.github.io/Calculator-Html-CSS-and-JavaScipt-/" target='_blank'><i class='bx bx-link-external'></i>Live Demo</a>
                                <a href="https://github.com/Yashdafade/Calculator-Html-CSS-and-JavaScipt-" target='_blank'><i class='bx bxl-github'></i>Github</a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="box project-4">
                        <div className="project-1-text" data-aos="fade-up">
                            <h2>Tello-Task Managing App</h2>
                            <p>Developed a task management app called "Tello" using HTML, CSS, and JavaScript. Inspired by the Kanban board concept, the app focuses on frontend implementation to provide users with an intuitive and user-friendly interface for organizing tasks.</p>
                            <div className="links">
                                <a href="https://yashdafade.github.io/Trello-Kanban-Board-Clone/" target='_blank'><i class='bx bx-link-external'></i>Live Demo</a>
                                <a href="https://github.com/Yashdafade/Trello-Kanban-Board-Clone" target='_blank'><i class='bx bxl-github'></i>Github</a>
                            </div>
                        </div>
                        <div className="project-image" data-aos="fade-up">
                            <img src="./Assets/Tello.png" alt="WeatherAppImg" />
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Projects
