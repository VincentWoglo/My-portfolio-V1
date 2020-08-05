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
import Walmart from "./img/walmart.png";
import Reacts from "./img/react-2.svg";
import Html from "./img/html-5.svg";
import Css from "./img/css-5.svg";
import Php from "./img/php-1.svg";
import DoorchefSite from "./img/doorchef website.png"
import Header from './header';
import Jquery from './img/jquery-2.svg';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'

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
onClick_portal_close(){
    let portal_close = document.querySelector('#portal')
    
    if(portal_close){
        portal_close.style.display = 'none';
    }
}
onClick_portal_open(){
    let portal_open = document.querySelector('#portal')
    if(portal_open){
        portal_open.style.display = 'block';
    }
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

            <Router>
            <Link to="/Walmart">
            <div className="Card-field" id="Card-field"  onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Walmart} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Walmart Email</h1>
                        </div>
                        </div>
                </div>

</Link>
               

                <Link to="/Zillow">
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
                </Link>
                <Link to="/Crossway">
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
                </Link>


                <Link to="/Diesoy"> <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Diesoy} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Static Webiste template</h1>
                        </div>
                        </div>
                </div>
                </Link>

                <Link to="/VoloAgency">
                <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                    
                        <div className="Card-img">
                        <img src={Volo_digital_agency} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Volo Digital Landing Page</h1>
                        </div>
                        </div>
                </div></Link>
                


                <Link to="/DoorChef"><div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                        <img src={Doorchef} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">DoorChef Backend Prototype</h1>
                        </div>
                        </div>
                </div></Link>
                

                <Link to="/DoorChef Website"> <div className="Card-field" id="Card-field" onClick={this.onClick_portal_open}>
                    <div className="Card">
                        <div className="Card-img">
                            
                        <img src={DoorchefSite} className="Card-img-title"/>
                        </div>
                        <div className="Card-info">
                            <h1 className="Card-title">Ecommerce Template Design</h1>
                        </div>
                        </div>
                </div></Link>
                
                <Link to="/Wayfair">
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
                </Link>
                <Switch>


                <Route path="/DoorChef">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                        <div className="project-desc-center">
                    <p className="Info-about-project">
                            This project was designed to get an idea of how a back-end of a project that recently worked on with a partner would look like.
                            I chose to build this project PHP on the backend because we wanted to get something done fast and get an idea of the final product.
                            If I would choose to build product for this project, I would build it with React and Node Js on the backend. 
                                                   
                        </p>
                        <div className="built-with">
                                <img src={Php} className="built-with-php" />
                                <img src={Jquery} className="built-with-Jquery" />
                                <img src={Html} className="built-with-html" />
                                <img src={Css} className="built-with-css" />
                            </div>
                            <a href="https://github.com/VincentWoglo/DoorChef-Backend-Prototype" target="_blank"><input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://doorchef.000webhostapp.com/home.php" target="_blank"><input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    </div>
                    </div>
                    <div className="project-img">
                        <img src={Doorchef} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>



               <Route path="/VoloAgency">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                    <p className="Info-about-project">
                            This project is a simple landing page template that I built with html and css.
                            There is no back end to this project, only the landing front page.                         
                        </p>
                        <ul className="built-with">
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css"/>
                            </ul>
                            <a href="https://github.com/VincentWoglo/volo-digital-agency.github.io" target="_blank">  <input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://vincentwoglo.github.io/volo-digital-agency.github.io/" target="_blank"><input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    </div>
                    <div className="project-img">
                        <img src={Volo_digital_agency} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
            </Route>

                <Route path="/Walmart">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                    <p className="Info-about-project">
                            This project is a simple email template for Walmart.
                            I chose not to build this project with react because it does not need to be upgraded over time.
                            There is no back end to this project, only the landing front page.                         
                        </p>
                        <ul className="built-with">
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css"/>
                            </ul>
                            <a href="https://github.com/VincentWoglo/walmart-email.github.io" target="_blank">     <input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://vincentwoglo.github.io/walmart-email.github.io/" target="_blank">  <input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    </div>
                    <div className="project-img">
                        <img src={Walmart} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>

                <Route path="/Zillow">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                    <p className="Info-about-project">
                    This project is a simple email template for Zillow.
                            I chose not to build this project with react because it does not need to be upgraded over time.
                            There is no back end to this project, only the landing front page.                           
                        </p>
                        <ul className="built-with">
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css"/>
                            </ul>
                            <a href="https://github.com/VincentWoglo/Zillow-Email-template.github.io" target="_blank">   <input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://vincentwoglo.github.io/Zillow-Email-template.github.io/" target="_blank">  <input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    
                    </div>
                    <div className="project-img">
                        <img src={Zillow} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>

                <Route path="/Crossway">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                    <p className="Info-about-project">
                    This project is a simple email template for Crossway.
                            I chose not to build this project with react because it does not need to be upgraded over time.
                            There is no back end to this project, only the landing front page.                        
                        </p>
                        <ul className="built-with">
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css"/>
                            </ul>
                            <a href="https://github.com/VincentWoglo/crossway-email-newsletter.github.io" target="_blank">    <input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://vincentwoglo.github.io/crossway-email-newsletter.github.io/" target="_blank"><input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    </div>
                    <div className="project-img">
                        <img src={Crossway} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>

                <Route path="/Wayfair">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                    <p className="Info-about-project">
                    This project is a simple receipt email template for Wayfair.
                            I chose not to build this project with react because it does not need to be upgraded over time.
                            There is no back end to this project, only the landing front page.                          
                        </p>
                        <ul className="built-with">
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css"/>
                            </ul>
                            <a href="https://github.com/VincentWoglo/care.github.io" target="_blank"> <input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://vincentwoglo.github.io/Wayfair-Receipt.github.io/" target="_blank">  <input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    
                    </div>
                    <div className="project-img">
                        <img src={Wayfair} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>

                <Route path="/DoorChef Website">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                        <p className="Info-about-project">
                            This project is a pre-launch page that I built.
                            I built this page because there was not a product ready to published
                            so we needed to collect emails.                         
                        </p>
                        <ul className="built-with">
                        <img src={Php} className="built-with-php" />
                        <img src={Jquery} className="built-with-Jquery" />
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css" />
                            </ul>
                            <a href="https://github.com/VincentWoglo/care.github.io" target="_blank"><input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://www.doorchef.net/" target="_blank"><input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    </div>
                    <div className="project-img">
                        <img src={DoorchefSite} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>
                
                <Route path="/Diesoy">
                <div className="portal" id="portal">
                <div className="modal" > 
                    <div className="modal-open">
                    <div className="close-modal" id="close-modal" onClick={this.onClick_portal_close}><img src={Close_modal}/></div>
                    <div className="project-description">
                    <p className="Info-about-project">
                            This project is a simple single page template that I built targeted at a clinic.
                            There is no back end to this project, only the landing front page.                         
                        </p>
                        <ul className="built-with">
                        <img src={Html} className="built-with-html" />
                        <img src={Css} className="built-with-css" />
                            </ul>
                            <a href="https://github.com/VincentWoglo/diesoy-email.github.io" target="_blank">  <input type="button"  className="call-action-btn-1" value="View Code"/></a>
                            <a href="https://vincentwoglo.github.io/diesoy-email.github.io/" target="_blank"> <input type="button"  className="call-action-btn-2" value="Live Preview"/></a>
                    </div>
                    <div className="project-img">
                        <img src={Diesoy} className="project-img-title"/>
                    </div>
                </div>
                </div>
            </div>
                </Route>

                
                </Switch>
                </Router>

            </section>
                    
            
</div>
        )
}
}
export default Projects;