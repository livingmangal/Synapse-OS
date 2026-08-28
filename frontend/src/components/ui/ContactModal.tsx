'use client';

import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ContactModal({ isOpen: controlledIsOpen, onClose }: ContactModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    category: 'Hospital OS Deployment',
    message: '',
    agreed: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Global event listener to open contact modal from any component
    const handleOpen = () => setInternalIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpen);

    // Intercept clicks on links with href="#contacto", href="contacto", href="#contact"
    const handleDocClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href === '#contacto' || href === 'contacto' || href === '#contact' || href === '/contacto') {
          e.preventDefault();
          e.stopPropagation();
          setInternalIsOpen(true);
        }
      }
    };

    document.addEventListener('click', handleDocClick, true);

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-contact-modal', handleOpen);
      document.removeEventListener('click', handleDocClick, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@synapseos.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleClose = () => {
    setInternalIsOpen(false);
    if (onClose) onClose();
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="synapseos-contact-backdrop"
      onClick={handleClose}
      data-lenis-prevent="true"
    >
      <div 
        className="synapseos-contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          type="button"
          onClick={handleClose}
          className="synapseos-contact-close"
          aria-label="Close Contact Modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="synapseos-contact-header">
          <div className="synapseos-contact-brand-row">
            <div className="synapseos-contact-badge">
              <span className="synapseos-contact-badge-dot" />
              <span>SYNAPSEOS OS</span>
            </div>
            <span className="synapseos-contact-meta">CONTACT &amp; PARTNERSHIPS</span>
          </div>

          <h2 className="synapseos-contact-title">
            Deploy SynapseOS in Your <em>Clinical Network</em>.
          </h2>
          <p className="synapseos-contact-subtitle">
            Partner with <strong>Team ACDC</strong> for hospital deployments, research collaborations, ABHA blockchain integrations, or smart diagnostics.
          </p>
        </div>

        {/* Modal Body: Form or Success State */}
        {submitted ? (
          <div className="synapseos-contact-success">
            <div className="synapseos-contact-success-icon">✓</div>
            <h3 className="synapseos-contact-success-title">Inquiry Transmitted</h3>
            <p className="synapseos-contact-success-desc">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. Your clinical deployment request has been logged. Our core engineering team at <strong>Team ACDC</strong> will contact you via <strong>{formData.email}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="synapseos-contact-btn-primary"
              style={{ maxWidth: '240px', margin: '16px auto 0' }}
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="synapseos-contact-form">
            <div className="synapseos-contact-form-grid">
              
              {/* Full Name */}
              <div className="synapseos-contact-field">
                <label className="synapseos-contact-label">
                  Your Name / Clinical Lead <span style={{ color: '#10b981' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Aryan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="synapseos-contact-input"
                />
              </div>

              {/* Organization */}
              <div className="synapseos-contact-field">
                <label className="synapseos-contact-label">
                  Hospital / Institution / University
                </label>
                <input
                  type="text"
                  placeholder="e.g. AIIMS Delhi / Apollo Hospitals"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="synapseos-contact-input"
                />
              </div>

              {/* Work Email */}
              <div className="synapseos-contact-field">
                <label className="synapseos-contact-label">
                  Work Email Address <span style={{ color: '#10b981' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="aryan@hospital.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="synapseos-contact-input"
                />
              </div>

              {/* Scope of Interest */}
              <div className="synapseos-contact-field">
                <label className="synapseos-contact-label">
                  Inquiry Scope
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="synapseos-contact-select"
                >
                  <option value="Hospital OS Deployment">Hospital Multi-Agent OS Deployment</option>
                  <option value="ABHA & FHIR Integration">ABHA Health ID &amp; Blockchain Vault Integration</option>
                  <option value="Medical Scan AI Diagnostic">Medical Scan AI &amp; Pathology Pilot</option>
                  <option value="Hackathon Collaboration">Smart VIT Hackathon / Research Collaboration</option>
                  <option value="General Inquiry">General Clinical Inquiry</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="synapseos-contact-field" style={{ gridColumn: '1 / -1' }}>
                <label className="synapseos-contact-label">
                  Clinical Requirements / Deployment Scope <span style={{ color: '#10b981' }}>*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your facility requirements, patient volume, or research objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="synapseos-contact-textarea"
                />
              </div>

            </div>

            {/* Submit Action */}
            <div className="synapseos-contact-footer-actions">
              <button
                type="submit"
                disabled={isSubmitting}
                className="synapseos-contact-btn-primary"
              >
                {isSubmitting ? 'Transmitting Request...' : 'Send Clinical Inquiry →'}
              </button>
            </div>
          </form>
        )}

        {/* Direct Contact Channels */}
        <div className="synapseos-contact-direct-bar">
          <div className="synapseos-contact-direct-info">
            <span className="synapseos-contact-direct-label">DIRECT EMAIL</span>
            <button 
              type="button"
              onClick={handleCopyEmail}
              className="synapseos-contact-copy-btn"
              title="Click to copy email address"
            >
              hello@synapseos.com {copied ? '✓ Copied!' : '📋'}
            </button>
          </div>

          <div className="synapseos-contact-direct-info" style={{ textAlign: 'right' }}>
            <span className="synapseos-contact-direct-label">HACKATHON EDITION</span>
            <span className="synapseos-contact-direct-val">Team ACDC • Smart VIT Hackathon</span>
          </div>
        </div>

      </div>
    </div>
  );
}
