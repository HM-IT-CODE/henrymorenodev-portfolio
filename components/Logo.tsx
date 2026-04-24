import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="HM Solutions Logo"
        >
            <rect x="6" y="6" width="60" height="60" rx="18" fill="url(#hm-gradient)" />
            <rect x="9" y="9" width="54" height="54" rx="15" stroke="rgba(255,255,255,0.12)" />
            <path d="M22 23V49" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M22 36H35" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M35 23V49" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M43 49V23L50 35L57 23V49" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="hm-gradient" x1="8" y1="8" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#0F172A" />
                </linearGradient>
            </defs>
        </svg>
    );
};
