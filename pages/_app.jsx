import { MainLayout } from "@components/layouts";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@components/providers";
import { Fonts } from "@components/ui";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
