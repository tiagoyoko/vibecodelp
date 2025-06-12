import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';
export const metadata: Metadata = {
    title: 'VicBot - Automação Inteligente',
    description:
        'Transforme seu negócio com automação inteligente e aumente suas conversões em até 50%',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" data-oid="3h6oi68">
            <body className="min-h-screen bg-gray-900" data-oid="zc:6s-s">
                <Header data-oid="4-oa6_d" />
                <main data-oid="koo1sr-">{children}</main>
                <Footer data-oid="u7-odpl" />

                <Script src="/builtwith.js" strategy="afterInteractive" data-oid="rqrrd7_" />
            </body>
        </html>
    );
}
