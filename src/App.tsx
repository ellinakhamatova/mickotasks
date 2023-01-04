import React from 'react';
import './App.css';
import {Button} from "./site/Button/Button";


function App() {
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    const Button1F = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2F = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }


    return (
        <div>
            <Button name={'NewChannel-1'} callBack={() => Button1F('im Ellina', 24)}/>
            <Button name={'NewChannel-2'} callBack={() => Button2F('im Timur', 25)}/>
        </div>
    )
}

export default App;