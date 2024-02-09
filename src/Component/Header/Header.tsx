import logo from "../../assets/img/argentBankLogo.png";
import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo argentbank"/>

            <div className="header_signin">
                <FontAwesomeIcon icon={faCircleUser} />
                <span>Sign In</span>
            </div>
        </header>
    )
}

export default Header;