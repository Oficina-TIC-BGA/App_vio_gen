from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from database import Base


class DetalleVictima(Base):
    __tablename__ = 'detalle_victima'
    ID = Column(Integer, primary_key=True, index=True, autoincrement=True)
    ID_VICTIMA = Column(Integer, ForeignKey('victima.ID'))
    FECHA_REG = Column(Date)
    TELF_1_VICT = Column(String(15))
    TELF_2_VICT = Column(String(15))
    CORREO_ELECTR = Column(String(20))
    TELF_APOYO = Column(String(15))
    ESTADO_CIVIL = Column(String(15))
    NUMERO_HIJOS = Column(Integer)
    NIV_ESCOL = Column(String(20))
    OCUPACION = Column(String(25))
    MUNICIPIO = Column(String(30))
    COMUNA = Column(String(30))
    BARRIO = Column(String(30))
    DIRECCION = Column(String(60))
    COMPLEMENTO = Column(String(50))