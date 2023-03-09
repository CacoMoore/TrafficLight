import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(Lottie.loadAnimation);

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	return (
		<div className="text-center">
			<h1 className="text-center my-5">Traffic Light</h1>
			<div className="TrafficLight bg-dark rounded">
				<div className="light bg-danger" 
				onClick={() => setColor("bg-danger")}
  				style={{boxShadow: color === "bg-danger" ? "2px 2px 10px 10px #F3544A" : "none",}}></div>
				<div className="light bg-warning"
				onClick={() => setColor("bg-warning")}
  				style={{boxShadow: color === "bg-warning" ? "2px 2px 10px 10px #F5E638" : "none",}}></div>
				<div className="light bg-success"onClick={() => setColor("bg-success")}
  				style={{boxShadow: color === "bg-success" ? "2px 2px 10px 10px #2CBF2E" : "none",}}></div>
				

			</div>
		
			<lord-icon
    			src="https://cdn.lordicon.com/ippkhukl.json"
    			trigger="loop"
    			colors="primary:#121331,secondary:#08a88a"
    			state="loop"
    			style={{width:"100px", height:"100px"}}>
			</lord-icon>
				
			<h3>Click in the light to turn on.</h3>
			<div className="mt-5">Made by{" "}
				<a  href="https://github.com/CacoMoore">Carolina Moore</a></div>
		</div>

	);
};

export default Home;
