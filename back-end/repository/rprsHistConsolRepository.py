from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from models import reportesHisModel


def listar_reportes_consolidados(db: Session):
    return db.query(reportesHisModel.RprsHistConsol).all()


def bucar_rprt_consol(year: int, db: Session):
    reporte_cons = db.query(reportesHisModel.RprsHistConsol).filter(reportesHisModel.RprsHistConsol.YEAR == year).first()
    if not reporte_cons:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El año {year} no esta disponible")
    return reporte_cons
