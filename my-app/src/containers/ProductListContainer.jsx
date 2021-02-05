import { Col, Container, Row } from "reactstrap";
import ProductCardComponent from "../components/ProductCardComponent";
import React, {useEffect, useState}  from "react";
const axios = require('axios').default;

const ProductListContainer = () => {
    const[userList, setUserList] = useState([]);
   useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
    .then(function (response) {
        console.log(response.data.data)
        setUserList(response.data.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
   },[]);

    const productList = userList.map((ele) => {
        const {id, first_name, last_name, email} = ele;
        return <ProductCardComponent 
        key = {id}
        id = {id}
        first_name = {first_name}
        last_name = {last_name}
        email = {email}
        // category = {category}
        // description = {description}
        // price = {price}
        // stocked = {stocked}
        />
    });
    return (
        <div>
            <Container>
                <Row>
                    <Col>{productList}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductListContainer;