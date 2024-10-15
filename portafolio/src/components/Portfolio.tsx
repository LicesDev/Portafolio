import React from "react";
import { Card } from "pixel-retroui";
import "./Portafolio.css";

const Portfolio = () => {
	return (
		<section className="content cards">
			<div className="carta">
				<Card
					className="p-4"
					bg="black"
					textColor="white"
					borderColor="#4f0c73"
					shadowColor="#5c16b1"
				>
					<h2>Beacon App</h2>
					<br />
					<div className="card_beacon">
						<p>
							Una aplicación movil desarrollada en Ionic 7 y Angular 17 para la
							toma de asistencia en una empresa de seguridad. Incorpora
							funcionalidades avanzadas como geolocalización, detección de
							Bluetooth y alertas en tiempo real para garantizar una gestión
							eficiente y precisa del personal.
							<img
								className="logo_beacon"
								src={`${process.env.PUBLIC_URL}/logoBeacon.png`}
								alt="logo"
							/>
						</p>
						<video
							width="320"
							height="180"
							controls
							src={`${process.env.PUBLIC_URL}/BeaconApp1.mp4`}
						></video>
						<video
							width="320"
							height="180"
							controls
							src={`${process.env.PUBLIC_URL}/BeaconApp2.mp4`}
						></video>
					</div>
				</Card>
			</div>
			<div className="carta">
				<Card
					className="p-4"
					bg="black"
					textColor="white"
					borderColor="#4f0c73"
					shadowColor="#5c16b1"
				>
					<h2>Dimensionador</h2>
					<br />
					<div className="card_beacon">
						<p>
            Una aplicación web diseñada para la cubicación de paquetes a través de una cámara especial. También integra la lectura de códigos QR, 
            lo que optimiza la captura de información de cada paquete. La información recopilada se guarda en una base de datos, ayudando a 
            dimensionar el transporte necesario de manera más eficiente.
							<img
								className="logo_beacon"
								src={`${process.env.PUBLIC_URL}/logoDimensionador.png`}
								alt="logo"
							/>
						</p>
						<video
							width="320"
							height="180"
							controls
							src={`${process.env.PUBLIC_URL}/BeaconApp1.mp4`}
						></video>
						<video
							width="320"
							height="180"
							controls
							src={`${process.env.PUBLIC_URL}/BeaconApp2.mp4`}
						></video>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default Portfolio;
