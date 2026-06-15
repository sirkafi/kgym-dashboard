import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User } from 'lucide-react';

export default function AddMembership() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/membership')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Add New Membership</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Register a new member to the system.</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={18} /> Select Member
          </h3>
          
          <div className="form-group">
            <label className="form-label">Search & Select Member</label>
            <select className="form-input">
              <option value="">-- Choose Member --</option>
              <option value="M-1001">Budi Santoso (M-1001) - Inactive</option>
              <option value="M-1002">Siti Aminah (M-1002) - Active</option>
              <option value="M-1003">Reza Pratama (M-1003) - Expiring</option>
            </select>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Only showing members who don't have an active plan or are close to expiry.
            </p>
          </div>
          
          <div style={{ marginTop: 'var(--spacing-6)', padding: 'var(--spacing-4)', backgroundColor: 'var(--background-grey)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-grey)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>Member Not Found?</p>
            <button className="btn btn-outline" onClick={() => navigate('/members/add')} style={{ width: '100%', justifyContent: 'center' }}>
              Create New Member Profile First
            </button>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Membership Plan</h3>

          <div className="form-group">
            <label className="form-label">Branch Origin</label>
            <select className="form-input">
              <option>KGym Pusat</option>
              <option>KGym Selatan</option>
              <option>KGym Timur</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Select Plan</label>
            <select className="form-input">
              <option>Member Hitam - 1 Year (Rp 3.500.000)</option>
              <option>Member Gold - 1 Year (Rp 2.500.000)</option>
              <option>Monthly Regular (Rp 300.000)</option>
              <option>Daily Pass (Rp 75.000)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select className="form-input">
              <option>Credit Card / Debit</option>
              <option>Bank Transfer (VA)</option>
              <option>Cash</option>
              <option>E-Wallet (QRIS)</option>
            </select>
          </div>

          <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
            <button className="btn btn-outline" onClick={() => navigate('/membership')}>Cancel</button>
            <button className="btn btn-primary"><Save size={16} /> Register Member</button>
          </div>
        </div>
      </div>
    </div>
  );
}
