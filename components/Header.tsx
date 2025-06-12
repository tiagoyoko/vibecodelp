'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50"
            data-oid="hu:3w_y"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8moq3n6">
                <div className="flex justify-between items-center h-16" data-oid="9jma9.6">
                    {/* Logo */}
                    <div className="flex-shrink-0" data-oid="8-13b.c">
                        <div className="flex items-center" data-oid="6mz5dtk">
                            <div
                                className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center"
                                data-oid="cwdg9i2"
                            >
                                <span className="text-black font-bold text-lg" data-oid="izo4lkh">
                                    V
                                </span>
                            </div>
                            <span
                                className="ml-2 text-white font-semibold text-xl"
                                data-oid="dgay:.d"
                            >
                                VicBot
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8" data-oid="kzorpsa">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="sd::ryz"
                        >
                            Início
                        </a>
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="qi-tgu2"
                        >
                            Recursos
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="3_qan0f"
                        >
                            Sobre
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="a:.zlzu"
                        >
                            Contato
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex" data-oid="s1zu7p8">
                        <button
                            className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
                            data-oid="nvxr8az"
                        >
                            Começar Agora
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden" data-oid="ghq2:5_">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            data-oid="zlyu129"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="k:g4yyk"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid=".9n_55b"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="dw2fyf0"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden" data-oid="bi.3l79">
                        <div
                            className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2"
                            data-oid="q6s4asx"
                        >
                            <a
                                href="#home"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="bnrgy4s"
                            >
                                Início
                            </a>
                            <a
                                href="#features"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="_7:7f:o"
                            >
                                Recursos
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="6-9mk7:"
                            >
                                Sobre
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="8q_d..5"
                            >
                                Contato
                            </a>
                            <button
                                className="w-full mt-2 bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
                                data-oid="1ijvlm9"
                            >
                                Começar Agora
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
