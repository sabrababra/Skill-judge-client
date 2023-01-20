import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

// import useToken from '../hooks/useToken';
import PasswordResetModal from './PasswordResetModal';

const Login = () => {

    type FormValues = {
        email: string;
        password: string;
    };

    const { loginUser, createUserWithGoogle }: any = useContext(AuthContext);
    const [error, setError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm<FormValues>();

    // const [userEmail, setUserEmail] = useState('');
    // const [token] = useToken(userEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch(`https://my-village-server-hachinrayhan.vercel.app/users`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserEmail(user.email);
    //             console.log(data);
    //         })
    // };

    const handleLogin: SubmitHandler<FormValues> = data => {
        setError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setUserEmail(data.email);
                toast.success('Login Successful');
                // e.target.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                setError(err.message)
            })
    };

    const handleGoogleLogin = () => {
        setError('');
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                // saveUser(user.displayName, user.email);
                toast.success('Login Successful');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
                setError(err.message);
            })
    }

    return (
        <div className='w-full max-w-sm mx-auto shadow-xl p-8 rounded-md'>
            <h2 className='text-xl'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)} className='form-control'>

                {/* Email */}
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-sm" />
                {errors.email?.type === 'required' && <p role="alert" className='text-red-700'>Email is required</p>}

                {/* Password */}
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, minLength: { value: 6, message: 'Password must be at least 6 characters' } })} className="input input-bordered w-full max-w-sm" />
                <p className='text-red-700'>{errors?.password?.message}</p>
                {errors.password?.type === 'required' && <p role="alert" className='text-red-700'>Password is required</p>}

                {/* Password Reset Button */}
                <label className="label">
                    <label className="label-text-alt btn btn-xs btn-link no-underline" htmlFor="resetPassword">Forgot Password?</label>
                </label>

                {/* Submit */}
                {error && <p className='text-red-700'>{error}</p>}
                <input type="submit" value="Login" className='btn btn-accent w-full max-w-sm' />
                <p>New to Skill-Judge? <Link to={'/signup'} className="text-primary">Create a new account</Link></p>
                <div className="divider">OR</div>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full max-w-sm">Continue With Google</button>
            <PasswordResetModal></PasswordResetModal>
        </div>
    );
};

export default Login;