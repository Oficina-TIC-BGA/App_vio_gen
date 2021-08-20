from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from schemas import receptorSchema
from models import receptorModel


def listar_receptores(db: Session):
    receptores = db.query(receptorModel.Receptor).all()
    return receptores


def bucar_receptor(_id: int, db: Session):
    receptor = db.query(receptorModel.Receptor).filter(receptorModel.Receptor.ID == _id).first()
    if not receptor:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El receptor con id {_id} no esta disponible")
    return receptor


def crear_receptor(request: receptorSchema.Receptor, db: Session):
    receptor = receptorModel.Receptor(ID=request.id,
                                      NOMBRE=request.nombre,
                                      CARACT=request.caracteristica,
                                      FECHA_ATENCION=request.fechaAtencion
                                      )
    db.add(receptor)
    db.commit()
    db.refresh(receptor)
    return receptor


def modificar_receptor(_id: int, request: receptorSchema.Receptor, db: Session):

    receptor_actualizado = db.query(receptorModel.Receptor).filter(receptorModel.Receptor.ID == _id).first()

    if not receptor_actualizado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El receptor con id {_id} no esta disponible")

    receptor_actualizado.NOMBRE = request.nombre,
    receptor_actualizado.CARACT = request.caracteristica,
    receptor_actualizado.FECHA_ATENCION = request.fechaAtencion,

    db.commit()
    db.refresh(receptor_actualizado)
    return receptor_actualizado


def eliminar_receptor(_id: int, db: Session):
    receptor = db.query(receptorModel.Receptor).filter(receptorModel.Receptor.ID == _id).first()

    if not receptor:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El receptor con id {_id} no esta disponible")
    else:
        receptor.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'