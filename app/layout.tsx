import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'VicBot - Automação Inteligente',
    description:
        'Transforme seu negócio com automação inteligente e aumente suas conversões em até 50%',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" data-oid="jeri7_6">
            <body className="min-h-screen bg-gray-900 h-[77px]" data-oid="g8bjn8d">
                <Header data-oid="c4mro6o" />
                <main data-oid="9.ud:nh">{children}</main>
                <Footer data-oid="6h1627n" key="olk-YPDy" />
            </body>
        </html>
    );
}
