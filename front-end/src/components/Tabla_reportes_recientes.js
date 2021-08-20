import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import  Modal_editar_usuarios  from './Modal_editar_usuarios';

const API = process.env.REACT_APP_API;

const fetchData = () => axios.get(`${API}/usuarios/`);

const TableQuery = () => {
	const [tableData, setTableData] = useState(null);

	const { data: apiResponse, isLoading } = useQuery(
		"Usuarios_vio_gen",
		fetchData
	);

	useEffect(() => {
		setTableData(apiResponse?.data);
	}, [apiResponse]);

	if (isLoading || !tableData) {
		return <div>Loading...</div>;
	}

	return <TableInstance tableData={tableData} />;
};

const eliminarUsuario = (id) => {
	axios.delete(`${API}/usuarios/${id}`).then((res) => {
		console.log(res);
		console.log(res.data);
	});
};

const editarUsuario = (id) => {
	console.log(typeof id);
};

function refrescarPagina() {
    window.location.reload(false);
  }

const TableInstance = ({ tableData }) => {
	const [vermodal, setVermodal] = useState(false);

	const abrirModal = () => {
		setVermodal(prev => !prev)
	}

	const [columns, data] = useMemo(() => {
		const columns = [
			{
				Header: "ID",
				accessor: "IdUsuario",
			},
			{
				Header: "Documento identidad",
				accessor: "EntidadId",
			},
			{
				Header: "Victima",
				accessor: "UsuNom",
			},
			{
				Header: "Nivel de Riegos",
				accessor: "UsuApe",
			},
			{
				Header: "Riesgo",
				accessor: "UsuTipDoc",
			},
			{
				Header: "Atencion",
				accessor: "UsuEmail",
			},
			{
				Header: "Estado de gestion de caso",
				accessor: "UsuTelMov",
			},
			{
				Header: "Seguimiento del caso",
				accessor: "UsuRol",
			},
			{
				width: 300,
				Header: "Acciones",
				Cell: ({ cell }) => (
					<>
						<Modal_editar_usuarios />
						{' '}
						<Button
							variant="danger"
							size="lg"
							active
							className="boton_eliminar"
							onClick={(e) => {eliminarUsuario(cell.row.original.IdUsuario);refrescarPagina()}}
						><BsIcons.BsTrashFill /> {' '}
							Eliminar
						</Button>
					</>
				),
			},
		];
		return [columns, tableData];
	}, [tableData]);
	
	const tableInstance = useTable({ columns, data });

	return <TableLayout {...tableInstance} />;
};

const TableLayout = ({
	getTableProps,
	getTableBodyProps,
	headerGroups,
	rows,
	prepareRow,
}) => {
	return (
		<table {...getTableProps()} className="styled-table">
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render("Header")}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

const client = new QueryClient();

const Tabla_reportes_recientes = () => {

	return (
		<QueryClientProvider client={client}>
			<TableQuery />
		</QueryClientProvider>
	);
};

export default Tabla_reportes_recientes;