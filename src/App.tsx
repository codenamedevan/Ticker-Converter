import React, { useState, useEffect } from 'react';
import { LINK_TEMPLATES } from './LinkTemplates';
import { Copy, ExternalLink, Activity, Search } from 'lucide-react';

export default function App() {
  const [ticker, setTicker] = useState('AAPL');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Clean the ticker input (uppercase, alphanumeric)
  const cleanTicker = ticker.trim().toUpperCase().replace(/[^A-Z0-9.-]/g, '');

  const handleCopy = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleOpenAll = () => {
    if (!cleanTicker) return;
    LINK_TEMPLATES.forEach(template => {
      const url = template.url.replace(/TICKER/g, cleanTicker);
      window.open(url, '_blank');
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans p-6 md:p-12 flex flex-col">
      <div className="max-w-4xl mx-auto space-y-8 w-full">
        {/* Header Section */}
        <div className="bg-[#151C2C] border border-slate-800 rounded-2xl p-8 flex flex-col items-center shadow-2xl relative overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-2 relative z-10">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Activity className="w-5 h-5 text-[#0B0F17]" />
            </div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">Financial Intelligence Hub</h1>
          </div>
          <p className="text-slate-400 text-sm mb-8 text-center relative z-10">Enter a ticker symbol to broadcast across all terminal destinations</p>
          
          <div className="relative w-full max-w-xl group z-10">
            <input
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              placeholder="ENTER TICKER"
              className="w-full bg-[#0B0F17] border-2 border-cyan-500/30 text-white text-4xl md:text-5xl font-bold py-4 px-12 rounded-xl focus:border-cyan-500 outline-none uppercase text-center shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all placeholder:text-slate-700"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-2xl font-bold">$</div>
          </div>
          
          <div className="flex items-center justify-between w-full max-w-xl px-2 pt-6 relative z-10">
            <p className="text-sm text-slate-400 font-medium tracking-wide flex-1 text-left">
              {cleanTicker ? `Status: Ready to sync $${cleanTicker}` : 'Awaiting ticker symbol...'}
            </p>
            <button
              onClick={handleOpenAll}
              disabled={!cleanTicker}
              className="bg-cyan-500 hover:bg-cyan-400 text-[#0B0F17] px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-colors disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed uppercase flex items-center gap-2"
            >
              Sync All
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LINK_TEMPLATES.map((template, idx) => {
            const url = template.url.replace(/TICKER/g, cleanTicker || 'TICKER');
            const isReady = !!cleanTicker;

            return (
              <div 
                key={idx} 
                className={`bg-[#151C2C] border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 transition-colors flex flex-col justify-between gap-4 group ${isReady ? '' : 'opacity-60 saturate-50'}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0F17] border border-slate-800 rounded flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/30 group-hover:bg-cyan-900/10 transition-colors">
                    {template.icon}
                  </div>
                  <div className="flex-1 min-w-0 mt-0.5">
                    <h2 className="font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors truncate">{template.name}</h2>
                    <p className="text-xs text-slate-500 mt-1 font-mono truncate" title={url}>
                      {url}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-800/50">
                  <button
                    onClick={() => handleCopy(url, idx)}
                    disabled={!isReady}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#0B0F17] hover:bg-slate-800 border border-slate-800 text-slate-400 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:text-cyan-400"
                  >
                    {copiedIndex === idx ? (
                      <span className="text-cyan-400 flex items-center gap-2">Copied!</span>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </button>
                  <a
                    href={isReady ? url : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 hover:bg-cyan-500/10 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded-lg text-sm font-medium transition-colors ${!isReady ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                  >
                    Open <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
