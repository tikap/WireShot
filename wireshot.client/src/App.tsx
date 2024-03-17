import './App.css';
import BouncyCircle from './animated/BouncyCircle';

function App() {
    return (
        <>
            <div>
                <h1 id="tabelLabel">WireShot</h1>
                <p>Animated communication protocols</p>
            </div>

            <BouncyCircle duration={5000} />
        </>
    );
}

export default App;