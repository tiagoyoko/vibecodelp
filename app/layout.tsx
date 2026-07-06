import type { Metadata } from 'next';
import { Sora, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-display',
});

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono',
});

export const metadata: Metadata = {
    title: 'Agência Vibe Code — Do caos operacional à máquina de crescimento',
    description:
        'Automação, performance e inteligência operacional para PMEs. Organizamos seus leads, processos e dados em um sistema comercial que roda todos os dias — com ou sem você na sala.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="pt-BR"
            className={`${sora.variable} ${instrumentSans.variable} ${plexMono.variable}`}
        >
            <body className="min-h-screen bg-ink font-sans text-foam">
                <script
                    dangerouslySetInnerHTML={{
                        __html: "document.documentElement.classList.add('js')",
                    }}
                />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
