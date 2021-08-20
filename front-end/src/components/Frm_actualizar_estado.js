import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
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

const defaultValues = {
    Fecha: fecha_actual(),
    Hora: hora_actual(),
    Fecha_hora: fecha_actual() + ' ' + hora_actual(),
    Area: "1",
    Usuario: "Luis",
};

const Frm_Reportes_recientes = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data, e) => {
        console.log(JSON.stringify(data));
    };

    return (
        <Fragment>
            <Container fluid="true">
                <br />
                <Row>
                    <Col xl={{ span: 3, offset: 3 }}>
                        <h5 >Ingrese el ID del caso que desea editar</h5>
                    </Col>
                    <Col xl={{ span: 2 }}>
                        
                    </Col>
                </Row>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xl={{ span: 8, offset: 3 }}>
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
                                                    <input {...register("Fecha", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Fecha" className="form-control my-m2" defaultValue={defaultValues.Fecha} />
                                                    {errors.Fecha && (<span className="text-danger text-small d-block mb-2"> {errors.Fecha.message} </span>)}
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Hora</label>
                                                    <input {...register("Hora", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Hora" className="form-control my-m2" defaultValue={defaultValues.Hora} />
                                                    {errors.Hora && (<span className="text-danger text-small d-block mb-2"> {errors.Hora.message} </span>)}
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Área</label>
                                                    <input {...register("area", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 1, message: "minimo uno" } })}
                                                        placeholder="Área" className="form-control my-m2" defaultValue={defaultValues.Area} />
                                                    {errors.area && (<span className="text-danger text-small d-block mb-2"> {errors.area.message} </span>)}
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Nombre del Funcionario/a</label>
                                                    <input {...register("usuario", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Nombre del Funcionario/a" className="form-control my-m2" defaultValue={defaultValues.Usuario} />
                                                    {errors.Usuario && (<span className="text-danger text-small d-block mb-2"> {errors.Usuario.message} </span>)}
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
                                                    <textarea {...register("Nombre_reportante", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Nombre de quien reporta caso" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 4 }}>
                                                    <label>Relación con la víctima</label>
                                                    <textarea {...register("relacion_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Relación con la víctima" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 4 }}>
                                                    <label>Motivo de la llamada </label>
                                                    <textarea {...register("motivo_llamada", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Motivo de la llamada" className="form-control my-m2" />
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
                                                    <input {...register("nombre_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Nombre completo" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Documento identidad</label>
                                                    <input {...register("documento_identidad", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Documento identidad" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Teléfono</label>
                                                    <input {...register("tlf_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 1, message: "minimo uno" } })}
                                                        placeholder="Teléfono" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Teléfono de otra persona de apoyo</label>
                                                    <input {...register("tlf_apoyo_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Teléfono de otra persona de apoyo" className="form-control my-m2" />
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Sexo</label>
                                                    <input {...register("nombre_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Sexo" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Genero</label>
                                                    <input {...register("documento_identidad", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Genero" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Grupo Poblacional</label>
                                                    <input {...register("tlf_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 1, message: "minimo uno" } })}
                                                        placeholder="Grupo Poblacional" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Edad</label>
                                                    <input {...register("tlf_apoyo_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Edad" className="form-control my-m2" />
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Estado civil</label>
                                                    <input {...register("nombre_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Estado civil" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Numero de hijas/os</label>
                                                    <input {...register("documento_identidad", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Numero de hijas/os" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>MUNICIPIO</label>
                                                    <input {...register("tlf_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 1, message: "minimo uno" } })}
                                                        placeholder="MUNICIPIO" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Dirección</label>
                                                    <input {...register("tlf_apoyo_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Dirección" className="form-control my-m2" />
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xl={{ span: 3 }}>
                                                    <label>A. Urbana / A. Rural / Barrio</label>
                                                    <input {...register("nombre_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="A. Urbana / A. Rural / Barrio" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Comuna (opcional)</label>
                                                    <input {...register("documento_identidad", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Comuna (opcional)" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Nivel Escolar</label>
                                                    <input {...register("tlf_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 1, message: "minimo uno" } })}
                                                        placeholder="Nivel Escolar" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 3 }}>
                                                    <label>Ocupación</label>
                                                    <input {...register("tlf_apoyo_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="Ocupación" className="form-control my-m2" />
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
                                                    <input {...register("Nombre_reportante", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="NIVEL DE RIESGO" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 8 }}>
                                                    <label>DESCRIPCIÓN DEL RIESGO</label>
                                                    <textarea {...register("relacion_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="DESCRIPCIÓN DEL RIESGO" className="form-control my-m2" />
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
                                                    <input {...register("Nombre_reportante", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="DESCRIPCIÓN DE LA ATENCIÓN" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 8 }}>
                                                    <label>ACTIVACIÓN DE RUTA</label>
                                                    <textarea {...register("relacion_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="ACTIVACIÓN DE RUTA" className="form-control my-m2" />
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col xl={{ span: 4 }}>
                                                    <label>ACCIÓN</label>
                                                    <input {...register("Nombre_reportante", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="ACCIÓN" className="form-control my-m2" />
                                                </Col>
                                                <Col xl={{ span: 8 }}>
                                                    <label>ACTIVACIÓN CÓDIGO ALERTA</label>
                                                    <textarea {...register("relacion_victima", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                        placeholder="ACTIVACIÓN CÓDIGO ALERTA" className="form-control my-m2" />
                                                </Col>

                                            </Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <Col xl={{ span: 4, offset: 5 }}>
                            <h5 style={{ textAlign: "center" }}>ESTADO DE GESTION DE CASO</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{ span: 2, offset: 3 }}>
                            <label>ESTADO</label>
                            <select {...register("estado_caso")} className="form-select" >
                                <option value="No_aporta">No aporta</option>
                                <option value="Recbido">1 Recbido</option>
                                <option value="Asignado">2 Asignado</option>
                                <option value="Cerrado">3 Cerrado</option>
                                <option value="Remitido">4 Remitido</option></select>
                            {errors.estado_caso && (<span className="text-danger text-small d-block mb-2"> {errors.estado_caso.message} </span>)}
                        </Col>
                        <Col xl={{ span: 4 }}>
                            <label>Lugar al que se Remite</label>
                            <textarea {...register("lugar_remite", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                placeholder="Ingrese lugar al que se Remite" className="form-control input-lg my-m2" />
                            {errors.lugar_remite && (<span className="text-danger text-small d-block mb-2"> {errors.lugar_remite.message} </span>)}
                        </Col>
                        <Col xl={{ span: 2 }}>
                            <label>Fecha cuando se remite</label>
                            <input {...register("fecha_actulizacion_estado", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                placeholder="Ingrese fecha año-mes-dia" className="form-control my-m2" defaultValue={defaultValues.Fecha_hora} />
                            {errors.fecha_actulizacion_estado && (<span className="text-danger text-small d-block mb-2"> {errors.fecha_actulizacion_estado.message} </span>)}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xl={{ span: 4, offset: 5 }}>
                            <h5 style={{ textAlign: "center" }}>SEGUIMIENTO DE CASOS</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{ span: 2, offset: 3 }}>
                            <label>Tipo seguimiento</label>
                            <select {...register("tipo_seguimiento")} className="form-select" >
                                <option value="No_aporta">No aporta</option>
                                <option value="Phicologico">Phicologico</option>
                                <option value="Social">Social</option>
                                <option value="Juridico">Jurídico</option></select>
                            {errors.tipo_seguimiento && (<span className="text-danger text-small d-block mb-2"> {errors.tipo_seguimiento.message} </span>)}
                        </Col>

                        <Col xl={{ span: 3 }}>
                            <label>Seguimiento de casos</label>
                            <textarea {...register("seguimiento_casos", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                placeholder="Ingrese lugar al que se Remite" className="form-control input-lg my-m2" />
                            {errors.seguimiento_casos && (<span className="text-danger text-small d-block mb-2"> {errors.seguimiento_casos.message} </span>)}
                        </Col>
                        <Col xl={{ span: 2 }}>
                            <label>Verificación de garantías</label>
                            <select {...register("verificacion_garantias")} className="form-select" >
                                <option value="No_aporta">No aporta</option>
                                <option value="atencion_Psicosocial">atención Psicosocial</option>
                                <option value="conciliacion">Conciliación</option>
                                <option value="conciliacion">Casa refugio</option>
                                <option value="medidas_atencion">Medidas de atención</option>
                                <option value="medidas_atencion">Medida de amparo policivo</option>
                                <option value="Medidas_proteccion">Medidas de protección</option>
                                <option value="recepcion_denuncia">Recepción de la denuncia</option>
                                <option value="restablecimiento_derechos">Restablecimiento de derechos</option>
                                <option value="representacion_judicial">Representación judicial</option></select>

                            {errors.verificacion_garantias && (<span className="text-danger text-small d-block mb-2"> {errors.verificacion_garantias.message} </span>)}
                        </Col>
                        <Col xl={{ span: 1 }}>
                            <label>Estado</label>
                            <select {...register("estado_seguimiento")} className="form-select" >
                                <option value="No_aporta">No aporta</option>
                                <option value="en_seguimiento">En seguimiento</option>
                                <option value="Cerrado">Cerrado</option></select>
                            {errors.estado_seguimiento && (<span className="text-danger text-small d-block mb-2"> {errors.estado_seguimiento.message} </span>)}
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

export default Frm_Reportes_recientes;