import React, { Component } from "react";
import './aboutme.css';
import profilePic from '../../assets/Morgan2.jpg';
import resume from '../../assets/Web Developer Resume_Morgan Sommer.pdf';

class AboutMe extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card box">
                                <div className="card-body">
                                    <div className="boxheader">
                                        <h2> About Me </h2>
                                    </div>
                                    <img className="photo1" src={ profilePic } alt="Morgan" />
                                    <p className="aboutme">
                                        My name is Morgan and I am a west coast theatre nerd living in the City of Brotherly Love! By day I am an Administrative Coordinator for a large performing arts center,
                                        and by night I am a Full Stack Web Developer. Proficient in HTML5, CSS, Javascript,
                                        JQuery, front end CSS frameworks (Bootstrap, Foundation), Databases (MySql, MongoDB, IndexedDB, Sequelize), Node, NPM, Express, and React.
                                    </p>
                                    <a className="about-me-link" href={ resume }>Resume</a>
                                    <span className="about-me-link"> | </span>
                                    <a className="about-me-link" href="https://github.com/mms211">GitHub</a>
                                    <span className="about-me-link"> | </span>
                                    <a className="about-me-link" href="https://www.linkedin.com/in/morgana-sommer-ba9aa4143">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;