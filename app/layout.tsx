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
        <html lang="pt-BR" data-oid="k_i6d61">
            <body className="min-h-screen bg-gray-900" data-oid="krpqj04">
                <Header data-oid="f92ovo9" />
                <main data-oid="3jkyx98">{children}</main>
                <Footer data-oid="cd24bgc" />
            </body>
        </html>
    );
}
