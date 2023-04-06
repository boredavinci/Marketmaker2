import { Icon } from '@chakra-ui/react'
import {
  MdHome, MdShowChart, MdOutlineCreate
} from 'react-icons/md'

// Admin Imports
import MainDashboard from 'pages/admin/default'
import NFTMarketplace from 'pages/admin/nft-marketplace'

// Auth Imports
import { IRoute } from 'types/navigation'
import Arbitrage from 'pages/admin/arbitrage'

const routes: IRoute[] = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Strategies',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdShowChart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true
  },
  {
    name: 'My Arbitrage strategy',
    layout: '/admin',
    path: '/arbitrage',
    icon: <Icon as={MdOutlineCreate} width='20px' height='20px' color='inherit' />,
    component: Arbitrage,
  },

]

export default routes
