'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [eyeGlow, setEyeGlow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        setIsVisible(true);

        // Eye glow animation
        const eyeInterval = setInterval(() => {
            setEyeGlow((prev) => !prev);
        }, 2000);

        return () => clearInterval(eyeInterval);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phoneNumber) {
            // Handle WhatsApp redirect or form submission
            console.log('Phone number:', phoneNumber);
        }
    };

    return (
        <div data-oid="bp4upax">
            <div className="flex flex-col lg:flex-row font-['Inter',sans-serif]" data-oid="_.d0vb3">
                {/* Left Half - Content Section */}
                <div
                    className="lg:w-1/2 bg-gray-900 relative overflow-hidden flex items-center justify-start p-8 lg:p-16 pt-20 lg:pt-24 h-[700px] lg:h-[1200px]"
                    data-oid="0vvst8j"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-black left-0 top-0 h-[1200px]"
                        data-oid="d054lt0"
                    ></div>
                    <div
                        className={`relative z-10 max-w-xl w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        data-oid="ghfoijz"
                    >
                        {/* Main heading */}
                        <h1
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] mb-8 text-white"
                            data-oid="j4hjy-r"
                        >
                            Sabia que abordagens em até{' '}
                            <span className="text-cyan-400" data-oid="6fl6u6t">
                                5 minutos
                            </span>{' '}
                            podem aumentar suas conversões em até{' '}
                            <span className="text-cyan-400" data-oid="1oczr03">
                                50%
                            </span>
                            ?
                        </h1>

                        <h2
                            className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-12"
                            data-oid="ge1522h"
                        >
                            Descubra como a automação pode impulsionar suas vendas
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6" data-oid="au-oakl">
                            {/* Phone input */}
                            <div className="relative" data-oid="aqt.sjd">
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Seu número para acesso exclusivo"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 bg-white shadow-sm placeholder:text-gray-500"
                                    required
                                    data-oid="q9-ov:5"
                                />
                            </div>

                            {/* CTA Button */}
                            <button
                                type="submit"
                                className="w-full text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg"
                                style={{ backgroundColor: '#E06563' }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = '#d55553')}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = '#E06563')}
                                data-oid="qp3_v-i"
                            >
                                Quero Acesso Agora
                            </button>
                        </form>

                        {/* Trust indicator */}
                        <p
                            className="text-sm text-gray-400 mt-6 text-center flex items-center justify-center gap-2"
                            data-oid="2s85zfv"
                        >
                            <span className="text-green-400" data-oid="w4mn0p5">
                                🔒
                            </span>
                            Seus dados estão seguros conosco
                        </p>
                    </div>
                </div>

                {/* Right Half - Image Section */}
                <div
                    className="lg:w-1/2 bg-gray-900 relative overflow-visible flex items-center justify-center pt-16 h-[700px] lg:h-[1200px]"
                    data-oid="q95:zyq"
                >
                    <div className="absolute inset-0 bg-black overflow-visible" data-oid="jtzxge0">
                        <img
                            className="w-full object-cover object-center h-[700px] lg:h-[1200px] relative z-10"
                            src="/images/Vic.png"
                            alt="Vic.png"
                            data-oid="w2n8u94"
                        />
                    </div>

                    {/* Bot silhouette emerging from darkness */}
                    <div
                        className={`relative z-10 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                        data-oid="wttsh6_"
                    >
                        {/* Bot head outline */}
                        <div className="relative" data-oid="vsgz7dd">
                            {/* Main bot silhouette - only showing right half */}
                        </div>
                    </div>

                    {/* Ambient glow effect */}
                    <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl"
                        data-oid="v8r2z6b"
                    ></div>
                </div>
            </div>

            {/* Features Section */}
            <section className="bg-gray-900 py-20 lg:py-32" data-oid="e_vfm5s">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ilr8sxs">
                    {/* Section Header */}
                    <div className="text-center mb-20 lg:mb-24" data-oid="u6bfjsm">
                        <h2
                            className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight"
                            data-oid="vjcgrci"
                        >
                            Por que escolher nossa automação?
                        </h2>
                        <p
                            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                            data-oid="o::y08w"
                        >
                            Descubra como nossa tecnologia pode transformar completamente a forma
                            como você se conecta com seus clientes
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20"
                        data-oid="3ndlzl7"
                    >
                        {/* Feature 1 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 transition-all duration-500 group shadow-lg cursor-pointer h-full flex flex-col"
                            data-oid="qkzovk."
                        >
                            <div
                                className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="kx.8upl"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="e_8y5-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                        data-oid="_lp-vva"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="c-lj5f2"
                            >
                                Resposta Instantânea
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-base lg:text-lg"
                                data-oid="w8l2nj9"
                            >
                                Aborde seus leads em até 5 minutos após o primeiro contato,
                                aumentando drasticamente suas chances de conversão.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 transition-all duration-500 group shadow-lg cursor-pointer h-full flex flex-col"
                            data-oid="n:x7:cv"
                        >
                            <div
                                className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid=".6gori0"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="uoxtg8r"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="jq.u445"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="hbzigil"
                            >
                                Aumento de 50% nas Conversões
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-base lg:text-lg"
                                data-oid="0zpqwtg"
                            >
                                Nossa automação inteligente já comprovou aumentar as taxas de
                                conversão em até 50% para nossos clientes.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 transition-all duration-500 group shadow-lg cursor-pointer h-full flex flex-col"
                            data-oid="r_8hehk"
                        >
                            <div
                                className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="y:9gjt_"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="6kpklch"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="dtc1dqf"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="bj4.g3t"
                            >
                                Disponível 24/7
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-base lg:text-lg"
                                data-oid="zigvkrp"
                            >
                                Nunca perca uma oportunidade. Nossa automação trabalha para você 24
                                horas por dia, 7 dias por semana.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 transition-all duration-500 group shadow-lg cursor-pointer h-full flex flex-col"
                            data-oid="dyg57ae"
                        >
                            <div
                                className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="p1i2w7j"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="kbfn3:5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        data-oid="gyudqpy"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="e.i16mb"
                            >
                                Personalização Inteligente
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-base lg:text-lg"
                                data-oid="dqf93tk"
                            >
                                Cada abordagem é personalizada com base no comportamento e perfil do
                                seu lead para máxima efetividade.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 transition-all duration-500 group shadow-lg cursor-pointer h-full flex flex-col"
                            data-oid=".2phjpe"
                        >
                            <div
                                className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="u71uw5_"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="au.3z-c"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid=":w8p2a-"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="sb6tc42"
                            >
                                Fácil Implementação
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-base lg:text-lg"
                                data-oid="mecf3mv"
                            >
                                Configure em minutos, não em semanas. Nossa plataforma é intuitiva e
                                não requer conhecimento técnico.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 transition-all duration-500 group shadow-lg cursor-pointer h-full flex flex-col"
                            data-oid="_ky3zof"
                        >
                            <div
                                className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="syyttgv"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="y6af46q"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                        data-oid="0w_s-kh"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="slm:xk6"
                            >
                                ROI Comprovado
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-base lg:text-lg"
                                data-oid="x22nq7n"
                            >
                                Veja retorno sobre investimento já no primeiro mês com nossa
                                automação de alta performance.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center" data-oid=".psmb-u">
                        <div
                            className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-10 lg:p-16 max-w-5xl mx-auto"
                            data-oid="sr171g1"
                        >
                            <h3
                                className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                                data-oid="1432.o7"
                            >
                                Pronto para transformar seu negócio?
                            </h3>
                            <p
                                className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                                data-oid="1-.c83f"
                            >
                                Junte-se a centenas de empresas que já aumentaram suas vendas com
                                nossa automação
                            </p>
                            <button
                                className="bg-cyan-400 text-black px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                data-oid=":ew46f2"
                            >
                                Começar Agora Gratuitamente
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
