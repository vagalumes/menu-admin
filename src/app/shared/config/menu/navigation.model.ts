import {MultilevelNode} from "ng-material-multilevel-menu";

export const navigationModel: MultilevelNode[] = [
  {
    label: 'Home',
    link: '/home',
    icon: 'home'
  },
  {
    label: 'About',
    link: '/about',
    icon: 'info'
  },
  {
    label: 'Contact',
    link: '/contact',
    icon: 'contact_mail'
  },
  {
    label: 'Admin',
    icon: 'admin_panel_settings',
    items: [
      {
        label: 'Users',
        link: '/admin/users',
        icon: 'people'
      },
      {
        label: 'Roles',
        link: '/admin/roles',
        icon: 'assignment_ind'
      }
    ]
  }
]
