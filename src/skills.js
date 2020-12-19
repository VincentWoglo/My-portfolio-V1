import React from 'react';
import './css/style.css';

function Skills(){
    
    return(
    <div className="skills">
    <section className="programing-skills">
        <div className="skills-list">
            
        <h1 className="section-title-skills">Skills</h1>
            <div className="languages">
                <h1 className="skill-title">Languages</h1>
                     <ul>
                     <li className="php">Php</li>
                     <li className="c#">C#</li>
                     <li className="mysql">Mysql</li>
                     <li className="jquert">Jquery</li>
                         <li className="html">Html</li>
                         <li className="css">Sass</li>

                     </ul>
            </div>
            <div className="frameworks">
            <h1 className="skill-title">Frameworks</h1>
            <ul>
            <li className="node">Node</li>
            <li className="Express">Express</li>
                     <li className="react">React</li>
            </ul>
            </div>
            <div className="tools">
                <h1 className="skill-title">Tool</h1>
                <ul>
                    <li className="bash">Bash</li>
                    <li className="Git">Git & Github</li>
                    <li className="chrome-dev">Chrome DevTools</li>
                    <li className="postman">Postman</li>
                </ul>
            </div>
            <div className="design">
                <h1 className="skill-title">Tool</h1>
                <ul>
                    <li className="figma">Figma</li>
                    <li className="xd">Adobe XD</li>
                    <li className="photoshop">Photoshop</li>
                </ul>
            </div>
        </div>
    </section>
    </div>
    )
}
export default Skills;
