import Header from "./components/Header/Header";
import Check from "./components/Check/Check";
import Footer from "./components/Footer/Footer";
import './style..scss'



function App() {
    return (
        <div className="App">
            <main>
                <Header/>
                <Check/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
