const projectRows = [
  { name: 'Skyline Reverie', stage: 'Pre-production', owner: 'A. Kapoor' },
  { name: 'Echoes of Aster', stage: 'Storyboarding', owner: 'S. Mehta' },
  { name: 'Nova Requiem', stage: 'Co-production', owner: 'R. Iyer' },
];

function AdminProjects() {
  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="admin-kicker">Projects</span>
          <h2>Manage active productions</h2>
        </div>
        <button className="ghost-btn" type="button">
          Add project
        </button>
      </div>

      <div className="admin-table">
        <div className="admin-table-row admin-table-head">
          <span>Project</span>
          <span>Stage</span>
          <span>Owner</span>
        </div>
        {projectRows.map((row) => (
          <div key={row.name} className="admin-table-row">
            <span>{row.name}</span>
            <span>{row.stage}</span>
            <span>{row.owner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminProjects;
