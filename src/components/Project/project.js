import React from 'react';
import './project.css';

function Project(props) {
    return (
        <div className="col-md-6">
            <div className="card port-pic">
                <div className="img-div">
                    <img src={props.photo} alt="" />
                </div>
                <p className="overlay">
                    <a className="port-link" href={props.link}> {props.name} </a>
                </p>
            </div>
        </div>
    )
}

export default Project;