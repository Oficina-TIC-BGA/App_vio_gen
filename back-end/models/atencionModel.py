from sqlalchemy import Column, Integer, String, Date, ForeignKey
from database import Base


class Atencion(Base):
    __tablename__ = 'atencion'
    ID = Column(Integer, primary_key=True, index=True)
    ID_AGRESION = Column(Integer, ForeignKey('agresion.ID'))
    FECH_REG = Column(Date)
    DESCRIP = Column(String(45))
    ACTIV_RUTA = Column(String(45))
    ACCION = Column(String(45))
    ACT_COD_ALERT = Column(String(45))
