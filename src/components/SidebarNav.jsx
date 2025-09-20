import { Link, useLocation } from 'react-router-dom';

const SidebarNav = () => {
  const location = useLocation();
  const pages = [
    { name: 'dashboard', path: '/', label: 'Dashboard' },
    { name: 'products', path: '/products', label: 'Products' },
    { name: 'orders', path: '/orders', label: 'Orders' },
    { name: 'customers', path: '/customers', label: 'Customers' },
    { name: 'profile', path: '/profile', label: 'Profile' },
    { name: 'settings', path: '/settings', label: 'Settings' }
  ];

  return (
    <nav className="space-y-2">
      {pages.map(page => (
        <Link
          key={page.name}
          to={page.path}
          className={`w-full text-left p-2 rounded-lg capitalize block
            hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors
            ${location.pathname === page.path ? 'bg-zinc-200 dark:bg-zinc-700 font-semibold' : ''}`
          }
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;