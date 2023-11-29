import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import docentesRoutes from './docentesRoutes';
import StudentsRoutes from './StudentsRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, docentesRoutes, StudentsRoutes]);
}
