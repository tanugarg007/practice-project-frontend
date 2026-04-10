const galleryDrafts = [
  { title: 'Mirage Protocol', status: 'Draft' },
  { title: 'Sable Harbor', status: 'Ready to publish' },
  { title: 'Violet Circuit', status: 'Needs review' },
];

function AdminGallery() {
  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="admin-kicker">Gallery</span>
          <h2>Gallery drafts</h2>
        </div>
        <button className="ghost-btn" type="button">
          New entry
        </button>
      </div>

      <div className="admin-card">
        {galleryDrafts.map((item) => (
          <div key={item.title} className="admin-row">
            <div>
              <h4>{item.title}</h4>
              <p>Status: {item.status}</p>
            </div>
            <button className="ghost-btn" type="button">
              Edit
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminGallery;
