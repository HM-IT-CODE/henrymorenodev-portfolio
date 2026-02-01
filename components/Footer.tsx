import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 py-12 border-t border-zinc-800 bg-zinc-950/50">
            <div className="container mx-auto px-6 text-center">
                <p className="text-zinc-500 mb-4">© {new Date().getFullYear()} Henry Moreno — Arquitecto de Software.</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/HM-IT-CODE" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
