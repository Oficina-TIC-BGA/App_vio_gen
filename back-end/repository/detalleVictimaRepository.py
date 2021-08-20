from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from schemas import detalleVictimaSchema
from models import detalleVictimaModel


def listar_detalles_victimas(db: Session):
    detalles_victimas = db.query(detalleVictimaModel.DetalleVictima).all()
    return detalles_victimas


def bucar_detalle_victima(_id: int, db: Session):
    detalle_victima = db.query(detalleVictimaModel.DetalleVictima).filter(
        detalleVictimaModel.DetalleVictima.ID == _id).first()
    if not detalle_victima:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El detalle de la victima con id {_id} no esta disponible")
    return detalle_victima


def crear_detalle_victima(request: detalleVictimaSchema.DetalleVictima, db: Session):
    direccion = request.calleCarrera + " " + request.numero1 + " " + request.letra1 + " " \
                + request.numero2 + " " + request.letra2 + " " + request.numero3 + " " \
                + request.letra3

    detalle_victima = detalleVictimaModel.DetalleVictima(ID=request.id,
                                                         ID_VICTIMA=request.idVictima,
                                                         FECHA_REG=request.fechaRegistro,
                                                         TELF_1_VICT=request.telefono1Victima,
                                                         TELF_2_VICT=request.telefono2Victima,
                                                         CORREO_ELECTR=request.correoElectronico,
                                                         TELF_APOYO=request.telefonoApoyo,
                                                         ESTADO_CIVIL=request.estadoCivil,
                                                         NUMERO_HIJOS=request.numeroHijos,
                                                         NIV_ESCOL=request.nivelEscolar,
                                                         OCUPACION=request.ocupacion,
                                                         MUNICIPIO=request.municipio,
                                                         COMUNA=request.comuna,
                                                         BARRIO=request.barrio,
                                                         DIRECCION=direccion,
                                                         COMPLEMENTO=request.complemento
                                                         )
    db.add(detalle_victima)
    db.commit()
    db.refresh(detalle_victima)
    return detalle_victima


def modificar_detalle_victima(_id: int, request: detalleVictimaSchema.DetalleVictima, db: Session):

    detalle_victima_actualizado = db.query(detalleVictimaModel.DetalleVictima).filter(detalleVictimaModel.DetalleVictima.ID == _id).first()

    direccion = request.calleCarrera + " " + request.numero1 + " " + request.letra1 + " " + request.numero2 + " " + request.letra2 + " " + request.numero3 + " " + request.letra3

    if not detalle_victima_actualizado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El detalle de la victima con id {_id} no esta disponible")

    detalle_victima_actualizado.ID_VICTIMA = request.idVictima,
    detalle_victima_actualizado.FECHA_REG = request.fechaRegistro,
    detalle_victima_actualizado.TELF_1_VICT = request.telefono1Victima,
    detalle_victima_actualizado.TELF_2_VICT = request.telefono2Victima,
    detalle_victima_actualizado.CORREO_ELECTR = request.correoElectronico,
    detalle_victima_actualizado.TELF_APOYO = request.telefonoApoyo,
    detalle_victima_actualizado.ESTADO_CIVIL = request.estadoCivil,
    detalle_victima_actualizado.NUMERO_HIJOS = request.numeroHijos,
    detalle_victima_actualizado.NIV_ESCOL = request.nivelEscolar,
    detalle_victima_actualizado.OCUPACION = request.ocupacion,
    detalle_victima_actualizado.MUNICIPIO = request.municipio,
    detalle_victima_actualizado.COMUNA = request.comuna,
    detalle_victima_actualizado.BARRIO = request.barrio,
    detalle_victima_actualizado.DIRECCION = direccion,
    detalle_victima_actualizado.COMPLEMENTO = request.complemento

    db.commit()
    db.refresh(detalle_victima_actualizado)
    return detalle_victima_actualizado


def eliminar_detalle_victima(_id: int, db: Session):
    detalle_victima = db.query(detalleVictimaModel.DetalleVictima).filter(detalleVictimaModel.DetalleVictima.ID == _id).first()

    if not detalle_victima:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El detalle de la victima con id {_id} no esta disponible")
    else:
        detalle_victima.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'
