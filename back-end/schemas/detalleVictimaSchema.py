from pydantic import BaseModel
from typing import Optional
from datetime import date


class DetalleVictima(BaseModel):
    id: Optional[int] = None
    idVictima: int
    fechaRegistro: date
    telefono1Victima: Optional[str] = None
    telefono2Victima: Optional[str] = None
    correoElectronico: Optional[str] = None
    telefonoApoyo: Optional[str] = None
    estadoCivil: Optional[str] = None
    numeroHijos: Optional[int] = None
    nivelEscolar: Optional[str] = None
    ocupacion: Optional[str] = None
    municipio: Optional[str] = None
    comuna: Optional[str] = None
    barrio: Optional[str] = None
    calleCarrera: Optional[str] = None
    numero1: Optional[str] = None
    letra1: Optional[str] = None
    numero2: Optional[str] = None
    letra2: Optional[str] = None
    numero3: Optional[str] = None
    letra3: Optional[str] = None
    complemento: Optional[str] = None

    class Config:
        orm_mode = True
