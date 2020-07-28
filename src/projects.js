import React from 'react';
import './css/style.css';
import Wayfair from "./img/wayfair.png";
import Botsociety from "./img/botsociety.png";
import Close_modal from "./img/iconmonstr-x-mark-thin.svg";
import Volo_digital_agency from "./img/Volo-digital-agency.png";
import Doorchef from "./img/doorchef.png";
import Crossway from "./img/crossway.png";
import Zillow from "./img/zillow.png";
import Diesoy from "./img/diesoy.png";
import Walmart from "./img/walmart.png"

class Projects extends React.Component{
    onClick_portal_close(){
        let portal_close = document.getElementById('portal')
        portal_close.style.display = 'none';
    }
    onClick_portal_open(){
        let portal_open = document.getElementById('portal')
        portal_open.style.display = 'block';
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
                            
                        <img src={Botsociety} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Botsociety landing page</h1>
                        </div>
                        </div>
                </div>

                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
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
            <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">

                    </div>
                    <div className="project-img">
                        <img src={Botsociety} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
        </div>

)
}
}
export default Projects;