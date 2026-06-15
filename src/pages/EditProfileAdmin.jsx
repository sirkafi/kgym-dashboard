import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, Mail, Lock, Camera } from 'lucide-react';

export default function EditProfileAdmin() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Edit Profile</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Update your personal administrator account details.</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 'var(--spacing-6)' }}>
        
        {/* Left Column: Avatar & Quick Info */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ position: 'relative', marginBottom: 'var(--spacing-4)' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--primary-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
              A
            </div>
            <button style={{ 
              position: 'absolute', 
              bottom: 0, 
              right: 0, 
              backgroundColor: 'var(--primary-black)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '50%', 
              width: '36px', 
              height: '36px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              border: '2px solid white'
            }}>
              <Camera size={16} />
            </button>
          </div>
          <h3 style={{ marginBottom: '0.25rem' }}>Admin User</h3>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 'var(--spacing-2)' }}>Super Admin</div>
          <span className="badge badge-success">Active Account</span>
        </div>

        {/* Right Column: Form Edit */}
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={18} /> Personal Information
          </h3>
          
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" defaultValue="Admin User" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" defaultValue="+628123456789" />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 'var(--spacing-6)' }}>
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" className="form-input" defaultValue="hq.admin@kgym.com" style={{ paddingLeft: '2.25rem' }} />
            </div>
          </div>

          <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid var(--border-grey)', paddingTop: 'var(--spacing-4)' }}>
            <Lock size={18} /> Change Password
          </h3>

          <div className="form-group">
            <label className="form-label">Current Password</label>
            <input type="password" className="form-input" placeholder="Enter current password to authorize changes" />
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <div className="form-group">
              <label className="form-label">New Password</label>
              <input type="password" className="form-input" placeholder="New password" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <input type="password" className="form-input" placeholder="Confirm new password" />
            </div>
          </div>

          <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
            <button className="btn btn-outline" onClick={() => navigate(-1)}>Cancel</button>
            <button className="btn btn-primary"><Save size={16} /> Save Changes</button>
          </div>
        </div>

      </div>
    </div>
  );
}
