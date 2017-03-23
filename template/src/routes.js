import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Another from './components/pages/Another';

export default [
  {
    path: '/home/',
    component: Home
  },
  {
    path: '/about/',
    component: About
  },
  {
    path: '/services/',
    component: Services
  },
  {
    path: '/about/another/',
    component: Another
  }
];
