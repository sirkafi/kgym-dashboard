import { Search, Bell, Settings, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} color="var(--text-muted)" />
        <input type="text" placeholder="Search members, transactions..." />
      </div>

      <div className="topbar-actions">
        <button className="icon-button">
          <Bell size={20} />
        </button>
        
        <div style={{ position: 'relative' }}>
          <button className="icon-button" onClick={() => setShowSettings(!showSettings)}>
            <Settings size={20} />
          </button>
          
          {showSettings && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '0.5rem',
              backgroundColor: 'var(--white)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-grey)',
              zIndex: 50,
              minWidth: '180px',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => {
                  setShowSettings(false);
                  navigate('/profile/edit');
                }}
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
              >
                <User size={16} /> Edit Profile
              </button>
              
              <button 
                onClick={() => {
                  setShowSettings(false);
                  localStorage.removeItem('kgym_auth');
                  navigate('/login');
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderTop: '1px solid var(--border-grey)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  color: 'var(--danger)',
                  textAlign: 'left'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--danger-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>

        <div className="user-profile">
          <div className="avatar">A</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Admin User</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
