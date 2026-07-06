'use client';

import { useEffect } from 'react';

/**
 * Observador global: revela elementos marcados com [data-reveal] ao entrarem
 * na viewport. O estado "escondido" só existe sob a classe .js no <html>,
 * então a página nunca fica em branco sem JavaScript.
 */
export default function Reveal() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document
                .querySelectorAll('[data-reveal]')
                .forEach((el) => el.classList.add('in-view'));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        );

        document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return null;
}
