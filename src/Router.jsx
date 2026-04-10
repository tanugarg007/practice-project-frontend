import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Sliding from './Pages/Sliding';
import Gallery from './Pages/gallery';
import Footer from './Pages/Footer';
import Enquiry from './Pages/Enquiry';
import Contact from './Pages/Contact';
import AdminLayout from './Admin/AdminLayout';
import AdminDashboard from './Admin/AdminDashboard';
import AdminProjects from './Admin/AdminProjects';
import AdminEnquiries from './Admin/AdminEnquiries';
import AdminGallery from './Admin/AdminGallery';
import AdminSettings from './Admin/AdminSettings';
import AdminLogin from './Admin/AdminLogin';

function Home() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Build the next chapter of Dream Animex.</h1>
          <p>
            A cinematic anime studio for visionary creators, global talent, and
            unforgettable stories.
          </p>
          <div className="page-hero-actions">
            <button className="cta-btn" type="button">
              Start a project
            </button>
            <button className="ghost-btn" type="button">
              Watch reel
            </button>
          </div>
        </div>
      </section>
      <Sliding />
      <Gallery />
    </>
  );
}

function Placeholder({ title }) {
  return (
    <section className="page-shell">
      <h2>{title}</h2>
      <p>This page is ready for your content.</p>
    </section>
  );
}

function Router() {
  const isAdminAuthed = localStorage.getItem('da_admin_auth') === 'true';

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studios" element={<Placeholder title="Studios" />} />
        <Route
          path="/projects"
          element={
            <Gallery
              kicker="Projects"
              title="Current Projects in Development"
              subtitle="The same signature concepts showcased on the home page — ready for deeper collaboration."
            />
          }
        />
        <Route path="/talent" element={<Placeholder title="Talent" />} />
        <Route path="/events" element={<Placeholder title="Events" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={isAdminAuthed ? <AdminLayout /> : <Navigate to="/admin/login" replace />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="enquiries" element={<AdminEnquiries />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
