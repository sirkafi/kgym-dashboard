import { Plus, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const memberships = [
  { id: 1, name: 'Budi Santoso', type: 'Member Hitam', branch: 'KGym Pusat', status: 'Active', start: '2025-01-10', end: '2026-01-10' },
  { id: 2, name: 'Siti Aminah', type: 'Bulanan', branch: 'KGym Selatan', status: 'Expired', start: '2025-04-15', end: '2025-05-15' },
  { id: 3, name: 'Andi Wijaya', type: 'Tahunan', branch: 'KGym Pusat', status: 'Active', start: '2025-03-01', end: '2026-03-01' },
  { id: 4, name: 'Rina Melati', type: 'Harian', branch: 'KGym Timur', status: 'Active', start: '2025-06-15', end: '2025-06-15' },
  { id: 5, name: 'Reza Pratama', type: 'Lintas Cabang', branch: 'All Branches', status: 'Active', start: '2025-02-20', end: '2026-02-20' },
];

export default function Membership() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Membership Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Manage membership types, renewals, and statuses.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/membership/add')}><Plus size={16} /> Add Membership</button>
      </div>

      <div className="card" style={{ marginBottom: 'var(--spacing-6)' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-4)' }}>
          <div className="topbar-search" style={{ border: '1px solid var(--border-grey)', backgroundColor: 'transparent' }}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search members..." />
          </div>
          <button className="btn btn-outline"><Filter size={16} /> Filter</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Membership Type</th>
                <th>Branch Origin</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {memberships.map((m) => (
                <tr key={m.id}>
                  <td style={{ fontWeight: 500 }}>{m.name}</td>
                  <td>{m.type}</td>
                  <td>{m.branch}</td>
                  <td>{m.start}</td>
                  <td>{m.end}</td>
                  <td>
                    <span className={`badge ${m.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={() => navigate(`/membership/renew/${m.id}`)}>
                      Renew
                    </button>
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
