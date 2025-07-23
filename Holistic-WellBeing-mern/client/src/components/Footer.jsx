import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider"; // Import the theme context hook

const Footer = () => {
  const { theme } = useTheme(); // Get the current theme from the context
  const isDarkMode = theme === "dark";

  const styles = {
    footer: {
      backgroundColor: isDarkMode ? "#1a1a1a" : "#f0f0f0", // Dark or light background
      color: isDarkMode ? "#f0f0f0" : "#1a1a1a", // Light or dark text
      padding: "20px 10px",
      textAlign: "center",
      width: "100%",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "10px",
    },
    icon: {
      color: isDarkMode ? "#f0f0f0" : "#1a1a1a", // Adjust icon color
      textDecoration: "none",
      transition: "color 0.3s",
    },
    text: {
      fontSize: "14px",
      color: isDarkMode ? "#cccccc" : "#333333", // Adjust text color
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
      <p style={styles.text}>Built By <strong>Rani Rangari</strong> - 2024</p>
        <div style={styles.links}>
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FontAwesomeIcon icon={faGithub} size="1.5x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
          </a>
  
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
