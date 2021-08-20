from sqlalchemy import Column, Integer, String, Date, JSON, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Agresion(Base):
    __tablename__ = 'agresion'
    ID = Column(Integer, primary_key=True, index=True)
    ID_RECEPTOR = Column(Integer, ForeignKey('receptor.ID'))
    ID_DETALLE_VICTIMA = Column(Integer, ForeignKey('detalle_victima.ID'))
    FECH_REG = Column(Date)
    TIPO_VIOLEN = Column(String(45))
    AMBITO_VIOLEN = Column(String(45))
    RELA_AGRESOR = Column(String(45))
    IDS_RIESGO = Column(JSON(80))
    DESCRP_RIESGO = Column(String(250))
    NIVEL_RIESGO = Column(String(45))