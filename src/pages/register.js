import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img1 from '../ìmages/img1.png';
import { Redirect } from "react-router-dom";
import {Alert} from "@material-ui/lab";
import Snackbar from '@material-ui/core/Snackbar';

export default class register extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        open: false
    }
    
    submitSignup = (e) =>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.name);
        if(this.state.email!=="" && this.state.password!=="" && this.state.name!=="" ){
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('loggedIn', true);
            window.location.href = "/home"
        }else{
            this.setState({
                open:true
            })
            
        }
       
    }
    changeEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
            open:false
        })
      };
    render() {
        if(localStorage.getItem("loggedIn")==="true"){
            return(
                <Redirect to="/home" />
            )
        }
        if(this.state.open===true){
            return(
                <Snackbar open={this.state.open} autoHideDuration={1000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="error">
                    All fields are mandatory!!
                    </Alert>
                </Snackbar>
            )
        }
        return (
            <div className="registerPage">
                <div className="container">
                    <div className="row">
                        <div className="col l3 m2"></div>
                        <div className="col l6 m8 s12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="row">
                                    <div className="col s12">
                                            <img src={img1} alt="profile" className="userPhoto"/>
                                        </div>
                                        <form className="col s12" onSubmit={this.submitSignup}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="name" type="text" className="validate" onChange={this.changeName}/>
                                                <label htmlFor="name">Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="email" type="email" className="validate" onChange={this.changeEmail} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="password" type="password" className="validate" onChange={this.changePassword}/>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <button className="waves-effect waves-light btn sign-page-button" >Sign Up</button> 
                                        <div>Already having an Account? <Link to="/">Login</Link></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l3 m2"></div>
                    </div>
                </div>
            </div>
        )
    }
}
