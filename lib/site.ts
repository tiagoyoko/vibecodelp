export const site = {
    name: 'Agência Vibe Code',
    tagline: 'Automação, performance e inteligência operacional para PMEs',
    // TODO: substituir pelo número real do WhatsApp comercial (DDI + DDD + número, só dígitos)
    whatsappNumber: '5511999999999',
};

export function waLink(message: string): string {
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DIAGNOSTICO = waLink(
    'Olá! Quero agendar o Diagnóstico de Automação e Crescimento da Vibe Code.',
);

export const WA_CONVERSA = waLink(
    'Olá! Vim pelo site da Vibe Code e quero entender como organizar minha operação.',
);
