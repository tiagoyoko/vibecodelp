import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Privacidade — Agência Vibe Code',
    description:
        'Como a Agência Vibe Code coleta, usa e protege os dados pessoais compartilhados através deste site.',
};

export default function Page() {
    return (
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-6 lg:pt-40">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sage">
                Transparência
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foam sm:text-4xl">
                Política de Privacidade
            </h1>

            <div className="mt-10 space-y-8 leading-relaxed text-sage">
                <section>
                    <h2 className="mb-3 font-display text-xl font-semibold text-foam">
                        Quais dados coletamos
                    </h2>
                    <p>
                        Este site coleta apenas os dados que você decide compartilhar ao entrar em
                        contato: nome, nome da empresa e a descrição do seu cenário, enviados
                        diretamente pelo WhatsApp através dos botões e do formulário da página. Não
                        utilizamos formulários que armazenam dados em servidores próprios.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 font-display text-xl font-semibold text-foam">
                        Para que usamos
                    </h2>
                    <p>
                        As informações compartilhadas são usadas exclusivamente para responder ao
                        seu contato, realizar o Diagnóstico de Automação e Crescimento e apresentar
                        propostas comerciais relacionadas. Não vendemos, alugamos nem compartilhamos
                        seus dados com terceiros para fins de marketing.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 font-display text-xl font-semibold text-foam">
                        Seus direitos (LGPD)
                    </h2>
                    <p>
                        Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
                        solicitar a qualquer momento a confirmação, correção ou exclusão dos seus
                        dados pessoais. Basta pedir pelo mesmo canal de WhatsApp disponível neste
                        site.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 font-display text-xl font-semibold text-foam">Cookies</h2>
                    <p>
                        Este site não utiliza cookies de rastreamento próprios. Caso ferramentas de
                        análise de tráfego venham a ser adotadas, esta política será atualizada
                        antes da ativação.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 font-display text-xl font-semibold text-foam">Contato</h2>
                    <p>
                        Dúvidas sobre esta política podem ser enviadas pelo WhatsApp da Agência Vibe
                        Code, disponível em qualquer botão de contato deste site.
                    </p>
                </section>
            </div>

            <Link
                href="/"
                className="mt-12 inline-flex items-center gap-2 rounded-full border border-foam/15 px-6 py-3 text-sm font-medium text-foam transition-colors hover:border-foam/35"
            >
                ← Voltar para o início
            </Link>
        </div>
    );
}
