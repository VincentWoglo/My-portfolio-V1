import React from 'react';
import './css/style.css';
import Wayfair from "./img/wayfair.png";
import Care from "./img/care.png";
import Close_modal from "./img/iconmonstr-x-mark-thin.svg";
import Volo_digital_agency from "./img/Volo-digital-agency.png";
import Doorchef from "./img/doorchef.png";
import Crossway from "./img/crossway.png";
import Zillow from "./img/zillow.png";
import Diesoy from "./img/diesoy.png";
import Walmart from "./img/walmart.png"
import Header from './header';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

class Projects extends React.Component{
    project_data = {
        data: [{
            "title": "Wayfair Email Template",
            "img": {Wayfair}
        },
        {

            "title": "Wayfair Email Templates",
            "img": {Zillow}
        }
    ]
}
    
    constructor(props) {
        super(props);
      
        this.state = {
            position: 'noscroll'
        };
        
    }
    render(){
        return(
        <div className="projects" id='project'>
        
            <h1 className="project-title">Projects</h1>
            <section className="Card-section-background">



            <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Walmart} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Walmart Email</h1>
                        </div>
                        </div>
                </div>


               


                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Zillow} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Zillow Email Template</h1>
                        </div>
                        </div>
                </div>
                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Crossway} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Crossway Email Newsletter</h1>
                        </div>
                        </div>
                </div>


                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Diesoy} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Static Webiste template</h1>
                        </div>
                        </div>
                </div>
                
                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                    
                        <div className="Card-img">
                        <img src={Volo_digital_agency} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Volo Digital Landing Page</h1>
                        </div>
                        </div>
                </div>


                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Doorchef} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">DoorChef Backend Prototype</h1>
                        </div>
                        </div>
                </div>


                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                            
                        <img src={Care} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Ecommerce Template Design</h1>
                        </div>
                        </div>
                </div>
                
                <div className="Card-field" id="Card-field" >
                    <div className="Card">
                        <div className="Card-img">
                            <img src={Wayfair} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Wayfair Email Template</h1>
                        </div>
                        </div>
                </div>
                

            </section>
                    
            
</div>
        )
}
}
export default Projects;