import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export default function RenewMembership() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/membership')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Renew Membership</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Process membership renewal for Member ID: {id || '10293'}</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Renewal Details</h3>
        
        <div className="form-group">
          <label className="form-label">Member Name</label>
          <input type="text" className="form-input" value="Budi Santoso" disabled style={{ backgroundColor: 'var(--background-grey)' }} />
        </div>

        <div className="form-group">
          <label className="form-label">Current Membership</label>
          <input type="text" className="form-input" value="Member Hitam (Expires: 10 Jan 2026)" disabled style={{ backgroundColor: 'var(--background-grey)' }} />
        </div>

        <div className="form-group">
          <label className="form-label">Select New Plan</label>
          <select className="form-input">
            <option>Member Hitam - 1 Year (Rp 3.500.000)</option>
            <option>Member Gold - 1 Year (Rp 2.500.000)</option>
            <option>Monthly Regular (Rp 300.000)</option>
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

        <div className="form-group">
          <label className="form-label">Promo Code (Optional)</label>
          <input type="text" className="form-input" placeholder="Enter code..." />
        </div>

        <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
          <button className="btn btn-outline" onClick={() => navigate('/membership')}>Cancel</button>
          <button className="btn btn-primary"><Save size={16} /> Process Payment & Renew</button>
        </div>
      </div>
    </div>
  );
}
