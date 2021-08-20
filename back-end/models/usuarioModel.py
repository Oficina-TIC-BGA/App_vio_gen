from sqlalchemy import Column, Integer, String
from database import Base


class Usuario(Base):
    __tablename__ = 'USUARIOS'
    ID = Column(Integer, primary_key=True, index=True, autoincrement=True)
    ID_ENTIDAD = Column(Integer)
    NOMBRE = Column(String(30))
    APELLIDO = Column(String(30))
    TIPO_DOC = Column(String(20))
    NUM_DOC = Column(String(15))
    EMAIL = Column(String(20))
    TELEFONO = Column(String(15))
    ROL_USUARIO = Column(String(15))
    USER = Column(String(20))
    PASSWORD = Column(String(15))
    ESTADO = Column(String(15))
