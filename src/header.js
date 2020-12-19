import React from 'react';	
import './css/style.css';
import Hamburger_menu from "./img/hamburger-menu.svg";	
import Projects from './projects';	

class Header extends React.Component{	

    scroll_to(){	
        let get_project = document.getElementById('project');	
        get_project.scrollIntoView({behavior: "smooth"})	
    }	
    constructor(props){	
        super(props)	
        this.state={	
            position: "noscroll"	
        }	

    }	

    render(){	
    return(	
        <div className="header-section">	
            <header className="header">	
                <div className="left-header-content">	
                    {/*background image	
                    tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg	
                    */}	
                </div>	
                <div className="right-header-content">	
                    <div className="header-menu">
                        <ul className="header-menu-sub">
                            <li>Blogs</li>
                            <div className="header-hamburger-menu">
                                <img src={Hamburger_menu } />
                            </div>
                        </ul>
                    </div>
                    <div className="content-header">	
                    <section className="introduction">	
                    <div className="content-intro">	
                    <p className="hello">Hello!</p>	
                    <h1 className="who-I-am">I'm Koffivi</h1>	
                    <p className="about-me">Full stack developer within the Denver, CO area. I have been coding since age 14 and currently looking for a company that will challenge my skills. My goal as a developer is to help businesses grow.</p>	
                    <input type="button" className="view-projects" id="view-projects" onClick={	
        this.scroll_to} value="View Projects"/>	
                    </div>	
                    </section>	
                    </div>	
                    <h1 className="Design-background">Desig</h1>	
                </div>	
            </header>	
        </div>	
    );	
                }	
            }	
export default Header; 