import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import styles from './Links.module.css';

export default function Links() {
    // TODO: Update these URLs with actual links when available
    const links = [
        {
            name: "GitHub",
            url: "https://github.com/IsmailofficialGithub/",
            icon: Github,
        },
        {
            name: "Portfolio",
            url: "https://www.ismailabbasi.qzz.io/",
            icon: Globe,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ismailabbasi/",
            icon: Linkedin,
        },
    ];

    return (
        <section id="links" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Connect With Us
                </h2>
                <div className={styles.linksContainer}>
                    {links.map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <IconComponent className={styles.icon} />
                                <span className={styles.text}>{link.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
