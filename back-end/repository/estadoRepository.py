from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from schemas import estadoSchema
from models import estadoModel


def listar_estados(db: Session):
    estados = db.query(estadoModel.Estado).all()
    return estados


def bucar_estado(_id: int, db: Session):
    estado = db.query(estadoModel.Estado).filter(estadoModel.Estado.ID == _id).first()
    if not estado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El Estado con id {_id} no esta disponible")
    return estado


def crear_estado(request: estadoSchema.Estado, db: Session):
    estado = estadoModel.Estado(ID=request.id,
                                ID_ATENCION=request.idAtencion,
                                ESTADO=request.estado,
                                LUGAR_REMITE=request.lugarRemite,
                                FECH_REG=request.fechaReg
                                )
    db.add(estado)
    db.commit()
    db.refresh(estado)
    return estado


def modificar_estado(_id: int, request: estadoSchema.Estado, db: Session):
    estado_actualizado = db.query(estadoModel.Estado).filter(estadoModel.Estado.ID == _id).first()

    if not estado_actualizado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El Estado con id {_id} no esta disponible")

    estado_actualizado.ID_ATENCION = request.idAtencion,
    estado_actualizado.ESTADO = request.estado,
    estado_actualizado.LUGAR_REMITE = request.lugarRemite,
    estado_actualizado.FECH_REG = request.fechaReg,

    db.commit()
    db.refresh(estado_actualizado)
    return estado_actualizado


def eliminar_estado(_id: int, db: Session):
    estado = db.query(estadoModel.Estado).filter(estadoModel.Estado.ID == _id).first()

    if not estado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El Estado con id {_id} no esta disponible")
    else:
        estado.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'
