import { Search, Filter, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const logs = [
  { id: 'LOG-001', time: '10:45 AM', name: 'Budi Santoso', branch: 'KGym Pusat', activity: 'Gym Check-in', status: 'Valid' },
  { id: 'LOG-002', time: '10:50 AM', name: 'Siti Aminah', branch: 'KGym Selatan', activity: 'Sewa Sesi PT', status: 'Valid' },
  { id: 'LOG-003', time: '11:05 AM', name: 'Reza Pratama', branch: 'KGym Timur', activity: 'Gym Check-in', status: 'Flagged' },
  { id: 'LOG-004', time: '11:15 AM', name: 'Andi Wijaya', branch: 'KGym Pusat', activity: 'Gym Check-in', status: 'Valid' },
];

export default function QRActivity() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>QR Activity & Check-in</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Monitor real-time member check-ins and activities.</p>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--spacing-5)', marginBottom: 'var(--spacing-6)' }}>
        <div className="card stat-card">
          <div className="stat-header">Total Scans Today</div>
          <div className="stat-value">1,245</div>
        </div>
        <div className="card stat-card">
          <div className="stat-header">Flagged Activity (Anti-fraud)</div>
          <div className="stat-value" style={{ color: 'var(--danger)' }}>12</div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-4)' }}>
          <div className="topbar-search" style={{ border: '1px solid var(--border-grey)', backgroundColor: 'transparent' }}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search logs..." />
          </div>
          <button className="btn btn-outline"><Filter size={16} /> Filter</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Member Name</th>
                <th>Branch</th>
                <th>Activity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} style={{ backgroundColor: log.status === 'Flagged' ? 'var(--danger-bg)' : 'transparent' }}>
                  <td>{log.time}</td>
                  <td style={{ fontWeight: 500 }}>{log.name}</td>
                  <td>{log.branch}</td>
                  <td>{log.activity}</td>
                  <td>
                    {log.status === 'Valid' ? (
                      <span className="badge badge-success">Valid</span>
                    ) : (
                      <span className="badge badge-danger" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                        <AlertTriangle size={12} /> Flagged
                      </span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={() => navigate(`/qr-activity/${log.id}`)}>
                      Details
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
