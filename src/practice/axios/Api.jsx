import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Api = () => {

    const [getapi, setGetapi] = useState([]);


    // const Apicall = () => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => {
    //             setGetapi(res.data)
    //         })
    // }


    const getapicaLL = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log('res.data', res.data)
        setGetapi(res.data);
    }


  

    useEffect(() => {
        getapicaLL();
    }, []);



    return (
        <>
            {
                getapi.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))
            }
        </>
    )
}

export default Api;;
