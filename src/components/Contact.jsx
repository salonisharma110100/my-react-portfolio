import '../styles/contact.css';

const contactInfo = [
    { name: "LinkedIn", icon: "🔗", link: "https://linkedin.com/in/saloni-sharma-3a99891b2" },
    { name: "GitHub", icon: "🐈", link: "https://github.com/salonisharma110100" },
    {
        name: "Email",
        icon: "📧",
        link: "mailto:salonisharma110100@gmail.com",
        displayText: "salonisharma110100@gmail.com"
    }
];

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <h2>Get In Touch</h2>
            <p className="contact-intro">
                I'm currently seeking new opportunities and open to discussing React development roles.
                Feel free to connect with me!
            </p>

            <div className="contact-links">
                {contactInfo.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target={item.name === "Email" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        <span className="button-icon">{item.icon}</span>
                        {item.name === "Email" ? item.displayText : item.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
