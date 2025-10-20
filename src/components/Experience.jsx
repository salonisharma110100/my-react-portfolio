import '../styles/experience.css';

const projects = [
    {
        title: "Kindergarten Management System",
        client: "Private Client / Educational Sector",
        duration: "Jan 2024 - Present",
        description: "Developed a full-stack application to streamline student enrollment, teacher assignments, and fee collection processes. Implemented a responsive React front-end with Redux for predictable state management.",
        techStack: ["React", "Redux", "Node.js (API)", "PostgreSQL", "CSS Modules"]
    },
    {
        title: "Insurance Policy Management Portal",
        client: "Tata Consultancy Services (TCS)",
        duration: "Aug 2022 - Dec 2023",
        description: "Built and maintained a high-security portal for insurance agents, featuring complex form validation and policy search functionalities. Focused on optimizing rendering performance and ensuring WCAG accessibility standards.",
        techStack: ["React", "TypeScript", "Jest", "React Testing Library", "Styled Components"]
    }
];

const WorkExperience = () => {
    return (
        <div id="experience" className="work-container">
            <h2>Work Experience & Key Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p className="project-client">{project.client}</p>
                        <p className="project-duration">{project.duration}</p>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech-stack">
                            <h4>Tech Stack:</h4>
                            <div className="tech-pills">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-pill">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;