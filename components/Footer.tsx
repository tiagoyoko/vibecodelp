import Link from 'next/link';
import { WA_CONVERSA } from '../lib/site';

export default function Footer() {
    return (
        <footer className="border-t border-ink-line bg-ink pb-24 md:pb-0">
            <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
                <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
                    <div className="max-w-md">
                        <div className="flex flex-col leading-none">
                            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sage">
                                Agência
                            </span>
                            <span className="mt-1 flex items-baseline gap-1.5 font-display text-2xl font-bold tracking-tight text-foam">
                                VIBE
                                <span className="font-mono text-base font-medium text-lime">
                                    {'</>'}
                                </span>
                                CODE
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-sage">
                            Automação, performance e inteligência operacional para PMEs que
                            decidiram crescer com estrutura — leads organizados, processos que não
                            dependem da memória do dono e dados claros para decidir onde crescer.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-sage">
                            Navegue
                        </span>
                        <a href="#sintomas" className="text-sage transition-colors hover:text-foam">
                            Sintomas
                        </a>
                        <a href="#sistema" className="text-sage transition-colors hover:text-foam">
                            O sistema
                        </a>
                        <a href="#metodo" className="text-sage transition-colors hover:text-foam">
                            Método
                        </a>
                        <a
                            href="#diagnostico"
                            className="text-sage transition-colors hover:text-foam"
                        >
                            Diagnóstico
                        </a>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-sage">
                            Contato
                        </span>
                        <a
                            href={WA_CONVERSA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage transition-colors hover:text-foam"
                        >
                            WhatsApp
                        </a>
                        <Link
                            href="/politicadeprivacidade"
                            className="text-sage transition-colors hover:text-foam"
                        >
                            Política de Privacidade
                        </Link>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-line pt-6 sm:flex-row sm:items-center">
                    <p className="text-xs text-sage">
                        © {new Date().getFullYear()} Vibe Code — Tiago Tadashi Yokoyama. Todos os
                        direitos reservados.
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-sage/70">
                        Sistema operando normalmente
                        <span
                            aria-hidden="true"
                            className="status-dot ml-2 inline-block h-1.5 w-1.5 rounded-full bg-grass align-middle"
                        />
                    </p>
                </div>
            </div>
        </footer>
    );
}
