import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, MapPin, Key } from 'lucide-react';

export default function AddMember() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/members')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Add New Member</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Register a new user profile and app account access.</p>
          </div>
        </div>
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
              <input type="text" className="form-input" placeholder="e.g. John Doe" />
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select className="form-input">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" placeholder="+62..." />
            </div>
            
            <div className="form-group">
              <label className="form-label">Emergency Contact Name & Number</label>
              <input type="text" className="form-input" placeholder="Wife: +628..." />
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} /> Address Details
            </h3>
            
            <div className="form-group">
              <label className="form-label">Residential Address</label>
              <textarea className="form-input" rows={3} placeholder="Complete physical address..."></textarea>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-3)' }}>
              <div className="form-group">
                <label className="form-label">City</label>
                <input type="text" className="form-input" placeholder="e.g. Jakarta Selatan" />
              </div>
              <div className="form-group">
                <label className="form-label">Zip Code</label>
                <input type="text" className="form-input" placeholder="12345" />
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
              <input type="email" className="form-input" placeholder="member@kgym.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Temporary Password</label>
              <input type="password" className="form-input" placeholder="••••••••" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Member will use this to login to the KGym mobile app. They can change it later.</span>
            </div>
          </div>
          
          <div className="card" style={{ border: '1px solid var(--border-grey)', backgroundColor: 'var(--background-grey)' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Next Steps</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
              After saving this profile, the member will be registered in the system but will not have an active membership yet. You need to assign them a membership plan on the next screen or via the Membership section.
            </p>
          </div>

          <div className="flex justify-end gap-2" style={{ marginTop: 'auto' }}>
            <button className="btn btn-outline" onClick={() => navigate('/members')}>Cancel</button>
            <button className="btn btn-primary"><Save size={16} /> Save Member Profile</button>
          </div>
        </div>

      </div>
    </div>
  );
}
