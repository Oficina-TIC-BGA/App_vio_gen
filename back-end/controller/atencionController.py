from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import atencionRepository
from models import atencionModel
from schemas import atencionSchema

router = APIRouter(

        prefix="/atencion",
        tags=['Atencion']

)

atencionModel.Base.metadata.create_all(bind=engine)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[atencionSchema.Atencion])
async def listar_todos(db: Session = Depends(get_db)):
    return atencionRepository.listar_atenciones(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=atencionSchema.Atencion)
async def buscar_atencion_por_id(_id: int, db: Session = Depends(get_db)):
    return atencionRepository.bucar_atencion(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_atencion(request: atencionSchema.Atencion, db: Session = Depends(get_db)):
    return atencionRepository.crear_atencion(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=atencionSchema.Atencion)
async def actualizar_atencion(_id: int, request: atencionSchema.Atencion, db: Session = Depends(get_db)):
    return atencionRepository.modificar_atencion(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_atencion(_id: int, db: Session = Depends(get_db)):
    return atencionRepository.eliminar_atencion(_id, db)
