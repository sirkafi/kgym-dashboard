import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Edit2, XCircle, User, Target, ClipboardList } from 'lucide-react';

export default function ViewBookingPT() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/booking-pt')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>PT Session Details</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Session ID: {id || 'PT-98012'}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>
            <XCircle size={16} /> Cancel Session
          </button>
          <button className="btn btn-primary">
            <Edit2 size={16} /> Reschedule
          </button>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-6)' }}>
        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Session Information</h3>
            
            <div className="grid" style={{ gridTemplateColumns: '120px 1fr', gap: 'var(--spacing-4)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Trainer:</div>
              <div className="flex items-center gap-2">
                <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: 'var(--primary-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>CD</div>
                <span style={{ fontWeight: 500 }}>Coach Dedy (Senior Trainer)</span>
              </div>
              
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Schedule:</div>
              <div style={{ fontWeight: 500 }}>15 Jun 2026, 15:00 - 16:00 (60 Mins)</div>
              
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Location:</div>
              <div style={{ fontWeight: 500 }}>KGym Pusat - Main Floor Area</div>
              
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Status:</div>
              <div><span className="badge badge-neutral">Upcoming</span></div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-4)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={18} /> Training Goals & Focus
              </h3>
            </div>
            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--background-grey)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-4)' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Hypertrophy & Core Stability</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Focus on upper body strength and core engaging exercises for today's session based on member's 3-month goal.</div>
            </div>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-4)' }}>
              <ClipboardList size={18} /> Pre-session Notes (Trainer)
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              "Member reported slight discomfort in left shoulder during last session. We will substitute overhead presses with lateral raises and focus on controlled negatives."
            </p>
          </div>
        </div>

        <div className="flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-4)' }}>
              <User size={18} /> Participant (Member)
            </h3>
            <div className="flex items-center gap-3" style={{ marginBottom: 'var(--spacing-4)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--background-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={24} color="var(--text-muted)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.125rem' }}>Budi Santoso</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>M-1001 • Active Member</div>
              </div>
            </div>
            <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.875rem' }} onClick={() => navigate('/members/M-1001')}>
              View Full Member Profile
            </button>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Payment Information</h3>
            <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 'var(--spacing-3)' }}>
              <div className="flex justify-between" style={{ paddingBottom: '0.5rem', borderBottom: '1px dashed var(--border-grey)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Package</span>
                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>10x Session Bundle</span>
              </div>
              <div className="flex justify-between" style={{ paddingBottom: '0.5rem', borderBottom: '1px dashed var(--border-grey)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Deduction</span>
                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>1 Session</span>
              </div>
              <div className="flex justify-between" style={{ paddingBottom: '0.5rem', borderBottom: '1px dashed var(--border-grey)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Remaining</span>
                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>9 Sessions Left</span>
              </div>
              <div className="flex justify-between items-center" style={{ marginTop: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Status</span>
                <span className="badge badge-success"><CheckCircle size={12} style={{marginRight: 4}}/> Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
