from fastapi import APIRouter, Depends, status, HTTPException
from typing import List

from sqlalchemy.orm import Session
from database import get_db
from repository import rprsHistConsolRepository
from schemas import rprsHistSchema

router = APIRouter(

        prefix="/reportesConsolidados",
        tags=['ReporteConsolidados']

)


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[rprsHistSchema.RprsHistConsol])
async def all(db: Session = Depends(get_db)):
    return rprsHistConsolRepository.listar_reportes_consolidados(db)


@router.get('/{year}', status_code=status.HTTP_200_OK, response_model=List[rprsHistSchema.RprsHistConsol])
async def year_consolidado(year: int, db: Session = Depends(get_db)):
    return rprsHistConsolRepository.bucar_rprt_consol(year, db)
