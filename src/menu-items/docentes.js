import { TeamOutlined } from '@ant-design/icons';

const icons = {
  TeamOutlined
};

const docentes = {
  id: 'docentes',
  title: 'Docentes',
  type: 'group',
  children: [
    {
      id: 'docentes',
      title: 'Docentes',
      type: 'item',
      url: '/docentes',
      icon: icons.TeamOutlined
    }
  ]
};

export default docentes;
