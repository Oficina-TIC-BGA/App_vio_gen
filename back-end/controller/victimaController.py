from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import victimaRepository
from models import victimaModel
from schemas import victimaSchema

router = APIRouter(

        prefix="/victima",
        tags=['Victima']

)

victimaModel.Base.metadata.create_all(bind=engine)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[victimaSchema.Victima])
async def listar_todos(db: Session = Depends(get_db)):
    return victimaRepository.listar_victimas(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=victimaSchema.Victima)
async def buscar_victima_por_id(_id: int, db: Session = Depends(get_db)):
    return victimaRepository.bucar_victima(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_victima(request: victimaSchema.Victima, db: Session = Depends(get_db)):
    return victimaRepository.crear_victima(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=victimaSchema.Victima)
async def actualizar_victima(_id: int, request: victimaSchema.Victima, db: Session = Depends(get_db)):
    return victimaRepository.modificar_victima(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_victima(_id: int, db: Session = Depends(get_db)):
    return victimaRepository.eliminar_victima(_id, db)

