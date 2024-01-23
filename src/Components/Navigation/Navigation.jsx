import "./Navigation.css";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? "active-link" : "";

const Navigation = () => {

  return (
    <>
      <div>
        <nav className="navigation-menu">
          <div className="navigation-menu__container">
            <div>
              <NavLink to="/" className={setActive}>
                Домой
              </NavLink>
            </div>
            <div>
              <NavLink to="/redirect" className={setActive}>
                Редирект
              </NavLink>
            </div>
            <div>
              <NavLink to="/open" className={setActive}>
                Открыть страницу
              </NavLink>
            </div>
            <div>
              <NavLink to="/close" className={setActive}>
                Закрыть страницу
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
