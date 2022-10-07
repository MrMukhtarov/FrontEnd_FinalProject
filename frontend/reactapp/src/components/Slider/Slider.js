import react, { useContext } from 'react'
import {  useEffect } from 'react';
import axios from 'axios';
import Home from '../../pages/Home/Home';
import { Sliders } from '../../Contexts/Context';

const Slider = () => {

    // useEffect (() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response=>response.json())
    //         .then(data=> {
    //             SetProducts(data)
    //              setTimeout(() => {
    //         setLoading(false)
    //       }, 2000);
    //         })
            
    // })

    const [sliders, setSliders] = useContext(Sliders);

    // useEffect(() => {
    //     const getSliders = async () => {
    //         const data = await axios.get('http://localhost:3002/home').then(res => {
    //             setSliders(res.data.sliders)
    //             console.log(data);
    //         })
    //     }
    //     getSliders();
    // }, [])
        fetch('http://localhost:3002/home')
        .then(res => {
            console.log(res);
        })

  return (
        <div>
            
        </div>
  )
}

export default Slider