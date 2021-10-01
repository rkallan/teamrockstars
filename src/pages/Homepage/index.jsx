import { ReactComponent as Logo } from "resources/svg/logo.svg";
import styles from "./resources/styles/homepage.module.scss";

const Homepage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.unit}>
                <Logo className={styles.logo} title="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={styles.link}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </section>
        </div>
    );
};

export default Homepage;
