import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
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
    Area: "1",
    Usuario: "Luis",
};

const Frm_Vict = () => {

    const [dianacimiento, setDianacimiento] = useState(new Date(2000, 0, 1))
    const changeDate = (e) => {
        setDianacimiento(e)
    }

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const API = process.env.REACT_APP_API;

    const onSubmit = (data, e) => {
        fetch(`${API}/datosvictima/`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (response) {
            console.log(response)
            return response.json();
        });

        console.log(JSON.stringify(data));
    };
    const [direc, setDirec] = React.useState({
        DP01: "",
        DP02: "",
        DP03: "",
        DD01: "",
        DD02: "",
        DD03: "",
        DD04: "",
        DD05: "",
        DD06: "",
        DD07: "",
        DD08: ""
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setDirec({
            ...direc,
            [evt.target.name]: value
        });
    }

    const completo = direc["DD01"] + " " + direc["DD02"] + " " + direc["DD03"] + " " + direc["DD04"] + " " + direc["DD05"] + " " + direc["DD06"] + " " + direc["DD07"] + " " + direc["DD08"] + " " + direc["DP01"] + " - " + direc["DP02"] + " - " + direc["DP03"];

    return (
        <Fragment>
            <Container fluid={true}>
                <Row >
                    <Col xl={{ span: 10, offset: 2 }}>
                        <Card style={{ marginTop: "1rem", marginBottom: "3rem", marginRight: "1rem", marginLeft: "1rem" }}>
                            <Card.Header style={{ fontSize: "25px", textAlign: "center" }}>Formulario para reportar un nuevo caso</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <form style={{ marginLeft: "1rem", marginRight: "1rem" }} onSubmit={handleSubmit(onSubmit)}>
                                        <Col xl={{ span: 12 }}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Text>
                                                        <Col xl={{ span: 12 }}>
                                                            <h5 style={{ textAlign: "center" }}>DATOS DE RECEPTOR (A)</h5>
                                                        </Col>
                                                        <Row>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Fecha</label>
                                                                <input {...register("FechRegRep", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese título" className="form-control my-m2" defaultValue={defaultValues.Fecha} />
                                                                {errors.FechRegRep && (<span className="text-danger text-small d-block mb-2"> {errors.FechRegRep.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Hora</label>
                                                                <input {...register("HorRegRep", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese título" className="form-control my-m2" defaultValue={defaultValues.Hora} />
                                                                {errors.HorRegRep && (<span className="text-danger text-small d-block mb-2"> {errors.HorRegRep.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Área</label>
                                                                <input {...register("ArUsuReg", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 1, message: "minimo uno" } })}
                                                                    placeholder="Ingrese area" className="form-control my-m2" defaultValue={defaultValues.Area} />
                                                                {errors.ArUsuReg && (<span className="text-danger text-small d-block mb-2"> {errors.ArUsuReg.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Nombre del Funcionario/a</label>
                                                                <input {...register("Usuario", { required: { value: true, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese usuario" className="form-control my-m2" defaultValue={defaultValues.Usuario} />
                                                                {errors.Usuario && (<span className="text-danger text-small d-block mb-2"> {errors.Usuario.message} </span>)}
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 6 }}>
                                                                <h5 style={{ textAlign: "center" }}>REPORTE DE CASO</h5>
                                                            </Col>
                                                            <Col xl={{ span: 6 }}>
                                                                <h5 style={{ textAlign: "center" }}>HECHOS</h5>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Nombre de quien reporta caso</label>
                                                                <textarea {...register("NomReport", { required: { value: false, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese nombre de quien reporta caso" className="form-control my-m2" />
                                                                {errors.NomReport && (<span className="text-danger text-small d-block mb-2"> {errors.NomReport.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Relación con la víctima</label>
                                                                <textarea {...register("RelaVic", { required: { value: false, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese relación con la víctima" className="form-control my-m2" />
                                                                {errors.RelaVic && (<span className="text-danger text-small d-block mb-2"> {errors.RelaVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 6 }}>
                                                                <label>Motivo de la llamada </label>
                                                                <textarea {...register("MotVic", { required: { value: false, message: "Campo obligatorio" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese motivo de la llamada" className="form-control my-m2" />
                                                                {errors.MotVic && (<span className="text-danger text-small d-block mb-2"> {errors.MotVic.message} </span>)}
                                                            </Col>
                                                        </Row>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <br />
                                        <Col xl={{ span: 12 }}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Text>
                                                        <Row>
                                                            <Col xl={{ span: 12 }}>
                                                                <h5 style={{ textAlign: "center" }}>DATOS DE LA VÍCTIMA DE VIOLENCIA </h5>
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Nombre completo</label>
                                                                <input {...register("NomVic", { required: { minLength: { value: 2, message: "minimo dos caracteres" } } })}
                                                                    placeholder="Ingrese nombre de la victima" className="form-control my-m2" />
                                                                {errors.NomVic && (<span className="text-danger text-small d-block mb-2"> {errors.NomVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Tipo de documento identidad</label>
                                                                <select {...register("TpDocIdent")} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Cedula de ciudadanía">Cédula de Ciudadanía</option>
                                                                    <option value="Numero unico de identificacion personal">Número único de identificación personal</option>
                                                                    <option value="Pasaporte">Pasaporte</option>
                                                                    <option value="Cedula de extranjeria">Cédula de extranjería</option>
                                                                    <option value="Documento de identificación extranjero">Documento de identificación extranjero</option>
                                                                    <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                                                    <option value="Salvoconducto">Salvoconducto</option>
                                                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                                                    <option value="Sin documento">Sin documento</option>
                                                                </select>
                                                                {errors.TpDocIdent && (<span className="text-danger text-small d-block mb-2"> {errors.TpDocIdent.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Documento identidad</label>
                                                                <input {...register("DocIdent", { pattern: { value: /[\d+]{5,}/, message: "Inserte un numero sin caracteres especiales" }, minLength: { value: 2, message: "minimo dos" } })}
                                                                    placeholder="Ingrese numero de identificacion" className="form-control my-m2" />
                                                                {errors.DocIdent && (<span className="text-danger text-small d-block mb-2"> {errors.DocIdent.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Nacionalidad o lugar de nacimiento</label>
                                                                <input {...register("Nacvict", { minLength: { value: 2, message: "minimo dos caracteres" } })}
                                                                    placeholder="Ingrese lugar de nacimiento" className="form-control my-m2" />
                                                                {errors.Nacvict && (<span className="text-danger text-small d-block mb-2"> {errors.Nacvict.message} </span>)}
                                                            </Col>

                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Teléfono #1 victima</label>
                                                                <input type="tel" {...register("TlfVic1",
                                                                    {
                                                                        pattern: { value: /[\d]{7,}/, message: "No es un numero de mas de 7 caracteres" },
                                                                        maxLength: { value: 10, message: "No es un numero menor a 10 caracteres" }
                                                                    })}
                                                                    placeholder="Ingrese telefono de la victima" className="form-control my-m2" />
                                                                {errors.TlfVic1 && (<span className="text-danger text-small d-block mb-2"> {errors.TlfVic1.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Teléfono #2 victima</label>
                                                                <input type="tel" {...register("TlfVic2",
                                                                    {
                                                                        pattern: { value: /[\d]{7,}/, message: "No es un numero de mas de 7 caracteres" },
                                                                        maxLength: { value: 10, message: "No es un numero menor a 10 caracteres" }
                                                                    }
                                                                )}
                                                                    placeholder="Ingrese telefono adcional de la victima" className="form-control my-m2" />
                                                                {errors.TlfVic2 && (<span className="text-danger text-small d-block mb-2"> {errors.TlfVic2.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Correo electronico victima</label>
                                                                <input type="email" placeholder="correo" {...register("CorreoVic", {})}
                                                                    placeholder="Ingrese correo electronico de la victima" className="form-control my-m2" />
                                                                {errors.CorreoVic && (<span className="text-danger text-small d-block mb-2"> {errors.CorreoVic.message} </span>)}
                                                            </Col>

                                                            <Col xl={{ span: 3 }}>
                                                                <label>Teléfono de otra persona de apoyo</label>
                                                                <input type="tel" {...register("TlfApoyVic",
                                                                    {
                                                                        pattern: { value: /[\d]{7,}/, message: "No es un numero de mas de 7 caracteres" },
                                                                        maxLength: { value: 10, message: "No es un numero menor a 10 caracteres" }
                                                                    })}
                                                                    placeholder="Ingrese telefono de apoyo" className="form-control my-m2" />
                                                                {errors.TlfApoyVic && (<span className="text-danger text-small d-block mb-2"> {errors.TlfApoyVic.message} </span>)}
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 2 }}>
                                                                <label>Sexo</label>
                                                                <select {...register("SexoVic")} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Mujer">Mujer</option>
                                                                    <option value="Hombre">Hombre</option>
                                                                    <option value="Intersexual">Intersexual</option>
                                                                </select>
                                                                {errors.SexoVic && (<span className="text-danger text-small d-block mb-2"> {errors.SexoVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Genero</label>
                                                                <select {...register("GenVic")} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Lesbiana">Lesbianas</option>
                                                                    <option value="Gay">Gay</option>
                                                                    <option value="Bisexual">mujeres y hombres Bisexuales</option>
                                                                    <option value="Transgenerista">Travestis, transformistas y transexuales</option>
                                                                </select>
                                                                {errors.GenVic && (<span className="text-danger text-small d-block mb-2"> {errors.GenVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Grupo poblacional </label>
                                                                <select {...register("GrupVic")} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Mujer cabeza de familia">Mujer cabeza de familia</option>
                                                                    <option value="Persona con discapacidad">Persona con discapacidad</option>
                                                                    <option value="Afrodescendiente">Afrodescendiente</option>
                                                                    <option value="Indigena">Indígena</option>
                                                                    <option value="Palenquero">Palenquero</option>
                                                                    <option value="Room">Room</option>
                                                                    <option value="LGBTIQ">LGBTIQ</option>
                                                                    <option value="campesino">Campesino</option>
                                                                    <option value="migrante">Migrante</option>
                                                                    <option value="Victimas del conflicto armado">Victimas del conflicto armado</option>
                                                                    <option value="Adulto mayor">Adulto/a mayor</option>
                                                                    <option value="NNA">NNA</option>
                                                                    <option value="Otros">Otros</option>
                                                                </select>
                                                                {errors.GrupVic && (<span className="text-danger text-small d-block mb-2"> {errors.GrupVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 2 }}>
                                                                <label>Fecha de Nacimiento</label>

                                                                <br />
                                                                <DatePicker
                                                                    onChange={changeDate}
                                                                    value={dianacimiento}
                                                                />
                                                                <input type="hidden" value={moment(dianacimiento).format('YYYY-MM-DD')} {...register("FechNacVic", {})} />
                                                                {errors.FechNacVic && (<span className="text-danger text-small d-block mb-2"> {errors.FechNacVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 2 }}>
                                                                <label>Edad de la victima</label>
                                                                <input type="number" {...register("EdadVic", {
                                                                    min: { value: 0, message: "numero negativo" },
                                                                    max: { value: 120, message: "numero mayor a 120" }, valueAsNumber: true
                                                                }
                                                                )} placeholder="Ingrese numero " className="form-control my-m2" defaultValue={0} />
                                                                {errors.EdadVic && (<span className="text-danger text-small d-block mb-2"> {errors.EdadVic.message} </span>)}
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Estado civil</label>
                                                                <select {...register("EstCiVic")} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Union libre">Unión libre</option>
                                                                    <option value="Casado">Casado/a</option>
                                                                    <option value="Separado">Separado/a</option>
                                                                    <option value="Soltero">Soltero/a</option>
                                                                    <option value="Viudo">Viudo/a</option>
                                                                </select>
                                                                {errors.EstCiVic && (<span className="text-danger text-small d-block mb-2"> {errors.EstCiVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Numero de hijas/os</label>
                                                                <input type="number" {...register("NHijosVic", {
                                                                    min: { value: 0, message: "numero negativo" },
                                                                    max: { value: 15, message: "numero mayor a 15" }, valueAsNumber: true
                                                                }
                                                                )} placeholder="Ingrese numero " className="form-control my-m2" defaultValue={0} />
                                                                {errors.NHijosVic && (<span className="text-danger text-small d-block mb-2"> {errors.NHijosVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Nivel Escolar</label>
                                                                <select {...register("NvlEscVic")} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Primara Completa">Primara Completa</option>
                                                                    <option value="Primaria Incompleta">Primaria Incompleta</option>
                                                                    <option value="Secundaria Completa">Secundaria Completa</option>
                                                                    <option value="Secundaria Incompleta">Secundaria Incompleta</option>
                                                                    <option value="Tecnico">Técnico</option>
                                                                    <option value="Tecnologo">Tecnólogo</option>
                                                                    <option value="Profesional">Profesional</option>
                                                                    <option value="Posgrado">Posgrado</option></select>
                                                                {errors.NvlEscVic && (<span className="text-danger text-small d-block mb-2"> {errors.NvlEscVic.message} </span>)}
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Ocupación</label>
                                                                <input {...register("OcupVic", { minLength: { value: 1, message: "minimo uno" } })}
                                                                    placeholder="Ingrese ocupacion de la victima" className="form-control my-m2" />
                                                                {errors.OcupVic && (<span className="text-danger text-small d-block mb-2"> {errors.OcupVic.message} </span>)}
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Municipio</label>
                                                                <select name="DP01" {...register("DP01")} value={direc.DP01} onChange={handleChange} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Bucaramanga">Bucaramanga</option>
                                                                    <option value="Floridablanca">Floridablanca</option>
                                                                    <option value="Piedecuesta">Piedecuesta</option>
                                                                    <option value="Giron">Girón</option>
                                                                    <option value="Otros">Otros</option>
                                                                </select>
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>Comuna (opcional)</label>
                                                                <select name="DP02" {...register("DP02")} value={direc.DP02} onChange={handleChange} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="Comuna 1 Norte">Comuna 1 Norte</option>
                                                                    <option value="Comuna 2 Nororiental">Comuna 2 Nororiental</option>
                                                                    <option value="Comuna 3 San Francisco">Comuna 3 San Francisco</option>
                                                                    <option value="Comuna 4 Occidental">Comuna 4 Occidental</option>
                                                                    <option value="Comuna 5 Garcia Rovira">Comuna 5 Garcia Rovira</option>
                                                                    <option value="Comuna 6 La Concordia">Comuna 6 La Concordia</option>
                                                                    <option value="Comuna 7 Ciudadela Rela de Minas">Comuna 7 Ciudadela Rela de Minas</option>
                                                                    <option value="Comuna 8 Suroccidente">Comuna 8 Suroccidente</option>
                                                                    <option value="Comuna 9 La Pedregosa">Comuna 9 La Pedregosa</option>
                                                                    <option value="Comuna 10 Provenza">Comuna 10 Provenza</option>
                                                                    <option value="Comuna 11 Sur">Comuna 11 Sur</option>
                                                                    <option value="Comuna 12 Cabecera del Llano">Comuna 12 Cabecera del Llano</option>
                                                                    <option value="Comuna 13 Oriental">Comuna 13 Oriental</option>
                                                                    <option value="Comuna 14 Morrorico">Comuna 14 Morrorico</option>
                                                                    <option value="Comuna 15 Centro">Comuna 15 Centro</option>
                                                                    <option value="Comuna 16 Tejar">Comuna 16 Tejar</option>
                                                                    <option value="Comuna 17 Mutis">Comuna 17 Mutis</option></select>
                                                            </Col>
                                                            <Col xl={{ span: 3 }}>
                                                                <label>A. Urbana / A. Rural / Barrio</label>
                                                                <select name="DP03" {...register("DP03")} value={direc.DP03} onChange={handleChange} className="form-select" >
                                                                    <option value="No aporta">No aporta</option>
                                                                    <option value="A. RURAL Alto de los Padres">A. RURAL Alto de los Padres</option>
                                                                    <option value="A. RURAL Asopofavi">A. RURAL Asopofavi</option>
                                                                    <option value="A. RURAL Bonanza Campestre">A. RURAL Bonanza Campestre</option>
                                                                    <option value="A. RURAL Buenavista">A. RURAL Buenavista</option>
                                                                    <option value="A. RURAL Chitota">A. RURAL Chitota</option>
                                                                    <option value="A. RURAL Granjitas Barrio Norte">A. RURAL Granjitas Barrio Norte</option>
                                                                    <option value="A. RURAL La Malana">A. RURAL La Malana</option>
                                                                    <option value="A. RURAL Los Anaya">A. RURAL Los Anaya</option>
                                                                    <option value="A. RURAL Los Cuadros">A. RURAL Los Cuadros</option>
                                                                    <option value="A. RURAL Miramanga">A. RURAL Miramanga</option>
                                                                    <option value="A. RURAL Nogal I y II">A. RURAL Nogal I y II</option>
                                                                    <option value="A. RURAL Porvenir">A. RURAL Porvenir</option>
                                                                    <option value="A. RURAL Santa Barbara">A. RURAL Santa Barbara</option>
                                                                    <option value="A. RURAL Vijagual">A. RURAL Vijagual</option>
                                                                    <option value="A. RURAL Villa Lina">A. RURAL Villa Lina</option>
                                                                    <option value="A. RURAL Villa Luz">A. RURAL Villa Luz</option>
                                                                    <option value="A. URBANO 5 de Enero">A. URBANO 5 de Enero</option>
                                                                    <option value="A. URBANO Barrio Nuevo">A. URBANO Barrio Nuevo</option>
                                                                    <option value="A. URBANO Brisas de Surata">A. URBANO Brisas de Surata</option>
                                                                    <option value="A. URBANO Camilo Torres">A. URBANO Camilo Torres</option>
                                                                    <option value="A. URBANO Caminos de Paz I">A. URBANO Caminos de Paz I</option>
                                                                    <option value="A. URBANO Caminos de Paz II">A. URBANO Caminos de Paz II</option>
                                                                    <option value="A. URBANO Carlos Pizarro">A. URBANO Carlos Pizarro</option>
                                                                    <option value="A. URBANO Cervunion">A. URBANO Cervunion</option>
                                                                    <option value="A. URBANO Cuyanita">A. URBANO Cuyanita</option>
                                                                    <option value="A. URBANO Divino Nino Ciudad Perdida">A. URBANO Divino Nino (Ciudad Perdida)</option>
                                                                    <option value="A. URBANO Divino Nino I">A. URBANO Divino Nino I</option>
                                                                    <option value="A. URBANO Divino Nino II">A. URBANO Divino Nino II</option>
                                                                    <option value="A. URBANO El Fonce">A. URBANO El Fonce</option>
                                                                    <option value="A. URBANO Gallineral">A. URBANO Gallineral</option>
                                                                    <option value="A. URBANO Jose Antonio Galan">A. URBANO Jose Antonio Galan</option>
                                                                    <option value="A. URBANO La Guacamaya">A. URBANO La Guacamaya</option>
                                                                    <option value="A. URBANO Las Delicias">A. URBANO Las Delicias</option>
                                                                    <option value="A. URBANO Laureles I">A. URBANO Laureles I</option>
                                                                    <option value="A. URBANO Luz de Esperanza">A. URBANO Luz de Esperanza</option>
                                                                    <option value="A. URBANO Luz de Salvacion I">A. URBANO Luz de Salvacion I</option>
                                                                    <option value="A. URBANO Luz de Salvacion II">A. URBANO Luz de Salvacion II</option>
                                                                    <option value="A. URBANO Manzana 10">A. URBANO Manzana 10</option>
                                                                    <option value="A. URBANO Maria Auxiliadora">A. URBANO Maria Auxiliadora</option>
                                                                    <option value="A. URBANO Milagro de Dios">A. URBANO Milagro de Dios</option>
                                                                    <option value="A. URBANO MIRADOR NORTE">A. URBANO MIRADOR NORTE</option>
                                                                    <option value="A. URBANO Moneque">A. URBANO Moneque</option>
                                                                    <option value="A. URBANO Nuevo Horizonte de la Mano de">A. URBANO Nuevo Horizonte de la Mano de*</option>
                                                                    <option value="A. URBANO Pantano Santander">A. URBANO Pantano Santander</option>
                                                                    <option value="A. URBANO Portal de los angeles ASOVIPO">A. URBANO Portal de los angeles ASOVIPO*</option>
                                                                    <option value="A. URBANO Puente Narino">A. URBANO Puente Narino</option>
                                                                    <option value="A. URBANO Rio de Oro">A. URBANO Rio de Oro</option>
                                                                    <option value="A. URBANO San Gerardo I">A. URBANO San Gerardo I</option>
                                                                    <option value="A. URBANO San Gerardo II">A. URBANO San Gerardo II</option>
                                                                    <option value="A. URBANO Villas de Girardot">A. URBANO Villas de Girardot</option>
                                                                    <option value="A. URBANO Zarabanda">A. URBANO Zarabanda</option>
                                                                    <option value="BARRIO 1 DE MAYO">BARRIO 1 DE MAYO</option>
                                                                    <option value="BARRIO 13 DE JUNIO">BARRIO 13 DE JUNIO</option>
                                                                    <option value="BARRIO 20 DE JULIO">BARRIO 20 dDE JULIO</option>
                                                                    <option value="BARRIO 23 DE JUNIO">BARRIO 23 DE JUNIO</option>
                                                                    <option value="BARRIO AFRICA">BARRIO AFRICA</option>
                                                                    <option value="BARRIO ALARCON">BARRIO ALARCON</option>
                                                                    <option value="BARRIO ALBANIA">BARRIO ALBANIA</option>
                                                                    <option value="BARRIO ALFONSO LOPEZ">BARRIO ALFONSO LOPEZ</option>
                                                                    <option value="BARRIO ALTOS DEL CACIQUE">BARRIO ALTOS DEL CACIQUE</option>
                                                                    <option value="BARRIO ALTOS DEL JARDIN">BARRIO ALTOS DEL JARDIN</option>
                                                                    <option value="BARRIO ALTOS DEL KENNEDY">BARRIO ALTOS DEL KENNEDY</option>
                                                                    <option value="BARRIO ALTOS DEL LAGO">BARRIO ALTOS DEL LAGO</option>
                                                                    <option value="BARRIO ALTOS DEL PROGRESO">BARRIO ALTOS DEL PROGRESO</option>
                                                                    <option value="BARRIO ALVAREZ LAS AMERICAS">BARRIO ALVAREZ LAS AMERICAS</option>
                                                                    <option value="BARRIO ANTIGUA COLOMBIA">BARRIO ANTIGUA COLOMBIA</option>
                                                                    <option value="BARRIO ANTONIA SANTOS CENTRO">BARRIO ANTONIA SANTOS CENTRO</option>
                                                                    <option value="BARRIO ANTONIA SANTOS SUR">BARRIO ANTONIA SANTOS SUR</option>
                                                                    <option value="BARRIO ASTURIAS">BARRIO ASTURIAS</option>
                                                                    <option value="BARRIO BALCON DEL LAGO">BARRIO BALCON DEL LAGO</option>
                                                                    <option value="BARRIO BALCONCITOS">BARRIO BALCONCITOS</option>
                                                                    <option value="BARRIO BALCONES DEL KENEDY">BARRIO BALCONES DEL KENEDY</option>
                                                                    <option value="BARRIO BALCONES DEL SUR">BARRIO BALCONES DEL SUR</option>
                                                                    <option value="BARRIO BETANIA">BARRIO BETANIA</option>
                                                                    <option value="BARRIO BOLARQUI">BARRIO BOLARQUI</option>
                                                                    <option value="BARRIO BOLIVAR">BARRIO BOLIVAR</option>
                                                                    <option value="BARRIO BOSCONIA">BARRIO BOSCONIA</option>
                                                                    <option value="BARRIO BOSQUE NORTE">BARRIO BOSQUE NORTE</option>
                                                                    <option value="BARRIO BOSQUES DEL CACIQUE">BARRIO BOSQUES DEL CACIQUE</option>
                                                                    <option value="BARRIO BRISAS DE PROVENZA">BARRIO BRISAS DE PROVENZA</option>
                                                                    <option value="BARRIO BRISAS DEL MUTIS">BARRIO BRISAS DEL MUTIS</option>
                                                                    <option value="BARRIO BRISAS DEL PALMAR">BARRIO BRISAS DEL PALMAR</option>
                                                                    <option value="BARRIO BRISAS DEL PARAISO">BARRIO BRISAS DEL PARAISO</option>
                                                                    <option value="BARRIO BUCARAMANGA">BARRIO BUCARAMANGA</option>
                                                                    <option value="BARRIO BUENAVISTA">BARRIO BUENAVISTA</option>
                                                                    <option value="BARRIO BUENOS AIRES">BARRIO BUENOS AIRES</option>
                                                                    <option value="BARRIO CABECERA DEL LLANO">BARRIO CABECERA DEL LLANO</option>
                                                                    <option value="BARRIO CAFE MADRID">BARRIO CAFE MADRID</option>
                                                                    <option value="BARRIO CAMPESTRE">BARRIO CAMPESTRE</option>
                                                                    <option value="BARRIO CAMPESTRE NORTE">BARRIO CAMPESTRE NORTE</option>
                                                                    <option value="BARRIO CAMPO HERMOSO">BARRIO CAMPO HERMOSO</option>
                                                                    <option value="BARRIO CANDADO">BARRIO CANDADO</option>
                                                                    <option value="BARRIO CANDILES">BARRIO CANDILES</option>
                                                                    <option value="BARRIO CANELOS">BARRIO CANELOS</option>
                                                                    <option value="BARRIO CENTRO">BARRIO CENTRO</option>
                                                                    <option value="BARRIO CHAPINERO">BARRIO CHAPINERO</option>
                                                                    <option value="BARRIO CHARTA">BARRIO CHARTA</option>
                                                                    <option value="BARRIO CHORRERAS DE DON JUAN">BARRIO CHORRERAS DE DON JUAN</option>
                                                                    <option value="BARRIO CIUDAD VENECIA">BARRIO CIUDAD VENECIA</option>
                                                                    <option value="BARRIO CLAVERIANO">BARRIO CLAVERIANO</option>
                                                                    <option value="BARRIO COLORADOS">BARRIO COLORADOS</option>
                                                                    <option value="BARRIO COLSEGUROS NORTE">BARRIO COLSEGUROS NORTE</option>
                                                                    <option value="BARRIO COMUNEROS">BARRIO COMUNEROS</option>
                                                                    <option value="BARRIO CONDADO DE GIBRALTAR">BARRIO CONDADO DE GIBRALTAR</option>
                                                                    <option value="BARRIO CONQUISTADORES">BARRIO CONQUISTADORES</option>
                                                                    <option value="BARRIO CONUCOS">BARRIO CONUCOS</option>
                                                                    <option value="BARRIO CORDONCILLO I">BARRIO CORDONCILLO I</option>
                                                                    <option value="BARRIO CORDONCILLO II">BARRIO CORDONCILLO II</option>
                                                                    <option value="BARRIO CRISTAL BAJO">BARRIO CRISTAL BAJO</option>
                                                                    <option value="BARRIO DANGOND">BARRIO DANGOND</option>
                                                                    <option value="BARRIO DELICIAS">BARRIO DELICIAS</option>
                                                                    <option value="BARRIO DELICIAS BAJAS">BARRIO DELICIAS BAJAS</option>
                                                                    <option value="BARRIO DIAMANTE I">BARRIO DIAMANTE I</option>
                                                                    <option value="BARRIO DIAMANTE II">BARRIO DIAMANTE II</option>
                                                                    <option value="BARRIO DON BOSCO">BARRIO DON BOSCO</option>
                                                                    <option value="BARRIO EL CINAL">BARRIO EL CINAL</option>
                                                                    <option value="BARRIO EL CRISTAL">BARRIO EL CRISTAL</option>
                                                                    <option value="BARRIO EL DIVISO">BARRIO EL DIVISO</option>
                                                                    <option value="BARRIO EL JARDIN">BARRIO EL JARDIN</option>
                                                                    <option value="BARRIO EL PABLON">BARRIO EL PABLON</option>
                                                                    <option value="BARRIO EL PLAN">BARRIO EL PLAN</option>
                                                                    <option value="BARRIO EL PORVENIR">BARRIO EL PORVENIR</option>
                                                                    <option value="BARRIO EL PRADO">BARRIO EL PRADO</option>
                                                                    <option value="BARRIO EL ROCIO">BARRIO EL ROCIO</option>
                                                                    <option value="BARRIO EL ROSAL">BARRIO EL ROSAL</option>
                                                                    <option value="BARRIO EL TEJAR">BARRIO EL TEJAR</option>
                                                                    <option value="BARRIO ESPERANZA I">BARRIO ESPERANZA I</option>
                                                                    <option value="BARRIO ESPERANZA II">BARRIO ESPERANZA II</option>
                                                                    <option value="BARRIO ESPERANZA III">BARRIO ESPERANZA III</option>
                                                                    <option value="BARRIO ESTORAQUES">BARRIO ESTORAQUES</option>
                                                                    <option value="BARRIO FONTANA">BARRIO FONTANA</option>
                                                                    <option value="BARRIO GAITAN">BARRIO GAITAN</option>
                                                                    <option value="BARRIO GALAN">BARRIO GALAN</option>
                                                                    <option value="BARRIO GARCIA ROVIRA">BARRIO GARCIA ROVIRA</option>
                                                                    <option value="BARRIO GIRARDOT">BARRIO GIRARDOT</option>
                                                                    <option value="BARRIO GOMEZ NINO">BARRIO GOMEZ NIÑO</option>
                                                                    <option value="BARRIO GRANADA">BARRIO GRANADA</option>
                                                                    <option value="BARRIO GRANJAS DE JULIO RINCON">BARRIO GRANJAS DE JULIO RINCON</option>
                                                                    <option value="BARRIO GRANJAS DE PROVENZA">BARRIO GRANJAS DE PROVENZA</option>
                                                                    <option value="BARRIO GRANJAS REGAN">BARRIO GRANJAS REGAN</option>
                                                                    <option value="BARRIO HACIENDA SAN JUAN">BARRIO HACIENDA SAN JUAN</option>
                                                                    <option value="BARRIO IGSABELAR">BARRIO IGSABELAR</option>
                                                                    <option value="BARRIO JARDINES DE COAVICONSA">BARRIO JARDINES DE COAVICONSA</option>
                                                                    <option value="BARRIO JUAN XXIII">BARRIO JUAN XXIII</option>
                                                                    <option value="BARRIO KENNEDY">BARRIO KENNEDY</option>
                                                                    <option value="BARRIO LA AURORA">BARRIO LA AURORA</option>
                                                                    <option value="BARRIO LA CEIBA">BARRIO LA CEIBA</option>
                                                                    <option value="BARRIO LA CONCORDIA">BARRIO LA CONCORDIA</option>
                                                                    <option value="BARRIO LA ESTRELLA">BARRIO LA ESTRELLA</option>
                                                                    <option value="BARRIO LA FERIA">BARRIO LA FERIA</option>
                                                                    <option value="BARRIO LA FLORESTA">BARRIO LA FLORESTA</option>
                                                                    <option value="BARRIO LA GLORIA">BARRIO LA GLORIA</option>
                                                                    <option value="BARRIO LA GRAN LADERA">BARRIO LA GRAN LADERA</option>
                                                                    <option value="BARRIO LA INDEPENDENCIA">BARRIO LA INDEPENDENCIA</option>
                                                                    <option value="BARRIO LA JOYA">BARRIO LA JOYA</option>
                                                                    <option value="BARRIO LA JUVENTUD">BARRIO LA JUVENTUD</option>
                                                                    <option value="BARRIO LA LIBERTAD">BARRIO LA LIBERTAD</option>
                                                                    <option value="BARRIO LA PEDREGOSA">BARRIO LA PEDREGOSA</option>
                                                                    <option value="BARRIO LA SALLE">BARRIO LA SALLE</option>
                                                                    <option value="BARRIO LA VICTORIA">BARRIO LA VICTORIA</option>
                                                                    <option value="BARRIO LAGOS DEL CACIQUE">BARRIO LAGOS DEL CACIQUE</option>
                                                                    <option value="BARRIO LAS CASITAS">BARRIO LAS CASITAS</option>
                                                                    <option value="BARRIO LAS HAMACAS">BARRIO LAS HAMACAS</option>
                                                                    <option value="BARRIO LIMONCITO I">BARRIO LIMONCITO I</option>
                                                                    <option value="BARRIO LIZCANO I">BARRIO LIZCANO I</option>
                                                                    <option value="BARRIO LIZCANO II">BARRIO LIZCANO II</option>
                                                                    <option value="BARRIO LOS ANGELES">BARRIO LOS ANGELES</option>
                                                                    <option value="BARRIO LOS CEDROS">BARRIO LOS CEDROS</option>
                                                                    <option value="BARRIO LOS GUAYACANES">BARRIO LOS GUAYACANES</option>
                                                                    <option value="BARRIO LOS HEROES">BARRIO LOS HEROES</option>
                                                                    <option value="BARRIO LOS PINOS">BARRIO LOS PINOS</option>
                                                                    <option value="BARRIO LOS SAUCES">BARRIO LOS SAUCES</option>
                                                                    <option value="BARRIO MALPASO">BARRIO MALPASO</option>
                                                                    <option value="BARRIO MANUELA BELTRAN">BARRIO MANUELA BELTRAN</option>
                                                                    <option value="BARRIO MANZANARES">BARRIO MANZANARES</option>
                                                                    <option value="BARRIO MARIA PAZ">BARRIO MARIA PAZ</option>
                                                                    <option value="BARRIO MEJORAS PUBLICAS">BARRIO MEJORAS PUBLICAS</option>
                                                                    <option value="BARRIO MERCEDES">BARRIO MERCEDES</option>
                                                                    <option value="BARRIO MINUTO DE DIOS">BARRIO MINUTO DE DIOS</option>
                                                                    <option value="BARRIO MIRADORES DEL KENNEDY">BARRIO MIRADORES DEL KENNEDY</option>
                                                                    <option value="BARRIO MIRAFLORES">BARRIO MIRAFLORES</option>
                                                                    <option value="BARRIO MIRAMAR">BARRIO MIRAMAR</option>
                                                                    <option value="BARRIO MODELO">BARRIO MODELO</option>
                                                                    <option value="BARRIO MONTERREDONDO">BARRIO MONTERREDONDO</option>
                                                                    <option value="BARRIO MORRORICO">BARRIO MORRORICO</option>
                                                                    <option value="BARRIO MUTIS">BARRIO MUTIS</option>
                                                                    <option value="BARRIO MUTUALIDAD">BARRIO MUTUALIDAD</option>
                                                                    <option value="BARRIO NAPOLES">BARRIO NAPOLES</option>
                                                                    <option value="BARRIO NARINO">BARRIO NARINO</option>
                                                                    <option value="BARRIO NORTE BAJO">BARRIO NORTE BAJO</option>
                                                                    <option value="BARRIO NUEVA COLOMBIA">BARRIO NUEVA COLOMBIA</option>
                                                                    <option value="BARRIO NUEVA FONTANA">BARRIO NUEVA FONTANA</option>
                                                                    <option value="BARRIO NUEVA GRANADA">BARRIO NUEVA GRANADA</option>
                                                                    <option value="BARRIO NUEVO SOTOMAYOR">BARRIO NUEVO SOTOMAYOR</option>
                                                                    <option value="BARRIO OLAS ALTAS">BARRIO OLAS ALTAS</option>
                                                                    <option value="BARRIO OLAS BAJAS">BARRIO OLAS BAJAS</option>
                                                                    <option value="BARRIO OLAS II">BARRIO OLAS II</option>
                                                                    <option value="BARRIO OMAGA I">BARRIO OMAGA I</option>
                                                                    <option value="BARRIO OMAGA II">BARRIO OMAGA II</option>
                                                                    <option value="BARRIO PABLO VI">BARRIO PABLO VI</option>
                                                                    <option value="BARRIO PAISAJES NORTE">BARRIO PAISAJES NORTE</option>
                                                                    <option value="BARRIO PAN DE AZUCAR">BARRIO PAN DE AZUCAR</option>
                                                                    <option value="BARRIO PANTANO II">BARRIO PANTANO II</option>
                                                                    <option value="BARRIO PANTANO III">BARRIO PANTANO III</option>
                                                                    <option value="BARRIO PIO XII">BARRIO PIO XII</option>
                                                                    <option value="BARRIO PORTO FINO">BARRIO PORTO FINO</option>
                                                                    <option value="BARRIO PRADOS MUTIS">BARRIO PRADOS MUTIS</option>
                                                                    <option value="BARRIO PROVENZA">BARRIO PROVENZA</option>
                                                                    <option value="BARRIO PUERTA DEL SOL">BARRIO PUERTA DEL SOL</option>
                                                                    <option value="BARRIO PUERTO RICO">BARRIO PUERTO RICO</option>
                                                                    <option value="BARRIO PUNTA PARAISO">BARRIO PUNTA PARAISO</option>
                                                                    <option value="BARRIO QUEBRADA LA IGLESIA">BARRIO QUEBRADA LA IGLESIA</option>
                                                                    <option value="BARRIO QUEBRADA LA IGLESIA I">BARRIO QUEBRADA LA IGLESIA I</option>
                                                                    <option value="BARRIO QUEBRADA LA IGLESIA II">BARRIO QUEBRADA LA IGLESIA II</option>
                                                                    <option value="BARRIO QUINTA DANIA">BARRIO QUINTA DANIA</option>
                                                                    <option value="BARRIO QUINTA ESTRELLA">BARRIO QUINTA ESTRELLA</option>
                                                                    <option value="BARRIO QUINTQ BRIGADA">BARRIO QUINTQ BRIGADA</option>
                                                                    <option value="BARRIO REGADERO NORTE">BARRIO REGADERO NORTE</option>
                                                                    <option value="BARRIO RICAURTE">BARRIO RICAURTE</option>
                                                                    <option value="BARRIO RINCON DE LA PAZ 17Ene 12Feb">BARRIO RINCON DE LA PAZ (17Ene-12Feb)</option>
                                                                    <option value="BARRIO REAL DE MINAS">REAL DE MINAS</option>
                                                                    <option value="BARRIO RIO DE ORO I">BARRIO RIO DE ORO I</option>
                                                                    <option value="BARRIO ROBLES">BARRIO ROBLES</option>
                                                                    <option value="BARRIO ROSALTA">BARRIO ROSALTA</option>
                                                                    <option value="BARRIO SAN ALONSO">BARRIO SAN ALONSO</option>
                                                                    <option value="BARRIO SAN CRISTOBAL">BARRIO SAN CRISTOBAL</option>
                                                                    <option value="BARRIO SAN EXPEDITO">BARRIO SAN EXPEDITO</option>
                                                                    <option value="BARRIO SAN FRANCISCO">BARRIO SAN FRANCISCO</option>
                                                                    <option value="BARRIO SAN GERARDO">BARRIO SAN GERARDO</option>
                                                                    <option value="BARRIO SAN LUIS">BARRIO SAN LUIS</option>
                                                                    <option value="BARRIO SAN MARTIN">BARRIO SAN MARTIN</option>
                                                                    <option value="BARRIO SAN MIGUEL">BARRIO SAN MIGUEL</option>
                                                                    <option value="BARRIO SAN PEDRO CLAVER">BARRIO SAN PEDRO CLAVER</option>
                                                                    <option value="BARRIO SAN RAFAEL">BARRIO SAN RAFAEL</option>
                                                                    <option value="BARRIO SAN VALENTIN">BARRIO SAN VALENTIN</option>
                                                                    <option value="BARRIO SANTA MARIA">BARRIO SANTA MARIA</option>
                                                                    <option value="BARRIO SANTANDER">BARRIO SANTANDER</option>
                                                                    <option value="BARRIO SOTOMAYOR">BARRIO SOTOMAYOR</option>
                                                                    <option value="BARRIO TEJAR NORTE">BARRIO TEJAR NORTE</option>
                                                                    <option value="BARRIO TEJARCITO">BARRIO TEJARCITO</option>
                                                                    <option value="BARRIO TERRAZAS">BARRIO TERRAZAS</option>
                                                                    <option value="BARRIO TOLEDO PLATA">BARRIO TOLEDO PLATA</option>
                                                                    <option value="BARRIO TRANSICION">BARRIO TRANSICION</option>
                                                                    <option value="BARRIO UNIVERSIDAD">BARRIO UNIVERSIDAD</option>
                                                                    <option value="BARRIO VEGAS DE MORRORRICO">BARRIO VEGAS DE MORRORRICO</option>
                                                                    <option value="BARRIO VENADO DE ORO">BARRIO VENADO DE ORO</option>
                                                                    <option value="BARRIO VILLA ALEGRIA I">BARRIO VILLA ALEGRIA I</option>
                                                                    <option value="BARRIO VILLA ALEGRIA II">BARRIO VILLA ALEGRIA II</option>
                                                                    <option value="BARRIO VILLA ALICIA">BARRIO VILLA ALICIA</option>
                                                                    <option value="BARRIO VILLA DEL NOGAL">BARRIO VILLA DEL NOGAL</option>
                                                                    <option value="BARRIO VILLA DIAMANTE">BARRIO VILLA DIAMANTE</option>
                                                                    <option value="BARRIO VILLA FLOR">BARRIO VILLA FLOR</option>
                                                                    <option value="BARRIO VILLA HELENA I">BARRIO VILLA HELENA I</option>
                                                                    <option value="BARRIO VILLA HELENA II">BARRIO VILLA HELENA II</option>
                                                                    <option value="BARRIO VILLA INES">BARRIO VILLA INES</option>
                                                                    <option value="BARRIO VILLA MARIA I Media">BARRIO VILLA MARIA I (Media)</option>
                                                                    <option value="BARRIO VILLA MARIA II Alta">BARRIO VILLA MARIA II (Alta)</option>
                                                                    <option value="BARRIO VILLA MARIA III Baja">BARRIO VILLA MARIA III (Baja)</option>
                                                                    <option value="BARRIO VILLA MERCEDES">BARRIO VILLA MERCEDES</option>
                                                                    <option value="BARRIO VILLA REAL DEL SUR">BARRIO VILLA REAL DEL SUR</option>
                                                                    <option value="BARRIO VILLA ROSA">BARRIO VILLA ROSA</option>
                                                                    <option value="BARRIO VILLA SARA">BARRIO VILLA SARA</option>
                                                                    <option value="BARRIO VILLAS DE SAN IGNACIO">BARRIO VILLAS DE SAN IGNACIO</option>
                                                                    <option value="BARRIO VIVEROS DE PROVENZA">BARRIO VIVEROS DE PROVENZA</option></select>
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col xl={{ span: 12 }}>
                                                                <Accordion>
                                                                    <Card>
                                                                        <Card.Header>
                                                                            <Accordion.Toggle as={Button} eventKey="0">
                                                                                Crear la direccion para georeferenciar el caso
                                                                            </Accordion.Toggle>
                                                                        </Card.Header>
                                                                        <Accordion.Collapse eventKey="0">
                                                                            <Card.Body>
                                                                                <Row>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>Calle - Carrera</label>
                                                                                        <select type="text" name="DD01" {...register("DD01")} value={direc.DD01} onChange={handleChange} className="form-select"
                                                                                            title="Selecciona el tipo de indicación inicial para la dirección que desea ingresar" >
                                                                                            <option value="">Selecciona</option>
                                                                                            <option value="C">Calle</option>
                                                                                            <option value="K">Carrera</option>
                                                                                            <option value="A">Avenida</option>
                                                                                            <option value="ANILLO">Anillo</option>
                                                                                            <option value="D">Diagonal</option>
                                                                                            <option value="CIR">Circunvalar</option>
                                                                                            <option value="T">Transversal</option>
                                                                                            <option value="BL">Bulevar</option>
                                                                                            <option value="CS">Casa</option>
                                                                                            <option value="MZ">Manzana</option>
                                                                                        </select>
                                                                                    </Col>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>N° - Nombre</label>
                                                                                        <input type="text" name="DD02" {...register("DD02")} value={direc.DD02} onChange={handleChange} className="form-control input-lg my-m2"
                                                                                            title="En este campo se deberá digitar número o nombre según corresponda a la selección en el campo anterior, te recomendamos observar el campo de visualización que se encuentra al final de este módulo para organizar tu dirección correctamente." />
                                                                                    </Col>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>Letra</label>
                                                                                        <select type="text" name="DD03" {...register("DD03")} value={direc.DD03} onChange={handleChange} className="form-select"
                                                                                            title="Selecciona una letra si tu indicación de dirección en el campo anterior contiene esta opción, si no la posee déjala en blanco" >
                                                                                            <option value=""></option>
                                                                                            <option value="A">A</option>
                                                                                            <option value="B">B</option>
                                                                                            <option value="C">C</option>
                                                                                            <option value="D">D</option>
                                                                                            <option value="E">E</option>
                                                                                            <option value="F">F</option>
                                                                                            <option value="G">G</option>
                                                                                            <option value="H">H</option>
                                                                                            <option value="I">H</option>
                                                                                            <option value="J">J</option>
                                                                                            <option value="L">L</option>
                                                                                            <option value="M">M</option>
                                                                                            <option value="N">N</option>
                                                                                            <option value="O">O</option>
                                                                                            <option value="P">P</option>
                                                                                            <option value="Q">Q</option>
                                                                                            <option value="R">R</option>
                                                                                            <option value="S">S</option>
                                                                                            <option value="T">T</option>
                                                                                            <option value="W">W</option>
                                                                                            <option value="X">X</option>
                                                                                            <option value="Y">Y</option>
                                                                                            <option value="Z">Z</option>
                                                                                            <option value="AW">AW</option>
                                                                                            <option value="BW">BW</option>
                                                                                            <option value="BN">BN</option>
                                                                                            <option value="CW">CW</option>
                                                                                            <option value="DW">DW</option>
                                                                                            <option value="AN">AN</option>
                                                                                            <option value="NA">NA</option>
                                                                                            <option value="NB">NB</option>
                                                                                            <option value="BN">BN</option>
                                                                                            <option value="NC">NC</option>
                                                                                            <option value="CN">CN</option>
                                                                                            <option value="BIS">BIS</option>
                                                                                            <option value="A BIS">A BIS</option>
                                                                                            <option value="B BIS">B BIS</option>
                                                                                            <option value="C BIS">C BIS</option>
                                                                                            <option value="D BIS">D BIS</option>
                                                                                            <option value="N-BIS">N BIS</option>
                                                                                            <option value="OCC">OCC</option>
                                                                                            <option value="A OCC">B OCC</option>
                                                                                            <option value="B OCC">B OCC</option>
                                                                                            <option value="C OCC">C OCC</option>
                                                                                            <option value="D OCC">D OCC</option>
                                                                                            <option value="BQ">BLOQUE</option>
                                                                                            <option value="MZ">MANZANA</option>
                                                                                            <option value="CS">CASA</option>
                                                                                            <option value="AP">APARTAMENTO</option>
                                                                                            <option value="LT">LOTE</option>
                                                                                            <option value="LO">LOCAL</option>
                                                                                            <option value="PEAT">PEATONAL</option>
                                                                                            <option value="N PEAT">N PEATONAL</option>
                                                                                            <option value="NA PEAT">NB PEATONAL</option>
                                                                                            <option value="NB PEAT">NA PEATONAL</option>
                                                                                        </select>
                                                                                    </Col>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>Numero</label>
                                                                                        <input type="text" name="DD04" {...register("DD04")} value={direc.DD04} onChange={handleChange} className="form-control input-lg my-m2"
                                                                                            title="Digita en este campo el primer número de tu dirección" />
                                                                                    </Col>
                                                                                </Row>
                                                                                <Row>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>Letra</label>
                                                                                        <select type="text" name="DD05" {...register("DD05")} value={direc.DD05} onChange={handleChange} className="form-select"
                                                                                            title="Selecciona una letra si tu indicación de dirección en el campo anterior contiene esta opción, si no la posee déjala en blanco" >
                                                                                            <option value=""></option>
                                                                                            <option value="A">A</option>
                                                                                            <option value="B">B</option>
                                                                                            <option value="C">C</option>
                                                                                            <option value="D">D</option>
                                                                                            <option value="E">E</option>
                                                                                            <option value="F">F</option>
                                                                                            <option value="G">G</option>
                                                                                            <option value="H">H</option>
                                                                                            <option value="I">H</option>
                                                                                            <option value="J">J</option>
                                                                                            <option value="L">L</option>
                                                                                            <option value="M">M</option>
                                                                                            <option value="N">N</option>
                                                                                            <option value="O">O</option>
                                                                                            <option value="P">P</option>
                                                                                            <option value="Q">Q</option>
                                                                                            <option value="R">R</option>
                                                                                            <option value="S">S</option>
                                                                                            <option value="T">T</option>
                                                                                            <option value="W">W</option>
                                                                                            <option value="X">X</option>
                                                                                            <option value="Y">Y</option>
                                                                                            <option value="Z">Z</option>
                                                                                            <option value="AW">AW</option>
                                                                                            <option value="BW">BW</option>
                                                                                            <option value="BN">BN</option>
                                                                                            <option value="CW">CW</option>
                                                                                            <option value="DW">DW</option>
                                                                                            <option value="AN">AN</option>
                                                                                            <option value="NA">NA</option>
                                                                                            <option value="NB">NB</option>
                                                                                            <option value="BN">BN</option>
                                                                                            <option value="NC">NC</option>
                                                                                            <option value="CN">CN</option>
                                                                                            <option value="BIS">BIS</option>
                                                                                            <option value="A BIS">A BIS</option>
                                                                                            <option value="B BIS">B BIS</option>
                                                                                            <option value="C BIS">C BIS</option>
                                                                                            <option value="D BIS">D BIS</option>
                                                                                            <option value="N-BIS">N BIS</option>
                                                                                            <option value="OCC">OCC</option>
                                                                                            <option value="A OCC">B OCC</option>
                                                                                            <option value="B OCC">B OCC</option>
                                                                                            <option value="C OCC">C OCC</option>
                                                                                            <option value="D OCC">D OCC</option>
                                                                                            <option value="BQ">BLOQUE</option>
                                                                                            <option value="MZ">MANZANA</option>
                                                                                            <option value="CS">CASA</option>
                                                                                            <option value="AP">APARTAMENTO</option>
                                                                                            <option value="LT">LOTE</option>
                                                                                            <option value="LO">LOCAL</option>
                                                                                            <option value="PEAT">PEATONAL</option>
                                                                                            <option value="N PEAT">N PEATONAL</option>
                                                                                            <option value="NA PEAT">NB PEATONAL</option>
                                                                                            <option value="NB PEAT">NA PEATONAL</option>
                                                                                        </select>
                                                                                    </Col>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>Numero</label>
                                                                                        <input type="text" name="DD06" {...register("DD06")} value={direc.DD06} onChange={handleChange} className="form-control input-lg my-m2"
                                                                                            title="Digita en este campo el primer número de tu dirección" />
                                                                                    </Col>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>N° - Nombre</label>
                                                                                        <select type="text" name="DD07" {...register("DD07")} value={direc.DD07} onChange={handleChange} className="form-select"
                                                                                            title="Selecciona una letra si tu indicación de dirección en el campo anterior contiene esta opción, si no la posee déjala en blanco" >
                                                                                            <option value=""></option>
                                                                                            <option value="A">A</option>
                                                                                            <option value="B">B</option>
                                                                                            <option value="C">C</option>
                                                                                            <option value="D">D</option>
                                                                                            <option value="E">E</option>
                                                                                            <option value="F">F</option>
                                                                                            <option value="G">G</option>
                                                                                            <option value="H">H</option>
                                                                                            <option value="I">H</option>
                                                                                            <option value="J">J</option>
                                                                                            <option value="L">L</option>
                                                                                            <option value="M">M</option>
                                                                                            <option value="N">N</option>
                                                                                            <option value="O">O</option>
                                                                                            <option value="P">P</option>
                                                                                            <option value="Q">Q</option>
                                                                                            <option value="R">R</option>
                                                                                            <option value="S">S</option>
                                                                                            <option value="T">T</option>
                                                                                            <option value="W">W</option>
                                                                                            <option value="X">X</option>
                                                                                            <option value="Y">Y</option>
                                                                                            <option value="Z">Z</option>
                                                                                            <option value="AW">AW</option>
                                                                                            <option value="BW">BW</option>
                                                                                            <option value="BN">BN</option>
                                                                                            <option value="CW">CW</option>
                                                                                            <option value="DW">DW</option>
                                                                                            <option value="AN">AN</option>
                                                                                            <option value="NA">NA</option>
                                                                                            <option value="NB">NB</option>
                                                                                            <option value="BN">BN</option>
                                                                                            <option value="NC">NC</option>
                                                                                            <option value="CN">CN</option>
                                                                                            <option value="BIS">BIS</option>
                                                                                            <option value="A BIS">A BIS</option>
                                                                                            <option value="B BIS">B BIS</option>
                                                                                            <option value="C BIS">C BIS</option>
                                                                                            <option value="D BIS">D BIS</option>
                                                                                            <option value="N-BIS">N BIS</option>
                                                                                            <option value="OCC">OCC</option>
                                                                                            <option value="A OCC">B OCC</option>
                                                                                            <option value="B OCC">B OCC</option>
                                                                                            <option value="C OCC">C OCC</option>
                                                                                            <option value="D OCC">D OCC</option>
                                                                                            <option value="BQ">BLOQUE</option>
                                                                                            <option value="MZ">MANZANA</option>
                                                                                            <option value="CS">CASA</option>
                                                                                            <option value="AP">APARTAMENTO</option>
                                                                                            <option value="LT">LOTE</option>
                                                                                            <option value="LO">LOCAL</option>
                                                                                            <option value="PEAT">PEATONAL</option>
                                                                                            <option value="N PEAT">N PEATONAL</option>
                                                                                            <option value="NA PEAT">NB PEATONAL</option>
                                                                                            <option value="NB PEAT">NA PEATONAL</option>
                                                                                        </select>
                                                                                    </Col>
                                                                                    <Col xl={{ span: 3 }}>
                                                                                        <label>Complemento</label>
                                                                                        <input type="text" name="DD08" {...register("DD08")} value={direc.DD08} onChange={handleChange} className="form-control input-lg my-m2"
                                                                                            title="Digita en este campo el primer número de tu dirección" />
                                                                                    </Col>
                                                                                </Row>
                                                                            </Card.Body>
                                                                        </Accordion.Collapse>
                                                                    </Card>
                                                                </Accordion>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <br />
                                                                <label>Dirección</label>
                                                                <input type="text" value={completo}
                                                                    placeholder="Direccion donde vive la persona agredida" className="form-control input-lg my-m2" />
                                                                {errors.Direccion_victima && (<span className="text-danger text-small d-block mb-2"> {errors.Direccion_victima.message} </span>)}
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
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
};

export default Frm_Vict;