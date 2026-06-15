import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Send } from 'lucide-react';

export default function CreateCampaign() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/notifications')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Create Notification Campaign</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Design automated messages and marketing campaigns.</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px' }}>
        <div className="form-group">
          <label className="form-label">Campaign Name</label>
          <input type="text" className="form-input" placeholder="e.g. New Year Flash Sale" />
        </div>

        <div className="form-group">
          <label className="form-label">Trigger Event</label>
          <select className="form-input">
            <option>Manual Send (Blast)</option>
            <option>On Member Birthday</option>
            <option>7 Days Before Membership Expires</option>
            <option>14 Days No Check-in</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Target Audience Status</label>
          <select className="form-input">
            <option>All Members</option>
            <option>Active Members Only</option>
            <option>Inactive Members (Expired)</option>
            <option>Custom Segment</option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: 'var(--spacing-5)' }}>
          <label className="form-label" style={{ marginBottom: '0.5rem' }}>Target Branches</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', padding: '1rem', border: '1px solid var(--border-grey)', borderRadius: 'var(--radius-md)', backgroundColor: '#FAFAFA' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> All Branches
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> KGym Pusat
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> KGym Selatan
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary-red)' }} /> KGym Timur
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Message Content (Push Notification / Email)</label>
          <textarea 
            className="form-input" 
            rows={5} 
            placeholder="Type your message here. Use {member_name} to personalize."
            style={{ resize: 'vertical' }}
          ></textarea>
        </div>

        <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
          <button className="btn btn-outline" onClick={() => navigate('/notifications')}>Cancel</button>
          <button className="btn btn-outline"><Save size={16} /> Save as Draft</button>
          <button className="btn btn-primary"><Send size={16} /> Activate Campaign</button>
        </div>
      </div>
    </div>
  );
}
