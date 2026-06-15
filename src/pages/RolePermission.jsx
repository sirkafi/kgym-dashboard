import { Check, X, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const roles = ['Owner', 'Finance', 'Admin/Kasir', 'PT', 'Member', 'Non Member'];

const permissions = [
  { module: 'Dashboard Overview', accesses: [true, true, true, false, false, false] },
  { module: 'Manage Members', accesses: [true, false, true, false, false, false] },
  { module: 'QR Check-in System', accesses: [true, false, true, false, true, false] },
  { module: 'Booking PT', accesses: [true, false, true, true, true, false] },
  { module: 'Finance & Payouts', accesses: [true, true, false, false, false, false] },
  { module: 'Manage Branches', accesses: [true, false, false, false, false, false] },
  { module: 'Campaigns & Notifications', accesses: [true, false, true, false, false, false] },
];

export default function RolePermission() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Role & Permission Matrix</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Configure access control for different user roles in the system.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/roles/add')}><ShieldCheck size={16} /> Add Custom Role</button>
      </div>

      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th style={{ width: '250px' }}>Module / Feature</th>
                {roles.map(role => <th key={role} style={{ textAlign: 'center' }}>{role}</th>)}
              </tr>
            </thead>
            <tbody>
              {permissions.map((perm, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 500 }}>{perm.module}</td>
                  {perm.accesses.map((access, i) => (
                    <td key={i} style={{ textAlign: 'center' }}>
                      {access ? (
                        <Check size={18} color="var(--success)" style={{ margin: '0 auto' }} />
                      ) : (
                        <X size={18} color="var(--border-grey)" style={{ margin: '0 auto' }} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
