import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export default function AddCustomRole() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/roles')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Create Custom Role</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Define a new role and its specific system permissions.</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 'var(--spacing-6)' }}>
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Role Details</h3>
          
          <div className="form-group">
            <label className="form-label">Role Name</label>
            <input type="text" className="form-input" placeholder="e.g. Branch Supervisor" />
          </div>

          <div className="form-group">
            <label className="form-label">Description (Optional)</label>
            <textarea className="form-input" rows={3} placeholder="Brief description of this role..."></textarea>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Permission Toggles</h3>
          
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            {[
              'Dashboard Overview',
              'Manage Members',
              'QR Check-in System',
              'Booking PT',
              'Finance & Payouts',
              'Manage Branches',
              'Campaigns & Notifications'
            ].map(mod => (
              <div key={mod} className="flex items-center justify-between" style={{ padding: 'var(--spacing-3)', border: '1px solid var(--border-grey)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontWeight: 500 }}>{mod}</span>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--primary-red)' }} />
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
            <button className="btn btn-outline" onClick={() => navigate('/roles')}>Cancel</button>
            <button className="btn btn-primary"><Save size={16} /> Save Role</button>
          </div>
        </div>
      </div>
    </div>
  );
}
