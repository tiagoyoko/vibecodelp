import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 pt-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-coral">
                Erro 404 — página fora do fluxo
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foam sm:text-5xl">
                Essa página se perdeu no caos.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-sage">
                Acontece nas melhores operações. A diferença é ter um caminho de volta claro:
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 ease-spring hover:scale-[1.03] active:scale-[0.97]"
            >
                Voltar para o início
                <span aria-hidden="true">→</span>
            </Link>
        </div>
    );
}
