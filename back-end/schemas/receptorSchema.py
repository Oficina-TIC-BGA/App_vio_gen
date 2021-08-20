from pydantic import BaseModel
from typing import Optional
from datetime import date


class Receptor(BaseModel):
    id: Optional[int] = None
    nombre: Optional[str] = None
    caracteristica: Optional[str] = None
    fechaAtencion: date
