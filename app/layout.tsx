import './globals.css'
export const metadata = {
  title: "ArtHive",
  description: "Showcase and discover remarkable designers projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}
