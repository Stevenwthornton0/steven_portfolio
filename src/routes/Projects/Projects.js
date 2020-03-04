import React, { Component } from 'react';
import projects from '../../store';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import './Projects.css';

class Projects extends Component {
    state = {
        projects: projects
    }

    displayProjects = () => {
        const { projects } = this.state;
        return projects.map(project =>
                <ProjectItem 
                    key={project.id}
                    project={project}
                />
            )
    }

    render() {
        return (

            <section className='projects'>

                <h2 className='projectsTitle'>Projects</h2>

                <this.displayProjects />

            </section>
        )
    }
}

export default Projects;