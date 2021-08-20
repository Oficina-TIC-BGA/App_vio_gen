import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as IcoMoon from 'react-icons/im';


export const SidebarData = [
  {
    title: 'Principal',
    path: '/principal',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Estadisticas',
        path: '/principal/estadisticas',
        icon: <IcoMoon.ImStatsDots />
      },
      {
        title: 'Causas',
        path: '/principal/causas',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reportes',
    path: '/reportes',
    fontSize: 8,
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Registrar victima',
        path: '/reportes/registrarVictima',
        icon: <FaIcons.FaFileImport />,
        cName: 'sub-nav'
      },
      {
        title: 'Crear reportes',
        path: '/reportes/crearReporte',
        icon: <FaIcons.FaFileImport />,
        cName: 'sub-nav'
      },
      {
        title: 'Recientes',
        path: '/reportes/recientes',
        icon: <FaIcons.FaClock />,
        cName: 'sub-nav'
      },
      {
        title: 'Actualizar',
        path: '/reportes/actualizar_estado',
        icon: <FaIcons.FaSyncAlt />,
        cName: 'sub-nav'
      },
      {
        title: 'Historicos',
        path: '/reportes/historicos',
        icon: <FaIcons.FaHistory />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Usuarios',
    path: '/usuarios',
    icon: <FaIcons.FaUsers />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Aministrar',
        path: '/usuarios/administrar',
        icon: <AiIcons.AiFillControl />
      },
      {
        title: 'Listar reportes por usuario',
        path: '/usuarios/listarreportes',
        icon: <FaIcons.FaAddressBook />
      }
    ]
  },
  {
    title: 'Geodata',
    path: '/geodata',
    icon: <FaIcons.FaGlobeAmericas />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Violencia intrafamiliar',
        path: '/geodata/violenciaintrafamiliar',
        icon: <FaIcons.FaMapMarkedAlt />
      },
      {
        title: 'Feminicidios',
        path: '/geodata/feminisidios',
        icon: <FaIcons.FaMapMarkedAlt />
      }
    ]
  },
  {
    title: 'Soporte',
    path: '/soporte',
    icon: <IoIcons.IoMdHelpCircle />
  }
];