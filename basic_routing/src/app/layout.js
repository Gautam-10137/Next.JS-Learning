export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/* <h1>Common layout</h1> */}
        {children}
        </body>
    </html>
  );
}
