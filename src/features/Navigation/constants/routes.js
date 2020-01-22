import Tracking from '../../../screens/Tracking'
import Network from '../../../screens/Network'
import Support from '../../../screens/Support'
import discussionPost from '../../Discussion/components/createPost/Post'


export const routes = [
  {
    display: 'Tracking',
    path: '/Tracking',
    component: Tracking
  },
  {
    display: 'Network',
    path: '/Network',
    component: Network
  },
  {
    display: 'Support',
    path: '/Support',
    component: Support
  },
  {
    display: 'Discussion',
    path: '/Discussion',
    component: discussionPost
  }
]