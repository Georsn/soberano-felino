import { useState } from 'react';
import { Cat, Heart } from 'lucide-react';

interface HeaderProps {
  onOpenAdoptionModal: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ onOpenAdoptionModal, onScrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EADCC9] bg-[#FAF6F0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div 
          onClick={() => onScrollToSection('hero')} 
          className="flex cursor-pointer items-center gap-2 group"
          id="nav-logo"
        >
          <div className="rounded-xl bg-[#C85C50] p-2 text-[#FAF6F0] transition-transform duration-300 group-hover:rotate-12">
            <Cat className="h-6 w-6" />
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-[#2C2A29]">
            Guia do <span className="text-[#C85C50]">Soberano Felino</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onScrollToSection('perigos')} 
            className="font-sans text-sm font-medium text-[#5C554F] hover:text-[#C85C50] transition-colors"
          >
            Os Perigos 🚨
          </button>
          <button 
            onClick={() => onScrollToSection('quiz')} 
            className="font-sans text-sm font-medium text-[#5C554F] hover:text-[#C85C50] transition-colors"
          >
            Teste de Resistência 📊
          </button>
          <button 
            onClick={() => onScrollToSection('relatos')} 
            className="font-sans text-sm font-medium text-[#5C554F] hover:text-[#C85C50] transition-colors"
          >
            Relatos Atormentados 💬
          </button>
          <button 
            onClick={onOpenAdoptionModal}
            className="inline-flex items-center gap-2 rounded-full bg-[#C85C50] px-4 py-2 font-sans text-sm font-semibold text-[#FAF6F0] shadow-md hover:bg-[#B34E43] transition-all hover:scale-105"
            id="nav-cta-desktop"
          >
            Adote Mesmo Assim! <Heart className="h-4 w-4 fill-current animate-pulse" />
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#2C2A29] md:hidden focus:outline-none"
          id="nav-mobile-toggle"
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav menu dropdown */}
      {isMenuOpen && (
        <div className="border-t border-[#EADCC9] bg-[#FAF6F0] px-6 py-4 md:hidden flex flex-col gap-4 animate-fadeIn">
          <button 
            onClick={() => {
              onScrollToSection('perigos');
              setIsMenuOpen(false);
            }} 
            className="text-left py-2 font-sans font-medium text-[#5C554F]"
          >
            Os Perigos 🚨
          </button>
          <button 
            onClick={() => {
              onScrollToSection('quiz');
              setIsMenuOpen(false);
            }} 
            className="text-left py-2 font-sans font-medium text-[#5C554F]"
          >
            Teste de Resistência 📊
          </button>
          <button 
            onClick={() => {
              onScrollToSection('relatos');
              setIsMenuOpen(false);
            }} 
            className="text-left py-2 font-sans font-medium text-[#5C554F]"
          >
            Relatos Atormentados 💬
          </button>
          <button 
            onClick={() => {
              onOpenAdoptionModal();
              setIsMenuOpen(false);
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#C85C50] py-3 font-sans font-bold text-[#FAF6F0]"
            id="nav-cta-mobile"
          >
            Adote Mesmo Assim! <Heart className="h-4 w-4 fill-current" />
          </button>
        </div>
      )}
    </header>
  );
}
