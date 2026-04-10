import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('da_admin_auth', 'true');
    navigate('/admin', { replace: true });
  };

  return (
    <section className="admin-login-shell">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <span className="admin-kicker">Admin Access</span>
          <h2>Welcome back</h2>
          <p>Sign in to manage Dream Animex projects and enquiries.</p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label>
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@dreamanimex.com"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </label>
          <button className="cta-btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
