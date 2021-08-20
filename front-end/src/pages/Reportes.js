import React, { Fragment } from "react";
import Frm_Nuevo_Reporte from '../components/Frm_Nuevo_Reporte';
import Tabla_reportes_recientes from '../components/Tabla_reportes_recientes';
import Frm_actualizar_riesgo from '../components/Frm_actualizar_riesgo';
import Frm_Vict from '../components/Frm_Vict';
import { Container, Row, Col, Card } from "react-bootstrap";

export const Reportes = () => {
	return (
		<div className="reportes">
			<h1>Reportes</h1>
		</div>
	);
};

export const RegistrarVictima = () => {
	return (
		<Fragment>
			<Frm_Vict />
		</Fragment>
	);
};

export const CrearReporte = () => {
	return (
		<Fragment>
			<Frm_Nuevo_Reporte />
		</Fragment>
	);
};

export const Recientes = () => {
	return (
		<Fragment>
			<Container fluid="true">
			<Row>
					<br></br>
				</Row>
				<Row>
					<Col xl={{ span: 10, offset: 2 }}>
					<Card style={{ marginTop: "1rem", marginRight: "1rem", marginLeft: "1rem" }}> 
					<Tabla_reportes_recientes />
					</Card>
					</Col>
				</Row>
				
			</Container>
		</Fragment>
	);
};

export const Actualizar_estado = () => {
	return (
		<Fragment>
			<Frm_actualizar_riesgo />
		</Fragment>
	);
};

export const Historicos = () => {
	return (
		<Fragment>
			<Frm_Vict />
		</Fragment>
	);
};
