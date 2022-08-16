import react, { useContext } from 'react'
import {  useEffect } from 'react';
import axios from 'axios';
import Home from '../../pages/Home/Home';
import { Sliders } from '../../Contexts/Context';

const Slider = () => {

    const [sliders, setSliders] = useContext(Sliders);

    useEffect(() => {
        const getSliders = async () => {
            const data = await axios.get('http://localhost:3002/home').then(res => {
                setSliders(res.data.sliders)
                console.log(data);
            })
        }
        getSliders();
    }, [])

  return (
        <div>
            {
                sliders.map(prod => (
                    <Home prod={prod} key={prod.id}/>
                ))
            }
        </div>
  )
}

export default Slider