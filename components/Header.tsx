'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-transparent sticky top-0 z-50" data-oid="ln5oknd">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[66px]" data-oid="88uvn-.">
                <div
                    className="flex justify-between items-center h-24 w-[1459px]"
                    data-oid="l9zdnm0"
                >
                    {/* Logo */}
                    <div className="flex-shrink-0" data-oid="1ci9j2y">
                        <div className="flex flex-col" data-oid="f_2k1ny">
                            <div
                                className="flex items-center space-x-2"
                                data-oid="qrxyaso"
                                key="olk-00je"
                            >
                                <span
                                    className="text-gray-400 text-sm font-light tracking-wider uppercase"
                                    data-oid="klb7ow0"
                                >
                                    AGÊNCIA
                                </span>
                                <div className="flex items-center space-x-1" data-oid="k-n2eor">
                                    <span className="text-yellow-400 text-lg" data-oid=".izzyot">
                                        »
                                    </span>
                                    <span className="text-yellow-400 text-lg" data-oid="2wj3h:3">
                                        »
                                    </span>
                                    <span className="text-yellow-400 text-lg" data-oid="-tt.1xl">
                                        »
                                    </span>
                                </div>
                            </div>
                            <div
                                className="flex items-center space-x-2"
                                data-oid="n6hm6ep"
                                key="olk-ZnTl"
                            >
                                <span
                                    className="text-white font-bold text-2xl tracking-wider"
                                    data-oid="ys38rqn"
                                >
                                    VIBE
                                </span>
                                <span
                                    className="text-gray-400 text-lg font-light"
                                    data-oid="mf54f1h"
                                >
                                    &lt;/&gt;
                                </span>
                                <span
                                    className="text-white font-bold text-2xl tracking-wider"
                                    data-oid="pnvh5d2"
                                >
                                    CODE
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8" data-oid="8-8ij-g">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="6d29bu8"
                        >
                            Início
                        </a>
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="dun_uvx"
                        >
                            Recursos
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="m:wvf_e"
                        >
                            Sobre
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                            data-oid="lfw3p:p"
                        >
                            Contato
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex" data-oid="f87zrjz">
                        <button
                            className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
                            data-oid="id5wo8r"
                        >
                            Começar Agora
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden" data-oid="_sr1y6c">
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
                    <div className="md:hidden" data-oid="hd1cqi-">
                        <div
                            className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2"
                            data-oid="9gmnbc_"
                        >
                            <a
                                href="#home"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="4zbtsa:"
                            >
                                Início
                            </a>
                            <a
                                href="#features"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="m8_vyjc"
                            >
                                Recursos
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="0xlqis_"
                            >
                                Sobre
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                                data-oid="fej2zu8"
                            >
                                Contato
                            </a>
                            <button
                                className="w-full mt-2 bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
                                data-oid="x1gvder"
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
