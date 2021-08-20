from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from schemas import atencionSchema
from models import atencionModel


def listar_atenciones(db: Session):
    atenciones = db.query(atencionModel.Atencion).all()
    return atenciones


def bucar_atencion(_id: int, db: Session):
    atencion = db.query(atencionModel.Atencion).filter(atencionModel.Atencion.ID == _id).first()
    if not atencion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La atencion con id {_id} no esta disponible")
    return atencion


def crear_atencion(request: atencionSchema.Atencion, db: Session):
    atencion = atencionModel.Atencion(ID=request.id,
                                      ID_AGRESION=request.idAgresion,
                                      FECH_REG=request.fechaReg,
                                      DESCRIP=request.descripcion,
                                      ACTIV_RUTA=request.activacionRuta,
                                      ACCION=request.accion,
                                      ACT_COD_ALERT=request.activacionAlerta
                                      )
    db.add(atencion)
    db.commit()
    db.refresh(atencion)
    return atencion


def modificar_atencion(_id: int, request: atencionSchema.Atencion, db: Session):

    atencion_actualizada = db.query(atencionModel.Atencion).filter(atencionModel.Atencion.ID == _id).first()

    if not atencion_actualizada:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La atencion con id {_id} no esta disponible")

    atencion_actualizada.ID_AGRESION = request.idAgresion,
    atencion_actualizada.FECH_REG = request.fechaReg,
    atencion_actualizada.DESCRIP = request.descripcion,
    atencion_actualizada.ACTIV_RUTA = request.activacionRuta,
    atencion_actualizada.ACCION = request.accion,
    atencion_actualizada.ACT_COD_ALERT = request.activacionAlerta,

    db.commit()
    db.refresh(atencion_actualizada)
    return atencion_actualizada


def eliminar_atencion(_id: int, db: Session):
    atencion = db.query(atencionModel.Atencion).filter(atencionModel.Atencion.ID == _id).first()

    if not atencion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"La atencion con id {_id} no esta disponible")
    else:
        atencion.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'
