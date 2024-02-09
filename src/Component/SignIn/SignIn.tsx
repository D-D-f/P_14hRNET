import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import {authentication} from "../../Requete/authentication.ts";
import "../../assets/scss/PagesStyle/SignIn.scss";
import {useState} from "react";

const SignIn = () => {
    const [remember, setRemember] = useState(false)
    const {register, handleSubmit} = useForm();

    const onSubmit = async (d) => {
        const connectionUser = await authentication(d);

        if(connectionUser.status === 200 && remember && !localStorage.getItem('remember')) {
            localStorage.setItem("remember", JSON.stringify(d));
        }
    }

    const activeRemember = (e) => {
        setRemember(e.target.checked)
    }

    return (
        <section className="SignIn">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="InputSignIn">
                    <label htmlFor="email">Username</label>
                    <input type="text" id="email" {...register('email')} />
                </div>
                <div className="InputSignIn">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="Password" {...register('password')} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" name="remember-me" onChange={activeRemember}/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <button type="submit">Sign in</button>
            </form>
        </section>
    )
}

export default SignIn;