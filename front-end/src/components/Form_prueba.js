import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Card, Button, ButtonGroup, DropdownButton, Accordion } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import moment from 'moment'


function fecha_actual() {
    var myCurrentDate = new Date();
    var fecha_registro =
        myCurrentDate.getFullYear() +
        "-" +
        (myCurrentDate.getMonth() + 1) +
        "-" +
        myCurrentDate.getDate();
    return fecha_registro;
}

function hora_actual() {
    var myCurrentDate = new Date();
    var hora_registro =
        myCurrentDate.getHours() +
        ":" +
        myCurrentDate.getMinutes() +
        ":" +
        myCurrentDate.getSeconds();
    return hora_registro;
}

const defaultValues = {
    Fecha: fecha_actual(),
    Hora: hora_actual(),
    Fecha_hora: fecha_actual() + ' ' + hora_actual(),
    Area: "1",
    Usuario: "Luis",
};

const API = process.env.REACT_APP_API;

const Form_prueba = () => {
    const [dianacimiento, setDianacimiento] = useState(new Date(2000, 0, 1))
    const changeDate = (e) => {
        setDianacimiento(e)
    }
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data, e) => {
        fetch(`${API}/reportes/prueba/`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (response) {
            console.log(response)
            return response.json();
        });

        console.log(JSON.stringify(data));
    };

    return (
        <Fragment>
            <Container fluid="true">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xl={{ span: 6, offset: 3 }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>DESCRIPCIÓN DEL RIESGO</Card.Title>
                                    <Card.Text>
                                        <Row >
                                            <Col xl={{ span: 4 }}>
                                                <label><input type="checkbox" value="1"{...register("Descrip_riesg")} />Antecedentes de salud mental</label><br />
                                                <label><input type="checkbox" value="2"{...register("Descrip_riesg")} />Antecedentes judiciales</label><br />
                                                <label><input type="checkbox" value="3"{...register("Descrip_riesg")} />Consumo SPA</label><br />
                                                <label><input type="checkbox" value="4"{...register("Descrip_riesg")} />Grupo armado legal o ilegal</label><br />
                                                <label><input type="checkbox" value="5"{...register("Descrip_riesg")} />Porte de armas</label>
                                            </Col>
                                            <Col xl={{ span: 4 }}>
                                                <label><input type="checkbox" value="Antecedentes_de_salud_mental"{...register("Descrip_riesg")} />Antecedentes de salud mental</label><br />
                                                <label><input type="checkbox" value="Antecedentes_judiciales"{...register("Descrip_riesg")} />Antecedentes judiciales</label><br />
                                                <label><input type="checkbox" value="Consumo_SPA"{...register("Descrip_riesg")} />Consumo SPA</label><br />
                                                <label><input type="checkbox" value="Grupo_armado_legal_o_ilegal"{...register("Descrip_riesg")} />Grupo armado legal o ilegal</label><br />
                                                <label><input type="checkbox" value="Porte_de_armas"{...register("Descrip_riesg")} />Porte de armas</label>
                                            </Col>
                                            <Col xl={{ span: 4 }}>
                                                <label><input type="checkbox" value="Antecedentes_de_salud_mental"{...register("Descrip_riesg")} />Antecedentes de salud mental</label><br />
                                                <label><input type="checkbox" value="Antecedentes_judiciales"{...register("Descrip_riesg")} />Antecedentes judiciales</label><br />
                                                <label><input type="checkbox" value="Consumo_SPA"{...register("Descrip_riesg")} />Consumo SPA</label><br />
                                                <label><input type="checkbox" value="Grupo_armado_legal_o_ilegal"{...register("Descrip_riesg")} />Grupo armado legal o ilegal</label><br />
                                                <label><input type="checkbox" value="Porte_de_armas"{...register("Descrip_riesg")} />Porte de armas</label>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{ span: 3 }}>
                            <input type="number" {...register("numero", { min: { value: 0, message: "numero negativo" }, max: { value: 15, message: "numero mayor a 15" }, valueAsNumber: true  }
                            )} placeholder="Ingrese numero " className="form-control my-m2" />
                            {errors.numero && (<span className="text-danger text-small d-block mb-2"> {errors.numero.message} </span>)}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xl={{ span: 8, offset: 3 }}>
                            <div className="d-grid gap-2">
                            <input type="email" placeholder="correo" {...register("correo", {})} />
                            <input type="tel" placeholder="telefono" {...register("telefono", 
                            { maxLength: {value:10, message: "No es un numero menor a 10 caracteres"}},
                            {pattern: {value:/[0-9]{7,}/, message: "No es un numero de mas de 7 caracteres" }})} />
                            {errors.telefono && (<span className="text-danger text-small d-block mb-2"> {errors.telefono.message} </span>)}
                            </div>
                        </Col>
                    </Row>
                    
                    <br />
                    <Row>
                        <Col xl={{ span: 8, offset: 3 }}>
                            <div className="d-grid gap-2">
                                <input className="btn btn-lg btn-primary" type="submit" />
                            </div>
                        </Col>
                    </Row>
                    

                </form>
            </Container>
        </Fragment>
    );
};

export default Form_prueba;
