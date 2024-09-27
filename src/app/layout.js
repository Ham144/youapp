import "./globals.css";
import ProviderWrapper from "@/components/ProviderWrapper";


export const metadata = {
  title: "You App test",
  description: "Created By Yafizham Indonesia",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <ProviderWrapper>
        <body
        >
          {children}
        </body>
      </ProviderWrapper>
    </html>

  );
}
