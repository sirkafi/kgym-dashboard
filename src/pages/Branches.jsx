import { Activity, Users, CreditCard, RefreshCcw, MoreVertical, Edit2, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const branches = [
  { id: 1, name: 'KGym Pusat', location: 'Jakarta Pusat', admin: 'Budi Santoso', members: 1250, revenue: 'Rp 65.4M', checkin: 180, sync: 'Just now' },
  { id: 2, name: 'KGym Selatan', location: 'Jakarta Selatan', admin: 'Siti Aminah', members: 850, revenue: 'Rp 40.2M', checkin: 110, sync: '2 mins ago' },
  { id: 3, name: 'KGym Timur', location: 'Jakarta Timur', admin: 'Andi Wijaya', members: 350, revenue: 'Rp 19.8M', checkin: 52, sync: '15 mins ago' },
];

export default function Branches() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (id) => {
    if (activeMenu === id) setActiveMenu(null);
    else setActiveMenu(id);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Multi Branch Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Monitor real-time data sync and performance across all outlets.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline"><RefreshCcw size={16} /> Sync All Data</button>
          <button className="btn btn-primary" onClick={() => navigate('/branches/add')}><Plus size={16} /> Create Branch</button>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-6)' }}>
        {branches.map((b) => (
          <div key={b.id} className="card" style={{ padding: 0, overflow: 'visible' }}>
            <div style={{ padding: 'var(--spacing-6)' }}>
              <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-6)' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{b.name}</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{b.location} • Admin: {b.admin}</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <button className="icon-button" onClick={() => toggleMenu(b.id)}><MoreVertical size={20} /></button>
                  {activeMenu === b.id && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      backgroundColor: 'var(--white)',
                      boxShadow: 'var(--shadow-md)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-grey)',
                      zIndex: 10,
                      minWidth: '120px',
                      overflow: 'hidden'
                    }}>
                      <button 
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          color: 'var(--text-main)',
                          textAlign: 'left'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--background-grey)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        onClick={() => navigate(`/branches/edit/${b.id}`)}
                      >
                        <Edit2 size={16} /> Edit Branch
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--spacing-4)' }}>
                <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--background-grey)', borderRadius: 'var(--radius-md)' }}>
                  <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Users size={16} /> Members
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>{b.members}</div>
                </div>
                <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--background-grey)', borderRadius: 'var(--radius-md)' }}>
                  <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Activity size={16} /> Check-in
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>{b.checkin}</div>
                </div>
                <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--primary-black)', color: 'var(--white)', borderRadius: 'var(--radius-md)' }}>
                  <div className="flex items-center gap-2" style={{ color: '#A1A1AA', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <CreditCard size={16} /> Revenue
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.125rem', whiteSpace: 'nowrap' }}>{b.revenue}</div>
                </div>
              </div>
              
            </div>
            
            <div className="flex justify-between items-center" style={{ padding: 'var(--spacing-4) var(--spacing-6)', backgroundColor: '#FAFAFA', borderTop: '1px solid var(--border-grey)', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Last synced {b.sync}</span>
              <button style={{ background: 'none', border: 'none', color: 'var(--primary-red)', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>View Dashboard →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
