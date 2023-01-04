import React from "react";


type ButtonType = {
    name: string
}
export const Button = (props: ButtonType) => {
    // const onClickButton = (name: string) => {
    //     console.log(name) }
return (
    <div>
        <button>{props.name}</button>
    </div>
)
}