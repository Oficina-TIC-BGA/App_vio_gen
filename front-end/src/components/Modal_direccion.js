import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Modal_editar_usuarios = (props) => {
    const mostratdata = (info) => {
        console.log(info);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
    };

    const [direc, setDirec] = React.useState({
        firstName: "",
        lastName: "",
    })

    const completo = direc["firstName"]+' '+direc["lastName"];

    function handleChange(evt) {
        const value = evt.target.value;
        setDirec({
            ...direc,
            [evt.target.name]: value
        });
    }

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
                    <Col xl={{ span: 6, offset: 3 }}>
                        <Row >
                            <Col xl={{ span: 4 }}>
                                <form>
                                    <label>
                                        First name
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={direc.firstName}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label>
                                        Last name
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={direc.lastName}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </form>
                                <input type="text" onChange={(event) => props.onChange(event.target.value)} />
                            </Col>
                        </Row>
                    </Col>
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
