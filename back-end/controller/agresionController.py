from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import agresionRepository
from models import agresionModel
from schemas import agresionSchema

router = APIRouter(

        prefix="/agresion",
        tags=['Agresion']

)

agresionModel.Base.metadata.create_all(bind=engine)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[agresionSchema.Agresion])
async def listar_todos(db: Session = Depends(get_db)):
    return agresionRepository.listar_agresiones(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=agresionSchema.Agresion)
async def buscar_agresion_por_id(_id: int, db: Session = Depends(get_db)):
    return agresionRepository.bucar_agresion(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_agresion(request: agresionSchema.Agresion, db: Session = Depends(get_db)):
    return agresionRepository.crear_agresion(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=agresionSchema.Agresion)
async def actualizar_agresion(_id: int, request: agresionSchema.Agresion, db: Session = Depends(get_db)):
    return agresionRepository.modificar_agresion(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_agresion(_id: int, db: Session = Depends(get_db)):
    return agresionRepository.eliminar_agresion(_id, db)
