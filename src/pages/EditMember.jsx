import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, MapPin, Key, UserX } from 'lucide-react';

export default function EditMember() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/members')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Edit Member Profile</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Update profile details and account access for {id || 'M-1001'}.</p>
          </div>
        </div>
        <button className="btn btn-outline" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>
          <UserX size={16} /> Deactivate Account
        </button>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
        
        {/* Left Column */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={18} /> Personal Information
            </h3>
            
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" defaultValue="Budi Santoso" />
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-input" defaultValue="1990-05-15" />
              </div>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select className="form-input" defaultValue="Male">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" defaultValue="+628111222333" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Emergency Contact Name & Number</label>
              <input type="text" className="form-input" defaultValue="Wife: +628999888777" />
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} /> Address Details
            </h3>
            
            <div className="form-group">
              <label className="form-label">Residential Address</label>
              <textarea className="form-input" rows={3} defaultValue="Jl. Sudirman No 123"></textarea>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-3)' }}>
              <div className="form-group">
                <label className="form-label">City</label>
                <input type="text" className="form-input" defaultValue="Jakarta Pusat" />
              </div>
              <div className="form-group">
                <label className="form-label">Zip Code</label>
                <input type="text" className="form-input" defaultValue="10220" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Key size={18} /> App Account Access
            </h3>
            
            <div className="form-group">
              <label className="form-label">Email Address (Login ID)</label>
              <input type="email" className="form-input" defaultValue="budi@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Reset Password</label>
              <input type="password" className="form-input" placeholder="Leave blank to keep current password" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Fill this only if the member requested a manual password reset.</span>
            </div>
          </div>
          
          <div className="flex justify-end gap-2" style={{ marginTop: 'auto' }}>
            <button className="btn btn-outline" onClick={() => navigate('/members')}>Cancel</button>
            <button className="btn btn-primary"><Save size={16} /> Save Changes</button>
          </div>
        </div>

      </div>
    </div>
  );
}
