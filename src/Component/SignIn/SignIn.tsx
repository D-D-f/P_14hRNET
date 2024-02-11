import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { authentication } from "../../Requete/authentication.ts";
import {DataType} from "../Interface/DataType.ts";
import "../../assets/scss/PagesStyle/SignIn.scss";


const SignIn = () => {
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false)
    const { register, handleSubmit, setValue, getValues } = useForm();


    useEffect(() => {
        if (localStorage.getItem('remember')) {
            const user = JSON.parse(localStorage.getItem('remember'));
            setValue('email', user.email);
            setValue('password', user.password);
            setRemember(true);
        }
    }, [setValue]);

    const onSubmit = async (data: DataType) => {
        const connectionUser = await authentication(data);

        if(connectionUser === undefined) {
            setError(true);
        } else {
            setError(false);
        }

        if (connectionUser.status === 200 && remember && !localStorage.getItem('remember')) {
            localStorage.setItem("remember", JSON.stringify(data));
        }
    }

    const activeRemember = (e) => {
        setRemember(e.target.checked);

        if (!e.target.checked) {
            localStorage.removeItem('remember');
        }
    }

    return (
        <section className="SignIn">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="InputSignIn">
                    <label htmlFor="email">Username</label>
                    <input type="text" id="email" {...register('email', { required: true })} defaultValue={remember ? getValues('email') : ''} />
                </div>
                <div className="InputSignIn">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="Password" {...register('password', { required: true })} defaultValue={remember ? getValues('password') : ''} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" name="remember-me" checked={localStorage.getItem('remember') ? true : remember} onChange={activeRemember} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <p>{error ? "Votre mot de passe ou l'identifiant est incorrect" : ""}</p>

                <button type="submit">Sign in</button>
            </form>
        </section>
    )
}

export default SignIn;
