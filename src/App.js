import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StateComp from './components/StateComp';
import ClassLifeCycle from './components/ClassLifeCycle';
import FuncLifeCycle from './FuncLifeCycle';

function App() {
    const [hide, setHide] = useState(false);

    const handleHide = () => {
        setHide(!hide);
    }
    return (
        <div className="App">

            <button onClick={handleHide}>
                mount life cycle xxxasas
            </button>

            {
                hide && (
                    <div>
                        <ClassLifeCycle />
                        <FuncLifeCycle />
                    </div>
                )
            }
            <iframe src="https://mitra10-ecatalog.testingnow.me/" title="iframe-ecatalog" width="100%" height="600px"/>
        </div>
    );
}

export default App;
