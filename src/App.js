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
             <iframe
                title="installation-service"
                // src={generatePimUrl(data?.getInstallationGuide?.installation_guide)}
                src="https://pdfobject.com/pdf/sample.pdf"
                // src={"https://pimcore.testingnow.me/pdf/1/1/1100000190_installation_guide.pdf"}
                // width="800"
                // height="600"
                style={{
                    border: '1px solid blue',
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                }}
            />
            <iframe
                title="installation-service"
                // src={generatePimUrl(data?.getInstallationGuide?.installation_guide)}
                // src={"https://pdfobject.com/pdf/sample.pdf"}
                src="https://pimcore.testingnow.me/pdf/1/1/1100000190_installation_guide.pdf"
                // width="800"
                // height="600"
                style={{
                    border: '1px solid blue',
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                }}
            />
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
            <iframe src="https://mitra10-ecatalog.testingnow.me/customer/account/login?token=ewogICJ1c2VybmFtZSI6InBpbS50ZXN0QG1pdHJhMTAuY29tIiwKICAicGFzc3dvcmQiOiJjYXR1cjEwIiwKICAic3RvcmVJZCI6MTAwMzgKfQ==" title="iframe-ecatalog" width="100%" height="700px"/>
            <div>
                <h3>coba test</h3>
                <iframe
                    src="-"
                    title="YouTube video player"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default App;
