'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50"
            data-oid="7ymhlqy"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="h8o-l6o">
                <div className="flex justify-between items-center h-20 lg:h-24" data-oid="hfotkqz">
                    {/* Logo */}
                    <div className="flex-shrink-0" data-oid="9d5_mtb">
                        <div className="flex flex-col space-y-1" data-oid="rokdv3v">
                            {/* AGÊNCIA */}
                            <div className="flex items-center space-x-2" data-oid="w5nb8b8">
                                <span
                                    className="text-gray-400 text-xs lg:text-sm font-light tracking-wider uppercase"
                                    data-oid="yaax.fe"
                                >
                                    AGÊNCIA
                                </span>
                                <div className="flex items-center" data-oid="r59tm5f">
                                    <div
                                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-yellow-400"
                                        data-oid="pjgs.fy"
                                    ></div>
                                    <div
                                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-yellow-400 -ml-0.5"
                                        data-oid="jbnwyew"
                                    ></div>
                                    <div
                                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-yellow-400 -ml-0.5"
                                        data-oid="y840w2m"
                                    ></div>
                                </div>
                            </div>

                            {/* VIBE CODE */}
                            <div className="flex items-center space-x-2" data-oid="zsjcpw0">
                                <span
                                    className="text-white font-bold text-xl lg:text-2xl tracking-wider"
                                    data-oid="qt7_m5_"
                                >
                                    VIBE
                                </span>
                                <span
                                    className="text-gray-400 text-base lg:text-lg font-light"
                                    data-oid="q_x2z0c"
                                >
                                    &lt;/&gt;
                                </span>
                                <span
                                    className="text-white font-bold text-xl lg:text-2xl tracking-wider"
                                    data-oid="lnobxwl"
                                >
                                    CODE
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}

                    {/* CTA Button */}
                    <nav className="hidden lg:flex space-x-8 xl:space-x-10" data-oid="yadvlkn">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm xl:text-base relative group"
                            data-oid="waoeadr"
                        >
                            Início
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                                data-oid="0y3wnl3"
                            ></span>
                        </a>
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm xl:text-base relative group"
                            data-oid="u5usxwa"
                        >
                            Recursos
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                                data-oid="5kna.40"
                            ></span>
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm xl:text-base relative group"
                            data-oid="q_gf7n6"
                        >
                            Sobre
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                                data-oid="9fwz68y"
                            ></span>
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm xl:text-base relative group"
                            data-oid="wy4s37a"
                        >
                            Contato
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                                data-oid="zb8w.lc"
                            ></span>
                        </a>
                    </nav>
                    <div className="hidden lg:flex" data-oid=":x_m6sm">
                        <button
                            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm xl:text-base"
                            data-oid="dj24e:p"
                        >
                            Começar Agora
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden" data-oid="_kqyhco">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            data-oid="ddygv0s"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="dqijd8h"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="o0il94f"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="po7df2k"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden" data-oid="tx2ha2r">
                        <div
                            className="absolute top-full left-0 right-0 mx-4 mt-2 px-4 py-6 space-y-4 bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl"
                            data-oid="zp.e:ud"
                        >
                            <a
                                href="#home"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="duttc_9"
                            >
                                Início
                            </a>
                            <a
                                href="#features"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="l:evlfz"
                            >
                                Recursos
                            </a>
                            <a
                                href="#about"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="_kgx6kd"
                            >
                                Sobre
                            </a>
                            <a
                                href="#contact"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="barmvl."
                            >
                                Contato
                            </a>
                            <div className="pt-4 border-t border-gray-700" data-oid="m264t40">
                                <button
                                    className="w-full bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    data-oid="h7sxpgq"
                                >
                                    Começar Agora
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
