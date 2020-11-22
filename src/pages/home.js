import React, { Component } from 'react'

export default class home extends Component {
    componentDidMount(){
        if(localStorage.getItem("name")===null){
            window.location.href = "/";
        }
        
    }
    logout = () =>{
        localStorage.removeItem('loggedIn');
        window.location.href = "/" 
    }
    render() {
        
        return (
            <div className="homepage">
                <div className="row">
                    <div className="username col s6">Hi {localStorage.getItem("name")},</div>
                    <div className="col s6 center"><button className="waves-effect waves-light btn-large logoutBtn" onClick={this.logout}>LOGOUT</button> </div>
                    <div>
                    <div className="heading col s12">Hurray!!!</div>
                    <div className="subHeading col s12">You are successfully signed in!!</div>
                    </div>
                </div>
            </div>
        )
    }
}
