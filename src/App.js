import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Feeds from './components/Feeds/Feeds'
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";


function App() {
    return (

        <BrowserRouter>
            <div className='wrapper'>

                <Header/>
                <Nav/>

                <div className='app_wrapper_content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/Feeds' component={Feeds}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/Messages' component={Messages}/>

                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
