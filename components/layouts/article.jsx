import Head from "next/head";
import { motion } from "framer-motion";
import { GridItemStyle } from "@components/ui";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function ArticleLayout({ children, title }) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Gyeonghun Park</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  );
}

export default ArticleLayout;
