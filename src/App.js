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
                mount life cycle
            </button>

            {
                hide && (
                    <div>
                        <ClassLifeCycle />
                        <FuncLifeCycle />
                    </div>
                )
            }

        </div>
    );
}

export default App;
