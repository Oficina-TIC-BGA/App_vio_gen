import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";


const Modal_editar_usuarios = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button
				variant="primary"
				size="lg"
				active
				className="boton_editar"
				onClick={handleShow}
			>
				Editar
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edicion de usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row>
							<Col>
								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>Entidad</Form.Label>
									<Form.Control as="select">
										<option>Seleccione</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Label>Nombre</Form.Label>
								<Form.Control type="text" placeholder="Normal text" />
							</Col>
							<Col>
								<Form.Label>Apellido</Form.Label>
								<Form.Control type="text" placeholder="Normal text" />
							</Col>
						</Row>
						<br></br>
						<Row>
							<Col>
								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>Tipo de documento</Form.Label>
									<Form.Control as="select">
										<option>Seleccione</option>
										<option>Cedula de ciudadania</option>
										<option>NIT</option>
										<option>Cedula extranjeria</option>
										<option>Pasaporte</option>
										<option>Tarjeta de identidad</option>
										<option>Registro civil</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Label>Numero de documento</Form.Label>
								<Form.Control type="text" />
							</Col>
						</Row>
						<br></br>
						<Row>
							<Col>
								<Form.Label>Correo electronico</Form.Label>
								<Form.Control type="email" placeholder="correo anterior" />
							</Col>
						</Row>
                        <br></br>
						<Row>
							<Col>
                            <Form.Label>Rol usuario</Form.Label>
								<Form.Control type="text" />
							</Col>
							<Col>
								<Form.Label>Numero de documento</Form.Label>
								<Form.Control type="text" />
							</Col>
						</Row>
						<br></br>
						<br></br>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Enviar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Modal_editar_usuarios;
