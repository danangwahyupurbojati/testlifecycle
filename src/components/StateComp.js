import React, { useState } from 'react'
import PropComp from './PropComp';

const StateComp = () => {
    const [hide, setHide] = useState(false);

    const dataForProps = 'data for props';

    const handleClick = () => {
        setHide(!hide)
    }

    return (
        <div>
            <h3>parents</h3>
            <button onClick={handleClick}>
                Hide
            </button>

            {
                hide && (
                    <PropComp data={dataForProps} />
                )
            }
        </div>
    )
}

export default StateComp