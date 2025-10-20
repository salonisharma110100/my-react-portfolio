import React, { useEffect, useRef, useState } from 'react';
import '../styles/skills.css';

const skillsList = [
    { name: "React", icon: "⚛️", expertise: "Building scalable, state-of-the-art Single Page Applications (SPAs)." },
    { name: "HTML5", icon: "🌐", expertise: "Creating semantic and accessible structure for modern web applications." },
    { name: "CSS3", icon: "🎨", expertise: "Expert in responsive design, Flexbox, Grid, and utility-first styling." },
];

const Skills = () => {
    const gridRef = useRef(null);
    const timerRef = useRef(null);
    const observerRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        if (observerRef.current) observerRef.current.disconnect();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!timerRef.current) {
                            timerRef.current = setTimeout(() => {
                                setInView(true);
                                timerRef.current = null;
                            }, 1000);
                        }
                    } else {

                        if (timerRef.current) {
                            clearTimeout(timerRef.current);
                            timerRef.current = null;
                        }
                        if (inView) {
                            setInView(false);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        observerRef.current = observer;

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [inView]);

    return (
        <div id="skills" className="skills-container">
            <h2>My Core Skills</h2>
            <div ref={gridRef} className={`skills-grid${inView ? ' in-view' : ''}`}>
                {skillsList.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-card"
                        style={{ '--delay': `${index * 140}ms` }}
                    >
                        <span className="skill-icon">{skill.icon}</span>
                        <p className="skill-name">{skill.name}</p>
                        <p className="skill-expertise">{skill.expertise}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
