
import "@/app/globals.css";
import 'swiper/css';
import '@/app/assets/sass/side-menu.css';
import Script from "next/script";
import React from "react";

export const metadata = {
    title: '',
    description: '',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Universal Pet Hub</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

        </head>
        <body>

        <main>
            {children}
        </main>
       <Script
           src="https://kit.fontawesome.com/f07d174f8d.js"
           crossOrigin="anonymous"
           strategy="afterInteractive"
       />
       <Script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
        <Script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js"
            integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1ERo0BZlK"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />

        <Script
            src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}
