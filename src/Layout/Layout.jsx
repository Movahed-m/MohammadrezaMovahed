import { FaGithub } from "react-icons/fa";

import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <a href="../../index.html">Cities</a>
        </h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by <span className={styles.name}>Mohammad Movahed</span> in
          botostart bootcamp
        </p>
        <p className={styles.githubContainer}>
          more in
          <a href="https://github.com/Movahed-m">
            <FaGithub />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
