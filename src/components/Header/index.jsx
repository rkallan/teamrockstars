import { NavLink } from "react-router-dom";
import styles from "./resources/styles/header.module.scss";

const Header = () => {
    const onClickEventHandler = (event) => {
        const { currentTarget } = event || {};
        currentTarget?.blur();
        if (currentTarget?.classList.contains("is-active")) event.preventDefault();
    };

    return (
        <header className={styles.container}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="is-active" onClick={onClickEventHandler} exact to="/">
                            Homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" onClick={onClickEventHandler} exact to="/example">
                            Example
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
