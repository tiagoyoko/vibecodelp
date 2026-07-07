'use client';

import { useState } from 'react';
import { waLink } from '../lib/site';

const inputClasses =
    'w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-foam placeholder:text-sage/60 outline-none transition-colors focus:border-lime/60';

/**
 * Formulário de 3 campos que monta a mensagem e abre o WhatsApp já preenchido —
 * zero telas intermediárias entre a intenção e a conversa.
 */
export default function LeadForm() {
    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [gargalo, setGargalo] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mensagem = `Olá! Sou ${nome}, da ${empresa}. Meu maior gargalo hoje: ${gargalo}. Quero agendar o Diagnóstico de Automação e Crescimento.`;
        window.open(waLink(mensagem), '_blank', 'noopener,noreferrer');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label
                    htmlFor="lead-nome"
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.24em] text-sage"
                >
                    Seu nome
                </label>
                <input
                    id="lead-nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className={inputClasses}
                />
            </div>

            <div>
                <label
                    htmlFor="lead-empresa"
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.24em] text-sage"
                >
                    Sua empresa
                </label>
                <input
                    id="lead-empresa"
                    type="text"
                    required
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Digite o nome da sua empresa"
                    className={inputClasses}
                />
            </div>

            <div>
                <label
                    htmlFor="lead-gargalo"
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.24em] text-sage"
                >
                    Qual o seu maior gargalo hoje?
                </label>
                <textarea
                    id="lead-gargalo"
                    required
                    rows={3}
                    value={gargalo}
                    onChange={(e) => setGargalo(e.target.value)}
                    placeholder="Ex.: leads chegam pelo WhatsApp e ninguém consegue acompanhar"
                    className={`${inputClasses} resize-none`}
                />
            </div>

            <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 ease-spring hover:scale-[1.02] active:scale-[0.98]"
            >
                Iniciar diagnóstico pelo WhatsApp
                <span aria-hidden="true">→</span>
            </button>
            <p className="text-center text-xs text-sage">
                Abre uma conversa no WhatsApp com sua mensagem pronta. Resposta em horário
                comercial, no mesmo dia.
            </p>
        </form>
    );
}
