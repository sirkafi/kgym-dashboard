import { Bell, Gift, Clock, Zap, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const campaigns = [
  { id: 1, name: 'Birthday Wishes & Promo', trigger: 'Member Birthday', type: 'Automated', status: 'Active', icon: <Gift size={16} /> },
  { id: 2, name: 'Missing You - 14 Days No Show', trigger: '14 Days Inactive', type: 'Automated', status: 'Active', icon: <Clock size={16} /> },
  { id: 3, name: 'Membership Expiring Soon', trigger: '7 Days Before Expire', type: 'Automated', status: 'Active', icon: <Bell size={16} /> },
  { id: 4, name: 'New Year Flash Sale', trigger: 'Manual Send', type: 'Campaign', status: 'Draft', icon: <Zap size={16} /> },
];

export default function Notifications() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Notification & Engagement</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Automate member retention and send marketing campaigns.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/notifications/create')}><Plus size={16} /> Create Campaign</button>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Automated Workflows & Campaigns</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Trigger</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div className="flex items-center gap-2" style={{ fontWeight: 500 }}>
                      <div style={{ backgroundColor: 'var(--background-grey)', padding: '0.25rem', borderRadius: 'var(--radius-sm)' }}>
                        {c.icon}
                      </div>
                      {c.name}
                    </div>
                  </td>
                  <td>{c.trigger}</td>
                  <td>{c.type}</td>
                  <td>
                    <span className={`badge ${c.status === 'Active' ? 'badge-success' : 'badge-neutral'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={() => navigate(`/notifications/edit/${c.id}`)}>Edit</button>
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
