import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="HM AI Solutions Logo"
        >
            {/* Circuit traces - Top */}
            <path d="M20 15 V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="20" cy="15" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M35 10 V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="35" cy="10" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M50 8 V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="50" cy="8" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M65 10 V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="65" cy="10" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M80 15 V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="80" cy="15" r="2" fill="currentColor" className="text-blue-400" />

            {/* Circuit traces - Bottom */}
            <path d="M20 85 V75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="20" cy="85" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M35 90 V75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="35" cy="90" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M50 92 V75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="50" cy="92" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M65 90 V75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="65" cy="90" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M80 85 V75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="80" cy="85" r="2" fill="currentColor" className="text-blue-400" />

            {/* Circuit traces - Left */}
            <path d="M15 35 H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="15" cy="35" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M10 50 H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="10" cy="50" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M15 65 H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="15" cy="65" r="2" fill="currentColor" className="text-blue-400" />

            {/* Circuit traces - Right */}
            <path d="M85 35 H75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="85" cy="35" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M90 50 H75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="90" cy="50" r="2" fill="currentColor" className="text-blue-400" />
            <path d="M85 65 H75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
            <circle cx="85" cy="65" r="2" fill="currentColor" className="text-blue-400" />

            {/* Main Chip Body */}
            <rect x="25" y="25" width="50" height="50" rx="4" className="fill-blue-600" />

            {/* Inner Chip Detail (Subtlety) */}
            <rect x="28" y="28" width="44" height="44" rx="2" stroke="white" strokeOpacity="0.1" strokeWidth="1" />

            {/* HM Text */}
            <text x="50" y="63" fontSize="32" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="sans-serif">HM</text>
        </svg>
    );
};
