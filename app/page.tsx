"use client";

import React, { useState } from 'react';

export default function Page() {
  const [relay1, setRelay1] = useState(false);
  const [relay2, setRelay2] = useState(true);

  return (
    <div className="app-container">
      
  
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand-header">
            <div className="brand-badge">ESP32</div>
            <span className="brand-title">Dashboard</span>
          </div>

          <nav className="nav-menu">
            <button className="nav-item active">Dashboard</button>
            <button className="nav-item">Relays</button>
            <button className="nav-item">Settings</button>
            <button className="nav-item">Logs</button>

          </nav>
        </div>

        <div className="status-box">
          <div className="status-label">
            <span className="pulse-dot"></span>
            <span>Device Status</span>
          </div>
          <span className="status-value online">Online</span>
        </div>
      </aside>

      <main className="main-content">
        
        <div className="top-header">
          <h1 className="page-title">Dashboard</h1>
          <div className="header-meta">
            <div className="live-indicator">
              <span className="ping-dot"></span>
              <span>Device Status: <span className="text-online">Online</span></span>
            </div>
            <p className="timestamp">20 May 2025, 10:30:15 AM</p>
          </div>
        </div>

        <div className="dashboard-grid">
          
             <div className="card temp-card">
            <span className="card-label">Temperature Metrics</span>
            <div className="temp-row">
              <img src="/temp.png" alt="Temperature" className="metric-icon" />
              <div className="temp-value-wrapper">
                <span className="temp-number">28.4</span>
                <span className="temp-unit">°C</span>
              </div>
            </div>
          </div>

          <div className="control-section">
            <h3 className="section-title">Relay Controls</h3>
            <div className="relay-grid">
              
           
              <div className="card relay-card">
                <div className="relay-info">
                  <h4 className="relay-title">Relay 1 Controller</h4>
                  <p className="relay-state">
                    Current State: <span className={relay1 ? "state-on" : "state-off"}>{relay1 ? "ACTIVE ON" : "INACTIVE OFF"}</span>
                  </p>
                  <div className="button-group">
                    <button onClick={() => setRelay1(true)} className={`btn btn-on ${relay1 ? 'active' : ''}`}>ON</button>
                    <button onClick={() => setRelay1(false)} className={`btn btn-off ${!relay1 ? 'active' : ''}`}>OFF</button>
                  </div>
                </div>
                <img 
                  src={relay1 ? "/bulb%20on%20icon.png" : "/bulb%20off%20icno.png"} 
                  alt="Status" 
                  className={`bulb-icon ${relay1 ? 'lit' : 'dim'}`} 
                />
              </div>

           
              <div className="card relay-card">
                <div className="relay-info">
                  <h4 className="relay-title">Relay 2 Controller</h4>
                  <p className="relay-state">
                    Current State: <span className={relay2 ? "state-on" : "state-off"}>{relay2 ? "ACTIVE ON" : "INACTIVE OFF"}</span>
                  </p>
                  <div className="button-group">
                    <button onClick={() => setRelay2(true)} className={`btn btn-on ${relay2 ? 'active' : ''}`}>ON</button>
                    <button onClick={() => setRelay2(false)} className={`btn btn-off ${!relay2 ? 'active' : ''}`}>OFF</button>
                  </div>
                </div>
                <img 
                  src={relay2 ? "/bulb%20on%20icon.png" : "/bulb%20off%20icno.png"} 
                  alt="Status" 
                  className={`bulb-icon ${relay2 ? 'lit' : 'dim'}`} 
                />
              </div>

            </div>
          </div>

     
          <div className="card info-card">
            <h3 className="card-label">Device Information</h3>
            <div className="info-row">
              <div className="info-col">
                <img src="/wificonnection.png" alt="Wi-Fi" className="device-icon" />
                <span className="info-header">Connection</span>
                <span className="info-text">Wi-Fi Network</span>
                <span className="signal-badge">STRONG SIGNAL</span>
              </div>
              <div className="info-col border-x">
                <img src="/clockicon.png" alt="Uptime" className="device-icon" />
                <span className="info-header">System Uptime</span>
                <span className="info-text font-bold">2h 15m 30s</span>
              </div>
              <div className="info-col">
                <img src="/esp32icon.png" alt="Hardware Core" className="device-icon" />
                <span className="info-header">Hardware Core</span>
                <span className="info-text">ESP32 </span>
                <span className="id-badge">ID: ESP32-001</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          © 2026 IoT Dashboard. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
