from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from schemas import agresionSchema
from models import agresionModel


def listar_agresiones(db: Session):
    agresiones = db.query(agresionModel.Agresion).all()
    return agresiones


def bucar_agresion(_id: int, db: Session):
    agresion = db.query(agresionModel.Agresion).filter(agresionModel.Agresion.ID == _id).first()
    if not agresion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La agresion con id {_id} no esta disponible")
    return agresion


def crear_agresion(request: agresionSchema.Agresion, db: Session):
    agresion = agresionModel.Agresion(ID=request.id,
                                      ID_RECEPTOR=request.idReceptor,
                                      ID_DETALLE_VICTIMA=request.idDetalleVictima,
                                      FECH_REG=request.fechaReg,
                                      TIPO_VIOLEN=request.tipoViolencia,
                                      AMBITO_VIOLEN=request.ambitoViolencia,
                                      RELA_AGRESOR=request.relacionAgresion,
                                      IDS_RIESGO=request.idsRiesgo,
                                      DESCRP_RIESGO=request.descripcionRiesgo,
                                      NIVEL_RIESGO=request.nivelRiesgo
                                      )
    db.add(agresion)
    db.commit()
    db.refresh(agresion)
    return agresion


def modificar_agresion(_id: int, request: agresionSchema.Agresion, db: Session):

    agresion_actualizada = db.query(agresionModel.Agresion).filter(agresionModel.Agresion.ID == _id).first()

    if not agresion_actualizada:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La agresion con id {_id} no esta disponible")

    agresion_actualizada.ID_RECEPTOR = request.idReceptor,
    agresion_actualizada.ID_DETALLE_VICTIMA = request.idDetalleVictima,
    agresion_actualizada.FECH_REG = request.fechaReg,
    agresion_actualizada.TIPO_VIOLEN = request.tipoViolencia,
    agresion_actualizada.AMBITO_VIOLEN = request.ambitoViolencia,
    agresion_actualizada.RELA_AGRESOR = request.relacionAgresion,
    agresion_actualizada.IDS_RIESGO = request.idsRiesgo,
    agresion_actualizada.DESCRP_RIESGO = request.descripcionRiesgo,
    agresion_actualizada.NIVEL_RIESGO = request.nivelRiesgo

    db.commit()
    db.refresh(agresion_actualizada)
    return agresion_actualizada


def eliminar_agresion(_id: int, db: Session):
    agresion = db.query(agresionModel.Agresion).filter(agresionModel.Agresion.ID == _id).first()

    if not agresion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La agresion con id {_id} no esta disponible")
    else:
        agresion.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'
