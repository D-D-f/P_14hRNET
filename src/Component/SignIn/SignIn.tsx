import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/PagesStyle/SignIn.scss";

const SignIn = () => {
    return (
        <section className="SignIn">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form>
                <div className="InputSignIn">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"/>
                </div>
                <div className="InputSignIn">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="Password" name="Password"/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" name="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <button type="submit">Sign in</button>
            </form>
        </section>
    )
}

export default SignIn;