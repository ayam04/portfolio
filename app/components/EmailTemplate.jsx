import React from 'react';

export const EmailTemplate = ({ email, subject, message }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h2 style={{ color: '#2563eb', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
        New Contact Form Submission
      </h2>
      
      <div style={{ margin: '20px 0' }}>
        <h3 style={{ color: '#374151', marginBottom: '10px' }}>Subject:</h3>
        <p style={{ background: '#f9fafb', padding: '10px', borderRadius: '5px', margin: '0' }}>
          {subject}
        </p>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3 style={{ color: '#374151', marginBottom: '10px' }}>From:</h3>
        <p style={{ background: '#f9fafb', padding: '10px', borderRadius: '5px', margin: '0' }}>
          {email}
        </p>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3 style={{ color: '#374151', marginBottom: '10px' }}>Message:</h3>
        <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
          {message}
        </div>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', background: '#f3f4f6', borderRadius: '5px', fontSize: '12px', color: '#6b7280' }}>
        <p style={{ margin: '0' }}>
          This email was sent from your portfolio contact form at {new Date().toLocaleString()}.
        </p>
      </div>
    </div>
  );
};
