import React, { Component } from 'react';
import HTML5 from '../../Images/html5-plain.svg';
import CSS3 from '../../Images/css3-plain.svg'
import JavaScript from '../../Images/javascript-plain.svg';
import react from '../../Images/react-1.svg';
import Nodejs from '../../Images/nodejs-icon.svg';
import jQuery from '../../Images/JQuery-Logo.svg';
import './ProjectItem.css';

class ProjectItem extends Component {

    static defaultProps = {
        project: []
    }

    render() {
        const { project } = this.props;
        return (
            <div className='project'>
                <p className='title'>{project.name}</p>
                <img src={project.screenshot} alt={`${project.name} App front page`} />
                <p>{project.about}</p>
                <div className='techIcons'>
                    <p>Tech: </p>
                    <img src={HTML5} alt="HTML5 Logo" />
                    <img src={CSS3} alt="CSS Logo" />
                    <img src={JavaScript} alt="JavaScript Logo" />
                    {project.react && <img src={react} alt="React Logo" />}
                    {project.node && <img src={Nodejs} alt="NodeJS Logo" />}
                    {project.jQuery && <img className='jquery' src={jQuery} alt="jQuery Logo" />}
                </div>
                <div className='links'>
                    <a target='_blank' rel="noopener noreferrer" href={project.live}>Live App</a>
                    <p>|</p>
                    <a target='_blank' rel="noopener noreferrer" href={project.client}>Client Repo</a>
                    {project.server && <p>|</p>}
                    {project.server && <a target='_blank' rel="noopener noreferrer" href={project.server}>Server Repo</a>}
                </div>

                <div className='line'></div>
            </div>

        )
    }
}

export default ProjectItem;