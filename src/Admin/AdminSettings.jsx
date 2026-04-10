function AdminSettings() {
  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="admin-kicker">Settings</span>
          <h2>Studio preferences</h2>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-row">
          <div>
            <h4>Notification emails</h4>
            <p>Send updates to production@dreamanimex.com</p>
          </div>
          <button className="ghost-btn" type="button">
            Update
          </button>
        </div>
        <div className="admin-row">
          <div>
            <h4>Access control</h4>
            <p>Manage roles for directors and producers.</p>
          </div>
          <button className="ghost-btn" type="button">
            Manage
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdminSettings;
