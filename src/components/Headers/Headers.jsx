import { Link } from "react-router-dom";
import "./Headers.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__image" src={Logo} alt="brainflix-logo" />
        </Link>
        <form className="header__form">
          <div className="header__wrapper">
            <input className="header__input" placeholder="Search" type="text" />
            <img className="header__avatar" src={Avatar} alt="mohan-avatar" />
          </div>
          <Link to="/upload" className="header__btn">
            Upload
          </Link>
          <img className="header__avatar-2" src={Avatar} alt="mohan-avatar" />
        </form>
      </div>
    </header>
  );
}

export default Header;