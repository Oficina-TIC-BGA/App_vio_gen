import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Principal, Estadisticas, Causas} from './pages/Principal';
import {  Reportes, RegistrarVictima, CrearReporte, Recientes, Actualizar_estado, Historicos } from './pages/Reportes';
import { Usuarios, Administrar, ListarReportes} from './pages/Usuarios';
import { Geodata, ViolenciaIntrafamiliar, Feminisidios} from './pages/Geodata';
import Soporte  from './pages/Soporte';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


function App() {
  return (

    <Router>
      <Sidebar />
      <Switch>
        <Route path='/principal' exact component={Principal} />
        <Route path='/principal/estadisticas' exact component={Estadisticas} />
        <Route path='/principal/causas' exact component={Causas} />
        <Route path='/reportes' exact component={Reportes} />
        <Route path='/reportes/registrarVictima' exact component={RegistrarVictima} />
        <Route path='/reportes/crearReporte' exact component={CrearReporte} />
        <Route path='/reportes/recientes' exact component={Recientes} />
        <Route path='/reportes/actualizar_estado' exact component={Actualizar_estado} />
        <Route path='/reportes/historicos' exact component={Historicos} />
        <Route path='/usuarios' exact component={Usuarios} />
        <Route path='/usuarios/administrar' exact component={Administrar} />
        <Route path='/usuarios/listarreportes' exact component={ListarReportes} />
        <Route path='/geodata' exact component={Geodata} />
        <Route path='/geodata/violenciaintrafamiliar' exact component={ViolenciaIntrafamiliar} />
        <Route path='/geodata/feminisidios' exact component={Feminisidios} />
        <Route path='/soporte' exact component={Soporte} />
      </Switch>
    </Router>
  );
}

export default App;