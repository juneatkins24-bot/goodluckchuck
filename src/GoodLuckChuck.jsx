import React, { useState, useEffect } from 'react';

const C = { lime: '#C9D943', limePale: '#F4F8E3', forest: '#2D4A3E', orange: '#E86F3A', cream: '#FFFEF5', pink: '#D4739D', teal: '#5A9A8B', purple: '#9B6B9E', gold: '#D4A03A', blue: '#5B8DBF', red: '#E85A5A' };

const Icon = ({ name, color = C.forest, size = 16 }) => {
  const paths = { 
    plus: 'M12 5v14M5 12h14', 
    x: 'M18 6L6 18M6 6l12 12', 
    check: 'M20 6L9 17l-5-5', 
    trash: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
    menu: 'M3 12h18M3 6h18M3 18h18',
    home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    star: 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z',
    sparkle: 'M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z',
    flame: 'M12 22c-4 0-7-3-7-6 0-2 1-4 3-5.5l1 2c.5-.3 1-.5 1.5-.7V10l2 1c1.5 1.5 2.5 3 2.5 5 0 3-3 6-7 6z',
    moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
    sun: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3',
    heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8z',
    zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    grad: 'M22 10l-10-5L2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5',
    plane: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
    shuffle: 'M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5',
    coffee: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z',
    target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
    dollar: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
    note: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z',
    lightbulb: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z',
    gift: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7',
    cake: 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M12 4v4',
    tv: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z',
    tool: 'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9l6 6M20 4l-9.5 9.5M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15l6-6M20 20l-9.5-9.5',
    brain: 'M12 2C9 2 8 4 8 6v2c-2 0-4 2-4 4s2 4 4 4v2c0 2 1 4 4 4s4-2 4-4v-2c2 0 4-2 4-4s-2-4-4-4V6c0-2-1-4-4-4z',
    pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
    music: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
    play: 'M5 3l14 9-14 9V3z',
    pause: 'M6 4h4v16H6zM14 4h4v16h-4z',
    skip: 'M5 4l10 8-10 8V4zM19 5v14',
    prev: 'M19 20L9 12l10-8v16zM5 19V5',
    utensils: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
    mappin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    external: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3',
    // New icons to replace emojis
    cookie: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM14 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    pizza: 'M12 2L2 22h20L12 2zM12 8v4M12 16v1',
    tomato: 'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 6V2M9 3h6',
    dice: 'M3 3h18v18H3zM8.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 15.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z',
    chill: 'M12 2v20M8 4h8M8 8h8M6 12h12M8 16h8M8 20h8',
    sleep: 'M17 4h4v4M3 20l18-18M9 10a5 5 0 0 1 10 0v12H9V10z',
    guitar: 'M12 2v6M8 8h8M12 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 18v-4',
    headphones2: 'M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z',
    wine: 'M8 22h8M12 17v5M5 3h14l-2 9a5 5 0 0 1-10 0L5 3z',
    goose: 'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  };
  const d = paths[name];
  if (!d) return null;
  const fill = ['star','sparkle','flame','moon','zap','heart','plane','play'].includes(name);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? color : 'none'} stroke={fill ? 'none' : color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  );
};

const storage = { 
  get: (k, d) => { try { const v = localStorage.getItem('glc2_'+k); return v ? JSON.parse(v) : d; } catch { return d; } }, 
  set: (k, v) => { try { localStorage.setItem('glc2_'+k, JSON.stringify(v)); } catch {} } 
};
const genId = () => Math.random().toString(36).substr(2, 9);

// Chuck the Goose Component - Clean design matching logo
const Chuck = ({ color = '#C9D943', mood = 'normal', accessory = 'none', size = 100, onClick, showMotion = false }) => {
  const accs = {
    // Classic accessories
    crown: <polygon points="50,5 42,17 46,14 50,3 54,14 58,17" fill={C.gold} stroke={C.forest} strokeWidth="1.5"/>,
    bow: <g><ellipse cx="38" cy="15" rx="7" ry="4" fill={C.pink}/><ellipse cx="62" cy="15" rx="7" ry="4" fill={C.pink}/><circle cx="50" cy="15" r="3" fill={C.pink}/></g>,
    beret: <g><ellipse cx="50" cy="17" rx="16" ry="5" fill={C.purple}/><ellipse cx="50" cy="13" rx="11" ry="9" fill={C.purple}/><circle cx="50" cy="7" r="3" fill={C.purple}/></g>,
    gradcap: <g><rect x="34" y="13" width="32" height="4" fill={C.forest}/><polygon points="50,5 30,13 50,19 70,13" fill={C.forest}/><line x1="66" y1="13" x2="70" y2="21" stroke={C.gold} strokeWidth="2"/><circle cx="70" cy="23" r="2.5" fill={C.gold}/></g>,
    glasses: <g><circle cx="42" cy="32" r="7" fill="none" stroke={C.forest} strokeWidth="2"/><circle cx="62" cy="32" r="7" fill="none" stroke={C.forest} strokeWidth="2"/><line x1="49" y1="32" x2="55" y2="32" stroke={C.forest} strokeWidth="2"/></g>,
    headphones: <g><path d="M32,32 Q30,20 40,13 Q50,8 60,13 Q70,20 68,32" fill="none" stroke={C.forest} strokeWidth="3"/><rect x="26" y="28" width="8" height="12" rx="3" fill={C.purple}/><rect x="66" y="28" width="8" height="12" rx="3" fill={C.purple}/></g>,
    halo: <ellipse cx="50" cy="7" rx="18" ry="5" fill="none" stroke={C.gold} strokeWidth="3" opacity="0.8"/>,
    horns: <g><path d="M36,18 Q32,6 38,2 Q40,12 38,18" fill={C.red}/><path d="M64,18 Q68,6 62,2 Q60,12 62,18" fill={C.red}/></g>,
    santa: <g><ellipse cx="50" cy="13" rx="16" ry="7" fill="#cc0000"/><ellipse cx="50" cy="10" rx="18" ry="3" fill="white"/><circle cx="68" cy="9" r="5" fill="white"/></g>,
    witch: <g><polygon points="50,0 37,20 63,20" fill="#1a1a1a"/><ellipse cx="50" cy="20" rx="16" ry="4" fill="#1a1a1a"/><rect x="47" y="20" width="6" height="2" fill={C.gold}/></g>,
    bunny: <g><ellipse cx="42" cy="7" rx="5" ry="14" fill={C.pink}/><ellipse cx="58" cy="7" rx="5" ry="14" fill={C.pink}/><ellipse cx="42" cy="9" rx="2.5" ry="9" fill="#ffcccc"/><ellipse cx="58" cy="9" rx="2.5" ry="9" fill="#ffcccc"/></g>,
    turkey: <g><ellipse cx="50" cy="7" rx="3" ry="7" fill="#cc0000"/><ellipse cx="43" cy="10" rx="5" ry="10" fill="#ff6600"/><ellipse cx="57" cy="10" rx="5" ry="10" fill="#ff6600"/></g>,
    shamrock: <g><circle cx="45" cy="9" r="5" fill="#228B22"/><circle cx="55" cy="9" r="5" fill="#228B22"/><circle cx="50" cy="14" r="5" fill="#228B22"/><rect x="48" y="16" width="4" height="8" fill="#228B22"/></g>,
    party: <g><polygon points="38,18 42,2 50,18" fill={C.pink}/><polygon points="50,18 54,2 62,18" fill={C.gold}/><circle cx="42" cy="4" r="2.5" fill={C.lime}/><circle cx="54" cy="4" r="2.5" fill={C.purple}/></g>,
    cowboy: <g><ellipse cx="50" cy="18" rx="22" ry="5" fill="#8B4513"/><ellipse cx="50" cy="12" rx="12" ry="9" fill="#8B4513"/><ellipse cx="50" cy="14" rx="9" ry="5" fill="#654321"/></g>,
    chef: <g><ellipse cx="50" cy="14" rx="14" ry="8" fill="white" stroke={C.forest} strokeWidth="1"/><ellipse cx="50" cy="8" rx="10" ry="7" fill="white"/><ellipse cx="50" cy="3" rx="7" ry="5" fill="white"/></g>,
    detective: <g><ellipse cx="50" cy="16" rx="18" ry="5" fill="#654321"/><ellipse cx="50" cy="11" rx="14" ry="8" fill="#654321"/><ellipse cx="50" cy="13" rx="10" ry="5" fill="#8B4513"/></g>,
    viking: <g><ellipse cx="50" cy="16" rx="16" ry="6" fill="#888"/><circle cx="34" cy="12" r="5" fill="#888"/><circle cx="66" cy="12" r="5" fill="#888"/><path d="M34,12 Q32,4 35,2" fill="none" stroke="#888" strokeWidth="2.5"/><path d="M66,12 Q68,4 65,2" fill="none" stroke="#888" strokeWidth="2.5"/></g>,
    pirate: <g><ellipse cx="50" cy="16" rx="16" ry="5" fill="#1a1a1a"/><rect x="34" y="11" width="32" height="6" fill="#1a1a1a"/><circle cx="50" cy="14" r="3" fill="white"/><circle cx="50" cy="14" r="1.5" fill="#1a1a1a"/></g>,
    alien: <g><ellipse cx="40" cy="12" rx="7" ry="10" fill={C.lime}/><ellipse cx="60" cy="12" rx="7" ry="10" fill={C.lime}/><circle cx="40" cy="11" r="3" fill="#1a1a1a"/><circle cx="60" cy="11" r="3" fill="#1a1a1a"/></g>,
    unicorn: <g><polygon points="50,0 47,18 53,18" fill={C.gold}/><ellipse cx="43" cy="12" rx="5" ry="3" fill={C.pink}/><ellipse cx="57" cy="12" rx="5" ry="3" fill={C.purple}/></g>,
  };
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {/* Motion lines when walking */}
      {showMotion && (
        <g stroke={C.forest} strokeWidth="2" strokeLinecap="round" opacity="0.4">
          <path d="M8,58 L2,55" fill="none"/>
          <path d="M6,65 L0,65" fill="none"/>
        </g>
      )}
      
      {/* Goose body - big round */}
      <circle cx="50" cy="60" r="28" fill={color} stroke={C.forest} strokeWidth="2.5"/>
      
      {/* Wing detail */}
      <path d="M30,52 Q22,62 30,72" fill="none" stroke={C.forest} strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      
      {/* Goose head - sits on top of body */}
      <circle cx="50" cy="28" r="15" fill={color} stroke={C.forest} strokeWidth="2.5"/>
      
      {/* Eye ring (like the reference image) */}
      <circle cx="50" cy="28" r="10" fill="none" stroke={C.forest} strokeWidth="2" opacity="0.3"/>
      
      {/* Beak - pointy triangle */}
      <path d="M64,28 L80,32 L64,36 Z" fill={C.orange}/>
      
      {/* Eye based on mood */}
      {mood === 'happy' ? (
        <path d="M46,26 Q50,32 54,26" fill="none" stroke={C.forest} strokeWidth="2.5" strokeLinecap="round"/>
      ) : mood === 'energized' ? (
        <>
          <circle cx="50" cy="28" r="5" fill={C.forest}/>
          <circle cx="51" cy="26" r="2" fill="white"/>
        </>
      ) : (
        <>
          <circle cx="50" cy="28" r="4" fill={C.forest}/>
          <circle cx="51" cy="27" r="1.5" fill="white"/>
        </>
      )}
      
      {/* Goose feet - oval orange */}
      <ellipse cx="38" cy="90" rx="12" ry="5" fill={C.orange}/>
      <ellipse cx="62" cy="90" rx="12" ry="5" fill={C.orange}/>
      
      {/* Accessory */}
      {accessory !== 'none' && accs[accessory]}
    </svg>
  );
};


// Background Component
const Background = ({ type }) => {
  if (!type || type === 'none') return null;
  const iconMap = { clouds: 'sun', stars: 'star', hearts: 'heart', sparkles: 'sparkle' };
  const colorMap = { clouds: C.blue, stars: C.gold, hearts: C.pink, sparkles: C.lime };
  const iconName = iconMap[type] || 'sparkle';
  const iconColor = colorMap[type] || C.lime;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.2 }}>
      {[0,1,2,3,4,5,6,7].map(i => (
        <div key={i} style={{ position: 'absolute', left: `${(i % 4) * 25 + 5}%`, top: `${Math.floor(i / 4) * 40 + 10}%` }}>
          <Icon name={iconName} color={iconColor} size={20}/>
        </div>
      ))}
    </div>
  );
};

// Modal Component
const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(45,74,62,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 }}>
      <div style={{ background: C.cream, borderRadius: 16, padding: 20, maxWidth: 400, width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, border: 'none', background: C.forest+'20', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="x" size={16}/>
        </button>
        {title && <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 600 }}>{title}</h3>}
        {children}
      </div>
    </div>
  );
};

// Card Component
const Card = ({ children, color, style = {}, onClick }) => (
  <div onClick={onClick} style={{ background: '#fff', border: `3px solid ${C.forest}`, borderRadius: 14, padding: 14, position: 'relative', ...style }}>
    {color && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: color, borderRadius: '11px 11px 0 0' }}/>}
    {children}
  </div>
);

// Button Component
const Btn = ({ children, onClick, bg = C.forest, color = C.cream, small, style = {} }) => (
  <button onClick={onClick} style={{ 
    padding: small ? '6px 12px' : '10px 20px', 
    background: bg, 
    color, 
    border: 'none', 
    borderRadius: 20, 
    fontSize: small ? 9 : 11, 
    fontWeight: 700, 
    textTransform: 'uppercase', 
    letterSpacing: '0.05em', 
    cursor: 'pointer', 
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: 6, 
    ...style 
  }}>{children}</button>
);

// Data
const GRADUATION = new Date('2026-03-12');
const DEFAULT_TRIPS = [
  { id: 'cayman', name: 'Cayman Islands', start: '2026-01-11', end: '2026-01-20', goal: 500, flight: 'AA2847' }, 
  { id: 'nyc', name: 'NYC', start: '2026-01-24', end: '2026-01-31', goal: 400, flight: 'UA1456' }
];
const DEFAULT_BIRTHDAYS = [{ id: 'hannah', name: 'Hannah', month: 1, day: 6 }];
const classSchedule = [{ id: 'grds408', name: 'GRDS 408', full: 'Graphic Design', days: ['Mon','Wed'], time: '10:00 AM', color: C.teal }, { id: 'arth701', name: 'ARTH 701', full: 'Art History', days: ['Mon','Wed'], time: '1:00 PM', color: C.purple }, { id: 'busi220', name: 'BUSI 220', full: 'Business', days: ['Mon','Wed'], time: '6:00 PM', color: C.blue }];
const locations = [{ id: 'whitrock', name: 'White Rock Coffee', area: 'Lake Highlands' }, { id: 'merit', name: 'Merit Coffee', area: 'Deep Ellum' }, { id: 'home', name: 'Home Office', area: 'Home' }];
const baselineTasks = [{ id: 'teeth', text: 'Brush teeth' }, { id: 'pills', text: 'Take pills' }, { id: 'water', text: 'Drink water' }];
const focusTasks = [{ name: 'Peloton', time: '20 min', pts: 25 }, { name: 'Silks', time: '30 min', pts: 35 }, { name: 'Laundry', time: '15 min', pts: 15 }, { name: 'Kitchen Reset', time: '20 min', pts: 20 }];
const joyTasks = [{ name: 'Junk Journal', time: '20 min', pts: 20 }, { name: 'Hot Tub', time: '20 min', pts: 20 }, { name: 'Skincare', time: '15 min', pts: 15 }];
const microTasks = [{ task: "Stand up.", time: '10 sec' }, { task: "3 deep breaths.", time: '30 sec' }, { task: "Put ONE thing away.", time: '30 sec' }];
const quickWins = [{ name: 'Drink water', pts: 5 }, { name: 'Delete 5 emails', pts: 5 }, { name: 'Light a candle', pts: 5 }];
const energyLevels = [{ level: 1, name: 'Survival', color: C.purple }, { level: 2, name: 'Low', color: C.blue }, { level: 3, name: 'Steady', color: C.teal }, { level: 4, name: 'Good', color: C.lime }, { level: 5, name: 'Hyperfocus', color: C.orange }];
const birthChart = { sun: { sign: 'Pisces', color: C.orange }, rising: { sign: 'Gemini', color: C.pink }, moon: { sign: 'Capricorn', color: C.purple } };
const tarotCards = [{ name: 'The Fool', meaning: 'New beginnings', advice: 'Take the risk.', color: C.lime }, { name: 'The Magician', meaning: 'Manifestation', advice: 'You have what you need.', color: C.orange }, { name: 'High Priestess', meaning: 'Intuition', advice: 'Trust your gut.', color: C.purple }, { name: 'The Star', meaning: 'Hope', advice: 'Have faith.', color: C.blue }, { name: 'The Sun', meaning: 'Joy', advice: 'Shine bright.', color: C.gold }];
const moonPhases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Full Moon', 'Waning Crescent'];
const noteCategories = [{ id: 'idea', name: 'Idea', icon: 'lightbulb', color: C.gold }, { id: 'todo', name: 'To-do', icon: 'check', color: C.teal }, { id: 'gift', name: 'Gift', icon: 'gift', color: C.pink }, { id: 'other', name: 'Other', icon: 'note', color: C.purple }];

// Spotify Playlists (deep links)
const spotifyPlaylists = [
  { id: 'focus', name: 'Focus Flow', icon: 'target', color: C.orange, uri: 'spotify:playlist:37i9dQZF1DWZeKCadgRdKQ' },
  { id: 'chill', name: 'Chill Vibes', icon: 'coffee', color: C.teal, uri: 'spotify:playlist:37i9dQZF1DX4WYpdgoIcn6' },
  { id: 'energy', name: 'Energy Boost', icon: 'zap', color: C.gold, uri: 'spotify:playlist:37i9dQZF1DX8NTLI2TtZa6' },
  { id: 'indie', name: 'Indie Mix', icon: 'music', color: C.purple, uri: 'spotify:playlist:37i9dQZF1DX2Nc3B70tvx0' },
  { id: 'sleep', name: 'Sleep', icon: 'moon', color: C.blue, uri: 'spotify:playlist:37i9dQZF1DWZd79rJ6a7lp' },
];

// Favorite Restaurants for Date Night
const DEFAULT_RESTAURANTS = [
  { id: 'uchi', name: 'Uchi', cuisine: 'Japanese', price: '$$$$', neighborhood: 'Oak Lawn', mustOrder: 'Wagyu beef tataki', bookOn: 'Resy', lastVisit: null },
  { id: 'meridian', name: 'The Meridian', cuisine: 'American', price: '$$$', neighborhood: 'Bishop Arts', mustOrder: 'Short rib', bookOn: 'OpenTable', lastVisit: null },
  { id: 'petra', name: 'Petra and the Beast', cuisine: 'American', price: '$$$', neighborhood: 'Deep Ellum', mustOrder: 'Chef choice', bookOn: 'Resy', lastVisit: null },
  { id: 'lavendou', name: 'Lavendou', cuisine: 'French', price: '$$$', neighborhood: 'North Dallas', mustOrder: 'Bouillabaisse', bookOn: 'OpenTable', lastVisit: null },
  { id: 'ellie', name: 'Ellies', cuisine: 'American', price: '$$$$', neighborhood: 'Design District', mustOrder: 'Dover sole', bookOn: 'Resy', lastVisit: null },
];

const cuisineTypes = ['Any', 'Japanese', 'Italian', 'Mexican', 'French', 'American', 'Thai', 'Indian', 'Mediterranean', 'Korean', 'Seafood'];
const priceRanges = ['Any', '$$', '$$$', '$$$$'];

const chuckColors = [
  { id: 'lime', color: '#C9D943' }, { id: 'pink', color: '#FFB6C1' }, { id: 'lavender', color: '#E5DDF0' },
  { id: 'blue', color: '#87CEEB' }, { id: 'peach', color: '#FFDAB9' }, { id: 'mint', color: '#98FB98' },
];
const chuckBackgrounds = [
  { id: 'none', name: 'None', icon: 'sparkle' }, { id: 'clouds', name: 'Clouds', icon: 'sun' },
  { id: 'stars', name: 'Stars', icon: 'star' }, { id: 'hearts', name: 'Hearts', icon: 'heart' },
];
const chuckAccessories = [
  // Classic
  { id: 'none', name: 'None', price: 0, icon: 'sparkle' },
  { id: 'crown', name: 'Crown', price: 100, icon: 'star' },
  { id: 'bow', name: 'Bow', price: 30, icon: 'gift' },
  { id: 'beret', name: 'Beret', price: 40, icon: 'star' },
  { id: 'gradcap', name: 'Grad Cap', price: 50, icon: 'grad' },
  { id: 'glasses', name: 'Glasses', price: 25, icon: 'target' },
  { id: 'headphones', name: 'Headphones', price: 45, icon: 'music' },
  { id: 'halo', name: 'Halo', price: 60, icon: 'sun' },
  { id: 'horns', name: 'Horns', price: 66, icon: 'flame' },
  // Seasonal
  { id: 'santa', name: 'Santa Hat', price: 50, icon: 'gift' },
  { id: 'witch', name: 'Witch Hat', price: 45, icon: 'moon' },
  { id: 'bunny', name: 'Bunny Ears', price: 35, icon: 'heart' },
  { id: 'turkey', name: 'Turkey', price: 40, icon: 'flame' },
  { id: 'shamrock', name: 'Shamrock', price: 30, icon: 'star' },
  { id: 'party', name: 'Party Hat', price: 25, icon: 'sparkle' },
  // Funny
  { id: 'cowboy', name: 'Cowboy', price: 55, icon: 'sun' },
  { id: 'chef', name: 'Chef Hat', price: 40, icon: 'coffee' },
  { id: 'detective', name: 'Detective', price: 50, icon: 'target' },
  { id: 'viking', name: 'Viking', price: 70, icon: 'zap' },
  { id: 'pirate', name: 'Pirate', price: 60, icon: 'star' },
  { id: 'alien', name: 'Alien', price: 80, icon: 'sparkle' },
  { id: 'unicorn', name: 'Unicorn', price: 75, icon: 'star' },
];
const chuckSnacks = [
  { id: 'cookie', name: 'Cookie', price: 5, icon: 'cookie', color: C.gold, mood: 'happy', msg: 'Yummy!' },
  { id: 'coffee', name: 'Coffee', price: 8, icon: 'coffee', color: C.orange, mood: 'energized', msg: 'ZOOM!' },
  { id: 'pizza', name: 'Pizza', price: 12, icon: 'pizza', color: C.red, mood: 'happy', msg: 'Pizza time!' },
  { id: 'cake', name: 'Cake', price: 20, icon: 'cake', color: C.pink, mood: 'happy', msg: 'Party!' },
];

const quizCategories = [
  { id: 'popculture', name: 'Pop Culture', icon: 'tv', color: C.pink },
  { id: 'design', name: 'Design', icon: 'target', color: C.teal },
  { id: 'remote', name: 'Remote Work', icon: 'home', color: C.blue },
  { id: 'diy', name: 'DIY & Crafts', icon: 'tool', color: C.orange },
  { id: 'business', name: 'Business English', icon: 'dollar', color: C.gold },
  { id: 'logic', name: 'Logic & Facts', icon: 'brain', color: C.purple },
];

const quizQuestions = {
  popculture: [
    { q: "Which streaming service released 'Wednesday'?", a: ["Netflix", "Hulu", "HBO Max", "Disney+"], correct: 0, fact: "Wednesday became Netflix's 2nd most-watched English series!" },
    { q: "Taylor Swift's Eras Tour grossed how much?", a: ["$500M", "$1B", "$2B+", "$750M"], correct: 2, fact: "First tour to gross over $2 billion!" },
    { q: "What year did the first iPhone launch?", a: ["2005", "2007", "2009", "2006"], correct: 1, fact: "Steve Jobs unveiled it January 9, 2007." },
    { q: "Who played Moira Rose in Schitt's Creek?", a: ["Jennifer Coolidge", "Catherine O'Hara", "Jane Lynch", "Sarah Paulson"], correct: 1, fact: "She created Moira's unique accent herself!" },
    { q: "BTS's 2022 hiatus was for what?", a: ["Solo projects", "Military service", "Both A & B", "Touring"], correct: 2, fact: "All members must complete military service." },
  ],
  design: [
    { q: "What is 'kerning' in typography?", a: ["Line height", "Letter spacing", "Font weight", "Alignment"], correct: 1, fact: "Bad kerning is jokingly called 'keming'!" },
    { q: "Which color model is for print?", a: ["RGB", "CMYK", "HSL", "Pantone"], correct: 1, fact: "CMYK = Cyan, Magenta, Yellow, Key (black)." },
    { q: "Rule of thirds divides into how many parts?", a: ["6", "9", "4", "12"], correct: 1, fact: "Place subjects at intersections!" },
    { q: "When was Figma launched?", a: ["2012", "2016", "2018", "2014"], correct: 1, fact: "Adobe tried to acquire it for $20B!" },
    { q: "Sans-serif fonts lack what?", a: ["Curves", "Serifs", "Lowercase", "Italics"], correct: 1, fact: "Sans = 'without' in French." },
  ],
  remote: [
    { q: "Pomodoro Technique work interval?", a: ["15 min", "25 min", "45 min", "30 min"], correct: 1, fact: "Pomodoro = tomato in Italian!" },
    { q: "Which is NOT mainly for video calls?", a: ["Zoom", "Slack", "Meet", "Teams"], correct: 1, fact: "Slack is primarily for messaging." },
    { q: "What does 'async' communication mean?", a: ["Real-time", "No immediate response", "Video only", "In-person"], correct: 1, fact: "Lets teams work across time zones!" },
    { q: "'Two pizza rule' is from which company?", a: ["Google", "Apple", "Amazon", "Microsoft"], correct: 2, fact: "Bezos: if 2 pizzas can't feed it, too many people!" },
    { q: "Zoom fatigue is mainly caused by?", a: ["Bad internet", "Eye contact & self-view", "Long hours", "Content"], correct: 1, fact: "Constant eye contact is exhausting." },
  ],
  diy: [
    { q: "Mod Podge works as what?", a: ["Paint", "Glue/sealer/finish", "Stain", "Primer"], correct: 1, fact: "Name comes from 'modern decoupage'!" },
    { q: "Hot glue gun temperature?", a: ["100°F", "250°F", "380°F", "500°F"], correct: 2, fact: "High-temp guns reach 380°F!" },
    { q: "Best way to slow acrylic drying?", a: ["Add water", "Wet palette", "Work faster", "Thin layers"], correct: 1, fact: "Wet palette keeps paint workable for hours." },
    { q: "Washi tape is from which country?", a: ["China", "Japan", "Korea", "USA"], correct: 1, fact: "Washi = 'Japanese paper'." },
    { q: "What is gesso used for?", a: ["Cleaning", "Priming canvas", "Sealing", "Mixing"], correct: 1, fact: "Creates texture for paint adhesion." },
  ],
  business: [
    { q: "What does 'EOD' mean?", a: ["End of Day", "End of Discussion", "Execute on Delivery", "Either Option"], correct: 0, fact: "Also: EOW, COB, OOO!" },
    { q: "'Let's table this' in US means?", a: ["Discuss now", "Postpone", "Decide", "Reject"], correct: 1, fact: "In British English it's the opposite!" },
    { q: "What's a 'deck' in business?", a: ["Presentation", "Contract", "Project plan", "Org chart"], correct: 0, fact: "From 'deck of slides' in old projectors." },
    { q: "ROI stands for?", a: ["Rate of Interest", "Return on Investment", "Risk", "Review"], correct: 1, fact: "ROI = (Gain - Cost) / Cost × 100" },
    { q: "'Bandwidth' in business means?", a: ["Internet speed", "Available capacity", "Budget", "Team size"], correct: 1, fact: "'No bandwidth' = 'no time for this'." },
  ],
  logic: [
    { q: "All Bloops are Razzles. All Razzles are Lazzles. So:", a: ["All Bloops are Lazzles", "All Lazzles are Bloops", "Some are", "None"], correct: 0, fact: "This is called a syllogism!" },
    { q: "Bat + ball = $1.10. Bat costs $1 more. Ball price?", a: ["$0.10", "$0.05", "$0.15", "$0.01"], correct: 1, fact: "Ball=$0.05, Bat=$1.05!" },
    { q: "F's in 'FINISHED FILES ARE THE RESULT OF SCIENTIFIC STUDY'?", a: ["3", "4", "5", "6"], correct: 3, fact: "Brain skips F's in 'OF'!" },
    { q: "Overtake 2nd place = what place?", a: ["1st", "2nd", "3rd", "Behind"], correct: 1, fact: "You take their position!" },
    { q: "Next: 1, 1, 2, 3, 5, 8, 13, ?", a: ["18", "20", "21", "26"], correct: 2, fact: "Fibonacci sequence!" },
  ],
};

const dailyHoroscopes = {
  pisces: ["Trust your intuition today ♓", "Creative energy is flowing ♓", "Your empathy is your superpower ♓", "Dreams hold messages tonight ♓", "Water signs align in your favor ♓"],
  gemini: ["Communication is your superpower ♊", "Curiosity leads to discoveries ♊", "Social connections bring opportunities ♊", "Mental agility is sharp ♊", "Mix up your routine ♊"],
  capricorn: ["Steady progress beats perfection ♑", "Your practical approach wins ♑", "Big goals feel achievable ♑", "Build systems that serve you ♑", "Recognition comes unexpectedly ♑"],
};

// Main App
export default function GoodLuckChuck() {
  const [coins, setCoins] = useState(() => storage.get('coins', 50));
  const [streak] = useState(() => storage.get('streak', 1));
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [chuckColor, setChuckColor] = useState(() => storage.get('chuckColor', '#C9D943'));
  const [chuckBg, setChuckBg] = useState(() => storage.get('chuckBg', 'none'));
  const [chuckAccessory, setChuckAccessory] = useState(() => storage.get('chuckAccessory', 'none'));
  const [ownedAccessories, setOwnedAccessories] = useState(() => storage.get('ownedAccessories', ['none']));
  const [chuckMood, setChuckMood] = useState('normal');
  const [feedMsg, setFeedMsg] = useState('');
  
  const [trips, setTrips] = useState(() => storage.get('trips', DEFAULT_TRIPS));
  const [birthdays, setBirthdays] = useState(() => storage.get('birthdays', DEFAULT_BIRTHDAYS));
  const [notes, setNotes] = useState(() => storage.get('notes', []));
  const [purchases, setPurchases] = useState(() => storage.get('purchases', []));
  const [quizProgress, setQuizProgress] = useState(() => storage.get('quizProgress', {}));
  const [baseline, setBaseline] = useState([false, false, false]);
  
  const [focusTask, setFocusTask] = useState(null);
  const [joyTask, setJoyTask] = useState(null);
  const [loc, setLoc] = useState(locations[0]);
  const [energyLevel, setEnergyLevel] = useState(0);
  const [showEnergyCheck, setShowEnergyCheck] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  
  const [showWheel, setShowWheel] = useState(null);
  const [wheelResult, setWheelResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [tarotCard, setTarotCard] = useState(tarotCards[0]);
  const [tarotFlipped, setTarotFlipped] = useState(false);
  const [showStuck, setShowStuck] = useState(false);
  const [stuckTask, setStuckTask] = useState(null);
  const [showQuickWins, setShowQuickWins] = useState(false);
  const [quickWinsDone, setQuickWinsDone] = useState([]);
  const [modal, setModal] = useState(null);
  const [noteInput, setNoteInput] = useState('');
  const [weather, setWeather] = useState({ temp: 72, desc: '☀️' });
  const [horoscopes, setHoroscopes] = useState({ pisces: null, gemini: null, capricorn: null });
  const [moonPhase, setMoonPhase] = useState('Full Moon');
  
  // Pomodoro timer
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState('focus'); // 'focus' or 'break'
  const [pomodoroCount, setPomodoroCount] = useState(0);
  
  const [quizCategory, setQuizCategory] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  // Restaurant & Date Night
  const [restaurants, setRestaurants] = useState(() => storage.get('restaurants', DEFAULT_RESTAURANTS));
  const [dateNightPick, setDateNightPick] = useState(null);
  const [dateNightFilter, setDateNightFilter] = useState({ cuisine: 'Any', price: 'Any' });
  
  // Flight status
  const [flightStatus, setFlightStatus] = useState({});

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const daysUntilGrad = Math.ceil((GRADUATION - now) / (1000 * 60 * 60 * 24));
  const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][now.getDay()];
  const todaysClasses = classSchedule.filter(c => c.days.includes(dayName.slice(0,3)));
  const upcomingTrip = trips.filter(t => todayStr < t.start).sort((a,b) => a.start.localeCompare(b.start))[0];
  const daysUntilTrip = upcomingTrip ? Math.ceil((new Date(upcomingTrip.start) - now) / (1000*60*60*24)) : null;
  const todayHoroscope = horoscopes.pisces || dailyHoroscopes.pisces[now.getDate() % 5];

  useEffect(() => { storage.set('coins', coins); }, [coins]);
  useEffect(() => { storage.set('chuckColor', chuckColor); }, [chuckColor]);
  useEffect(() => { storage.set('chuckBg', chuckBg); }, [chuckBg]);
  useEffect(() => { storage.set('chuckAccessory', chuckAccessory); }, [chuckAccessory]);
  useEffect(() => { storage.set('ownedAccessories', ownedAccessories); }, [ownedAccessories]);
  useEffect(() => { storage.set('trips', trips); }, [trips]);
  useEffect(() => { storage.set('birthdays', birthdays); }, [birthdays]);
  useEffect(() => { storage.set('notes', notes); }, [notes]);
  useEffect(() => { storage.set('purchases', purchases); }, [purchases]);
  useEffect(() => { storage.set('quizProgress', quizProgress); }, [quizProgress]);
  useEffect(() => { storage.set('restaurants', restaurants); }, [restaurants]);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=32.89&longitude=-96.73&current=temperature_2m,weather_code&temperature_unit=fahrenheit')
      .then(r => r.json())
      .then(d => setWeather({ temp: Math.round(d.current?.temperature_2m || 72), desc: d.current?.weather_code === 0 ? '☀️' : '☁️' }))
      .catch(() => {});
  }, []);

  // Fetch horoscopes for big 3
  useEffect(() => {
    const signs = ['pisces', 'gemini', 'capricorn'];
    signs.forEach(sign => {
      fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, { method: 'POST' })
        .then(r => r.json())
        .then(data => {
          if (data.description) {
            setHoroscopes(prev => ({ ...prev, [sign]: data.description }));
          }
        })
        .catch(() => {});
    });
    
    // Calculate accurate moon phase
    // Based on known new moon: Jan 29, 2025
    const knownNewMoon = new Date('2025-01-29T12:36:00Z');
    const lunarCycle = 29.53059; // days
    const daysSinceNew = (now - knownNewMoon) / (1000 * 60 * 60 * 24);
    const moonAge = ((daysSinceNew % lunarCycle) + lunarCycle) % lunarCycle;
    
    let phase = 'New Moon';
    if (moonAge < 1.85) phase = 'New Moon 🌑';
    else if (moonAge < 7.38) phase = 'Waxing Crescent 🌒';
    else if (moonAge < 9.23) phase = 'First Quarter 🌓';
    else if (moonAge < 14.77) phase = 'Waxing Gibbous 🌔';
    else if (moonAge < 16.61) phase = 'Full Moon 🌕';
    else if (moonAge < 22.15) phase = 'Waning Gibbous 🌖';
    else if (moonAge < 24.0) phase = 'Last Quarter 🌗';
    else phase = 'Waning Crescent 🌘';
    
    setMoonPhase(phase);
  }, []);

  // Pomodoro timer countdown
  useEffect(() => {
    let interval = null;
    if (pomodoroRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(t => t - 1);
      }, 1000);
    } else if (pomodoroTime === 0 && pomodoroRunning) {
      // Timer finished!
      setPomodoroRunning(false);
      if (pomodoroMode === 'focus') {
        setPomodoroCount(c => c + 1);
        addCoins(25); // Reward for completing a pomodoro!
        makeHappy('energized');
        setPomodoroMode('break');
        setPomodoroTime(5 * 60); // 5 min break
      } else {
        setPomodoroMode('focus');
        setPomodoroTime(25 * 60); // Back to 25 min focus
      }
    }
    return () => clearInterval(interval);
  }, [pomodoroRunning, pomodoroTime]);

  const togglePomodoro = () => setPomodoroRunning(!pomodoroRunning);
  const resetPomodoro = () => {
    setPomodoroRunning(false);
    setPomodoroMode('focus');
    setPomodoroTime(25 * 60);
  };
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const makeHappy = (mood = 'happy') => { setChuckMood(mood); setTimeout(() => setChuckMood('normal'), 2000); };
  const addCoins = (n) => setCoins(c => c + n);
  
  const feedChuck = (snack) => {
    if (coins < snack.price) return;
    setCoins(c => c - snack.price);
    setFeedMsg(snack.msg);
    makeHappy(snack.mood);
    setTimeout(() => setFeedMsg(''), 2000);
  };

  const buyAccessory = (acc) => {
    if (ownedAccessories.includes(acc.id)) {
      setChuckAccessory(chuckAccessory === acc.id ? 'none' : acc.id);
    } else if (coins >= acc.price) {
      setCoins(c => c - acc.price);
      setOwnedAccessories([...ownedAccessories, acc.id]);
      setChuckAccessory(acc.id);
    }
  };

  const toggleBaseline = (i) => { 
    const newB = [...baseline];
    if (!newB[i]) addCoins(5);
    newB[i] = !newB[i];
    setBaseline(newB);
    if (!baseline[i]) makeHappy();
  };
  
  const spin = (type) => { 
    setSpinning(true); 
    setTimeout(() => { 
      const tasks = type === 'focus' ? focusTasks : joyTasks;
      setWheelResult(tasks[Math.floor(Math.random() * tasks.length)]); 
      setSpinning(false); 
    }, 1500); 
  };
  
  const acceptTask = () => { 
    if (showWheel === 'focus') setFocusTask(wheelResult); 
    else setJoyTask(wheelResult); 
    setShowWheel(null); 
    setWheelResult(null); 
  };
  
  const completeTask = (type) => { 
    const t = type === 'focus' ? focusTask : joyTask; 
    if (t && !t.done) { 
      addCoins(t.pts); 
      makeHappy(); 
      if (type === 'focus') setFocusTask({ ...t, done: true }); 
      else setJoyTask({ ...t, done: true }); 
    } 
  };
  
  const spinLoc = () => setLoc(locations[Math.floor(Math.random() * locations.length)]);
  const getStuckHelp = () => { setStuckTask(microTasks[Math.floor(Math.random() * 3)]); setShowStuck(true); };
  const completeStuck = () => { addCoins(3); makeHappy(); setShowStuck(false); };
  const completeQuickWin = (i) => { if (!quickWinsDone.includes(i)) { setQuickWinsDone([...quickWinsDone, i]); addCoins(5); makeHappy(); } };
  const addTrip = (t) => { setTrips([...trips, { ...t, id: genId() }]); setModal(null); };
  const addBirthday = (b) => { setBirthdays([...birthdays, { ...b, id: genId() }]); setModal(null); };
  const addNote = (text, cat) => { setNotes([{ id: genId(), text, cat, date: todayStr }, ...notes]); setNoteInput(''); setModal(null); };
  const startQuiz = (cat) => { setQuizCategory(cat); setQuizIndex(0); setQuizAnswer(null); setQuizRevealed(false); setQuizScore(0); };
  const answerQuiz = (idx) => { if (quizRevealed) return; setQuizAnswer(idx); setQuizRevealed(true); if (idx === quizQuestions[quizCategory][quizIndex].correct) { setQuizScore(s => s + 1); addCoins(10); makeHappy(); } };
  const nextQuestion = () => { if (quizIndex < 4) { setQuizIndex(i => i + 1); setQuizAnswer(null); setQuizRevealed(false); } else { setQuizProgress(p => ({ ...p, [quizCategory]: (p[quizCategory] || 0) + quizScore })); setQuizCategory(null); } };

  const menuItems = [
    { id: 'home', name: 'Home', icon: 'home' },
    { id: 'tasks', name: 'Tasks', icon: 'check' },
    { id: 'learn', name: 'Learn', icon: 'brain' },
    { id: 'music', name: 'Music', icon: 'music' },
    { id: 'datenight', name: 'Date Night', icon: 'utensils' },
    { id: 'customize', name: 'Customize Chuck', icon: 'star' },
    { id: 'schedule', name: 'Schedule', icon: 'target' },
    { id: 'money', name: 'Money', icon: 'dollar' },
    { id: 'notes', name: 'Notes', icon: 'note' },
    { id: 'tarot', name: 'Daily Guidance', icon: 'moon' },
  ];

  const s = { 
    pill: { display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 12, fontSize: 10, fontWeight: 600 }, 
    label: { fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, color: C.forest } 
  };

  // Splash screen with logo
  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => setShowSplash(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (showSplash) {
    return (
      <div style={{ 
        fontFamily: 'system-ui, sans-serif', 
        background: C.cream, 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20 
      }}>
        <style>{`
          @keyframes waddle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}</style>
        <div style={{ textAlign: 'center' }}>
          {/* Logo text */}
          <div style={{ marginBottom: 8 }}>
            <span style={{ 
              fontSize: 42, 
              fontWeight: 700, 
              color: C.forest, 
              letterSpacing: '-0.02em',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              good luck
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span style={{ 
              fontSize: 42, 
              fontWeight: 700, 
              color: C.forest, 
              letterSpacing: '-0.02em',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              chuck.
            </span>
            <div style={{ animation: 'waddle 0.3s ease-in-out infinite' }}>
              <Chuck color={C.lime} mood="happy" size={60} showMotion={true}/>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, opacity: 0.5, fontSize: 12, animation: 'bounce 1s ease-in-out infinite', display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
          <Chuck color={C.lime} size={16}/> Loading your goose...
        </div>
      </div>
    );
  }

  // Energy check screen
  if (showEnergyCheck && energyLevel === 0) {
    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', background: C.forest, color: C.cream, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <div style={{ textAlign: 'center', maxWidth: 400 }}>
          <Chuck color={chuckColor} mood="normal" accessory={chuckAccessory} size={140}/>
          <h1 style={{ fontSize: 26, fontWeight: 400, margin: '20px 0 8px' }}>Hey there!</h1>
          <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 24 }}>How's your energy today?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {energyLevels.map(e => (
              <button key={e.level} onClick={() => { setEnergyLevel(e.level); setShowEnergyCheck(false); }} 
                style={{ padding: '14px 18px', background: 'transparent', border: `2px solid ${e.color}`, borderRadius: 14, color: C.cream, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, background: e.color, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="zap" color={C.cream} size={20}/>
                </div>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{e.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main app render
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: C.cream, color: C.forest, minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: C.forest, color: C.cream, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon name="menu" color={C.cream} size={24}/>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '-0.01em' }}>good luck chuck.</span>
          <Chuck color={C.lime} size={24} showMotion={false}/>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ ...s.pill, background: C.lime, color: C.forest }}><Icon name="sparkle" color={C.forest} size={10}/> {coins}</div>
          <div style={{ ...s.pill, background: C.orange, color: '#fff' }}><Icon name="flame" color="#fff" size={10}/> {streak}</div>
        </div>
      </header>

      {/* Menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
          <div onClick={() => setMenuOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}/>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 280, background: C.forest, padding: '20px 0' }}>
            <div style={{ padding: '0 20px 20px', borderBottom: `1px solid ${C.lime}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.cream }}>good luck</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.cream }}>chuck.</div>
                </div>
                <Chuck color={C.lime} size={36} mood="happy"/>
              </div>
            </div>
            {menuItems.map(item => (
              <button key={item.id} onClick={() => { setPage(item.id); setMenuOpen(false); }}
                style={{ width: '100%', padding: '16px 20px', background: page === item.id ? C.lime + '20' : 'transparent', border: 'none', borderLeft: page === item.id ? `4px solid ${C.lime}` : '4px solid transparent', color: C.cream, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
                <Icon name={item.icon} color={page === item.id ? C.lime : C.cream} size={20}/>
                <span style={{ fontSize: 14, fontWeight: page === item.id ? 700 : 400 }}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HOME */}
      {page === 'home' && (
        <div>
          <div style={{ background: `linear-gradient(180deg, ${C.limePale} 0%, ${C.cream} 100%)`, minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, position: 'relative' }}>
            <Background type={chuckBg}/>
            <div style={{ position: 'absolute', top: 16, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.7, zIndex: 1 }}>
              <span>{dayName}</span>
              <span>{weather.desc} {weather.temp}°</span>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Chuck color={chuckColor} mood={chuckMood} accessory={chuckAccessory} size={180} onClick={() => makeHappy()} showMotion={chuckMood === 'happy' || chuckMood === 'energized'}/>
              {feedMsg && (
                <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', background: '#fff', padding: '8px 16px', borderRadius: 20, fontSize: 14, fontWeight: 600, boxShadow: '0 4px 12px rgba(0,0,0,0.15)', whiteSpace: 'nowrap' }}>
                  {feedMsg}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
              {Object.entries(birthChart).map(([k, v]) => (
                <div key={k} style={{ ...s.pill, background: '#fff', border: `2px solid ${v.color}` }}>
                  <Icon name={k === 'moon' ? 'moon' : 'sun'} color={v.color} size={10}/> {v.sign}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, padding: '12px 20px', background: 'rgba(255,255,255,0.8)', borderRadius: 12, maxWidth: 300, textAlign: 'center', zIndex: 1 }}>
              <div style={{ fontSize: 12, lineHeight: 1.5, fontStyle: 'italic', color: C.purple }}>{todayHoroscope}</div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 20, zIndex: 1 }}>
              <button onClick={getStuckHelp} style={{ ...s.pill, background: C.pink, color: '#fff', border: 'none', cursor: 'pointer', padding: '10px 16px' }}>I'm Stuck</button>
              <button onClick={() => setModal('feed')} style={{ ...s.pill, background: C.orange, color: '#fff', border: 'none', cursor: 'pointer', padding: '10px 16px' }}>
                <Icon name="heart" color="#fff" size={12}/> Feed Chuck
              </button>
            </div>

            <div style={{ marginTop: 20, fontSize: 11, opacity: 0.6, zIndex: 1 }}>
              <Icon name="grad" color={C.forest} size={12}/> {daysUntilGrad} days until graduation
            </div>
            
            {/* Pomodoro Timer */}
            <div style={{ marginTop: 24, zIndex: 1, width: '100%', maxWidth: 280 }}>
              <div style={{ 
                background: pomodoroMode === 'focus' ? 'rgba(45,74,62,0.95)' : 'rgba(90,154,139,0.95)', 
                borderRadius: 20, 
                padding: '20px 24px', 
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.lime, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                  <Icon name="tomato" color={C.lime} size={14}/> {pomodoroMode === 'focus' ? 'Focus Time' : 'Break Time'}
                </div>
                <div style={{ 
                  fontSize: 48, 
                  fontWeight: 800, 
                  color: '#fff',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em'
                }}>
                  {formatTime(pomodoroTime)}
                </div>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
                  <button 
                    onClick={togglePomodoro}
                    style={{ 
                      padding: '10px 24px', 
                      background: pomodoroRunning ? C.orange : C.lime, 
                      color: pomodoroRunning ? '#fff' : C.forest,
                      border: 'none', 
                      borderRadius: 25, 
                      fontSize: 12, 
                      fontWeight: 700, 
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    {pomodoroRunning ? 'Pause' : 'Start'}
                  </button>
                  <button 
                    onClick={resetPomodoro}
                    style={{ 
                      padding: '10px 16px', 
                      background: 'rgba(255,255,255,0.2)', 
                      color: '#fff',
                      border: 'none', 
                      borderRadius: 25, 
                      fontSize: 12, 
                      fontWeight: 700, 
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    Reset
                  </button>
                </div>
                {pomodoroCount > 0 && (
                  <div style={{ marginTop: 12, fontSize: 11, color: C.lime, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                    <Icon name="tomato" color={C.lime} size={12}/> {pomodoroCount} pomodoro{pomodoroCount > 1 ? 's' : ''} today! (+{pomodoroCount * 25} coins)
                  </div>
                )}
              </div>
            </div>
          </div>

          <div style={{ padding: 20 }}>
            {todaysClasses.length > 0 && (
              <Card color={C.purple} style={{ marginBottom: 16 }}>
                <div style={s.label}>Classes Today</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {todaysClasses.map(c => (
                    <div key={c.id} style={{ padding: '8px 12px', background: `${c.color}20`, borderRadius: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: c.color }}>{c.name}</div>
                      <div style={{ fontSize: 10, opacity: 0.6 }}>{c.time}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
            {upcomingTrip && (
              <Card color={C.blue} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name="plane" color={C.blue} size={24}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{upcomingTrip.name}</div>
                    <div style={{ fontSize: 11, opacity: 0.6 }}>in {daysUntilTrip} days</div>
                  </div>
                  {upcomingTrip.flight && (
                    <a 
                      href={`https://www.google.com/search?q=${encodeURIComponent(upcomingTrip.flight + ' flight status')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ padding: '6px 10px', background: C.blue, color: '#fff', borderRadius: 8, fontSize: 10, fontWeight: 700, textDecoration: 'none' }}
                    >
                      {upcomingTrip.flight}
                    </a>
                  )}
                </div>
              </Card>
            )}
            <div style={{ textAlign: 'center', padding: 16, opacity: 0.6 }}>
              {moonPhase}
            </div>
          </div>
        </div>
      )}

      {/* TASKS */}
      {page === 'tasks' && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 20px' }}>{dayName}'s Tasks</h2>
          <Card color={C.teal} style={{ marginBottom: 16 }}>
            <div style={s.label}>Non-Negotiables</div>
            {baselineTasks.map((t, i) => (
              <div key={t.id} onClick={() => toggleBaseline(i)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', cursor: 'pointer', borderBottom: i < 2 ? `1px solid ${C.forest}10` : 'none' }}>
                <div style={{ width: 22, height: 22, border: `2px solid ${baseline[i] ? C.teal : C.forest}`, background: baseline[i] ? C.teal : 'transparent', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {baseline[i] && <Icon name="check" color="#fff" size={12}/>}
                </div>
                <span style={{ fontSize: 14, textDecoration: baseline[i] ? 'line-through' : 'none', opacity: baseline[i] ? 0.5 : 1 }}>{t.text}</span>
              </div>
            ))}
          </Card>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            <Card color={C.orange}>
              <div style={s.label}>Focus</div>
              {!focusTask ? (
                <Btn small onClick={() => { setShowWheel('focus'); setWheelResult(null); }} style={{ width: '100%', justifyContent: 'center' }}>Spin</Btn>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{focusTask.name}</div>
                  <div style={{ fontSize: 10, opacity: 0.5 }}>{focusTask.time}</div>
                  {!focusTask.done ? <Btn small bg={C.teal} onClick={() => completeTask('focus')} style={{ marginTop: 8 }}>Done +{focusTask.pts}</Btn> : <div style={{ color: C.teal, marginTop: 8 }}>✓</div>}
                </div>
              )}
            </Card>
            <Card color={C.lime}>
              <div style={s.label}>Joy</div>
              {!joyTask ? (
                <Btn small onClick={() => { setShowWheel('joy'); setWheelResult(null); }} style={{ width: '100%', justifyContent: 'center' }}>Spin</Btn>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{joyTask.name}</div>
                  <div style={{ fontSize: 10, opacity: 0.5 }}>{joyTask.time}</div>
                  {!joyTask.done ? <Btn small bg={C.teal} onClick={() => completeTask('joy')} style={{ marginTop: 8 }}>Done +{joyTask.pts}</Btn> : <div style={{ color: C.teal, marginTop: 8 }}>✓</div>}
                </div>
              )}
            </Card>
          </div>
          <Card style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><div style={{ fontSize: 14, fontWeight: 600 }}>{loc.name}</div><div style={{ fontSize: 11, color: C.pink }}>{loc.area}</div></div>
              <Btn small bg={C.pink} onClick={spinLoc}>Change</Btn>
            </div>
          </Card>
          <Btn bg={C.gold} color={C.forest} onClick={() => setShowQuickWins(true)} style={{ width: '100%', justifyContent: 'center' }}>Quick Wins</Btn>
        </div>
      )}

      {/* LEARN */}
      {page === 'learn' && !quizCategory && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 8px' }}>Learn Something</h2>
          <p style={{ fontSize: 12, opacity: 0.6, marginBottom: 20 }}>+10 coins per correct answer!</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {quizCategories.map(cat => (
              <Card key={cat.id} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => startQuiz(cat.id)}>
                <div style={{ width: 50, height: 50, background: `${cat.color}20`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                  <Icon name={cat.icon} color={cat.color} size={26}/>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{cat.name}</div>
                <div style={{ fontSize: 10, color: cat.color, marginTop: 4 }}>{quizProgress[cat.id] || 0} pts</div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {page === 'learn' && quizCategory && (() => {
        const cat = quizCategories.find(c => c.id === quizCategory);
        const q = quizQuestions[quizCategory][quizIndex];
        return (
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <button onClick={() => setQuizCategory(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, opacity: 0.6 }}>← Exit</button>
              <div style={{ ...s.pill, background: `${cat.color}20`, color: cat.color }}>{cat.name}</div>
              <span style={{ fontSize: 12 }}>{quizIndex + 1}/5</span>
            </div>
            <Card style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>{q.q}</div>
              {q.a.map((a, i) => {
                let bg = '#fff', border = `${C.forest}30`;
                if (quizRevealed) { 
                  if (i === q.correct) { bg = `${C.lime}30`; border = C.lime; } 
                  else if (i === quizAnswer) { bg = `${C.red}20`; border = C.red; } 
                }
                return (
                  <button key={i} onClick={() => answerQuiz(i)} disabled={quizRevealed}
                    style={{ width: '100%', padding: 14, marginBottom: 8, background: bg, border: `2px solid ${border}`, borderRadius: 10, textAlign: 'left', fontSize: 14, cursor: quizRevealed ? 'default' : 'pointer' }}>
                    {a}
                  </button>
                );
              })}
            </Card>
            {quizRevealed && (
              <div>
                <Card color={quizAnswer === q.correct ? C.lime : C.orange} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{quizAnswer === q.correct ? '🎉 +10!' : '💡 Good try!'}</div>
                  <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>{q.fact}</div>
                </Card>
                <Btn bg={cat.color} onClick={nextQuestion} style={{ width: '100%', justifyContent: 'center' }}>
                  {quizIndex < 4 ? 'Next' : `Done (${quizScore}/5)`}
                </Btn>
              </div>
            )}
          </div>
        );
      })()}

      {/* CUSTOMIZE */}
      {page === 'customize' && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 20px' }}>Customize Chuck</h2>
          <div style={{ background: C.limePale, borderRadius: 16, padding: 20, marginBottom: 20, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <Background type={chuckBg}/>
            <Chuck color={chuckColor} mood={chuckMood} accessory={chuckAccessory} size={140} onClick={() => makeHappy()}/>
          </div>
          <Card style={{ marginBottom: 16 }}>
            <div style={s.label}>Color</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {chuckColors.map(c => (
                <button key={c.id} onClick={() => setChuckColor(c.color)}
                  style={{ width: 40, height: 40, borderRadius: '50%', background: c.color, border: chuckColor === c.color ? `3px solid ${C.forest}` : '3px solid transparent', cursor: 'pointer' }}/>
              ))}
            </div>
          </Card>
          <Card style={{ marginBottom: 16 }}>
            <div style={s.label}>Background</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {chuckBackgrounds.map(bg => (
                <button key={bg.id} onClick={() => setChuckBg(bg.id)}
                  style={{ padding: '8px 14px', borderRadius: 20, background: chuckBg === bg.id ? C.forest : '#fff', color: chuckBg === bg.id ? C.cream : C.forest, border: `2px solid ${C.forest}`, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Icon name={bg.icon} color={chuckBg === bg.id ? C.cream : C.forest} size={14}/> {bg.name}
                </button>
              ))}
            </div>
          </Card>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={s.label}>Accessories</div>
              <div style={{ ...s.pill, background: C.lime, color: C.forest }}>{coins} coins</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {chuckAccessories.map(acc => {
                const owned = ownedAccessories.includes(acc.id);
                const wearing = chuckAccessory === acc.id;
                return (
                  <button key={acc.id} onClick={() => buyAccessory(acc)}
                    style={{ padding: 12, borderRadius: 12, background: wearing ? `${C.lime}30` : '#fff', border: `2px solid ${wearing ? C.lime : C.forest}30`, cursor: 'pointer', textAlign: 'center' }}>
                    <div style={{ width: 32, height: 32, margin: '0 auto', borderRadius: 8, background: `${C.forest}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={acc.icon} color={C.forest} size={18}/>
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 600, marginTop: 6 }}>{acc.name}</div>
                    <div style={{ fontSize: 9, color: owned ? C.teal : C.orange }}>
                      {acc.id === 'none' ? '' : owned ? (wearing ? <Icon name="check" color={C.teal} size={10}/> : 'Owned') : acc.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {/* SCHEDULE */}
      {page === 'schedule' && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 20px' }}>Schedule</h2>
          <Card style={{ marginBottom: 16 }}>
            <div style={s.label}>Classes (Mon/Wed)</div>
            {classSchedule.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${C.forest}10` }}>
                <span><strong style={{ color: c.color }}>{c.name}</strong> {c.full}</span>
                <span style={{ fontSize: 12 }}>{c.time}</span>
              </div>
            ))}
          </Card>
          <Card style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={s.label}>Trips</div>
              <button onClick={() => setModal('addTrip')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Icon name="plus" size={18}/></button>
            </div>
            {trips.map(t => {
              const tripStart = new Date(t.start);
              const daysAway = Math.ceil((tripStart - now) / (1000*60*60*24));
              const isUpcoming = daysAway > 0 && daysAway <= 14;
              return (
                <div key={t.id} style={{ padding: '10px 0', borderBottom: `1px solid ${C.forest}10` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{t.name}</div>
                      <div style={{ fontSize: 11, opacity: 0.5 }}>{t.start} → {t.end}</div>
                      {t.flight && (
                        <a 
                          href={`https://www.google.com/search?q=${encodeURIComponent(t.flight + ' flight status')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: 4, 
                            marginTop: 6, 
                            padding: '4px 8px', 
                            background: `${C.blue}20`, 
                            borderRadius: 6, 
                            fontSize: 10, 
                            color: C.blue,
                            textDecoration: 'none',
                            fontWeight: 600
                          }}
                        >
                          <Icon name="plane" color={C.blue} size={12}/> {t.flight}
                        </a>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {isUpcoming && <span style={{ fontSize: 10, color: C.orange, fontWeight: 600 }}>{daysAway}d</span>}
                      <button onClick={() => setTrips(trips.filter(x => x.id !== t.id))} style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.3 }}><Icon name="trash" color={C.red} size={14}/></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Card>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={s.label}>Birthdays</div>
              <button onClick={() => setModal('addBday')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Icon name="plus" size={18}/></button>
            </div>
            {birthdays.map(b => (
              <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <span><Icon name="cake" color={C.pink} size={14}/> {b.name}</span>
                <span style={{ fontSize: 11, opacity: 0.5 }}>{b.month}/{b.day}</span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {/* MONEY */}
      {page === 'money' && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 20px' }}>Money</h2>
          <Card style={{ marginBottom: 16 }}>
            <div style={s.label}>Trip Savings</div>
            {trips.map(t => (
              <div key={t.id} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}><span>{t.name}</span><span>0/{t.goal || 0}</span></div>
                <div style={{ height: 8, background: `${C.forest}15`, borderRadius: 4 }}/>
              </div>
            ))}
          </Card>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={s.label}>48hr Purchase Pause</div>
              <button onClick={() => setModal('addPurchase')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Icon name="plus" size={18}/></button>
            </div>
            {purchases.length === 0 && <p style={{ fontSize: 12, opacity: 0.5, textAlign: 'center' }}>Add items you want to buy</p>}
            {purchases.map(p => {
              const hrs = Math.max(0, Math.floor((p.time + 48*60*60*1000 - Date.now()) / 3600000));
              return (
                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span>{p.name}</span>
                  {hrs <= 0 ? <Btn small bg={C.teal} onClick={() => { setPurchases(purchases.filter(x => x.id !== p.id)); addCoins(20); }}>OK +20</Btn> : <span style={{ color: C.orange, fontSize: 12 }}>{hrs}h</span>}
                </div>
              );
            })}
          </Card>
        </div>
      )}

      {/* NOTES */}
      {page === 'notes' && (
        <div style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, margin: 0 }}>Notes</h2>
            <Btn small onClick={() => setModal('addNote')}><Icon name="plus" color={C.cream} size={12}/></Btn>
          </div>
          {notes.length === 0 && <p style={{ textAlign: 'center', opacity: 0.5 }}>No notes yet</p>}
          {notes.map(n => {
            const cat = noteCategories.find(c => c.id === n.cat) || noteCategories[3];
            return (
              <Card key={n.id} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 14, marginBottom: 8 }}>{n.text}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ ...s.pill, background: `${cat.color}20`, color: cat.color }}>{cat.name}</div>
                  <button onClick={() => setNotes(notes.filter(x => x.id !== n.id))} style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.3 }}><Icon name="trash" color={C.red} size={14}/></button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* TAROT */}
      {page === 'tarot' && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 20px', textAlign: 'center' }}>Daily Guidance</h2>
          <Card style={{ marginBottom: 20 }}>
            <div style={s.label}>Your Big 3</div>
            {Object.entries(birthChart).map(([k, v]) => {
              const signKey = v.sign.toLowerCase();
              const horoscopeText = horoscopes[signKey] || dailyHoroscopes[signKey][now.getDate() % 5];
              return (
                <div key={k} style={{ padding: '12px 0', borderBottom: `1px solid ${C.forest}10` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <Icon name={k === 'moon' ? 'moon' : 'sun'} color={v.color} size={16}/>
                    <strong style={{ color: v.color }}>{v.sign}</strong>
                    <span style={{ opacity: 0.4, fontSize: 10 }}>{k}</span>
                    {horoscopes[signKey] && <span style={{ fontSize: 8, opacity: 0.4, marginLeft: 'auto' }}>live</span>}
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.5 }}>{horoscopeText}</div>
                </div>
              );
            })}
          </Card>
          <div style={{ textAlign: 'center' }}>
            <div onClick={() => setTarotFlipped(!tarotFlipped)} style={{ width: 140, height: 200, margin: '0 auto', perspective: 1000, cursor: 'pointer' }}>
              <div style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 0.6s', transform: tarotFlipped ? 'rotateY(180deg)' : 'none' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: `linear-gradient(135deg, ${C.purple}, ${C.forest})`, border: `3px solid ${C.gold}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="star" color={C.gold} size={50}/></div>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: C.cream, border: `3px solid ${tarotCard?.color}`, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{tarotCard?.name}</div>
                  <div style={{ fontSize: 11, opacity: 0.6, margin: '8px 0' }}>{tarotCard?.meaning}</div>
                  <div style={{ fontSize: 12, fontStyle: 'italic', color: tarotCard?.color }}>{tarotCard?.advice}</div>
                </div>
              </div>
            </div>
            {tarotFlipped && <Btn bg={C.purple} onClick={() => { setTarotCard(tarotCards[Math.floor(Math.random() * 5)]); setTarotFlipped(false); }} style={{ marginTop: 16 }}>Draw Again</Btn>}
          </div>
        </div>
      )}

      {/* MUSIC */}
      {page === 'music' && (
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 22, margin: '0 0 8px' }}>Music</h2>
          <p style={{ fontSize: 12, opacity: 0.6, marginBottom: 20 }}>Quick access to your focus playlists</p>
          
          <div style={{ display: 'grid', gap: 12 }}>
            {spotifyPlaylists.map(pl => (
              <a 
                key={pl.id} 
                href={pl.uri}
                style={{ textDecoration: 'none' }}
              >
                <Card style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${pl.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={pl.icon} color={pl.color} size={24}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.forest }}>{pl.name}</div>
                    <div style={{ fontSize: 11, color: C.teal }}>Tap to open in Spotify</div>
                  </div>
                  <Icon name="external" color={C.forest} size={18}/>
                </Card>
              </a>
            ))}
          </div>
          
          <div style={{ marginTop: 24, padding: 16, background: `${C.lime}20`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="lightbulb" color={C.forest} size={20}/>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Pair Focus Flow with your Pomodoro timer for ultimate productivity!</div>
          </div>
          
          <div style={{ marginTop: 16 }}>
            <a href="spotify:" style={{ textDecoration: 'none' }}>
              <Btn bg="#1DB954" style={{ width: '100%', justifyContent: 'center' }}>
                <Icon name="music" color="#fff" size={16}/> Open Spotify
              </Btn>
            </a>
          </div>
        </div>
      )}

      {/* DATE NIGHT */}
      {page === 'datenight' && (
        <div style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <h2 style={{ fontSize: 22, margin: 0 }}>Date Night</h2>
            <Icon name="heart" color={C.pink} size={20}/>
          </div>
          <p style={{ fontSize: 12, opacity: 0.6, marginBottom: 20 }}>Find the perfect spot and book early!</p>
          
          {/* Reminder */}
          {new Date().getHours() >= 12 && new Date().getHours() < 16 && (
            <Card color={C.orange} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="clock" color={C.orange} size={20}/>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Book now for best tables!</div>
                  <div style={{ fontSize: 11, opacity: 0.6 }}>Popular spots fill up by 3pm</div>
                </div>
              </div>
            </Card>
          )}
          
          {/* Spin for restaurant */}
          <Card color={C.pink} style={{ marginBottom: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 12, color: C.pink, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
              <Icon name="sparkle" color={C.pink} size={14}/> SURPRISE ME
            </div>
            
            {/* Filters */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <select 
                value={dateNightFilter.cuisine} 
                onChange={e => setDateNightFilter(f => ({ ...f, cuisine: e.target.value }))}
                style={{ padding: '8px 12px', borderRadius: 8, border: `2px solid ${C.forest}20`, fontSize: 12 }}
              >
                {cuisineTypes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select 
                value={dateNightFilter.price} 
                onChange={e => setDateNightFilter(f => ({ ...f, price: e.target.value }))}
                style={{ padding: '8px 12px', borderRadius: 8, border: `2px solid ${C.forest}20`, fontSize: 12 }}
              >
                {priceRanges.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            
            {dateNightPick ? (
              <div>
                <div style={{ marginBottom: 8 }}><Icon name="utensils" color={C.pink} size={32}/></div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{dateNightPick.name}</div>
                <div style={{ fontSize: 12, color: C.pink, marginTop: 4 }}>{dateNightPick.cuisine} • {dateNightPick.price} • {dateNightPick.neighborhood}</div>
                {dateNightPick.mustOrder && (
                  <div style={{ fontSize: 11, marginTop: 8, padding: '8px 12px', background: `${C.gold}20`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                    <Icon name="star" color={C.gold} size={12}/> Must try: {dateNightPick.mustOrder}
                  </div>
                )}
                <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center' }}>
                  <Btn small bg={C.pink} onClick={() => {
                    const url = dateNightPick.bookOn === 'Resy' 
                      ? `https://resy.com/cities/dal?query=${encodeURIComponent(dateNightPick.name)}`
                      : `https://www.opentable.com/s?term=${encodeURIComponent(dateNightPick.name)}&covers=2`;
                    window.open(url, '_blank');
                  }}>
                    Book on {dateNightPick.bookOn}
                  </Btn>
                  <Btn small bg={C.forest} onClick={() => setDateNightPick(null)}>Spin Again</Btn>
                </div>
              </div>
            ) : (
              <Btn bg={C.pink} onClick={() => {
                const filtered = restaurants.filter(r => 
                  (dateNightFilter.cuisine === 'Any' || r.cuisine === dateNightFilter.cuisine) &&
                  (dateNightFilter.price === 'Any' || r.price === dateNightFilter.price)
                );
                if (filtered.length > 0) {
                  setDateNightPick(filtered[Math.floor(Math.random() * filtered.length)]);
                }
              }}>
                <Icon name="shuffle" color={C.cream} size={14}/> Pick a Restaurant
              </Btn>
            )}
          </Card>
          
          {/* Favorite restaurants */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Your Spots</div>
            <Btn small onClick={() => setModal('addRestaurant')}><Icon name="plus" color={C.cream} size={12}/></Btn>
          </div>
          
          {restaurants.map(r => (
            <Card key={r.id} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontSize: 11, opacity: 0.6 }}>{r.cuisine} • {r.price} • {r.neighborhood}</div>
                  {r.mustOrder && <div style={{ fontSize: 10, color: C.gold, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="star" color={C.gold} size={10}/> {r.mustOrder}</div>}
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button 
                    onClick={() => {
                      const url = r.bookOn === 'Resy' 
                        ? `https://resy.com/cities/dal?query=${encodeURIComponent(r.name)}`
                        : `https://www.opentable.com/s?term=${encodeURIComponent(r.name)}&covers=2`;
                      window.open(url, '_blank');
                    }}
                    style={{ padding: '6px 10px', background: C.pink, color: '#fff', border: 'none', borderRadius: 6, fontSize: 10, fontWeight: 600, cursor: 'pointer' }}
                  >
                    Book
                  </button>
                  <button 
                    onClick={() => setRestaurants(restaurants.filter(x => x.id !== r.id))}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.3 }}
                  >
                    <Icon name="trash" color={C.red} size={14}/>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* MODALS */}
      <Modal open={modal === 'feed'} onClose={() => setModal(null)} title="Feed Chuck">
        <p style={{ fontSize: 12, opacity: 0.6, marginBottom: 16 }}>Snacks make Chuck happy!</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {chuckSnacks.map(snack => (
            <button key={snack.id} onClick={() => { feedChuck(snack); setModal(null); }} disabled={coins < snack.price}
              style={{ padding: 16, borderRadius: 12, background: '#fff', border: `2px solid ${C.forest}20`, cursor: coins >= snack.price ? 'pointer' : 'not-allowed', opacity: coins >= snack.price ? 1 : 0.5, textAlign: 'center' }}>
              <div style={{ width: 40, height: 40, margin: '0 auto 8px', borderRadius: 10, background: `${snack.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={snack.icon} color={snack.color} size={24}/>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{snack.name}</div>
              <div style={{ fontSize: 10, color: C.orange }}>{snack.price} coins</div>
            </button>
          ))}
        </div>
      </Modal>

      <Modal open={modal === 'addTrip'} onClose={() => setModal(null)} title="Add Trip">
        <form onSubmit={e => { e.preventDefault(); const f = new FormData(e.target); addTrip({ name: f.get('name'), start: f.get('start'), end: f.get('end'), goal: parseInt(f.get('goal')) || 0, flight: f.get('flight') || null }); }}>
          <input name="name" placeholder="Destination" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <input name="start" type="date" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <input name="end" type="date" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <input name="flight" placeholder="Flight # (e.g. AA1234)" style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <input name="goal" type="number" placeholder="Savings goal $" style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 16, boxSizing: 'border-box', fontSize: 14 }}/>
          <Btn style={{ width: '100%', justifyContent: 'center' }}>Add Trip</Btn>
        </form>
      </Modal>

      <Modal open={modal === 'addRestaurant'} onClose={() => setModal(null)} title="Add Restaurant">
        <form onSubmit={e => { 
          e.preventDefault(); 
          const f = new FormData(e.target); 
          setRestaurants([...restaurants, { 
            id: genId(), 
            name: f.get('name'), 
            cuisine: f.get('cuisine'), 
            price: f.get('price'), 
            neighborhood: f.get('neighborhood'),
            mustOrder: f.get('mustOrder'),
            bookOn: f.get('bookOn')
          }]); 
          setModal(null); 
        }}>
          <input name="name" placeholder="Restaurant name" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
            <select name="cuisine" required style={{ flex: 1, padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, fontSize: 14 }}>
              {cuisineTypes.filter(c => c !== 'Any').map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select name="price" required style={{ flex: 1, padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, fontSize: 14 }}>
              {priceRanges.filter(p => p !== 'Any').map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <input name="neighborhood" placeholder="Neighborhood" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <input name="mustOrder" placeholder="Must-order dish (optional)" style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <select name="bookOn" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 16, fontSize: 14 }}>
            <option value="Resy">Book on Resy</option>
            <option value="OpenTable">Book on OpenTable</option>
          </select>
          <Btn style={{ width: '100%', justifyContent: 'center' }}>Add Restaurant</Btn>
        </form>
      </Modal>

      <Modal open={modal === 'addBday'} onClose={() => setModal(null)} title="Add Birthday">
        <form onSubmit={e => { e.preventDefault(); const f = new FormData(e.target); addBirthday({ name: f.get('name'), month: parseInt(f.get('month')), day: parseInt(f.get('day')) }); }}>
          <input name="name" placeholder="Name" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <input name="month" type="number" min="1" max="12" placeholder="Month" required style={{ flex: 1, padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, boxSizing: 'border-box', fontSize: 14 }}/>
            <input name="day" type="number" min="1" max="31" placeholder="Day" required style={{ flex: 1, padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          </div>
          <Btn style={{ width: '100%', justifyContent: 'center' }}>Add</Btn>
        </form>
      </Modal>

      <Modal open={modal === 'addPurchase'} onClose={() => setModal(null)} title="48hr Pause">
        <form onSubmit={e => { e.preventDefault(); const f = new FormData(e.target); setPurchases([...purchases, { id: genId(), name: f.get('name'), price: f.get('price'), time: Date.now() }]); setModal(null); }}>
          <input name="name" placeholder="What?" required style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 10, boxSizing: 'border-box', fontSize: 14 }}/>
          <input name="price" placeholder="Price $" style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 16, boxSizing: 'border-box', fontSize: 14 }}/>
          <Btn style={{ width: '100%', justifyContent: 'center' }}>Start Wait</Btn>
        </form>
      </Modal>

      <Modal open={modal === 'addNote'} onClose={() => setModal(null)} title="Quick Note">
        <textarea value={noteInput} onChange={e => setNoteInput(e.target.value)} placeholder="What's on your mind?" style={{ width: '100%', padding: 12, border: `2px solid ${C.forest}30`, borderRadius: 10, marginBottom: 12, boxSizing: 'border-box', fontSize: 14, minHeight: 100, resize: 'none', fontFamily: 'inherit' }}/>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {noteCategories.map(cat => (
            <Btn key={cat.id} small bg={cat.color} onClick={() => noteInput.trim() && addNote(noteInput, cat.id)}>{cat.name}</Btn>
          ))}
        </div>
      </Modal>

      {/* WHEEL */}
      {showWheel && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300 }}>
          <div style={{ textAlign: 'center', padding: 24 }}>
            <button onClick={() => setShowWheel(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}><Icon name="x" color={C.cream} size={28}/></button>
            {!wheelResult ? (
              <div>
                <div style={{ fontSize: 22, color: C.cream, marginBottom: 20 }}>Spin for {showWheel}!</div>
                <div style={{ width: 160, height: 160, margin: '0 auto 24px', background: `conic-gradient(${C.lime}, ${C.orange}, ${C.teal}, ${C.purple}, ${C.pink}, ${C.lime})`, borderRadius: '50%', border: `4px solid ${C.cream}`, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: spinning ? 'spin 0.5s linear infinite' : 'none' }}>
                  <button onClick={() => spin(showWheel)} disabled={spinning} style={{ width: 60, height: 60, background: C.cream, borderRadius: '50%', border: 'none', fontWeight: 800, fontSize: 14, cursor: 'pointer' }}>{spinning ? '...' : 'SPIN'}</button>
                </div>
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: 26, color: C.cream, marginBottom: 8 }}>{wheelResult.name}</div>
                <div style={{ fontSize: 14, color: C.cream, opacity: 0.6, marginBottom: 12 }}>{wheelResult.time}</div>
                <div style={{ fontSize: 16, color: C.lime, marginBottom: 20 }}>+{wheelResult.pts} coins</div>
                <Btn bg={C.lime} color={C.forest} onClick={acceptTask}>Let's Go!</Btn>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STUCK */}
      {showStuck && stuckTask && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(45,74,62,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300, padding: 20 }}>
          <div style={{ textAlign: 'center', maxWidth: 320 }}>
            <div style={{ fontSize: 11, color: C.lime, textTransform: 'uppercase', marginBottom: 12 }}>Paralysis Breaker</div>
            <div style={{ background: C.cream, padding: 24, borderRadius: 16, marginBottom: 20 }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>{stuckTask.task}</div>
              <div style={{ fontSize: 12, opacity: 0.5, marginTop: 8 }}>{stuckTask.time}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Btn bg={C.lime} color={C.forest} onClick={completeStuck}>Did It! +3</Btn>
              <Btn bg="transparent" color={C.cream} onClick={getStuckHelp} style={{ border: `2px solid ${C.cream}` }}>Too Hard</Btn>
            </div>
          </div>
        </div>
      )}

      {/* QUICK WINS */}
      {showQuickWins && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300, padding: 20 }}>
          <div style={{ maxWidth: 360, width: '100%' }}>
            <button onClick={() => setShowQuickWins(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}><Icon name="x" color={C.cream} size={28}/></button>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 24, color: C.cream }}>Quick Wins</div>
            </div>
            {quickWins.map((qw, i) => (
              <div key={i} onClick={() => completeQuickWin(i)} style={{ background: quickWinsDone.includes(i) ? C.teal : '#fff', borderRadius: 12, padding: 16, marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', opacity: quickWinsDone.includes(i) ? 0.5 : 1 }}>
                <span style={{ color: quickWinsDone.includes(i) ? '#fff' : C.forest, fontSize: 15 }}>{qw.name}</span>
                <span style={{ color: C.lime, fontWeight: 700 }}>+{qw.pts}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setModal('addNote')} style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: C.forest, border: `3px solid ${C.lime}`, boxShadow: '0 4px 20px rgba(0,0,0,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
        <Icon name="plus" color={C.lime} size={24}/>
      </button>
    </div>
  );
}
