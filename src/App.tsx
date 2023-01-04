import React from 'react';
import './App.css';
import {Button} from "./site/Button/Button";


function App() {

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    return (
        <div>
            <Button name={'NewChannel-1'}/>
            <Button name={'NewChannel-2'}/>
        </div>
    )
}

export default App;