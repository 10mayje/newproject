import React, { useEffect } from 'react';
//import theamonestyle from '../js/theamonestyle';
import '../styling/Theamone.css';
import Particles from 'react-particles-js';


const Theamone = () => {
    /*useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = { theamonestyle };
        this.div.appendChild(script);
    });*/
    return (
        <div id='theamonebody'>
            <div id="particle-canvas">
                <Particles params={{
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 1
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            }
                        }
                    }
                }}


                />




            </div>


        </div>

    );
}

export default Theamone;