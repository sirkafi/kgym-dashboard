import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Send, Trash2 } from 'lucide-react';

export default function EditCampaign() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-4">
          <button className="icon-button" onClick={() => navigate('/notifications')}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1>Edit Campaign</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Update existing notification workflow (ID: {id || '1'})</p>
          </div>
        </div>
        <div>
          <button className="btn btn-outline" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>
            <Trash2 size={16} /> Delete Campaign
          </button>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px' }}>
        <div className="form-group">
          <label className="form-label">Campaign Name</label>
          <input type="text" className="form-input" defaultValue="Birthday Wishes & Promo" />
        </div>

        <div className="form-group">
          <label className="form-label">Trigger Event</label>
          <select className="form-input" defaultValue="On Member Birthday">
            <option>Manual Send (Blast)</option>
            <option>On Member Birthday</option>
            <option>7 Days Before Membership Expires</option>
            <option>14 Days No Check-in</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Target Audience</label>
          <select className="form-input" defaultValue="All Active Members">
            <option>All Active Members</option>
            <option>Inactive Members (Expired)</option>
            <option>Specific Branch Only</option>
            <option>Custom Segment</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message Content (Push Notification / Email)</label>
          <textarea 
            className="form-input" 
            rows={5} 
            defaultValue="Happy Birthday {member_name}! 🎉 Enjoy a free PT session on us. Claim at the receptionist."
            style={{ resize: 'vertical' }}
          ></textarea>
        </div>

        <div className="flex justify-end gap-2" style={{ marginTop: 'var(--spacing-6)' }}>
          <button className="btn btn-outline" onClick={() => navigate('/notifications')}>Cancel Changes</button>
          <button className="btn btn-outline"><Save size={16} /> Save as Draft</button>
          <button className="btn btn-primary"><Send size={16} /> Update & Keep Active</button>
        </div>
      </div>
    </div>
  );
}
