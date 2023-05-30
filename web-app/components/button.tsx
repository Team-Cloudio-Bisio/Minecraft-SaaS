import React from "react";

type ButtonProps = {
    text: string,
    onClick: () => void,
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    return(
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}