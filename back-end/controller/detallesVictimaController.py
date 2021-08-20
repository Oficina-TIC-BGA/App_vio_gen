from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import detalleVictimaRepository
from models import detalleVictimaModel
from schemas import detalleVictimaSchema

router = APIRouter(

        prefix="/detalleVictima",
        tags=['Detalle Victima']

)




@router.get("/", status_code=status.HTTP_200_OK, response_model=List[detalleVictimaSchema.DetalleVictima])
async def listar_todos(db: Session = Depends(get_db)):
    return detalleVictimaRepository.listar_detalles_victimas(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=detalleVictimaSchema.DetalleVictima)
async def buscar_detalle_victima_por_id(_id: int, db: Session = Depends(get_db)):
    return detalleVictimaRepository.bucar_detalle_victima(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_detalle_victima(request: detalleVictimaSchema.DetalleVictima, db: Session = Depends(get_db)):
    return detalleVictimaRepository.crear_detalle_victima(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=detalleVictimaSchema.DetalleVictima)
async def actualizar_detalle_victima(_id: int, request: detalleVictimaSchema.DetalleVictima,
                                     db: Session = Depends(get_db)):
    return detalleVictimaRepository.modificar_detalle_victima(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_detalle_victima(_id: int, db: Session = Depends(get_db)):
    return detalleVictimaRepository.eliminar_detalle_victima(_id, db)
