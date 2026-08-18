import "@/styles/globals.css";

export const metadata = {
  title: "MedChain — Decentralized Medical Records",
  description:
    "Blockchain-verified medical record integrity. Upload, verify, and control access to medical reports using IPFS and Ethereum smart contracts.",
  keywords: ["blockchain", "medical records", "IPFS", "ethereum", "healthcare", "decentralized"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
