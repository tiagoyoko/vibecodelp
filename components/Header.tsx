'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50"
            data-oid="ln5oknd"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="88uvn-.">
                <div className="flex justify-between items-center h-20 lg:h-24" data-oid="l9zdnm0">
                    {/* Logo */}
                    <div className="flex-shrink-0" data-oid="1ci9j2y" key="olk-m0Kb">
                        <div className="flex flex-col space-y-1" data-oid="f_2k1ny">
                            {/* AGÊNCIA */}
                            <div
                                className="flex items-center space-x-2"
                                data-oid="qrxyaso"
                                key="olk-00je"
                            >
                                <span
                                    className="text-gray-400 text-xs lg:text-sm font-light tracking-wider uppercase"
                                    data-oid="klb7ow0"
                                >
                                    AGÊNCIA
                                </span>
                                <div className="flex items-center" data-oid="k-n2eor">
                                    <div
                                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-yellow-400"
                                        data-oid=".5g4-aw"
                                    ></div>
                                    <div
                                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-yellow-400 -ml-0.5"
                                        data-oid="lr0ngjq"
                                    ></div>
                                    <div
                                        className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-yellow-400 -ml-0.5"
                                        data-oid="g6l0ov6"
                                    ></div>
                                </div>
                            </div>

                            {/* VIBE CODE */}
                            <div
                                className="flex items-center space-x-2"
                                data-oid="n6hm6ep"
                                key="olk-ZnTl"
                            >
                                <span
                                    className="text-white font-bold text-xl lg:text-2xl tracking-wider"
                                    data-oid="ys38rqn"
                                >
                                    VIBE
                                </span>
                                <span
                                    className="text-gray-400 text-base lg:text-lg font-light"
                                    data-oid="mf54f1h"
                                >
                                    &lt;/&gt;
                                </span>
                                <span
                                    className="text-white font-bold text-xl lg:text-2xl tracking-wider"
                                    data-oid="pnvh5d2"
                                >
                                    CODE
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}

                    {/* CTA Button */}
                    <div className="hidden lg:flex" data-oid="f87zrjz" key="olk-7EgH"></div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden" data-oid="_sr1y6c" key="olk-_nzx">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            data-oid="u51vo40"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="bwb-52e"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="vrqyuj1"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="rux8pu1"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden" data-oid="hd1cqi-">
                        <div
                            className="absolute top-full left-0 right-0 mx-4 mt-2 px-4 py-6 space-y-4 bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl"
                            data-oid="9gmnbc_"
                        >
                            <a
                                href="#home"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="4zbtsa:"
                            >
                                Início
                            </a>
                            <a
                                href="#features"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="m8_vyjc"
                            >
                                Recursos
                            </a>
                            <a
                                href="#about"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="0xlqis_"
                            >
                                Sobre
                            </a>
                            <a
                                href="#contact"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 font-medium"
                                data-oid="fej2zu8"
                            >
                                Contato
                            </a>
                            <div className="pt-4 border-t border-gray-700" data-oid="70.5xep">
                                <button
                                    className="w-full bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    data-oid="x1gvder"
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
