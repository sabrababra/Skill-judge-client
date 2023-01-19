import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const Nav = () => {
    const { user, signOutUser }: any = useAuth();

    const handleLogout = () => {
        signOutUser()
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            })
    }

    const navItems = <>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={'qna'}>QnA</Link></li>
        <li><Link to={''}>Categories</Link></li>
        <li><Link to={''}>Quiz</Link></li>
        <li><Link to={''}>About Us</Link></li>
        {
            user?.uid ? <>
                <li><Link onClick={handleLogout} to="">Logout</Link></li>
            </>
                :
                <li><Link to={'/login'}>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={''} className="btn btn-ghost normal-case text-xl">Skill-Judge</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Nav;