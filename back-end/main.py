from fastapi import FastAPI
from controller import usuarioController, futurosRprsPoliciaController, reportesHisController, \
    detallesVictimaController, victimaController, receptorController, agresionController, atencionController, \
    estadoController
from fastapi.middleware.cors import CORSMiddleware

# from .hashing import Hash
app = FastAPI()
origins = [
        'http://localhost:3000'
]
app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
)


app.include_router(usuarioController.router)
app.include_router(futurosRprsPoliciaController.router)
app.include_router(reportesHisController.router)
app.include_router(victimaController.router)
app.include_router(detallesVictimaController.router)
app.include_router(receptorController.router)
app.include_router(agresionController.router)
app.include_router(atencionController.router)
app.include_router(estadoController.router)
