import { Search, Filter, Edit, Trash, Lock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const members = [
  { id: 'M-1001', name: 'Budi Santoso', email: 'budi@example.com', phone: '081234567890', joinDate: '2023-01-15', status: 'Active' },
  { id: 'M-1002', name: 'Siti Aminah', email: 'siti@example.com', phone: '081987654321', joinDate: '2024-05-20', status: 'Inactive' },
  { id: 'M-1003', name: 'Reza Pratama', email: 'reza@example.com', phone: '085612341234', joinDate: '2025-02-10', status: 'Active' },
  { id: 'M-1004', name: 'Rina Melati', email: 'rina@example.com', phone: '081333444555', joinDate: '2025-06-12', status: 'Active' },
];

export default function MemberManagement() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Member Directory</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>View and manage all registered members.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/members/add')}>
          Add New Member
        </button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-4)' }}>
          <div className="topbar-search" style={{ border: '1px solid var(--border-grey)', backgroundColor: 'transparent', width: '350px' }}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search by name, email, phone or ID..." />
          </div>
          <button className="btn btn-outline"><Filter size={16} /> Advanced Filter</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Member ID</th>
                <th>Name</th>
                <th>Contact Info</th>
                <th>Join Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.id}>
                  <td style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{m.id}</td>
                  <td style={{ fontWeight: 500 }}>{m.name}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem' }}>{m.email}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.phone}</span>
                    </div>
                  </td>
                  <td>{m.joinDate}</td>
                  <td>
                    <span className={`badge ${m.status === 'Active' ? 'badge-success' : 'badge-neutral'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button className="icon-button" title="View Details" onClick={() => navigate(`/members/${m.id}`)}>
                        <Eye size={16} />
                      </button>
                      <button className="icon-button" title="Edit Member" onClick={() => navigate(`/members/edit/${m.id}`)}>
                        <Edit size={16} />
                      </button>
                      <button className="icon-button" title="Reset Password"><Lock size={16} /></button>
                      <button className="icon-button" title="Delete Member" style={{ color: 'var(--danger)' }}><Trash size={16} /></button>
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
