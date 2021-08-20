from pydantic import BaseModel
from typing import Optional


class Usuario(BaseModel):
    IdUsuario: Optional[int] = None
    EntidadId: Optional[int] = None
    UsuNom: Optional[str] = None
    UsuApe: Optional[str] = None
    UsuTipDoc: Optional[str] = None
    UsuNumDoc: Optional[str] = None
    UsuEmail: Optional[str] = None
    UsuTelMov: Optional[str] = None
    UsuRol: Optional[str] = None
    User: str
    Password: str
    UsuarioEstado: bool

    class Config:
        orm_mode = True


class MostrarUsuario(BaseModel):
    EntidadId: Optional[int] = None
    UsuNom: Optional[str] = None
    UsuApe: Optional[str] = None
    UsuTipDoc: Optional[str] = None
    UsuNumDoc: Optional[str] = None
    UsuEmail: Optional[str] = None
    UsuTelMov: Optional[str] = None
    UsuRol: Optional[str] = None
    User: str
    UsuarioEstado: bool

    class Config:
        orm_mode = True
