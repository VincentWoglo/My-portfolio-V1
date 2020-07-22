import React from 'react';
import './css/style.css';
import Botsociety from "./img/botsociety.png";
import Close_modal from "./img/iconmonstr-x-mark-thin.svg";

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
            position: 'close'
        };
        this.onClick = this.onClick_portal_close.bind(this);
    }
    render(){
        return(
        <div className="projects">
            <h1 className="project-title">Projects</h1>
            <section className="Card-section-background">

                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img"></div>
                        <div className="Card-info">
                            <h1 className="Card-title">Botsociety landing page</h1>
                        </div>
                        </div>
                </div>

                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img"></div>
                        <div className="Card-info">
                            <h1 className="Card-title">Botsociety landing page</h1>
                        </div>
                        </div>
                </div>


                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img"></div>
                        <div className="Card-info">
                            <h1 className="Card-title">Botsociety landing page</h1>
                        </div>
                        </div>
                </div>

                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img"></div>
                        <div className="Card-info">
                            <h1 className="Card-title">Botsociety landing page</h1>
                        </div>
                        </div>
                </div>
            </section>
            <div className="portal" id="portal">
                <div className="modal">
                    <div className="modal-open">
                    <div className="close-model" id="close-model" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
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