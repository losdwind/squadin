import "@ui/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@ui/config/site";
import { fontSans } from "@ui/lib/fonts";
import { cn } from "@ui/lib/utils";
import { Analytics } from "@ui/patterns/analytics";
import { ThemeProvider } from "@ui/patterns/providers";
import { SiteFooter } from "@ui/patterns/site-footer";
import { SiteHeader } from "@ui/patterns/site-header";
import { TailwindIndicator } from "ui/patterns/tailwind-indicator";
import { Toaster} from "@ui/components//sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Socialfi", "Decentralized Social Media", "NFT", "Lens Protocol"],
  authors: [
    {
      name: "squadin",
      url: "https://squadin.xyz",
    },
  ],
  creator: "squadin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@squadin",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative h-screen bg-background overflow-hidden">
                <SiteHeader />
                <main className="">{children}</main>
                {/* <SiteFooter /> */}
              </div>
            </div>
            <TailwindIndicator />
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
