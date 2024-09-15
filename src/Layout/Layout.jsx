import { FaGithub } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <a href="../../index.html">Cities</a>
        </h1>
      </header>
      {children}
      <footer>
        <p>
          Developed by <span>Mohammad Movahed</span> in botostart bootcamp
        </p>
        <p>
          more in{" "}
          <a href="https://github.com/Movahed-m">
            <FaGithub />
          </a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
