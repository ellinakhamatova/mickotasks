import React from "react";

type ButtonType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonType) => {
    // const onClickButton = (name: string) => {
    //     console.log(name) }
    const onClickHandler = () => {
        props.callBack ()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}