import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react"

import RegisterForm from "@/components/RegisterForm"

export default function Register() {


    return(
        <div>
            <RegisterForm></RegisterForm>
        </div>
    )
}