'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Doctor {
  doctor_id: string;
  name: string;
  specialty: string;
  qualifications: string;
  hospital: string;
  consultation_fee: string;
  available_days: string[];
  slots: string[];
  rating: number;
}

export default function VoiceDoctorPage() {
  // Voice Copilot State
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiSpeechText, setAiSpeechText] = useState('Hello, I am Sanjeevani Voice Copilot. You can speak to me about your symptoms, or ask me to schedule an appointment with a specialist.');
  const [conversation, setConversation] = useState<Array<{ role: 'user' | 'assistant'; text: string; time: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am your Voice Healthcare Assistant. Tap the microphone and speak naturally about what you are experiencing.',
      time: 'Just now'
    }
  ]);

  // Appointment State
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [patientName, setPatientName] = useState('Siddharth Sharma');
  const [patientPhone, setPatientPhone] = useState('+91 98765 43210');
  const [bookingConfirmed, setBookingConfirmed] = useState<any | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [activeSpecialtyFilter, setActiveSpecialtyFilter] = useState('all');

  // Canvas Waveform Reference
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const recognitionRef = useRef<any>(null);

  // Fetch doctors on mount
  useEffect(() => {
    async function loadDoctors() {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/appointments/doctors?specialty=all');
        if (res.ok) {
          const data = await res.json();
          setDoctors(data);
          if (data.length > 0) setSelectedDoctor(data[0]);
        }
      } catch (err) {
        console.error('Failed to load doctors', err);
      }
    }
    loadDoctors();
  }, []);

  // Web Speech API Initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = true;
        rec.lang = 'en-IN';

        rec.onstart = () => {
          setIsListening(true);
        };

        rec.onresult = (event: any) => {
          const current = event.resultIndex;
          const text = event.results[current][0].transcript;
          setTranscript(text);
        };

        rec.onerror = (e: any) => {
          console.warn('Speech recognition error:', e.error);
          setIsListening(false);
        };

        rec.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = rec;
      }
    }
  }, []);

  // Waveform Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.lineWidth = 2.5;
      
      // Draw dynamic glowing sine waves
      const waves = [
        { color: 'rgba(6, 182, 212, 0.85)', speed: 0.08, amplitude: isListening || isSpeaking ? 28 : 6, freq: 0.02 },
        { color: 'rgba(16, 185, 129, 0.7)', speed: 0.05, amplitude: isListening || isSpeaking ? 20 : 4, freq: 0.03 },
        { color: 'rgba(99, 102, 241, 0.5)', speed: 0.03, amplitude: isListening || isSpeaking ? 14 : 3, freq: 0.015 }
      ];

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;

        for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * wave.freq + phase * wave.speed) * wave.amplitude * Math.sin(x / width * Math.PI);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      phase += 1;
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isListening, isSpeaking]);

  // Handle Speech Output (Text-to-Speech)
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  // Toggle Microphone
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      if (transcript.trim()) {
        processUserVoice(transcript);
      }
    } else {
      setTranscript('');
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        console.warn(err);
      }
    }
  };

  // Process voice input through AI
  const processUserVoice = async (userText: string) => {
    if (!userText.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newConv = [...conversation, { role: 'user' as const, text: userText, time: timeStr }];
    setConversation(newConv);
    setTranscript('');

    try {
      const res = await fetch('http://127.0.0.1:8000/api/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, channel: 'voice_copilot' })
      });

      if (res.ok) {
        const data = await res.json();
        const responseText = data.final_response || 'I have evaluated your symptoms. Please find the matching specialist below to book a consultation.';
        
        setConversation(prev => [
          ...prev,
          { role: 'assistant' as const, text: responseText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        ]);

        setAiSpeechText(responseText);
        speakText(responseText);

        // Auto-match doctor if specialty found
        if (userText.toLowerCase().includes('heart') || userText.toLowerCase().includes('chest')) {
          const d = doctors.find(doc => doc.specialty.toLowerCase().includes('cardio'));
          if (d) setSelectedDoctor(d);
        } else if (userText.toLowerCase().includes('fracture') || userText.toLowerCase().includes('bone') || userText.toLowerCase().includes('joint')) {
          const d = doctors.find(doc => doc.specialty.toLowerCase().includes('ortho'));
          if (d) setSelectedDoctor(d);
        }
      }
    } catch (err) {
      console.error('Error in voice orchestration', err);
    }
  };

  // Confirm Doctor Booking
  const handleConfirmBooking = async () => {
    if (!selectedDoctor || !selectedSlot) return;
    setIsBooking(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctor_id: selectedDoctor.doctor_id,
          patient_name: patientName,
          patient_phone: patientPhone,
          slot_date: '2026-08-25',
          slot_time: selectedSlot,
          reason_for_visit: transcript || 'Symptom Triage Follow-up Consultation'
        })
      });

      if (res.ok) {
        const bookingData = await res.json();
        setBookingConfirmed(bookingData);
        speakText(`Your appointment with ${selectedDoctor.name} is confirmed for ${selectedSlot}. Appointment reference token is ${bookingData.appointment_id}.`);
      }
    } catch (err) {
      console.error('Booking failed', err);
    } finally {
      setIsBooking(false);
    }
  };

  // Download .ics Calendar File
  const downloadCalendarFile = () => {
    if (!bookingConfirmed?.ics_calendar_data) return;
    const blob = new Blob([bookingConfirmed.ics_calendar_data], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Sanjeevani_Appointment_${bookingConfirmed.appointment_id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredDoctors = activeSpecialtyFilter === 'all'
    ? doctors
    : doctors.filter(d => d.specialty.toLowerCase().includes(activeSpecialtyFilter.toLowerCase()));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b14', color: '#f8fafc', padding: '32px 24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Template Overlay Suppression */}
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse, header, .grid.wrapper, .header__logo.logo, .intro__logo {
          display: none !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* Header Navigation */}
      <div style={{ maxWidth: '1280px', margin: '0 auto 28px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link href="/" style={{ color: '#06b6d4', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            ← Back to Sanjeevani OS
          </Link>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.5px' }}>
            🎙️ Voice-to-Voice AI Doctor & Appointment Hub
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '15px', margin: '4px 0 0 0' }}>
            Multi-Agent Voice Copilot • Real-Time Speech Synthesis • Instant Doctor Slot Locking
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(6, 182, 212, 0.3)' }}>
            ● Web Speech API Live
          </span>
          <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            ● PM-JAY Empanelled
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '28px' }}>
        
        {/* LEFT COLUMN: Voice Copilot & Waveform */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              VOICE CONSULTATION COPILOT
            </span>
            <span style={{ fontSize: '12px', color: isSpeaking ? '#10b981' : isListening ? '#f59e0b' : '#64748b' }}>
              {isSpeaking ? '🔊 AI Speaking...' : isListening ? '🔴 Recording Speech...' : '⚪ Idle'}
            </span>
          </div>

          {/* Waveform Visualizer Canvas */}
          <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', position: 'relative', marginBottom: '20px', overflow: 'hidden' }}>
            <canvas ref={canvasRef} width={500} height={120} style={{ width: '100%', height: '120px', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: '10px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#475569' }}>
              <span>Frequency Spectrum: 20Hz - 20kHz</span>
              <span>Audio Rate: 48,000 Hz</span>
            </div>
          </div>

          {/* Microphone Action Trigger */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <button
              onClick={toggleListening}
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                backgroundColor: isListening ? '#ef4444' : '#06b6d4',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isListening ? '0 0 30px rgba(239, 68, 68, 0.6)' : '0 0 25px rgba(6, 182, 212, 0.4)',
                transition: 'all 0.2s ease',
                transform: isListening ? 'scale(1.08)' : 'scale(1)'
              }}
            >
              {isListening ? '⏹️' : '🎙️'}
            </button>
            <span style={{ fontSize: '14px', fontWeight: 600, color: isListening ? '#ef4444' : '#94a3b8' }}>
              {isListening ? 'Listening to your voice... Tap to send' : 'Tap to start speaking'}
            </span>
            {transcript && (
              <div style={{ backgroundColor: '#1e293b', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', color: '#38bdf8', width: '100%', textAlign: 'center' }}>
                &ldquo;{transcript}&rdquo;
              </div>
            )}
          </div>

          {/* Conversation Feed */}
          <div style={{ flex: 1, maxHeight: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '6px' }}>
            {conversation.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  backgroundColor: msg.role === 'user' ? '#1e293b' : 'rgba(6, 182, 212, 0.1)',
                  border: msg.role === 'user' ? '1px solid #334155' : '1px solid rgba(6, 182, 212, 0.25)',
                  borderRadius: '10px',
                  padding: '10px 14px'
                }}
              >
                <div style={{ fontSize: '11px', color: msg.role === 'user' ? '#94a3b8' : '#06b6d4', fontWeight: 700, marginBottom: '4px' }}>
                  {msg.role === 'user' ? '👤 YOU' : '🤖 SANJEEVANI AI DOCTOR'}
                </div>
                <div style={{ fontSize: '13px', color: '#f1f5f9', lineHeight: 1.5 }}>
                  {msg.text}
                </div>
                <div style={{ fontSize: '10px', color: '#64748b', textAlign: 'right', marginTop: '4px' }}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Voice Prompt Presets */}
          <div style={{ marginTop: '20px', borderTop: '1px solid #1e293b', paddingTop: '16px' }}>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              Quick Clinical Voice Presets:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'I have severe wrist pain from a fall',
                'Book cardiologist for chest tightness',
                'Feeling extreme burnout and stress'
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => processUserVoice(p)}
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    color: '#94a3b8',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    cursor: 'pointer'
                  }}
                >
                  &ldquo;{p}&rdquo;
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Doctor Scheduling & Slot Locking */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              INSTANT DOCTOR APPOINTMENT SCHEDULER
            </span>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>
              Slot Date: <strong style={{ color: '#ffffff' }}>2026-08-25</strong>
            </span>
          </div>

          {/* Specialty Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
            {['all', 'Cardiology', 'Orthopedics', 'General', 'Neurology', 'Psychiatry'].map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveSpecialtyFilter(spec)}
                style={{
                  backgroundColor: activeSpecialtyFilter === spec ? '#10b981' : '#1e293b',
                  color: activeSpecialtyFilter === spec ? '#000000' : '#94a3b8',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {spec.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Doctor Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
            {filteredDoctors.map((doc) => {
              const isSelected = selectedDoctor?.doctor_id === doc.doctor_id;
              return (
                <div
                  key={doc.doctor_id}
                  onClick={() => { setSelectedDoctor(doc); setSelectedSlot(''); }}
                  style={{
                    backgroundColor: isSelected ? 'rgba(16, 185, 129, 0.08)' : '#020617',
                    border: isSelected ? '2px solid #10b981' : '1px solid #1e293b',
                    borderRadius: '12px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{doc.badge_icon || '🩺'}</span> {doc.name}
                      </h4>
                      <div style={{ fontSize: '12px', color: '#06b6d4', fontWeight: 600, marginTop: '2px' }}>
                        {doc.specialty}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                        {doc.hospital} • {doc.qualifications}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: '#10b981' }}>{doc.consultation_fee}</span>
                      <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '2px' }}>★ {doc.rating}</div>
                    </div>
                  </div>

                  {/* Available Time Slots */}
                  {isSelected && (
                    <div style={{ marginTop: '12px', borderTop: '1px solid #1e293b', paddingTop: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                        Select Consultation Slot:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {doc.slots.map((s) => (
                          <button
                            key={s}
                            onClick={(e) => { e.stopPropagation(); setSelectedSlot(s); }}
                            style={{
                              backgroundColor: selectedSlot === s ? '#10b981' : '#1e293b',
                              color: selectedSlot === s ? '#000000' : '#f8fafc',
                              border: selectedSlot === s ? '1px solid #10b981' : '1px solid #334155',
                              padding: '5px 10px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            🕒 {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Patient Details & Confirmation Trigger */}
          <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Patient Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#ffffff', fontSize: '13px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>WhatsApp / Phone</label>
                <input
                  type="text"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#ffffff', fontSize: '13px' }}
                />
              </div>
            </div>

            <button
              onClick={handleConfirmBooking}
              disabled={!selectedDoctor || !selectedSlot || isBooking}
              style={{
                width: '100%',
                marginTop: '14px',
                backgroundColor: !selectedDoctor || !selectedSlot ? '#334155' : '#10b981',
                color: !selectedDoctor || !selectedSlot ? '#94a3b8' : '#000000',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: !selectedDoctor || !selectedSlot || isBooking ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {isBooking ? 'Locking Appointment Slot...' : selectedSlot ? `Confirm Booking with ${selectedDoctor?.name} (${selectedSlot})` : 'Select a Slot Above to Confirm'}
            </button>
          </div>

          {/* Verified Booking Card */}
          {bookingConfirmed && (
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '12px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#10b981' }}>
                  ✅ APPOINTMENT CONFIRMED
                </span>
                <span style={{ backgroundColor: '#10b981', color: '#000000', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 800 }}>
                  {bookingConfirmed.appointment_id}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '12px' }}>
                <strong>{bookingConfirmed.doctor_name}</strong> • {bookingConfirmed.specialty}<br />
                📅 <strong>2026-08-25</strong> at 🕒 <strong>{bookingConfirmed.slot_time}</strong><br />
                📍 {bookingConfirmed.hospital}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={downloadCalendarFile}
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #10b981',
                    color: '#10b981',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📅 Add to Apple/Google Calendar (.ics)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
