import { MainLayout } from "@components/layouts";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@components/providers";
import { Fonts } from "@components/ui";
import "../styles/globals.css";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <Fonts />
      <MainLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
