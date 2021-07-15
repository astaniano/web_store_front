import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" render={() => <h1>Welcome to our store</h1>}/>
                <Route exact path="/signin" render={() => <Signin/>}/>
                <Route exact path="/signup" render={() => <Signup/>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
