import "../styles/globals.css";
import { Navbar,Footer } from "../components";
const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>ISTE Chapter - HIT</title>
    </head>
    <body>
      <div className="bg-primary-black overflow-hidden flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </body>
  </html>
);

export default RootLayout;
