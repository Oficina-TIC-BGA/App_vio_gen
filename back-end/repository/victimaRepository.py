from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from schemas import victimaSchema
from models import victimaModel


def listar_victimas(db: Session):
    victimas = db.query(victimaModel.Victima).all()
    return victimas


def bucar_victima(_id: int, db: Session):
    victima = db.query(victimaModel.Victima).filter(victimaModel.Victima.ID == _id).first()
    if not victima:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La victima con id {_id} no esta disponible")
    return victima


def crear_victima(request: victimaSchema.Victima, db: Session):
    victima = victimaModel.Victima(ID=request.id,
                                   NOMBRE=request.nombre,
                                   APELLIDO=request.apellido,
                                   TIPO_DOC=request.tipoDoc,
                                   NUM_DOC=request.numeroDoc,
                                   NACIONALIDAD=request.nacionalidad,
                                   SEXO=request.sexo,
                                   GENERO=request.genero,
                                   GRP_POBLAC=request.grupoPobla,
                                   FECHA_NACIM=request.fechaNacimiento,
                                   EDAD=request.edad,
                                   FECHA_REG=request.fechaRegistro
                                   )
    db.add(victima)
    db.commit()
    db.refresh(victima)
    return victima


def modificar_victima(_id: int, request: victimaSchema.Victima, db: Session):

    victima_actualizado = db.query(victimaModel.Victima).filter(victimaModel.Victima.ID == _id).first()

    if not victima_actualizado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La victima con id {_id} no esta disponible")

    victima_actualizado.NOMBRE = request.nombre,
    victima_actualizado.APELLIDO = request.apellido,
    victima_actualizado.TIPO_DOC = request.tipoDoc,
    victima_actualizado.NUM_DOC = request.numeroDoc,
    victima_actualizado.NACIONALIDAD = request.nacionalidad,
    victima_actualizado.SEXO = request.sexo,
    victima_actualizado.GENERO = request.genero,
    victima_actualizado.GRP_POBLAC = request.grupoPobla,
    victima_actualizado.FECHA_NACIM = request.fechaNacimiento,
    victima_actualizado.EDAD = request.edad,
    victima_actualizado.FECHA_REG = request.fechaRegistro,

    db.commit()
    db.refresh(victima_actualizado)
    return victima_actualizado


def eliminar_victima(_id: int, db: Session):
    victima = db.query(victimaModel.Victima).filter(victimaModel.Victima.ID == _id).first()

    if not victima:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La victima con id {_id} no esta disponible")
    else:
        victima.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'