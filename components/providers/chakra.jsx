import {
  ChakraProvider as Chakra,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "@lib/theme";

export default function ChakraProvider({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <Chakra theme={theme} colorModeManager={colorModeManager}>
      {children}
    </Chakra>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
