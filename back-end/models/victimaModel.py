from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from database import Base
from sqlalchemy.orm import relationship


class Victima(Base):
    __tablename__ = 'victima'
    ID = Column(Integer, primary_key=True, index=True, autoincrement=True)
    NOMBRE = Column(String(30))
    APELLIDO = Column(String(30))
    TIPO_DOC = Column(String(15))
    NUM_DOC = Column(Integer)
    NACIONALIDAD = Column(String(30))
    SEXO = Column(String(10))
    GENERO = Column(String(10))
    GRP_POBLAC = Column(String(20))
    FECHA_NACIM = Column(Date)
    EDAD = Column(Integer)
    FECHA_REG = Column(Date)
