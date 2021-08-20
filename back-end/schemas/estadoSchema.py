from pydantic import BaseModel
from typing import Optional
from datetime import date


class Estado(BaseModel):
    id: Optional[int] = None
    idAtencion: int
    estado: Optional[str] = None
    lugarRemite: Optional[str] = None
    fechaReg: date