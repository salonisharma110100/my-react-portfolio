import '../styles/projects.css';
import kindergartenImage from '../images/machine-code.png';

const projectDetails = [
    {
        title: "Machine Codes - React Mini Projects",
        description: "A curated collection of React mini-projects demonstrating core frontend concepts such as state management, hooks, conditional rendering, form validation, API integration, and dynamic UI components.",
        tech: "React, JavaScript, CSS",
        image: kindergartenImage,
        liveLink: "https://machine-codes.netlify.app/"
    },
];

const Projects = () => {
    return (
        <div id="projects" className="portfolio-projects-container">
            <h2>Featured Projects</h2>
            <div className="projects-list">
                {projectDetails.map((project, index) => (

                    <div
                        key={index}
                        className={`project-row ${index % 2 !== 0 ? 'reverse-row' : ''}`}
                    >
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-info-box"
                        >
                            <h3>{project.title}</h3>
                            <p className="project-description-text">{project.description}</p>
                            <p className="project-tech-stack-label">Tech Used: {project.tech}</p>
                            <span className="live-link-tag">View Live Project →</span>
                        </a>


                        <div className="project-image-box">
                            <img
                                src={project.image}
                                alt={`Screenshot of ${project.title}`}
                                className="project-screenshot"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;