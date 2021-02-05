import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ProductListContainer from '../containers/ProductListContainer'
const axios = require('axios').default;



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        axios.post('https://reqres.in/api/login', {
            email: { email },
            password: { password }
        })
            .then(function (response) {
                console.log(response);
                
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
       
        // <form onSubmit={handleSubmit}>
        //     <div className="container">
        //         <label>Email : </label>
        //         <input type="text" placeholder="Enter Email" value={email}
        //         onChange={(event) => { setEmail(event.target.value) }}></input>
        //         <label>Password : </label>
        //         <input type="password" placeholder="Enter Password" value={password}
        //         onChange={(event) => { setPassword(event.target.value) }}></input>
        //         <button type="submit">Login</button>
        //     </div>   
        // </form>
                 <Form>
                <FormGroup onSubmit={handleSubmit}>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </FormGroup><Button type="submit">Submit</Button>
            </Form> 
    )
}

export default Login;
