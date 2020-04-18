import React, { Component } from "react";
import './portfolio.css';
import Project from '../Project/project';
import WhatDoYouWantToEat from '../../assets/What Do You Want To Eat.png';
import PasswordGenerator from '../../assets/Password Generator.png';
import WorkDayScheduler from '../../assets/Work Day Scheduler.png';
import Burgers from '../../assets/Burgers.png';
import Calendar from '../../assets/Calendar.png';
import EmployeeDirectory from '../../assets/Employee Directory.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card box2">
                                <div className="card-body">
                                    <div className="boxheader">
                                        <h2> Portfolio </h2>
                                    </div>
                                    <div class="row">
                                        <Project
                                            photo={WhatDoYouWantToEat}
                                            link="https://github.com/mms211/What-Do-You-Want-To-Eat-App"
                                            name="What Do You Want To Eat?"
                                        />
                                        <Project 
                                            photo={PasswordGenerator}
                                            link="https://github.com/mms211/Password-Generator" 
                                            name="Password Generator" 
                                        />
                                    </div>
                                    <div class="row">
                                        <Project 
                                            photo={WorkDayScheduler} 
                                            link="https://github.com/mms211/Day-Planner" 
                                            name="Work Day Scheduler" 
                                        />
                                        <Project 
                                            photo={Burgers} 
                                            link="https://github.com/mms211/Burger" 
                                            name="Burgers" 
                                        />
                                    </div>
                                    <div class="row">
                                        <Project 
                                            photo={Calendar} 
                                            link="https://github.com/Calvinmac633/2nd-project-awesome-app" 
                                            name="Awesome Calendar" 
                                        />
                                        <Project 
                                            photo={EmployeeDirectory} 
                                            link="https://github.com/mms211/Employee-Directory2" 
                                            name="Employee Directory" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;