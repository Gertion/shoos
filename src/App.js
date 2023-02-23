import Header from "./components/Header/Header";
import Check from "./components/Check/Check";
import Footer from "./components/Footer/Footer";
import './style..scss'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";


function App() {
    const [dark, setDark] = useState(false)
    return (
        <div className="App" style={{color: dark ? 'white' : 'black', }}>
            <Header dark={dark}/>
            <main>
                <Check dark={dark} setDark={setDark}/>
            </main>
            <Footer dark={dark}/>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default App;
