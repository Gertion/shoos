import Header from "./components/Header/Header";
import Check from "./components/Check/Check";
import Footer from "./components/Footer/Footer";
import './style..scss'
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import Toastify from "./components/Plagins/Toastify/Toastify";


function App() {
    const [dark, setDark] = useState(false)
    return (
        <div className="App" style={{color: dark ? 'white' : 'black',}}>
            <Header dark={dark}/>
            <main>
                <Check dark={dark} setDark={setDark}/>
            </main>
            <Footer dark={dark}/>
            <Toastify/>
        </div>
    );
}

export default App;
