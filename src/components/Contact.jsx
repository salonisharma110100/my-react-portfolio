import '../styles/contact.css';


const contactInfo = [
    { name: "LinkedIn", icon: "🔗", link: "https://linkedin.com/in/saloni-sharma-3a99891b2" },
    { name: "GitHub", icon: "🐈", link: "https://github.com/salonisharma110100" }
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

                <span className="contact-email-text">
                    📧 salonisharma110100@gmail.com
                </span>

                {contactInfo.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        <span className="button-icon">{item.icon}</span>
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;