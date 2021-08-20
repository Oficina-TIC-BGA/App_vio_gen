from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import receptorRepository
from models import receptorModel
from schemas import receptorSchema

router = APIRouter(

        prefix="/veceptor",
        tags=['Receptor']

)

receptorModel.Base.metadata.create_all(bind=engine)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[receptorSchema.Receptor])
async def listar_todos(db: Session = Depends(get_db)):
    return receptorRepository.listar_receptores(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=receptorSchema.Receptor)
async def buscar_receptor_por_id(_id: int, db: Session = Depends(get_db)):
    return receptorRepository.bucar_receptor(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_receptor(request: receptorSchema.Receptor, db: Session = Depends(get_db)):
    return receptorRepository.crear_receptor(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=receptorSchema.Receptor)
async def actualizar_receptor(_id: int, request: receptorSchema.Receptor, db: Session = Depends(get_db)):
    return receptorRepository.modificar_receptor(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_receptor(_id: int, db: Session = Depends(get_db)):
    return receptorRepository.eliminar_receptor(_id, db)
