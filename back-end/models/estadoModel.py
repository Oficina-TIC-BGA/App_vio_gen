from sqlalchemy import Column, Integer, String, Date, ForeignKey
from database import Base


class Estado(Base):
    __tablename__ = 'estado'
    ID = Column(Integer, primary_key=True, index=True)
    ID_ATENCION = Column(Integer, ForeignKey('atencion.ID'))
    ESTADO = Column(String(45))
    LUGAR_REMITE = Column(String(45))
    FECH_REG = Column(Date)
