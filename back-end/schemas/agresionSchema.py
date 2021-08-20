from pydantic import BaseModel
from typing import Optional, List
from datetime import date


class Agresion(BaseModel):
    id: Optional[int] = None
    idReceptor: int
    idDetalleVictima: int
    fechaReg: date
    tipoViolencia: Optional[str] = None
    ambitoViolencia: Optional[str] = None
    relacionAgresion: Optional[str] = None
    idsRiesgo: Optional[List[int]] = None
    descripcionRiesgo: Optional[str] = None
    nivelRiesgo: str

    class Config:
        orm_mode = True
