import '../../App.css'
import {useState} from "react";
import {authAPI} from "../../api/api";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    async function handleSubmit(e: any) {
        e.preventDefault();
        await authAPI.signUp(email, password, firstName, lastName);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    // function showState(e: any) {
    //     console.log(email);
    //     console.log(password);
    //     console.log(firstName);
    //     console.log(lastName);
    // }

    function onEmailChange(e: any) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e: any) {
        setPassword(e.target.value);
    }

    function onFirstNameChange(e: any) {
        setFirstName(e.target.value);
    }

    function onLastNameChange(e: any) {
        setLastName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={email} placeholder="enter your email" onChange={onEmailChange} />
                <input value={password} placeholder="enter your password" onChange={onPasswordChange} />
                <input value={firstName} placeholder="enter your firstName" onChange={onFirstNameChange} />
                <input value={lastName} placeholder="enter your lastName" onChange={onLastNameChange} />
                <input type="submit" value="Submit" />
            </form>
            {/*<button onClick={showState}>show state</button>*/}
        </div>
      );
}