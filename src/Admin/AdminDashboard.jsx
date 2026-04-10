function AdminDashboard() {
  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="admin-kicker">Dashboard</span>
          <h2>Overview</h2>
        </div>
        <button className="cta-btn" type="button">
          Create new project
        </button>
      </div>

      <div className="admin-stats">
        <div className="admin-stat">
          <h3>18</h3>
          <p>Active projects</p>
        </div>
        <div className="admin-stat">
          <h3>42</h3>
          <p>New enquiries</p>
        </div>
        <div className="admin-stat">
          <h3>7</h3>
          <p>Live collaborations</p>
        </div>
      </div>

      <div className="admin-card">
        <h3>Today’s Focus</h3>
        <p>
          Review the latest pitch decks, assign directors, and follow up on
          inbound studio enquiries.
        </p>
      </div>
    </section>
  );
}

export default AdminDashboard;
