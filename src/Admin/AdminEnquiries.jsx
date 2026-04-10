import { useEffect, useState } from 'react';




function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);

  const getEnquiries = async () => {
    try {      
      const response = await fetch('http://localhost:4000/users/enquiries', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch enquiries');
      }

      const data = await response.json();
      const normalized = Array.isArray(data?.enquiries)
        ? data.enquiries.map((item) => ({
            id: item.id,
            fullName: item.Fullname ?? item.fullName ?? '',
            emailAddress: item.Emailaddress ?? item.emailAddress ?? '',
            projectSummary: item.Projectsummary ?? item.projectSummary ?? '',
            projectType: item.Projecttype ?? item.projectType ?? '',
          }))
        : [];
      setEnquiries(normalized);
    } catch (error) {
      alert(error.message || 'Error fetching enquiries');
      setEnquiries([]);
    }
  }
  useEffect(() => {  
    getEnquiries();
  }, []);
  const handleDelete = async (id) => {
   if (!window.confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const res = await fetch(`http://localhost:4000/users/enquiry/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Delete failed');
      }

      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(error.message || 'Delete failed');
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="admin-kicker">Enquiries</span>
          <h2>Incoming requests</h2>
        </div>
        <button className="ghost-btn" type="button">
          Export
        </button>
      </div>

      <div className="admin-list">
        <div className="admin-list-item admin-list-head">
          <div>Full Name</div>
          <div>Project Type</div>
          <div>Project Summary</div>
          <div>Email Address</div>
          <div>Action</div>
        </div>
        {enquiries.map((item) => (
          <div key={item.id ?? item.emailAddress} className="admin-list-item">
            <div>{item.fullName}</div>
            <div>{item.projectType}</div>
            <div>{item.projectSummary}</div>
            <div>{item.emailAddress}</div>
            <div>
              <button
                className="ghost-btn"
                type="button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {enquiries.length === 0 ? (
          <div className="admin-list-item admin-list-empty">
            <div>No enquiries found.</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default AdminEnquiries;
