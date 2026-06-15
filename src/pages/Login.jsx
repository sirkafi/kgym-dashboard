import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Building2, Lock, Mail, ArrowRight, Activity } from 'lucide-react';
import kgymLogo from '../assets/images/kgym-logo-login.png';

export default function Login() {
  const [activeTab, setActiveTab] = useState('superadmin'); // 'superadmin' | 'branch'
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: '#0A0A0C', color: 'white', overflow: 'hidden', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Left Branding Panel */}
      <div style={{
        flex: 1.2,
        position: 'relative',
        display: 'none',
        '@media (minWidth: 1024px)': { display: 'flex' }, // Note: Inline styles don't support media queries perfectly, but we'll use standard flex and hide via CSS if needed, though inline block is fine for desktop-first assumption here. Actually, we'll just use a standard flex and it will squish on mobile, or we can use a class. Let's keep it flex and just hide overflow.
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '4rem',
        background: 'linear-gradient(135deg, #0A0A0C 0%, #1A1A1D 100%)',
        overflow: 'hidden'
      }} className="login-branding-panel">
        
        {/* Dynamic Background Elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-20%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 60%)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>
        
        {/* Grid Pattern Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          opacity: 0.5
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <img src={kgymLogo} alt="KGym Logo" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)', borderRadius: '100px', color: '#E63946', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Activity size={16} /> Enterprise Gym Management System
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#FFFFFF' }}>
            Powering the Future of <span style={{ color: '#E63946' }}>Fitness</span> Operations.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '500px' }}>
            A unified cloud-based ecosystem designed to scale your gym branches, manage memberships, and maximize revenue effortlessly.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '2rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
          <div>© 2026 KGym Digital</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Right Login Panel */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        color: '#0A0A0C',
        position: 'relative'
      }}>
        <div style={{ width: '100%', maxWidth: '440px', padding: '2rem' }}>
          
          {/* Logo & Welcome Text */}
          <div style={{ marginBottom: '2.5rem' }}>
            <img src={kgymLogo} alt="KGym Logo" style={{ height: '40px', width: 'auto', marginBottom: '1.5rem', display: 'block' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Welcome Back</h2>
            <p style={{ color: '#64748B', fontSize: '1rem' }}>Please enter your credentials to access the portal.</p>
          </div>

          {/* Role Tabs */}
          <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '0.35rem', borderRadius: '12px', marginBottom: '2.5rem', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '0.35rem',
              bottom: '0.35rem',
              left: activeTab === 'superadmin' ? '0.35rem' : 'calc(50% + 0.175rem)',
              width: 'calc(50% - 0.525rem)',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}></div>
            <button
              onClick={() => setActiveTab('superadmin')}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'superadmin' ? '#0F172A' : '#64748B',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s'
              }}
            >
              <ShieldCheck size={18} /> Superadmin
            </button>
            <button
              onClick={() => setActiveTab('branch')}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'branch' ? '#0F172A' : '#64748B',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s'
              }}
            >
              <Building2 size={18} /> Branch Admin
            </button>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {activeTab === 'branch' && (
              <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#334155' }}>Assigned Branch</label>
                <div style={{ position: 'relative' }}>
                  <Building2 size={20} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                  <select 
                    style={{ 
                      width: '100%', 
                      padding: '0.875rem 1rem 0.875rem 2.75rem', 
                      borderRadius: '10px', 
                      border: '1px solid #E2E8F0',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      color: '#0F172A',
                      transition: 'border-color 0.2s',
                      cursor: 'pointer',
                      appearance: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#E63946'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                    required
                  >
                    <option value="">-- Select Branch --</option>
                    <option value="pusat">KGym Pusat (Jakarta Pusat)</option>
                    <option value="selatan">KGym Selatan (Jakarta Selatan)</option>
                    <option value="timur">KGym Timur (Jakarta Timur)</option>
                  </select>
                  <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#334155' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={20} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="email" 
                  placeholder={activeTab === 'superadmin' ? "hq.admin@kgym.com" : "admin.branch@kgym.com"}
                  required
                  style={{ 
                    width: '100%', 
                    padding: '0.875rem 1rem 0.875rem 2.75rem', 
                    borderRadius: '10px', 
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: '#0F172A',
                    transition: 'border-color 0.2s'
                  }} 
                  onFocus={(e) => e.target.style.borderColor = '#E63946'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#334155' }}>Password</label>
                <a href="#" style={{ fontSize: '0.875rem', color: '#E63946', fontWeight: 600, textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={20} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  required
                  style={{ 
                    width: '100%', 
                    padding: '0.875rem 1rem 0.875rem 2.75rem', 
                    borderRadius: '10px', 
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: '#0F172A',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#E63946'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>
            </div>

            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: '0.875rem',
                backgroundColor: '#E63946',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '1rem',
                marginTop: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px 0 rgba(230, 57, 70, 0.39)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                transform: isHovered ? 'translateY(-2px)' : 'none'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Sign In to Portal <ArrowRight size={18} />
            </button>
            
          </form>
          
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1024px) {
          .login-branding-panel {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
