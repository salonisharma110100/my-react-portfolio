import '../styles/projects.css';
import kindergartenImage from '../images/machine-coding.png';
import insuranceImage from '../images/machine-coding.png';

const projectDetails = [
    {
        title: "Kindergarten Management System",
        description: "A comprehensive full-stack application for educational clients, handling student profiles, fee collection, and staff management. Developed with a focus on intuitive CRUD operations and a responsive dashboard.",
        tech: "React, Redux, Node.js, PostgreSQL",
        image: kindergartenImage,
        liveLink: "https://your-kindergarten-demo.netlify.app"
    },
    {
        title: "Insurance Policy Management Portal",
        description: "High-security portal developed for a major insurance client at TCS. Features include complex dynamic forms, advanced policy search, and strict adherence to WCAG accessibility guidelines.",
        tech: "React, TypeScript, Jest/RTL, Styled Components",
        image: insuranceImage,
        liveLink: "https://your-insurance-demo.netlify.app"
    }
];

const Projects = () => {
    return (
        <div id="projects" className="portfolio-projects-container">
            <h2>Featured Projects</h2>
            <div className="projects-list">
                {projectDetails.map((project, index) => (
                    // Alternate the row order for a zig-zag effect (image left/right)
                    <div
                        key={index}
                        className={`project-row ${index % 2 !== 0 ? 'reverse-row' : ''}`}
                    >
                        {/* LEFT/TEXT SIDE (Always Clickable) */}
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

                        {/* RIGHT/IMAGE SIDE (Image Display) */}
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