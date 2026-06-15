import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Wallet, AlertCircle } from 'lucide-react';

const withdrawals = [
  { id: 'WD-001', pt: 'Coach Dedy', branch: 'KGym Pusat', amount: 'Rp 4.500.000', reqDate: '15 Jun 2026', status: 'Pending' },
  { id: 'WD-002', pt: 'Coach Sarah', branch: 'KGym Selatan', amount: 'Rp 2.800.000', reqDate: '14 Jun 2026', status: 'Pending' },
  { id: 'WD-003', pt: 'Coach Ahmad', branch: 'KGym Timur', amount: 'Rp 1.500.000', reqDate: '14 Jun 2026', status: 'Pending' },
  { id: 'WD-004', pt: 'Coach Budi', branch: 'KGym Pusat', amount: 'Rp 6.200.000', reqDate: '13 Jun 2026', status: 'Flagged' },
];

export default function ProcessWithdrawals() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/booking-pt')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Process PT Withdrawals</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Review and approve Personal Trainer payout requests.</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 'var(--spacing-6)' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-4)' }}>
          <div className="flex items-center gap-3">
            <div style={{ backgroundColor: 'var(--warning-bg)', color: 'var(--warning)', padding: '0.5rem', borderRadius: 'var(--radius-md)',marginRight: 'var(--spacing-3)'
             }}>
              <Wallet size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Total Pending</div>
              <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>Rp 15.000.000</div>
            </div>
          </div>
          <button className="btn btn-primary">Approve All Pending</button>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Withdrawal Requests</h3>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Trainer Name</th>
                <th>Branch</th>
                <th>Requested Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((w) => (
                <tr key={w.id} style={{ backgroundColor: w.status === 'Flagged' ? 'var(--danger-bg)' : 'transparent' }}>
                  <td style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{w.id}</td>
                  <td style={{ fontWeight: 500 }}>{w.pt}</td>
                  <td>{w.branch}</td>
                  <td>{w.reqDate}</td>
                  <td style={{ fontWeight: 600 }}>{w.amount}</td>
                  <td>
                    {w.status === 'Pending' ? (
                      <span className="badge badge-warning">Pending</span>
                    ) : (
                      <span className="badge badge-danger" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertCircle size={12} /> Flagged
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button className="icon-button" style={{ color: 'var(--success)', backgroundColor: 'var(--success-bg)' }} title="Approve">
                        <Check size={16} />
                      </button>
                      <button className="icon-button" style={{ color: 'var(--danger)', backgroundColor: 'var(--danger-bg)' }} title="Reject">
                        <X size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
