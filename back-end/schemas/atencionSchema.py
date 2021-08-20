from pydantic import BaseModel
from typing import Optional
from datetime import date


class Atencion(BaseModel):
    id: Optional[int] = None
    idAgresion: int
    fechaReg: date
    descripcion: Optional[str] = None
    activacionRuta: Optional[str] = None
    accion: Optional[str] = None
    activacionAlerta: Optional[str] = None
