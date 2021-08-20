import enum
from sqlalchemy import Column, Integer, String, Date, Enum
from sqlalchemy.orm import relationship
from database import Base


class Receptor(Base):
    __tablename__ = 'receptor'
    ID = Column(Integer, primary_key=True, index=True)
    NOMBRE = Column(String(45))
    CARACT = Column(String(15))
    FECHA_ATENCION = Column(Date)
