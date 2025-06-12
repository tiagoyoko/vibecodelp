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
        <div
            className="min-h-screen flex flex-col lg:flex-row font-['Inter',sans-serif]"
            data-oid="7.mqtqv"
        >
            {/* Left Half - Dark Bot Section */}
            <div
                className="lg:w-1/2 bg-gray-900 relative overflow-hidden flex items-center justify-center min-h-[50vh] lg:min-h-screen"
                data-oid=":o1hn7l"
            >
                <div className="absolute inset-0 bg-black" data-oid="dv._hxe"></div>

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
                className="lg:w-1/2 bg-gray-900 relative overflow-hidden flex items-center justify-center p-8 lg:p-16 min-h-[50vh] lg:min-h-screen"
                data-oid="mzr19b0"
            >
                <div
                    className={`relative z-10 max-w-md w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    data-oid="5sqlm1k"
                    key="olk-jM2Z"
                >
                    {/* Main heading */}
                    <h1
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-white"
                        data-oid="7buobgy"
                    >
                        O Futuro da Automação
                        <span className="block text-gray-300" data-oid="xa9b__2">
                            Está À Espreita
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed"
                        data-oid="g25c9vx"
                    >
                        Prepare-se para descobrir o poder oculto da sua próxima campanha
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="exoqgfw">
                        {/* Phone input */}
                        <div className="relative" data-oid="z5uc0w9">
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Seu número para acesso exclusivo"
                                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors bg-white"
                                required
                                data-oid=":7xfh4t"
                            />
                        </div>

                        {/* CTA Button */}
                        <button
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 animate-pulse"
                            data-oid="qp3_v-i"
                        >
                            Quero Acesso Agora
                        </button>
                    </form>

                    {/* Trust indicator */}
                    <p className="text-sm text-gray-400 mt-6 text-center" data-oid="hc1te9j">
                        🔒 Seus dados estão seguros conosco
                    </p>
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-l from-gray-500 via-black to-black"
                    data-oid="0_6oj_x"
                ></div>
            </div>
        </div>
    );
}
