from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from models import reportesHisModel
from schemas import rprsHistSchema


def listar_reportes(db: Session):
    reportes = db.query(reportesHisModel.RprsHistCompleto).all()

    return reportes


def bucar_rprt_tipo(descripcio: str, db: Session):
    reporte_tipo = db.query(reportesHisModel.RprsHistCompleto).filter(
            reportesHisModel.RprsHistCompleto.DESCRIPCIO == descripcio).all()
    if not reporte_tipo:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El tipo de delito {descripcio} no se encontro")
    lista_acumuladora = []

    for elemento in reporte_tipo:
        items = []
        items.append(elemento.FECHA)
        items.append(elemento.DESCRIPCIO)
        items.append(elemento.CONDUCTA)
        items.append(elemento.CLASIFICAC)
        items.append(elemento.EDAD)
        items.append(elemento.GENERO)
        items.append(elemento.CURSO_DE_V)
        items.append(elemento.ESTADO_CIV)
        items.append(elemento.MOVIL_AGRE)
        items.append(elemento.MOVIL_VICT)
        items.append(elemento.ARMAS_MEDI)
        items.append(elemento.ZONA)
        items.append(elemento.BARRIOS_HE)
        items.append(elemento.COMUNA)
        items.append(elemento.LATITUD)
        items.append(elemento.LONGITUD)
        lista_acumuladora.append(items)

    respuesta = {
            "fields": [
                    {"name": "FECHA", "format": "YYYY-M-D", "type": "date"},
                    {"name": "DESCRIPCIO", "format": "", "type": "string"},
                    {"name": "CONDUCTA", "format": "", "type": "string"},
                    {"name": "CLASIFICAC", "format": "", "type": "string"},
                    {"name": "EDAD", "format": "", "type": "integer"},
                    {"name": "GENERO", "format": "", "type": "string"},
                    {"name": "CURSO_DE_V", "format": "", "type": "string"},
                    {"name": "ESTADO_CIV", "format": "", "type": "string"},
                    {"name": "MOVIL_AGRE", "format": "", "type": "string"},
                    {"name": "MOVIL_VICT", "format": "", "type": "string"},
                    {"name": "ARMAS_MEDI", "format": "", "type": "string"},
                    {"name": "ZONA", "format": "", "type": "string"},
                    {"name": "BARRIOS_HE", "format": "", "type": "string"},
                    {"name": "COMUNA", "format": "", "type": "string"},
                    {"name": "latitude", "format": "", "type": "real"},
                    {"name": "longitude", "format": "", "type": "real"}
            ],
            "rows": lista_acumuladora}
    return respuesta


def crear_reportes(request: rprsHistSchema.RprsHistCompleto, db: Session):
    nuevo_reporte = reportesHisModel.RprsHistCompleto(FECHA=request.FECHA,
                                                      DESCRIPCIO=request.DESCRIPCIO,
                                                      CONDUCTA=request.CONDUCTA,
                                                      CLASIFICAC=request.CLASIFICAC,
                                                      EDAD=request.EDAD,
                                                      GENERO=request.GENERO,
                                                      CURSO_DE_V=request.CURSO_DE_V,
                                                      ESTADO_CIV=request.ESTADO_CIV,
                                                      MOVIL_AGRE=request.MOVIL_AGRE,
                                                      MOVIL_VICT=request.MOVIL_VICT,
                                                      ARMAS_MEDI=request.ARMAS_MEDI,
                                                      ZONA=request.ZONA,
                                                      BARRIOS_HE=request.BARRIOS_HE,
                                                      COMUNA=request.COMUNA,
                                                      LATITUD=request.LATITUD,
                                                      LONGITUD=request.LONGITUD
                                                      )
    db.add(nuevo_reporte)
    db.commit()
    db.refresh(nuevo_reporte)
    return nuevo_reporte


def modificar(_id: int, request: rprsHistSchema.RprsHistCompleto, db: Session):
    reporte_actualizado = db.query(reportesHisModel.RprsHistCompleto).filter(
        reportesHisModel.RprsHistCompleto.id == _id).first()
    if not reporte_actualizado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El reporte con id {_id} no esta disponible")

    reporte_actualizado.FECHA = request.FECHA
    reporte_actualizado.DESCRIPCIO = request.DESCRIPCIO
    reporte_actualizado.CONDUCTA = request.CONDUCTA
    reporte_actualizado.CLASIFICAC = request.CLASIFICAC
    reporte_actualizado.EDAD = request.EDAD
    reporte_actualizado.GENERO = request.GENERO
    reporte_actualizado.CURSO_DE_V = request.CURSO_DE_V
    reporte_actualizado.ESTADO_CIV = request.ESTADO_CIV
    reporte_actualizado.MOVIL_AGRE = request.MOVIL_AGRE
    reporte_actualizado.MOVIL_VICT = request.MOVIL_VICT
    reporte_actualizado.ARMAS_MEDI = request.ARMAS_MEDI
    reporte_actualizado.ZONA = request.ZONA
    reporte_actualizado.BARRIOS_HE = request.BARRIOS_HE
    reporte_actualizado.COMUNA = request.COMUNA
    reporte_actualizado.LATITUD = request.LATITUD
    reporte_actualizado.LONGITUD = request.LONGITUD
    db.commit()
    db.refresh(reporte_actualizado)
    return reporte_actualizado


def eliminar_reporte(_id: int, db: Session):
    reporte = db.query(reportesHisModel.RprsHistCompleto).filter(reportesHisModel.RprsHistCompleto.id == _id).first()
    if not reporte:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El reporte con id {_id} no esta disponible")
    else:
        reporte.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'
