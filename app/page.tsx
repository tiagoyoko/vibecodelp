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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber) {
            // Handle WhatsApp redirect or form submission
            console.log('Phone number:', phoneNumber);
        }
    };

    return (
        <div data-oid="_eaza_s">
            <div className="flex flex-col lg:flex-row font-['Inter',sans-serif]" data-oid="7.mqtqv">
                {/* Left Half - Content Section */}
                <div
                    className="lg:w-1/2 bg-gray-900 relative overflow-hidden flex items-center justify-start p-8 lg:p-16 pt-20 lg:pt-24 h-[700px] lg:h-[1200px]"
                    data-oid="mzr19b0"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-black left-0 top-0 h-[1200px]"
                        data-oid="0_6oj_x"
                    ></div>
                    <div
                        className={`relative z-10 max-w-xl w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        data-oid="5sqlm1k"
                    >
                        {/* Main heading */}
                        <h1
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] mb-8 text-white"
                            data-oid="7buobgy"
                        >
                            Sabia que abordagens em até{' '}
                            <span className="text-cyan-400" data-oid="_t:p3cf">
                                5 minutos
                            </span>{' '}
                            podem aumentar suas conversões em até{' '}
                            <span className="text-cyan-400" data-oid="fvyxwm7">
                                50%
                            </span>
                            ?
                        </h1>

                        <h2
                            className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-12"
                            data-oid="xa9b__2"
                        >
                            Descubra como a automação pode impulsionar suas vendas
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6" data-oid="exoqgfw">
                            {/* Phone input */}
                            <div className="relative" data-oid="z5uc0w9">
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Seu número para acesso exclusivo"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 bg-white shadow-sm placeholder:text-gray-500"
                                    required
                                    data-oid=":7xfh4t"
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
                            data-oid="hc1te9j"
                        >
                            <span className="text-green-400" data-oid="jusvaz.">
                                🔒
                            </span>
                            Seus dados estão seguros conosco
                        </p>
                    </div>
                </div>

                {/* Right Half - Image Section */}
                <div
                    className="lg:w-1/2 bg-gray-900 relative overflow-visible flex items-center justify-center pt-16 h-[700px] lg:h-[1200px]"
                    data-oid=":o1hn7l"
                >
                    <div className="absolute inset-0 bg-black overflow-visible" data-oid="dv._hxe">
                        <img
                            className="w-full object-cover object-center h-[700px] lg:h-[1200px] relative z-10"
                            data-oid="jbkmg37"
                            src="/images/Vic.png"
                            alt="Vic.png"
                            key="olk-1Zp0"
                        />
                    </div>

                {/* Bot silhouette emerging from darkness */}
                <div
                    className={`relative z-10 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    data-oid="30kcy56"
                >
                    {/* Bot head outline */}
                    <div className="relative" data-oid="ty0t9t.">
                        {/* Main bot silhouette - only showing right half */}
                    </div>
                </div>

                {/* Ambient glow effect */}
                <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl"
                    data-oid=":lisgdv"
                ></div>
            </div>

            {/* Right Half - Light Content Section */}
            <div
                className="lg:w-1/2 bg-gray-900 relative overflow-hidden flex items-center justify-start p-8 lg:p-16 min-h-[50vh] lg:min-h-screen"
                data-oid="mzr19b0"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-l from-gray-700 via-black to-black"
                    data-oid="0_6oj_x"
                ></div>
                <div
                    className={`relative z-10 max-w-lg w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    data-oid="5sqlm1k"
                >
                    {/* Main heading */}
                    <h1
                        className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 text-white w-[438px] rounded-none"
                        data-oid="7buobgy"
                    >
                        Descubra como a automação transforma seu segmento antes de todo mundo
                    </h1>

                    <h2
                        className="text-lg lg:text-xl text-gray-300 font-normal leading-relaxed mb-8"
                        data-oid="xa9b__2"
                    >
                        Descubra como a automação pode impulsionar suas vendas
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8" data-oid="exoqgfw">
                        {/* Phone input */}
                        <div className="relative" data-oid="z5uc0w9">
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Seu número para acesso exclusivo"
                                className="w-full px-6 py-5 text-lg border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors bg-white shadow-sm"
                                required
                                data-oid=":7xfh4t"
                            />
                        </div>

                        {/* CTA Button */}
                        <button
                            type="submit"
                            className="w-full text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: '#E06563' }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#d55553')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = '#E06563')}
                            data-oid="qp3_v-i"
                        >
                            Quero Acesso Agora
                        </button>
                    </form>

                    {/* Trust indicator */}
                    <p className="text-sm text-gray-400 mt-8 text-center" data-oid="hc1te9j">
                        🔒 Seus dados estão seguros conosco
                    </p>
                </div>
            </div>
        </div>

            {/* Features Section */}
            <section className="bg-gray-900 py-16 lg:py-24 h-[1627px]" data-oid=".abcfiw">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="y36p.in">
                    {/* Section Header */}
                    <div className="text-center mb-16" data-oid="pjb5ki5">
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-white mb-6"
                            data-oid="cpn-ecg"
                        >
                            Por que escolher nossa automação?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid=":diva4.">
                            Descubra como nossa tecnologia pode transformar completamente a forma
                            como você se conecta com seus clientes
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="p-q7rpq"
                    >
                        {/* Feature 1 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition-all duration-500 group shadow-lg cursor-pointer"
                            data-oid="p15.j.t"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="0f:vi7j"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="u3h:zil"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                        data-oid="9cq_gu9"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="av01wro"
                            >
                                Resposta Instantânea
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                data-oid="r:sh2dq"
                            >
                                Aborde seus leads em até 5 minutos após o primeiro contato,
                                aumentando drasticamente suas chances de conversão.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition-all duration-500 group shadow-lg cursor-pointer"
                            data-oid="rqg_gic"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="dv95fe."
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="xo-vgi-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="l_j03kd"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="nx._9jw"
                            >
                                Aumento de 50% nas Conversões
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                data-oid="4rt54ty"
                            >
                                Nossa automação inteligente já comprovou aumentar as taxas de
                                conversão em até 50% para nossos clientes.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition-all duration-500 group shadow-lg cursor-pointer"
                            data-oid="k-o_4cy"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="d_n9mq2"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="pa6lpi."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="ck0dux1"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="_xc:dhm"
                            >
                                Disponível 24/7
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                data-oid="1empmax"
                            >
                                Nunca perca uma oportunidade. Nossa automação trabalha para você 24
                                horas por dia, 7 dias por semana.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition-all duration-500 group shadow-lg cursor-pointer"
                            data-oid="u_x7dgq"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="8b1izu6"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="kfx..v9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        data-oid="0:q31h7"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="20a:4s5"
                            >
                                Personalização Inteligente
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                data-oid=".o57jr_"
                            >
                                Cada abordagem é personalizada com base no comportamento e perfil do
                                seu lead para máxima efetividade.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition-all duration-500 group shadow-lg cursor-pointer"
                            data-oid="jeolys4"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="cm-c367"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="zgie0gl"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="q0teag5"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="qgwk528"
                            >
                                Fácil Implementação
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                data-oid="wjqdaip"
                            >
                                Configure em minutos, não em semanas. Nossa plataforma é intuitiva e
                                não requer conhecimento técnico.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition-all duration-500 group shadow-lg cursor-pointer"
                            data-oid="7-kjjq0"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                                data-oid="-5dzp6v"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="9to77o1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                        data-oid="2hvoon."
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                                data-oid="km3dj6w"
                            >
                                ROI Comprovado
                            </h3>
                            <p
                                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                data-oid="4c.279_"
                            >
                                Veja retorno sobre investimento já no primeiro mês com nossa
                                automação de alta performance.
                            </p>
                        </div>
                    </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Pronto para transformar seu negócio?
                        </h3>
                        <p className="text-lg text-gray-300 mb-8">
                            Junte-se a centenas de empresas que já aumentaram suas vendas com nossa automação
                        </p>
                        <button 
                            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Começar Agora Gratuitamente
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
