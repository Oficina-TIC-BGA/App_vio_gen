from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import rprsHistCompletoRepository
from models import reportesHisModel

from schemas import rprsHistSchema

router = APIRouter(

        prefix="/reportespolicia",
        tags=['Reportes Policia']

)

#reportesHisModel.Base.metadata.create_all(bind=engine)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[rprsHistSchema.RprsHistCompleto])
async def all(db: Session = Depends(get_db)):
    return rprsHistCompletoRepository.listar_reportes(db)


@router.get('/{descripcio}', status_code=status.HTTP_200_OK)
def year_consolidado(descripcio: str, db: Session = Depends(get_db)):
    return rprsHistCompletoRepository.bucar_rprt_tipo(descripcio, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
def create(request: rprsHistSchema.RprsHistCompleto, db: Session = Depends(get_db)):
    return rprsHistCompletoRepository.crear_reportes(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=rprsHistSchema.RprsHistCompleto)
def actualizar(id: int, request: rprsHistSchema.RprsHistCompleto, db: Session = Depends(get_db)):
    return rprsHistCompletoRepository.modificar(id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
def id_usario(id: int, db: Session = Depends(get_db)):
    return rprsHistCompletoRepository.eliminar_reporte(id, db)
