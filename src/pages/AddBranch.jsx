import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, MapPin, Key, Shield } from 'lucide-react';

export default function AddBranch() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/branches')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Create New Branch</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Set up a new KGym outlet and assign an administrator.</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
        
        {/* Left Column: Branch Information */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} /> Branch Details
            </h3>
            
            <div className="form-group">
              <label className="form-label">Branch Name</label>
              <input type="text" className="form-input" placeholder="e.g. KGym Utara" />
            </div>

            <div className="form-group">
              <label className="form-label">Full Address</label>
              <textarea className="form-input" rows={3} placeholder="Complete physical address..."></textarea>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
              <div className="form-group">
                <label className="form-label">City / Region</label>
                <input type="text" className="form-input" placeholder="e.g. Jakarta Utara" />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Number</label>
                <input type="tel" className="form-input" placeholder="+62..." />
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Operating Hours & Facilities</h3>
            
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
              <div className="form-group">
                <label className="form-label">Opening Time</label>
                <input type="time" className="form-input" defaultValue="06:00" />
              </div>
              <div className="form-group">
                <label className="form-label">Closing Time</label>
                <input type="time" className="form-input" defaultValue="22:00" />
              </div>
            </div>

            <label className="form-label" style={{ display: 'block', marginBottom: 'var(--spacing-3)' }}>Available Facilities</label>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
              {['Cardio Area', 'Free Weights', 'Machines', 'Locker Room', 'Shower', 'Sauna', 'Studio Class', 'Cafe / Lounge'].map(fac => (
                <label key={fac} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: 'var(--primary-red)' }} />
                  {fac}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Admin Assignment */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Key size={18} /> Assign Branch Admin
            </h3>
            
            <div className="form-group">
              <label className="form-label">Admin Full Name</label>
              <input type="text" className="form-input" placeholder="Name of the branch manager" />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address (Login ID)</label>
              <input type="email" className="form-input" placeholder="admin.utara@kgym.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Temporary Password</label>
              <input type="password" className="form-input" placeholder="••••••••" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Admin will be forced to change this on first login.</span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={18} /> Admin Access Level
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              {[
                { name: 'Local Branch Dashboard', default: true },
                { name: 'Manage Local Members', default: true },
                { name: 'Assign Local PT Sessions', default: true },
                { name: 'Process PT Withdrawals', default: false },
                { name: 'Access Corporate Finance', default: false },
              ].map(perm => (
                <label key={perm.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', border: '1px solid var(--border-grey)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{perm.name}</span>
                  <input type="checkbox" defaultChecked={perm.default} style={{ width: '18px', height: '18px', accentColor: 'var(--primary-red)' }} />
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-2" style={{ marginTop: 'auto' }}>
            <button className="btn btn-outline" onClick={() => navigate('/branches')}>Cancel</button>
            <button className="btn btn-primary"><Save size={16} /> Save & Create Branch</button>
          </div>
        </div>

      </div>
    </div>
  );
}
