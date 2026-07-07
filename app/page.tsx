import Reveal from '../components/Reveal';
import LeadForm from '../components/LeadForm';
import { WA_DIAGNOSTICO, WA_CONVERSA } from '../lib/site';

/* ---------------------------------------------------------------------------
 * Helpers de composição
 * ------------------------------------------------------------------------- */

function RisingWords({
    words,
    start = 0,
}: {
    words: { t: string; accent?: boolean }[];
    start?: number;
}) {
    return (
        <>
            {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                    <span
                        className={`word-rise ${w.accent ? 'text-lime' : ''}`}
                        style={{ animationDelay: `${(start + i) * 70}ms` }}
                    >
                        {w.t}&nbsp;
                    </span>
                </span>
            ))}
        </>
    );
}

function Eyebrow({
    children,
    tone = 'dark',
}: {
    children: React.ReactNode;
    tone?: 'dark' | 'paper';
}) {
    return (
        <p
            className={`font-mono text-[11px] uppercase tracking-[0.28em] ${
                tone === 'dark' ? 'text-sage' : 'text-paper-sub'
            }`}
        >
            {children}
        </p>
    );
}

function DividerLight() {
    return (
        <div aria-hidden="true" className="divider-light relative mx-auto h-px w-full max-w-6xl">
            <div className="absolute left-1/2 top-1/2 h-6 w-36 -translate-x-1/2 -translate-y-1/2 bg-lime/15 blur-2xl" />
        </div>
    );
}

const delay = (i: number) => ({ '--i': i }) as React.CSSProperties;

/* ---------------------------------------------------------------------------
 * Diagrama-assinatura: do emaranhado (caos, coral) ao fluxo ortogonal (lima)
 * ------------------------------------------------------------------------- */

function FlowPanel() {
    return (
        <div className="relative">
            <div
                aria-hidden="true"
                className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(200,245,95,0.09),transparent_65%)]"
            />
            <div className="relative overflow-hidden rounded-2xl border border-foam/10 bg-ink-raised shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foam/25 to-transparent"
                />
                {/* Barra de título */}
                <div className="flex items-center justify-between border-b border-foam/10 px-4 py-3">
                    <span className="font-mono text-[11px] text-sage">
                        vibe<span className="text-lime">{'</>'}</span>code · fluxo de leads
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                        <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                        Ao vivo
                    </span>
                </div>

                {/* Diagrama */}
                <svg
                    viewBox="0 0 520 300"
                    className="w-full"
                    role="img"
                    aria-label="Diagrama: leads chegando desorganizados por WhatsApp, Instagram e planilhas passam pela automação da Vibe Code e seguem organizados para o CRM e o painel de indicadores"
                >
                    {/* Emaranhado do caos */}
                    <path
                        d="M116 57 C 165 57, 130 195, 196 150"
                        fill="none"
                        stroke="#FF6B4A"
                        strokeOpacity="0.4"
                        strokeWidth="1.2"
                    />
                    <path
                        d="M116 150 C 170 150, 148 70, 196 158"
                        fill="none"
                        stroke="#FF6B4A"
                        strokeOpacity="0.28"
                        strokeWidth="1.2"
                    />
                    <path
                        d="M116 243 C 180 243, 140 115, 196 166"
                        fill="none"
                        stroke="#FF6B4A"
                        strokeOpacity="0.45"
                        strokeWidth="1.2"
                    />

                    {/* Fluxo limpo (base) */}
                    <path
                        d="M344 148 L 380 148 L 380 85 L 412 85"
                        fill="none"
                        stroke="#F4F6ED"
                        strokeOpacity="0.12"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M344 168 L 380 168 L 380 231 L 412 231"
                        fill="none"
                        stroke="#F4F6ED"
                        strokeOpacity="0.12"
                        strokeWidth="1.5"
                    />
                    {/* Pulsos percorrendo o fluxo */}
                    <path
                        d="M344 148 L 380 148 L 380 85 L 412 85"
                        fill="none"
                        stroke="#C8F55F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        pathLength={1}
                        className="flow-comet"
                    />
                    <path
                        d="M344 168 L 380 168 L 380 231 L 412 231"
                        fill="none"
                        stroke="#C8F55F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        pathLength={1}
                        className="flow-comet"
                        style={{ animationDelay: '1.6s' }}
                    />

                    {/* Origens (caos) */}
                    {[
                        { y: 42, label: 'WhatsApp' },
                        { y: 135, label: 'Instagram' },
                        { y: 228, label: 'Planilhas' },
                    ].map((n) => (
                        <g key={n.label}>
                            <rect
                                x="8"
                                y={n.y}
                                width="108"
                                height="30"
                                rx="8"
                                fill="#14160F"
                                stroke="#FF6B4A"
                                strokeOpacity="0.35"
                            />
                            <text
                                x="62"
                                y={n.y + 19}
                                textAnchor="middle"
                                fontSize="11"
                                fill="#A6AC98"
                                fontFamily="var(--font-mono)"
                            >
                                {n.label}
                            </text>
                        </g>
                    ))}

                    {/* Núcleo */}
                    <rect
                        x="196"
                        y="132"
                        width="148"
                        height="54"
                        rx="10"
                        fill="#14160F"
                        stroke="#C8F55F"
                        strokeOpacity="0.6"
                    />
                    <text
                        x="270"
                        y="155"
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="600"
                        fill="#F4F6ED"
                        fontFamily="var(--font-mono)"
                    >
                        {'VIBE </> CODE'}
                    </text>
                    <text
                        x="270"
                        y="172"
                        textAnchor="middle"
                        fontSize="9"
                        fill="#A6AC98"
                        fontFamily="var(--font-mono)"
                        letterSpacing="2"
                    >
                        AUTOMAÇÃO
                    </text>

                    {/* Destinos (sistema) */}
                    {[
                        { y: 70, label: 'CRM' },
                        { y: 216, label: 'Painel' },
                    ].map((n) => (
                        <g key={n.label}>
                            <rect
                                x="412"
                                y={n.y}
                                width="100"
                                height="30"
                                rx="8"
                                fill="#14160F"
                                stroke="#C8F55F"
                                strokeOpacity="0.4"
                            />
                            <text
                                x="462"
                                y={n.y + 19}
                                textAnchor="middle"
                                fontSize="11"
                                fill="#F4F6ED"
                                fontFamily="var(--font-mono)"
                            >
                                {n.label}
                            </text>
                        </g>
                    ))}
                </svg>

                {/* Log de operação */}
                <div className="space-y-2 border-t border-foam/10 px-4 py-4 font-mono text-xs text-sage sm:px-5">
                    <p data-reveal style={delay(0)}>
                        <span className="text-grass">✓</span> Lead recebido via WhatsApp — resposta
                        automática em 2 min
                    </p>
                    <p data-reveal style={delay(1)}>
                        <span className="text-grass">✓</span> Qualificado e salvo no CRM —
                        follow-up: hoje, 14h
                    </p>
                    <p data-reveal style={delay(2)}>
                        <span className="text-lime">→</span> Nenhum lead sem resposta
                        <span aria-hidden="true" className="ml-1 text-lime">
                            ▍
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ---------------------------------------------------------------------------
 * Seções
 * ------------------------------------------------------------------------- */

function Hero() {
    return (
        <section id="topo" className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-44">
            <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(200,245,95,0.07),transparent_60%)]"
            />

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6">
                    <Eyebrow>Do caos operacional à máquina de crescimento</Eyebrow>

                    <h1
                        className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foam sm:text-5xl lg:text-[3.4rem]"
                        aria-label="Sua empresa cresceu. Sua operação ficou para trás."
                    >
                        <span aria-hidden="true" className="block">
                            <RisingWords
                                words={[
                                    { t: 'Sua' },
                                    { t: 'empresa' },
                                    { t: 'cresceu.', accent: true },
                                ]}
                            />
                        </span>
                        <span aria-hidden="true" className="block text-foam/75">
                            <RisingWords
                                start={3}
                                words={[
                                    { t: 'Sua' },
                                    { t: 'operação' },
                                    { t: 'ficou' },
                                    { t: 'para' },
                                    { t: 'trás.' },
                                ]}
                            />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage">
                        WhatsApp lotado, planilhas soltas, leads esquecidos — e tudo passando por
                        você. Nós montamos o sistema comercial que organiza a captação, automatiza
                        o funil e coloca os dados na sua frente.{' '}
                        <span className="text-foam">Para você decidir, não apagar incêndio.</span>
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a
                            href={WA_DIAGNOSTICO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 ease-spring hover:scale-[1.03] active:scale-[0.97]"
                        >
                            Agendar meu diagnóstico gratuito
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </a>
                        <a
                            href="#metodo"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-foam/15 px-7 py-4 text-base font-medium text-foam transition-colors hover:border-foam/35"
                        >
                            Ver como funciona o método
                        </a>
                    </div>

                    <p className="mt-5 text-sm text-sage">
                        Diagnóstico sem compromisso. Você sai com um mapa da sua operação — feche
                        negócio ou não.
                    </p>
                </div>

                <div className="lg:col-span-6 lg:pl-6" data-reveal>
                    <FlowPanel />
                </div>
            </div>
        </section>
    );
}

const SINTOMAS = [
    'O lead chega pelo WhatsApp, pelo Instagram, por indicação… e ninguém sabe dizer quantos entraram esse mês, nem quantos foram respondidos.',
    'O follow-up depende da memória de alguém. Quando essa pessoa está ocupada, o cliente esfria — e compra do concorrente que respondeu antes.',
    'A proposta está numa planilha, o histórico está no celular do vendedor, o financeiro está em outro sistema. Nada conversa com nada.',
    'Você é o gargalo: toda decisão, aprovação e cobrança passa por você. Tirar uma semana de férias parece impossível.',
    'No fim do mês, você sabe quanto faturou — mas não sabe de onde veio, o que funcionou, nem onde está vazando dinheiro.',
];

const ROTATIONS = [
    'lg:-rotate-1',
    'lg:rotate-1',
    'lg:-rotate-[0.5deg]',
    'lg:rotate-[1.25deg]',
    'lg:-rotate-[0.75deg]',
];

function Dor() {
    return (
        <section id="sintomas" className="scroll-mt-24 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl" data-reveal>
                    <Eyebrow>Diagnóstico rápido</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foam sm:text-4xl lg:text-5xl">
                        Você reconhece esses sintomas?
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-sage">
                        Não é falta de esforço. É falta de estrutura. Empresas que crescem rápido
                        acumulam atalhos — e um dia os atalhos viram gargalo.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {SINTOMAS.map((s, i) => (
                        <div
                            key={i}
                            data-reveal
                            style={delay(i)}
                            className={`rounded-2xl border border-foam/10 bg-ink-raised p-6 transition-transform duration-300 ${ROTATIONS[i]} lg:hover:rotate-0`}
                        >
                            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-coral">
                                <span
                                    aria-hidden="true"
                                    className="inline-block h-2 w-2 rounded-sm bg-coral/80"
                                />
                                Sintoma 0{i + 1}
                            </p>
                            <p className="mt-4 leading-relaxed text-foam/90">{s}</p>
                        </div>
                    ))}

                    <div
                        data-reveal
                        style={delay(5)}
                        className="flex flex-col justify-center rounded-2xl border border-lime/25 bg-lime/[0.06] p-6"
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            A boa notícia
                        </p>
                        <p className="mt-4 leading-relaxed text-foam">
                            Nada disso é um problema de pessoas.{' '}
                            <span className="font-semibold text-lime">
                                É um problema de sistema.
                            </span>{' '}
                            E problema de sistema tem solução conhecida, testável e mensurável.
                        </p>
                    </div>
                </div>

                <p className="mt-10 max-w-3xl text-lg leading-relaxed text-sage" data-reveal>
                    Cada sintoma, sozinho, parece administrável. Juntos, eles têm um custo
                    invisível: leads que esfriam sem resposta, clientes que compram uma vez e
                    somem, horas de equipe gastas em retrabalho — e um dono exausto tomando decisão
                    no escuro.
                </p>
            </div>
        </section>
    );
}

const OPORTUNIDADES = [
    'Responder todo lead em minutos, não em dias — inclusive fora do horário comercial.',
    'Fazer follow-up com cada oportunidade, todas as vezes, sem depender de ninguém lembrar.',
    'Atender o dobro de clientes com a mesma equipe — sem ninguém trabalhar mais.',
    'Saber, com dados, qual canal traz cliente bom e qual só traz curioso — e investir onde dá retorno.',
];

function Oportunidade() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl" data-reveal>
                    <Eyebrow>A oportunidade escondida no caos</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foam sm:text-4xl lg:text-5xl text-balance">
                        Automação não é cortar custo.{' '}
                        <span className="text-lime">É liberar crescimento.</span>
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-sage">
                        A maioria das empresas pensa em automação como &ldquo;fazer o mesmo com
                        menos gente&rdquo;. É pensar pequeno. Automação bem feita muda o que a sua
                        empresa consegue fazer:
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
                    {OPORTUNIDADES.map((o, i) => (
                        <div key={i} className="flex gap-4" data-reveal style={delay(i)}>
                            <span aria-hidden="true" className="mt-1 font-mono text-mint">
                                →
                            </span>
                            <p className="text-lg leading-relaxed text-foam/90">{o}</p>
                        </div>
                    ))}
                </div>

                <blockquote
                    className="mt-16 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-foam sm:text-3xl"
                    data-reveal
                >
                    Empresas organizadas não crescem porque trabalham mais. Crescem porque cada
                    esforço <span className="text-lime">deixa de se perder pelo caminho.</span>
                </blockquote>
            </div>
        </section>
    );
}

const FERRAMENTAS = [
    'WhatsApp Business',
    'Google Sheets',
    'Pipedrive',
    'RD Station',
    'Kommo',
    'Make',
    'n8n',
    'Meta Ads',
    'Google Ads',
    'Notion',
    'Asaas',
];

function Sistema() {
    return (
        <section id="sistema" className="scroll-mt-24 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl" data-reveal>
                    <Eyebrow>O que entregamos</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foam sm:text-4xl lg:text-5xl text-balance">
                        Não vendemos ferramenta. Montamos o seu sistema comercial.
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-sage">
                        Cinco frentes que funcionam juntas — porque landing page sem CRM vira lead
                        perdido, e CRM sem processo vira cadastro esquecido.{' '}
                        <span className="text-foam">O valor está na conexão.</span>
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6">
                    {/* Módulo 01 */}
                    <div
                        className="rounded-2xl border border-foam/10 bg-ink-raised p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foam/25 lg:col-span-2"
                        data-reveal
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            Módulo 01
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold text-foam">
                            Landing pages de conversão
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-sage">
                            Páginas construídas para transformar visitante em contato qualificado.
                            Sem enfeite: estrutura de convencimento, formulário certo e integração
                            direta com o resto do sistema.
                        </p>
                    </div>

                    {/* Módulo 02 — destaque com conversa real */}
                    <div
                        className="relative overflow-hidden rounded-2xl border border-foam/10 bg-ink-raised p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foam/25 lg:col-span-4 lg:row-span-2 lg:p-8"
                        data-reveal
                        style={delay(1)}
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foam/20 to-transparent"
                        />
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            Módulo 02
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold text-foam">
                            Automação de leads
                        </h3>
                        <p className="mt-3 max-w-md leading-relaxed text-sage">
                            Cada lead que chega é capturado, qualificado e respondido
                            automaticamente — antes de esfriar. Organizado antes de virar problema,
                            distribuído para quem deve atender.
                        </p>

                        <div className="mt-6 max-w-md space-y-3">
                            <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-foam/10 bg-foam/[0.06] px-4 py-3">
                                <p className="text-sm text-foam/90">
                                    Boa noite! Vocês atendem Campinas?
                                </p>
                                <p className="mt-1 font-mono text-[10px] text-sage">22:47</p>
                            </div>
                            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md border border-lime/20 bg-lime/[0.08] px-4 py-3">
                                <p className="text-sm text-foam">
                                    Atendemos sim! Me conta rapidinho o que você precisa e eu já te
                                    passo os próximos passos 👇
                                </p>
                                <p className="mt-1 font-mono text-[10px] text-sage">
                                    22:47 · resposta automática
                                </p>
                            </div>
                            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-grass/30 bg-grass/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-grass">
                                <span aria-hidden="true">✓</span> Respondido em 40 s · fora do
                                horário comercial
                            </p>
                        </div>
                    </div>

                    {/* Módulo 03 */}
                    <div
                        className="rounded-2xl border border-foam/10 bg-ink-raised p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foam/25 lg:col-span-2"
                        data-reveal
                        style={delay(2)}
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            Módulo 03
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold text-foam">
                            CRM e processos comerciais
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-sage">
                            Seu funil sai da cabeça do dono e vira processo: etapas claras,
                            follow-up programado e histórico de cada cliente em um lugar só.
                            Qualquer pessoa da equipe consegue continuar uma negociação.
                        </p>
                    </div>

                    {/* Módulo 04 */}
                    <div
                        className="rounded-2xl border border-foam/10 bg-ink-raised p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foam/25 lg:col-span-3"
                        data-reveal
                        style={delay(3)}
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            Módulo 04
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold text-foam">
                            Integrações e dashboards
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-sage">
                            WhatsApp, formulários, CRM, financeiro: tudo conversando. E um painel
                            que mostra o que importa — quantos leads entraram, quantos viraram
                            venda, onde o funil trava. Dados claros para decidir onde crescer.
                        </p>
                    </div>

                    {/* Módulo 05 */}
                    <div
                        className="rounded-2xl border border-foam/10 bg-ink-raised p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foam/25 lg:col-span-3"
                        data-reveal
                        style={delay(4)}
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            Módulo 05
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold text-foam">
                            Performance contínua
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-sage">
                            Sistema não é projeto que termina. Todo mês: analisamos os números,
                            ajustamos o que trava e testamos o que pode render mais. Sua operação
                            melhora com o tempo — em vez de envelhecer.
                        </p>
                    </div>
                </div>

                <p className="mt-10 max-w-3xl text-lg leading-relaxed text-sage" data-reveal>
                    Cada pilar resolve um pedaço. Juntos, formam uma coisa só:{' '}
                    <span className="text-foam">
                        uma operação comercial que roda todos os dias, com ou sem você na sala.
                    </span>
                </p>
            </div>

            {/* Faixa de ferramentas */}
            <div className="mt-16">
                <p className="px-5 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-sage">
                    Conectamos as ferramentas que você já usa — sem trocar tudo de uma vez
                </p>
                <div
                    className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
                    aria-hidden="true"
                >
                    <div className="animate-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused]">
                        {[...FERRAMENTAS, ...FERRAMENTAS].map((f, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-sage/80"
                            >
                                {f}
                                <span className="inline-block h-1 w-1 rounded-full bg-lime/50" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const ANTES = [
    'Lead chega e espera horas (ou dias) por resposta',
    'Follow-up depende da memória de quem atendeu',
    'Cada vendedor controla os clientes do seu jeito, no seu celular',
    'Propostas, contatos e históricos espalhados em planilhas e conversas',
    'O dono aprova, cobra, lembra e resolve — tudo',
    'Fim do mês: “faturamos X”, e ninguém sabe explicar por quê',
    'Crescer significa contratar mais gente para apagar mais incêndio',
];

const DEPOIS = [
    'Lead recebe resposta em minutos, qualquer dia, qualquer hora',
    'Follow-up automático, no prazo certo, com registro de cada contato',
    'Funil único e visível: todo mundo vê as mesmas etapas e os mesmos dados',
    'Histórico completo de cada cliente em um lugar só',
    'Processos que não dependem da memória do dono',
    'Painel mostra de onde vem cada venda e onde o funil trava',
    'Crescer significa aumentar o volume — a estrutura já aguenta',
];

function AntesDepois() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl" data-reveal>
                    <Eyebrow>A transformação, na prática</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foam sm:text-4xl lg:text-5xl">
                        A mesma empresa. Duas formas de operar.
                    </h2>
                </div>

                <div className="relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime/40 bg-ink font-mono text-lg text-lime lg:flex"
                    >
                        →
                    </div>
                    <div
                        className="rounded-2xl border border-coral/20 bg-ink-raised p-6 sm:p-8"
                        data-reveal
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-coral">
                            Antes — operação no improviso
                        </p>
                        <ul className="mt-6 space-y-4">
                            {ANTES.map((item, i) => (
                                <li key={i} className="flex gap-3 text-foam/85">
                                    <span
                                        aria-hidden="true"
                                        className="mt-0.5 font-mono text-coral"
                                    >
                                        ✕
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="rounded-2xl border border-lime/25 bg-ink-raised p-6 sm:p-8"
                        data-reveal
                        style={delay(1)}
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
                            Depois — operação em sistema
                        </p>
                        <ul className="mt-6 space-y-4">
                            {DEPOIS.map((item, i) => (
                                <li key={i} className="flex gap-3 text-foam/85">
                                    <span aria-hidden="true" className="mt-0.5 font-mono text-lime">
                                        ✓
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p
                    className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-sage"
                    data-reveal
                >
                    A ponte entre as duas colunas não é sorte nem mais esforço.{' '}
                    <span className="text-foam">
                        É um sistema — desenhado para a sua operação, implementado em semanas e
                        ajustado todo mês.
                    </span>
                </p>
            </div>
        </section>
    );
}

const ETAPAS = [
    {
        titulo: 'Diagnóstico',
        texto: 'Sentamos com você e mapeamos como sua operação funciona hoje: de onde vêm os leads, como são atendidos, onde a informação se perde. Sem julgamento — toda empresa que cresceu rápido tem nós para desatar.',
    },
    {
        titulo: 'Mapeamento de gargalos',
        texto: 'Identificamos onde está o maior vazamento: leads sem resposta, follow-up falho, retrabalho, decisão sem dado. E priorizamos pelo impacto no seu caixa — não pela tecnologia da moda.',
    },
    {
        titulo: 'Desenho do fluxo',
        texto: 'Desenhamos o novo processo comercial no papel, junto com você, antes de qualquer ferramenta. Você aprova entendendo exatamente o que vai mudar e por quê.',
    },
    {
        titulo: 'Implementação',
        texto: 'Montamos o sistema: páginas, automações, CRM, integrações. Treinamos sua equipe na prática, na rotina real de vocês. Nada de manual de 50 páginas que ninguém lê.',
    },
    {
        titulo: 'Medição e escala',
        texto: 'Com o sistema rodando, acompanhamos os números mês a mês: o que funciona, escala; o que trava, ajusta. É aqui que a operação organizada vira máquina de crescimento.',
    },
];

function Metodo() {
    return (
        <section id="metodo" className="scroll-mt-24 bg-paper py-20 text-paper-ink lg:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl" data-reveal>
                    <Eyebrow tone="paper">Como trabalhamos</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Método claro, do diagnóstico à escala.
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-paper-sub">
                        Você não precisa entender de tecnologia.{' '}
                        <span className="text-paper-ink">Precisa de um parceiro com processo.</span>{' '}
                        Este é o nosso:
                    </p>
                </div>

                <ol className="relative ml-4 mt-14 space-y-12 pl-10 sm:pl-12">
                    <li
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-full w-px list-none bg-gradient-to-b from-lime via-paper-line to-transparent"
                    />
                    {ETAPAS.map((etapa, i) => (
                        <li key={i} className="relative" data-reveal style={delay(i)}>
                            <span className="absolute -left-10 top-0 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-ink font-mono text-xs font-medium text-lime sm:-left-12">
                                0{i + 1}
                            </span>
                            <h3 className="font-display text-xl font-semibold sm:text-2xl">
                                {etapa.titulo}
                            </h3>
                            <p className="mt-3 max-w-2xl leading-relaxed text-paper-sub">
                                {etapa.texto}
                            </p>
                        </li>
                    ))}
                </ol>

                <p className="mt-14 max-w-2xl text-lg leading-relaxed text-paper-sub" data-reveal>
                    Em cada etapa você sabe o que está sendo feito, por que está sendo feito e o
                    que vem depois.{' '}
                    <span className="font-semibold text-paper-ink">Sem caixa-preta.</span>
                </p>
            </div>
        </section>
    );
}

const PRINCIPIOS = [
    {
        titulo: 'Processo antes da ferramenta',
        texto: 'Software errado no processo certo ainda funciona; o contrário, nunca. Começamos pelo desenho da operação, não pelo catálogo de tecnologia.',
    },
    {
        titulo: 'A língua do comercial',
        texto: 'Funil, follow-up, taxa de conversão — não jargão de TI. Você entende cada decisão do projeto e aprova sabendo o que muda.',
    },
    {
        titulo: 'Medimos o que importa',
        texto: 'Leads atendidos, negócios avançando, venda fechada. O que não mexe no caixa não vira prioridade.',
    },
];

function Prova() {
    return (
        <section className="border-t border-paper-line bg-paper pb-20 pt-16 text-paper-ink lg:pb-28 lg:pt-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl" data-reveal>
                    <Eyebrow tone="paper">Por que a Vibe Code</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                        Quem monta o sistema já operou de dentro.
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-paper-sub">
                        A Vibe Code não nasceu numa agência de marketing nem num departamento de
                        TI. Nasceu dentro da operação comercial — do lado de quem precisa bater
                        meta com o funil que existe, não com o funil ideal.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-paper-sub">
                        Nossa bagagem vem de anos em Sales Operations: estruturando processos
                        comerciais, implantando CRMs que a equipe realmente usa — não os que viram
                        cemitério de cadastros — e conduzindo transformação digital em empresas que
                        precisavam se organizar sem parar de vender no meio do caminho.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {PRINCIPIOS.map((p, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-paper-line bg-white/60 p-6"
                            data-reveal
                            style={delay(i)}
                        >
                            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-sub">
                                Princípio 0{i + 1}
                            </p>
                            <h3 className="mt-3 font-display text-lg font-semibold">{p.titulo}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-paper-sub">{p.texto}</p>
                        </div>
                    ))}
                </div>

                <blockquote
                    className="mt-14 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"
                    data-reveal
                >
                    Tecnologia é o meio. O que entregamos é{' '}
                    <span className="underline decoration-lime decoration-4 underline-offset-4">
                        uma operação comercial que funciona.
                    </span>
                </blockquote>
            </div>
        </section>
    );
}

const ENTREGAVEIS = [
    'Um mapa visual de como seus leads fluem hoje — e onde estão se perdendo',
    'Os 2 ou 3 gargalos que mais custam dinheiro na sua operação, priorizados',
    'Uma recomendação clara do que automatizar primeiro (e do que ainda não vale a pena)',
];

const CONDICOES = [
    'Gratuito e sem compromisso',
    'Sem pré-requisito técnico',
    'O diagnóstico é seu, feche ou não',
];

function Oferta() {
    return (
        <section id="diagnostico" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(200,245,95,0.06),transparent_60%)]"
            />
            <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
                {/* Única superfície de vidro da página: o objeto mais precioso */}
                <div
                    className="rounded-3xl bg-gradient-to-br from-lime/50 via-foam/10 to-lime/20 p-px"
                    data-reveal
                >
                    <div className="rounded-[calc(1.5rem-1px)] bg-ink-raised/80 p-7 backdrop-blur-sm sm:p-10 lg:p-12">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                            <div>
                                <p className="inline-flex rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                                    Primeiro passo — sem compromisso
                                </p>
                                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foam sm:text-4xl">
                                    Diagnóstico de Automação e Crescimento
                                </h2>
                                <p className="mt-4 leading-relaxed text-sage">
                                    Uma conversa estruturada de cerca de 45 minutos, por vídeo, em
                                    que mapeamos sua operação comercial de ponta a ponta.
                                </p>

                                <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.24em] text-sage">
                                    Você sai com
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {ENTREGAVEIS.map((e, i) => (
                                        <li key={i} className="flex gap-3 text-foam/90">
                                            <span
                                                aria-hidden="true"
                                                className="mt-0.5 font-mono text-lime"
                                            >
                                                ✓
                                            </span>
                                            <span className="leading-relaxed">{e}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {CONDICOES.map((c) => (
                                        <span
                                            key={c}
                                            className="rounded-full border border-foam/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-sage"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-foam/10 bg-ink p-6 sm:p-7">
                                <p className="font-display text-lg font-semibold text-foam">
                                    Comece agora — conte seu cenário
                                </p>
                                <p className="mb-6 mt-1.5 text-sm text-sage">
                                    Três campos, e sua mensagem chega pronta no nosso WhatsApp.
                                </p>
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CtaFinal() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            <div
                aria-hidden="true"
                className="bg-blueprint pointer-events-none absolute inset-0 rotate-180"
            />
            <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
                <h2
                    className="font-display text-3xl font-bold leading-tight tracking-tight text-foam sm:text-5xl text-balance"
                    data-reveal
                >
                    Seu negócio não precisa de mais improviso.{' '}
                    <span className="text-lime">Precisa de um sistema.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sage" data-reveal>
                    Daqui a seis meses, sua operação vai estar num de dois lugares: mais organizada
                    — ou mais caótica, só que com mais volume. O caos não se resolve sozinho; ele
                    cresce junto com a empresa. Comece pelo diagnóstico: 45 minutos para enxergar
                    sua operação com clareza, talvez pela primeira vez.
                </p>

                <div
                    className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    data-reveal
                >
                    <a
                        href={WA_DIAGNOSTICO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime px-8 py-4 text-base font-semibold text-ink transition-transform duration-300 ease-spring hover:scale-[1.03] active:scale-[0.97]"
                    >
                        Agendar meu diagnóstico gratuito
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </a>
                    <a
                        href={WA_CONVERSA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-foam/15 px-8 py-4 text-base font-medium text-foam transition-colors hover:border-foam/35"
                    >
                        Prefiro falar direto no WhatsApp
                    </a>
                </div>

                <p
                    className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-sage/80"
                    data-reveal
                >
                    Vibe Code — automação, performance e inteligência operacional para PMEs
                </p>
            </div>
        </section>
    );
}

function MobileCtaBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-foam/10 bg-ink/90 px-4 py-3 backdrop-blur-md md:hidden">
            <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink active:scale-[0.98]"
            >
                Agendar diagnóstico gratuito
                <span aria-hidden="true">→</span>
            </a>
        </div>
    );
}

/* ---------------------------------------------------------------------------
 * Página
 * ------------------------------------------------------------------------- */

export default function Page() {
    return (
        <>
            <Reveal />
            <Hero />
            <DividerLight />
            <Dor />
            <DividerLight />
            <Oportunidade />
            <DividerLight />
            <Sistema />
            <DividerLight />
            <AntesDepois />
            <Metodo />
            <Prova />
            <Oferta />
            <DividerLight />
            <CtaFinal />
            <MobileCtaBar />
        </>
    );
}
