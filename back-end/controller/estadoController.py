from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import estadoRepository
from models import estadoModel
from schemas import estadoSchema

router = APIRouter(

        prefix="/estado",
        tags=['Estado']

)

estadoModel.Base.metadata.create_all(bind=engine)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[estadoSchema.Estado])
async def listar_todos(db: Session = Depends(get_db)):
    return estadoRepository.listar_estados(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=estadoSchema.Estado)
async def buscar_estado_por_id(_id: int, db: Session = Depends(get_db)):
    return estadoRepository.bucar_estado(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_estado(request: estadoSchema.Estado, db: Session = Depends(get_db)):
    return estadoRepository.crear_estado(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=estadoSchema.Estado)
async def actualizar_estado(_id: int, request: estadoSchema.Estado, db: Session = Depends(get_db)):
    return estadoRepository.modificar_estado(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_estado(_id: int, db: Session = Depends(get_db)):
    return estadoRepository.eliminar_estado(_id, db)
