import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const adminLinks = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Projects', to: '/admin/projects' },
  { label: 'Enquiries', to: '/admin/enquiries' },
  { label: 'Gallery', to: '/admin/gallery' },
  { label: 'Settings', to: '/admin/settings' },
];

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('da_admin_auth');
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="admin-mark">DA</span>
          <div>
            <h3>Admin Portal</h3>
            <p>Dream Animex</p>
          </div>
        </div>

        <nav className="admin-nav">
          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/admin'}
              className={({ isActive }) =>
                `admin-link ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>
          <div>
            <p className="admin-name">Admin User</p>
            <span className="admin-role">Studio Manager</span>
          </div>
        </div>

        <button className="admin-logout" type="button" onClick={handleLogout}>
          Log out
        </button>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
