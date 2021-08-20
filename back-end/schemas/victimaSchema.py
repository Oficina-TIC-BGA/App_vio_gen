from pydantic import BaseModel
from typing import Optional
from datetime import date


class Victima(BaseModel):
    id: Optional[int] = None
    nombre: Optional[str] = None
    apellido: Optional[str] = None
    tipoDoc: Optional[str] = None
    numeroDoc: Optional[int] = None
    nacionalidad: Optional[str] = None
    sexo: Optional[str] = None
    genero: Optional[str] = None
    grupoPobla: Optional[str] = None
    fechaNacimiento: Optional[date] = None
    edad: Optional[int] = None
    fechaRegistro: date
