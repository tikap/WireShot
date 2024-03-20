import './App.css';
import BouncyCircle from './animated/BouncyCircle';

function App() {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <h1 id="tabelLabel">WireShot</h1>
                <p>Animated communication protocols</p>
            </div>

            <div className="grid-item">
                <BouncyCircle duration={3000} />
            </div>
        </div>
    );
}

export default App;