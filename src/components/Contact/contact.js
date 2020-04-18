import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card box1">
                                <div className="card-body">
                                    <div className="boxheader">
                                        <h2> Contact Me</h2>
                                    </div>
                                    <form action="" method="">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Name</label>
                                            <input type="text" name="name" className="form-control" id="exampleFormControlInput1"
                                                placeholder="John Smith" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Email</label>
                                            <input type="email" name="mail" className="form-control" id="exampleFormControlInput1"
                                                placeholder="example@gmail.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                                            <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <button type="submit" name="submit" className="btn btn-info">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;