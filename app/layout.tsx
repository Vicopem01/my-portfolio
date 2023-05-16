import "./globals.css";

export const metadata = {
  title: "Victor O ~ Software Developer",
  description: "Full stack developer ~ Web and blockchain security enthusiat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-300 relative m-0 min-h-screen overflow-hidden overflow-x-hidden dark:text-white text-black">
        {children}
      </body>
    </html>
  );
}
