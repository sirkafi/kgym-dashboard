import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Clock, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function QRActivityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/qr-activity')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Activity Details</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Log Reference: {id || 'LOG-003'}</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Scan Information</h3>
          
          <div className="flex items-center gap-4" style={{ marginBottom: 'var(--spacing-4)', paddingBottom: 'var(--spacing-4)', borderBottom: '1px solid var(--border-grey)' }}>
            <User size={24} color="var(--text-muted)" />
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Member</div>
              <div style={{ fontWeight: 600 }}>Reza Pratama (M-1003)</div>
            </div>
          </div>

          <div className="flex items-center gap-4" style={{ marginBottom: 'var(--spacing-4)', paddingBottom: 'var(--spacing-4)', borderBottom: '1px solid var(--border-grey)' }}>
            <MapPin size={24} color="var(--text-muted)" />
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Location</div>
              <div style={{ fontWeight: 600 }}>KGym Timur</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock size={24} color="var(--text-muted)" />
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Timestamp</div>
              <div style={{ fontWeight: 600 }}>Today, 11:05 AM</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--danger)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--danger)' }}>
            <AlertTriangle size={20} /> Security Flag
          </h3>
          
          <div style={{ backgroundColor: 'var(--danger-bg)', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-md)', color: 'var(--danger)' }}>
            <p style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldAlert size={18} /> Multiple Device Login Detected
            </p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
              The QR code was scanned from a device that does not match the registered user's main mobile device. Possible account sharing.
            </p>
          </div>

          <div className="flex gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
            <button className="btn btn-outline">Dismiss Flag</button>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--danger)' }}>Block Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
