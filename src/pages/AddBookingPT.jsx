import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export default function AddBookingPT() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/booking-pt')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Assign PT Session</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Schedule a new training session between a member and a trainer.</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Participants</h3>
            <div className="form-group">
              <label className="form-label">Select Member</label>
              <select className="form-input">
                <option value="">-- Choose Member --</option>
                <option value="M-1001">Budi Santoso (M-1001)</option>
                <option value="M-1002">Siti Aminah (M-1002)</option>
                <option value="M-1003">Reza Pratama (M-1003)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Select Trainer (PT)</label>
              <select className="form-input">
                <option value="">-- Choose Trainer --</option>
                <option value="T-01">Coach Dedy</option>
                <option value="T-02">Coach Sarah</option>
                <option value="T-03">Coach Ahmad</option>
              </select>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Schedule Details</h3>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input type="date" className="form-input" />
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
              <div className="form-group">
                <label className="form-label">Start Time</label>
                <input type="time" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Duration</label>
                <select className="form-input">
                  <option>60 Minutes</option>
                  <option>90 Minutes</option>
                  <option>120 Minutes</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Location (Branch)</label>
              <select className="form-input">
                <option>KGym Pusat</option>
                <option>KGym Selatan</option>
                <option>KGym Timur</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-6)', paddingTop: 'var(--spacing-6)', borderTop: '1px solid var(--border-grey)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Session Information</h3>
          <div className="form-group">
            <label className="form-label">Training Goals & Focus</label>
            <input type="text" className="form-input" placeholder="e.g. Hypertrophy & Core Stability" />
          </div>
          <div className="form-group">
            <label className="form-label">Pre-session Notes (Optional)</label>
            <textarea className="form-input" rows={3} placeholder="Any specific notes or medical conditions to be aware of..."></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
          <button className="btn btn-outline" onClick={() => navigate('/booking-pt')}>Cancel</button>
          <button className="btn btn-primary"><Save size={16} /> Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}
