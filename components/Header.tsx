import { WA_DIAGNOSTICO } from '../lib/site';

function LogoMark() {
    return (
        <a href="#topo" className="group flex flex-col leading-none" aria-label="Agência Vibe Code">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-sage">
                Agência
            </span>
            <span className="mt-1 flex items-baseline gap-1.5 font-display text-xl font-bold tracking-tight text-foam">
                VIBE
                <span className="font-mono text-sm font-medium text-lime transition-transform duration-300 ease-spring group-hover:translate-x-0.5">
                    {'</>'}
                </span>
                CODE
            </span>
        </a>
    );
}

const NAV_LINKS = [
    { href: '#sintomas', label: 'Sintomas' },
    { href: '#sistema', label: 'O sistema' },
    { href: '#metodo', label: 'Método' },
    { href: '#diagnostico', label: 'Diagnóstico' },
];

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-foam/5 bg-ink/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:h-20">
                <LogoMark />

                <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-sage transition-colors hover:text-foam"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={WA_DIAGNOSTICO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-full border border-lime/40 px-5 py-2 text-sm font-semibold text-lime transition-colors hover:bg-lime/10 md:inline-flex"
                >
                    Agendar diagnóstico
                    <span aria-hidden="true">→</span>
                </a>
            </div>
        </header>
    );
}
