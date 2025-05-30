import "./globals.css";

export const metadata = {
  title: "LCCMR Demo App",
  description: "Generated by create next app",
};

//antialiased class is used to enable font smoothing
// and improve the appearance of text on the screen
// https://tailwindcss.com/docs/font-smoothing

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body
      >
        {children}
      </body>
    </html>
  );
}
