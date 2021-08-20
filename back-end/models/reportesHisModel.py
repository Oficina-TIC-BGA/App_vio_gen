from sqlalchemy import Column, Integer, String, Float, Date
from database import Base


class RprsHistCompleto(Base):
    __tablename__ = 'reportes_his'
    id = Column(Integer, primary_key=True, index=True)
    FECHA = Column(Date)
    DESCRIPCIO = Column(String(254))
    CONDUCTA = Column(String(254))
    CLASIFICAC = Column(String(254))
    EDAD = Column(Integer)
    GENERO = Column(String(254))
    CURSO_DE_V = Column(String(254))
    ESTADO_CIV = Column(String(254))
    MOVIL_AGRE = Column(String(254))
    MOVIL_VICT = Column(String(254))
    ARMAS_MEDI = Column(String(254))
    ZONA = Column(String(254))
    BARRIOS_HE = Column(String(254))
    COMUNA = Column(String(254))
    LATITUD = Column(Float)
    LONGITUD = Column(Float)



class RprsHistConsol(Base):
    __tablename__ = 'reportes_his_consolidados'
    id = Column(Integer, primary_key=True, index=True)
    FECHA_INI = Column(Date)
    FECHA_FIN = Column(Date)
    DESCRIPCION = Column(String(254))
    YEAR = Column(Integer)
    EDAD_R_00 = Column(Integer)
    EDAD_R_01 = Column(Integer)
    EDAD_R_02 = Column(Integer)
    EDAD_R_03 = Column(Integer)
    EDAD_R_04 = Column(Integer)
    EDAD_R_05 = Column(Integer)
    EDAD_R_06 = Column(Integer)
    EDAD_R_07 = Column(Integer)
    EDAD_R_08 = Column(Integer)
    EDAD_R_09 = Column(Integer)
    TOTAL = Column(Integer)
