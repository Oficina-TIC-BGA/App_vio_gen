from pydantic import BaseModel
from datetime import date

'''class ReporteGeodata(BaseModel):'''


class RprsHistCompleto(BaseModel):
    FECHA: date
    DESCRIPCIO: str
    CONDUCTA: str
    CLASIFICAC: str
    EDAD: int
    GENERO: str
    CURSO_DE_V: str
    ESTADO_CIV: str
    MOVIL_AGRE: str
    MOVIL_VICT: str
    ARMAS_MEDI: str
    ZONA: str
    BARRIOS_HE: str
    COMUNA: str
    LATITUD: float
    LONGITUD: float

    class Config:
        orm_mode = True


class RprsHistConsol(BaseModel):
    FECHA_inicio: date
    FECHA_fin: date
    DESCRIPCIO: str
    YEAR: int
    EDAD_R_00: int
    EDAD_R_01: int
    EDAD_R_02: int
    EDAD_R_03: int
    EDAD_R_04: int
    EDAD_R_05: int
    EDAD_R_06: int
    EDAD_R_07: int
    EDAD_R_08: int
    EDAD_R_09: int
    TOTAL: int

    class Config:
        orm_mode = True
