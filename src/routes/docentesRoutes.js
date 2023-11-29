import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import Lazy from '../../node_modules/yup/lib/Lazy';
import Docentes from 'pages/dashboard/docentes.js/index';
import Students from 'pages/dashboard/docentes.js/index';

//const Docentes = Loadable(lazy(() => import('pages/dashboard/docentes.js')));

const Create = Loadable(lazy(() => import('pages/dashboard/docentes.js/create')));

const Edit = Loadable(lazy(() => import('pages/dashboard/docentes.js/edit')));

const docentesRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'docentes',
      element: <Students />
    },
    {
      path: 'Docentes/create',
      element: <Create />
    },

    {
      path: 'docentes/edit/:studentId',
      element: <Edit />
    }
  ]
};
export default docentesRoutes;
