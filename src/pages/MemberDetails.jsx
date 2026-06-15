import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Activity, CalendarCheck, Edit, Shield } from 'lucide-react';

export default function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/members')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Member Profile</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>ID: {id || 'M-1001'}</p>
          </div>
        </div>
        <button className="btn btn-outline"><Edit size={16} /> Edit Profile</button>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 'var(--spacing-6)' }}>
        
        {/* Left Column: Member Identity & Status */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card" style={{ textAlign: 'center', paddingTop: 'var(--spacing-6)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--background-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-4)' }}>
              <User size={40} color="var(--text-muted)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Budi Santoso</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 'var(--spacing-4)' }}>budi@example.com • 081234567890</div>
            <div className="flex justify-center gap-2" style={{ marginBottom: 'var(--spacing-5)' }}>
              <span className="badge badge-success">Active Member</span>
              <span className="badge badge-neutral">Joined Jan 2023</span>
            </div>
            <div style={{ borderTop: '1px solid var(--border-grey)', paddingTop: 'var(--spacing-4)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Current Membership</div>
              <div style={{ fontWeight: 600 }}>Member Hitam (1 Year)</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Expires: 10 Jan 2026</div>
              <button className="btn btn-outline" style={{ width: '100%', marginTop: 'var(--spacing-4)', fontSize: '0.75rem', padding: '0.35rem' }} onClick={() => navigate(`/membership/renew/${id}`)}>
                Renew Membership
              </button>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={18} /> Assigned PT
            </h3>
            <div className="flex items-center gap-4">
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.125rem' }}>
                CD
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.15rem' }}>Coach Dedy</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Senior Trainer</div>
              </div>
            </div>
            <div className="flex justify-between items-center" style={{ marginTop: 'var(--spacing-5)', padding: 'var(--spacing-4)', backgroundColor: 'var(--background-grey)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Remaining Sessions</div>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary-black)' }}>9 <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ 12</span></div>
            </div>
          </div>
        </div>

        {/* Right Column: Activity History */}
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <div className="card stat-card">
              <div className="stat-header">Total Visits (YTD) <Activity size={16} className="stat-icon blue" /></div>
              <div className="stat-value">142</div>
            </div>
            <div className="card stat-card">
              <div className="stat-header">Avg. Sessions / Week <CalendarCheck size={16} className="stat-icon green" /></div>
              <div className="stat-value">3.2</div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-4)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} /> Recent Check-in Activity</h3>
              <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>View All</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { date: 'Today, 10:45 AM', location: 'KGym Pusat', type: 'Gym Entry' },
                { date: '12 Jun 2026, 17:30', location: 'KGym Pusat', type: 'PT Session (Coach Dedy)' },
                { date: '10 Jun 2026, 06:15 AM', location: 'KGym Pusat', type: 'Gym Entry' },
                { date: '08 Jun 2026, 18:00', location: 'KGym Selatan', type: 'Gym Entry' },
              ].map((act, i) => (
                <div key={i} className="flex items-center justify-between" style={{ paddingBottom: '1rem', borderBottom: i !== 3 ? '1px solid var(--border-grey)' : 'none' }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>{act.type}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{act.location}</div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{act.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
