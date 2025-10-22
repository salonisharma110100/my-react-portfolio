import '../styles/experience.css';

const projects = [
    {
        title: "Migration Project (PS/Wicket to React)",
        client: "Tata Consultancy Services (TCS)",
        duration: "Jan 2024 - Present",
        description: "Led the migration of an enterprise application from PS/Wicket to React using Storybook. Converted legacy components, managed application state with Redux Toolkit, and boosted performance by 30%. Evaluated architecture, optimized dependencies, and improved maintainability.",
        techStack: ["React", "Redux Toolkit", "Storybook", "JavaScript", "Material UI"]
    },
    {
        title: "Kindergarten Management System",
        client: "Private Client / Educational Sector",
        duration: "Aug 2022 - Dec 2023",
        description: "Developed a preschool-focused web application from scratch using functional React components and Context API. Integrated Storybook for component-driven development, implemented Material UI for a responsive design, and delivered a consistent UI experience based on Figma designs. Followed Agile methodology and achieved 40% faster delivery.",
        techStack: ["React", "Context API", "Storybook", "Material UI", "JavaScript", "Figma"]
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