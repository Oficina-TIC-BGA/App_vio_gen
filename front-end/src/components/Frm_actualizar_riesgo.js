import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Card, Button, ButtonGroup, DropdownButton, Accordion } from 'react-bootstrap';


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

const Frm_Reportes_recientes = () => {
    const [infocao, setInfocao] = React.useState({
        HorRegRep: "",
        ArUsuReg: "",
        Usuario: "",
        NomReport: "",
        RelaVic: "",
        MotVic: "",
        NomVic: "",
        TpDocIdent: "",
        DocIdent: "",
        Nacvict: "",
        TlfVic1: "",
        TlfVic2: "",
        CorreoVic: "",
        TlfApoyVic: "",
        SexoVic: "",
        GenVic: "",
        GrupVic: "",
        FechNacVic: "",
        EdadVic: "",
        EstCiVic: "",
        NHijosVic: "",
        NvlEscVic: "",
        OcupVic: "",
        DircVic: ""
    });

    const defaultValues = {
        Fecha: fecha_actual(),
        Hora: hora_actual(),
        Fecha_hora: fecha_actual() + ' ' + hora_actual(),
        Area: "1",
        Usuario: "Luis",
        HorRegRep: infocao.HorRegRep
    };


    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
    };

    const API = process.env.REACT_APP_API;

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');
    const [datacasos, setDatacasos] = React.useState([]);

    const [idbuscarinfo, setIdbuscarinfo] = React.useState(0);


    React.useEffect(() => {
        setLoading(true);
        fetch(`${API}/datosvictima/`)
            .then((response) => response.json())
            .then((datacasos) => {
                setLoading(false);
                setDatacasos(datacasos);
            })
            .catch((e) => {
                setLoading(false);
                setError('fetch failed');
            });
        if (idbuscarinfo.length > 1) {
            fetch(
                `${API}/datosvictima/?id=${idbuscarinfo}`
            )
                .then((res) => res.json())
                .then((datacasopuntual) => {
                    setInfocao(datacasopuntual);
                    console.log(datacasopuntual);
                });
        }
    }, [idbuscarinfo]);

    if (loading) {
        return <p>loading..</p>;
    }

    if (error !== '') {
        return <p>ERROR: {error}</p>;
    }

    const handleOnChange = (e) => {
        setIdbuscarinfo(e.target.value);
        console.log(e.target.value)
    }

    const handleChange = (event) => {
        setDatacasos(event.target.value);
    }


    return (
        <Fragment>
            <Container fluid="true">
                <Col xl={{ span: 10, offset: 2 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <br />
                        <Card style={{ marginTop: "1rem", marginRight: "1rem", marginLeft: "1rem" }}>
                            <br />
                            <Row>
                                <Col xl={{ span: 3, offset: 2 }}>
                                    <h5>SELECCIONE EL CASO HA ATENDER</h5>
                                </Col>
                                <Col xl={{ span: 5 }}>
                                    <select type="number" onblur={(e) => handleOnChange(e)} {...register("datos_victima_id", {
                                        valueAsNumber: true,
                                    })
                                    } className="form-select">
                                        <option>Seleccione un caso para atender</option>
                                        {datacasos.map((element) => (
                                            <option key="{element.IdRepVioG}" name="IdRepVioG" value={element.IdRepVioG}>{element.IdRepVioG + ' ' + element.NomVic + ' ' + element.TpDocIdent + ' ' + element.DocIdent}</option>
                                        ))}
                                    </select>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xl={{ span: 12 }}>
                                    <Accordion>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="0">
                                                    DATOS DE RECEPTOR (A)
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <Row>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Fecha</label>
                                                            <input type="text" className="HorRegRep" value={infocao.HorRegRep} onChange={handleChange} className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Hora</label>
                                                            <input {...register("HorRegRep")} className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Área</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Nombre del Funcionario/a</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="1">
                                                    REPORTE DE CASO Y HECHOS
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <Row>
                                                        <Col xl={{ span: 4 }}>
                                                            <label>Nombre de quien reporta caso</label>
                                                            <textarea className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 4 }}>
                                                            <label>Relación con la víctima</label>
                                                            <textarea className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 4 }}>
                                                            <label>Motivo de la llamada </label>
                                                            <textarea className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="2">
                                                    DATOS DE LA VICTIMA DE VIOLENCIA
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <Row>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Nombre completo</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Documento identidad</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Teléfono</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Teléfono de otra persona de apoyo</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                    <br />
                                                    <Row>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Sexo</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Genero</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Grupo Poblacional</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Edad</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                    <br />
                                                    <Row>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Estado civil</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Numero de hijas/os</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>MUNICIPIO</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Dirección</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                    <br />
                                                    <Row>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>A. Urbana / A. Rural / Barrio</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Comuna (opcional)</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Nivel Escolar</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 3 }}>
                                                            <label>Ocupación</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="3">
                                                    RIESGO
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    <Row>
                                                        <Col xl={{ span: 4 }}>
                                                            <label>NIVEL DE RIESGO</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 8 }}>
                                                            <label>DESCRIPCIÓN DEL RIESGO</label>
                                                            <textarea className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="4">
                                                    ATENCION
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body>
                                                    <Row>
                                                        <Col xl={{ span: 4 }}>
                                                            <label>DESCRIPCIÓN DE LA ATENCIÓN</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 8 }}>
                                                            <label>ACTIVACIÓN DE RUTA</label>
                                                            <textarea className="form-control input-lg my-m2" />
                                                        </Col>

                                                    </Row>
                                                    <Row>
                                                        <Col xl={{ span: 4 }}>
                                                            <label>ACCIÓN</label>
                                                            <input className="form-control input-lg my-m2" />
                                                        </Col>
                                                        <Col xl={{ span: 8 }}>
                                                            <label>ACTIVACIÓN CÓDIGO ALERTA</label>
                                                            <textarea className="form-control input-lg my-m2" />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>

                            </Row>
                        </Card>
                        <br />
                        <Card style={{ marginBottom: "3rem", marginRight: "1rem", marginLeft: "1rem" }}>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col xl={{ span: 12 }}>
                                            <h5 style={{ textAlign: "center" }}>CARACTERÍSTICAS DE LA VIOLENCIA</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={{ span: 3, offset: 3}}>
                                            <label>Fecha</label>
                                            <input {...register("FechCarViol", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                placeholder="Ingrese título" className="form-control my-m2" defaultValue={defaultValues.Fecha} />
                                            {errors.FechCarViol && (<span className="text-danger text-small d-block mb-2"> {errors.FechCarViol.message} </span>)}
                                        </Col>
                                        <Col xl={{ span: 3 }}>
                                            <label>Hora</label>
                                            <input {...register("HorCarViol", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                placeholder="Ingrese título" className="form-control my-m2" defaultValue={defaultValues.Hora} />
                                            {errors.HorCarViol && (<span className="text-danger text-small d-block mb-2"> {errors.HorCarViol.message} </span>)}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={{ span: 4 }}>
                                            <label>Tipo de violencia</label>
                                            <select {...register("tipo_violencia")} className="form-select" >
                                                <option value="No_aporta">No aporta</option>
                                                <option value="Fisica">Física</option>
                                                <option value="Psicologica">Psicológica</option>
                                                <option value="Sexual">Sexual</option>
                                                <option value="Economica_Patrimonial">Económica/Patrimonial</option>
                                                <option value="Simbolica">Simbólica</option>
                                                <option value="Obstetrica">Obstétrica</option>
                                                <option value="Violencia_multiple"> Institucional opción múltiple (Violencia múltiple)</option>
                                                <option value="No_aplica">No aplica</option></select>
                                            {errors.tipo_violencia && (<span className="text-danger text-small d-block mb-2"> {errors.tipo_violencia.message} </span>)}
                                        </Col>
                                        <Col xl={{ span: 4 }}>
                                            <label>Ámbito de la violencia</label>
                                            <select {...register("ambito_violencia")} className="form-select" >
                                                <option value="No_aporta">No aporta</option>
                                                <option value="Intrafamiliar">Intrafamiliar</option>
                                                <option value="Publico">Público</option>
                                                <option value="No_aplica">No aplica</option></select>
                                            {errors.ambito_violencia && (<span className="text-danger text-small d-block mb-2"> {errors.ambito_violencia.message} </span>)}
                                        </Col>
                                        <Col xl={{ span: 4 }}>
                                            <label>Relación con quien inflinge la violencia</label>
                                            <select {...register("relacion_atacante")} className="form-select" >
                                                <option value="No_aporta">No aporta</option>
                                                <option value="Pareja">Pareja</option>
                                                <option value="Expareja">Expareja</option>
                                                <option value="Otros_familiares">Otros familiares</option>
                                                <option value="Desconocidos">Desconocidos</option>
                                                <option value="Vecinos">Vecinos</option>
                                                <option value="Amigos">Amigos</option>
                                                <option value="No_aplica">No aplica</option></select>
                                            {errors.relacion_atacante && (<span className="text-danger text-small d-block mb-2"> {errors.relacion_atacante.message} </span>)}
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xl={{ span: 12 }}>
                                            <h5 style={{ textAlign: "center" }}>RIESGO</h5>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col xl={{ span: 12 }}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>DESCRIPCIÓN DEL RIESGO</Card.Title>
                                                    <Card.Text>
                                                        <Row >
                                                            <Col xl={{ span: 3 }}>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="1"{...register("Descrip_riesg")} />Antecedentes de salud mental</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="2"{...register("Descrip_riesg")} />Antecedentes judiciales</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="3"{...register("Descrip_riesg")} />Consumo SPA</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="4"{...register("Descrip_riesg")} />Grupo armado legal o ilegal</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="5"{...register("Descrip_riesg")} />Porte de armas</label>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="6"{...register("Descrip_riesg")} />No se identifican factores de riesgo</label><br />
                                                            </Col>
                                                            <Col xl={{ span: 4 }}>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="7"{...register("Descrip_riesg")} />Actos de violencia sexual en su contra</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="8"{...register("Descrip_riesg")} />Agresiones físicas con armas en su contra</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="9"{...register("Descrip_riesg")} />Agresiones verbales y psicológicas constantes</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="10"{...register("Descrip_riesg")} />Amenazas con quitar la custodia o tenencia de los hijos e hijas</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="11"{...register("Descrip_riesg")} />Convivencia con el agresor</label>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="12"{...register("Descrip_riesg")} />Daños a objetos o pertenencias de la mujer como celular, elementos de trabajo, documentos u otros</label>
                                                            </Col>
                                                            <Col xl={{ span: 5 }}>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="13"{...register("Descrip_riesg")} />La mujer considera que el agresor puede matarla</label><br />
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="14"{...register("Descrip_riesg")} />Ha recibido amenazas o agresiones por parte de familiares, amigos o conocidos del agresor</label>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="15"{...register("Descrip_riesg")} />Impedimento para realizar actividades cotidianas</label>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="16"{...register("Descrip_riesg")} />Impedimentos para que la mujer se comunique o interactúe con su familia o redes sociales</label>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="17"{...register("Descrip_riesg")} />La mujer considera que el agresor puede continuar ejerciendo violencias en su contra</label>
                                                                <label><input style={{ marginRight: "5px" }} type="checkbox" value="18"{...register("Descrip_riesg")} />Vigilancia, persecuciones o seguimientos</label><br />
                                                            </Col>
                                                        </Row>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row >
                                        <Col xl={{ span: 8 }}>
                                            <label>Descricion complementaria del riesgo</label>
                                            <textarea {...register("descomriesg", { required: { value: false, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                placeholder="Ingrese una descripción complementaria a los parametros seleccionos" className="form-control input-lg my-m2" />
                                            {errors.descomriesg && (<span className="text-danger text-small d-block mb-2"> {errors.descomriesg.message} </span>)}
                                        </Col>
                                        <Col xl={{ span: 4 }}>
                                            <label>Nivel de riesgo</label>
                                            <select {...register("nivel_riesgo")} className="form-select" >
                                                <option value="No_aporta">No aporta</option>
                                                <option value="ALTO">ALTO</option>
                                                <option value="MEDIO">MEDIO</option>
                                                <option value="BAJO">BAJO</option></select>
                                            {errors.nivel_riesgo && (<span className="text-danger text-small d-block mb-2"> {errors.nivel_riesgo.message} </span>)}
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xl={{ span: 6, offset: 3 }}>
                                            <div className="d-grid gap-2">
                                                <input className="btn btn-lg btn-primary" type="submit" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </form>
                </Col>
            </Container>
        </Fragment >
    );
}
export default Frm_Reportes_recientes;