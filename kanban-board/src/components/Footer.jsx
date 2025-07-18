// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         <div style={styles.links}>
//           <a href="https://github.com/rangari-rani" target="_blank" rel="noopener noreferrer" style={styles.icon}>
//             <FontAwesomeIcon icon={faGithub} size="2x" />
//           </a>
//           <a href="https://www.linkedin.com/in/rani-rangari/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
//             <FontAwesomeIcon icon={faLinkedin} size="2x" />
//           </a>
//           <a href="https://www.hackerrank.com/profile/ranirangari" target="_blank" rel="noopener noreferrer" style={styles.icon}>
//             <FontAwesomeIcon icon={faHackerrank} size="2x" />
//           </a>
//           <a href="mailto:ranirangari2@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
//             <FontAwesomeIcon icon={faEnvelope} size="2x" />
//           </a>
//           {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={styles.icon}>
//             <FontAwesomeIcon icon={faTwitter} size="2x" />
//           </a> */}
//         </div>
//         <p style={styles.text}>© Rani Rangari.      All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: "#222",
//     color: "#fff",
//     padding: "20px 10px",
//     textAlign: "center",
//     width: "100%",
//   },
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   links: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     marginBottom: "10px",
//   },
//   icon: {
//     color: "#fff",
//     textDecoration: "none",
//     transition: "color 0.3s",
//   },
//   text: {
//     fontSize: "14px",
//   },
// };

// export default Footer;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/ranirangari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faHackerrank} size="2x" />
          </a>
          <a
            href="mailto:ranirangari2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          {/* Uncomment this if Twitter is needed */}
          {/* <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a> */}
        </div>
        <p className="text-sm text-center">
          © Rani Rangari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
