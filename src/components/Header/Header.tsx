import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import '../../App.css'

export default function Header() {
    return (
        <header className={`${s.header}`}>
            <div className={`container ${s.flow_right}`}>
                <div className={`${s.buttons_container}`}>
                    <NavLink to="/signin" className={s.link}>Sign In</NavLink>
                    <NavLink to="/signup" className={s.link}>Sign up</NavLink>
                </div>
            </div>
        </header>
    );
}