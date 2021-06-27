import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Dashboard',
    to: '/admin',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/admin/EditHome',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Messages',
    to: '/admin/ContactUs',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Images',
    to: '/admin/AddImage',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Events',
    to: '/admin/Events',
    icon: 'cil-star',
  },

]

export default _nav
