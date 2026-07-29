"use client";

import React, { useState } from 'react';

export default function Page() {
  const [relay1, setRelay1] = useState(false);
  const [relay2, setRelay2] = useState(true);

  return (
    <div className="flex bg-[#f8fafc] min-h-screen text-slate-600">
      
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-[#0d1625] text-slate-300 flex flex-col justify-between h-screen p-6 border-r border-slate-800 shrink-0">
        <div>
          <div className="flex items-center gap-3 px-2 py-5 mb-8 border-b border-slate-800">
            <div className="bg-blue-600 p-2.5 rounded-xl text-white font-bold text-base tracking-wider">ESP32</div>
            <span className="font-bold text-xl text-white tracking-wide">Dashboard</span>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm shadow-md transition">
              <span className="text-lg">📊</span> Dashboard
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-semibold text-sm transition">
              <span className="text-lg">🔌</span> Relays
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-semibold text-sm transition">
              <span className="text-lg">⚙️</span> Settings
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-semibold text-sm transition">
              <span className="text-lg">📋</span> Logs
            </button>
            <button className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-semibold text-sm transition">
              <span className="text-lg">ℹ️</span> About
            </button>
          </nav>
        </div>

        <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-slate-400">Device Status</span>
          </div>
          <span className="text-xs font-bold text-emerald-400 tracking-wider">Online</span>
        </div>
      </aside>

      {/* Main Framework Viewspace */}
      <main className="flex-1 flex flex-col min-h-screen p-10 max-w-7xl mx-auto space-y-8">
        
        {/* Upper Segment Title Banner */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>
            <p className="text-sm font-medium text-slate-500">Monitor and manage your hardware telemetry</p>
          </div>
          <div className="text-right space-y-1.5">
            <div className="flex items-center gap-2 justify-end">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-xs font-bold text-slate-700 tracking-wide">Device Status: <span className="text-emerald-500">Online</span></span>
            </div>
            <p className="text-xs font-medium text-slate-400">20 May 2025, 10:30:15 AM</p>
          </div>
        </div>

        {/* Dashboard Grid Content */}
        <div className="space-y-8 flex-1">
          
          {/* Temperature Telemetry Layout */}
          <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Temperature Metrics</span>
            <div className="flex items-center gap-6 mt-1">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl text-3xl">🌡️</div>
              <div>
                <div className="text-5xl font-black text-slate-800 tracking-tight">28.4 <span className="text-blue-600 font-bold text-4xl ml-1">°C</span></div>
                <p className="text-xs text-slate-400 mt-1.5 font-mono tracking-wide">Last telemetry update stream: 10:30:15 AM</p>
              </div>
            </div>
          </div>

          {/* Expanded Hardware Relay Toggles */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Relay Controls</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Relay Module 1 */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex items-center justify-between transition-all duration-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-800 tracking-tight">Relay 1 Controller</h4>
                    <p className="text-xs text-slate-400 font-semibold mt-1">Current State: <span className={relay1 ? "text-emerald-500 font-extrabold" : "text-rose-500 font-extrabold"}>{relay1 ? "ACTIVE ON" : "INACTIVE OFF"}</span></p>
                  </div>
                  <div className="flex gap-3 pt-1">
                    <button onClick={() => setRelay1(true)} className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${relay1 ? 'bg-emerald-500 text-white shadow-md scale-[1.02]' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>ON</button>
                    <button onClick={() => setRelay1(false)} className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${!relay1 ? 'bg-rose-500 text-white shadow-md scale-[1.02]' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>OFF</button>
                  </div>
                </div>
                <span className={`text-5xl transition-all duration-300 transform select-none ${relay1 ? 'text-amber-400 drop-shadow-[0_4px_12px_rgba(251,191,36,0.5)] scale-110 opacity-100' : 'text-slate-300 opacity-40 scale-100'}`}>💡</span>
              </div>

              {/* Relay Module 2 */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex items-center justify-between transition-all duration-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-800 tracking-tight">Relay 2 Controller</h4>
                    <p className="text-xs text-slate-400 font-semibold mt-1">Current State: <span className={relay2 ? "text-emerald-500 font-extrabold" : "text-rose-500 font-extrabold"}>{relay2 ? "ACTIVE ON" : "INACTIVE OFF"}</span></p>
                  </div>
                  <div className="flex gap-3 pt-1">
                    <button onClick={() => setRelay2(true)} className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${relay2 ? 'bg-emerald-500 text-white shadow-md scale-[1.02]' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>ON</button>
                    <button onClick={() => setRelay2(false)} className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${!relay2 ? 'bg-rose-500 text-white shadow-md scale-[1.02]' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>OFF</button>
                  </div>
                </div>
                <span className={`text-5xl transition-all duration-300 transform select-none ${relay2 ? 'text-amber-400 drop-shadow-[0_4px_12px_rgba(251,191,36,0.5)] scale-110 opacity-100' : 'text-slate-300 opacity-40 scale-100'}`}>💡</span>
              </div>

            </div>
          </div>

          {/* System Device Infrastructure Info Footprint */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col gap-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Device Information</h3>
            <div className="grid grid-cols-3 gap-6 divide-x divide-slate-100 text-center">
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-slate-400 mb-2 text-2xl">📶</span>
                <span className="text-xs text-slate-400 font-bold tracking-wide uppercase">Connection</span>
                <span className="text-base font-extrabold text-slate-800 mt-1">Wi-Fi Network</span>
                <span className="text-xs font-black text-emerald-500 mt-0.5 tracking-wider">STRONG SIGNAL</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-slate-400 mb-2 text-2xl">⏱️</span>
                <span className="text-xs text-slate-400 font-bold tracking-wide uppercase">System Uptime</span>
                <span className="text-base font-extrabold text-slate-800 mt-2 tracking-tight">2h 15m 30s</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-slate-400 mb-2 text-2xl">🎛️</span>
                <span className="text-xs text-slate-400 font-bold tracking-wide uppercase">Hardware Core</span>
                <span className="text-base font-extrabold text-slate-800 mt-1">ESP32 SoC</span>
                <span className="text-xs font-mono text-slate-400 mt-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">ID: ESP32-001</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-slate-400 font-semibold pt-6 tracking-wider">
          © 2026 IoT Dashboard. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
