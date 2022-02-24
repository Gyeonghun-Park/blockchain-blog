import Image from "next/image";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";
import { Section, Paragraph, GridItem } from "@components/ui";
import { ArticleLayout } from "@components/layouts";

import logoGeth from "@images/frogeum/logo-geth.png";
import logoSolidity from "@images/frogeum/logo-solidity.png";
import logoTruffle from "@images/frogeum/logo-truffle.png";
import logoWeb3 from "@images/frogeum/logo-web3.png";

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const BlockCode = ({ children }) => (
  <Box
    borderRadius="lg"
    mt={2}
    mb={6}
    p={3}
    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
  >
    {children}
  </Box>
);

function Frogeum() {
  return (
    <ArticleLayout title="Posts">
      <Container>
        <Box mb={6}>
          <Box textAlign="center">
            <ChakraImage
              src="/images/frogeum/frogeum.png"
              alt="Frogeum logo"
              borderRadius="full"
              width="350px"
              height="350px"
            />
          </Box>
          <Box>
            <Heading as="h2" variant="page-title">
              Frogeum Everywhere!
            </Heading>
            <p>
              Frogeum is the community-run technology powering the
              cryptocurrency, froge (FRO) and thousands of decentralized
              applications.
            </p>
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Go Frogeum
          </Heading>
          <Paragraph>
            Official Go implementation of the Frogeum protocol. Go Frogeum is
            one of the three original implementations (along with C++ and
            Python) of the Frogeum protocol. It is written in Go, fully open
            source and licensed under the GNU LGPL v3.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Gfro v1.0.0
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/Frogeum/go-frogeum"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Mining &apos;FRO&apos;
          </Heading>
          <Paragraph>
            1 froge (FRO) = 1,000,000,000,000,000,000 wei. You can mine froge
            using gfro! Frogeum rewards 50 froge for each block you create.
            Also, you can use GPU to mine by connecting Ethminer and Gfro.
            Frogeum recommends using{" "}
            <Link
              href="https://github.com/ethereum-mining/ethminer/releases/tag/v0.18.0"
              target="_blank"
            >
              Ethminer v0.18.0.
            </Link>
          </Paragraph>
          <Box textAlign="center">
            <ChakraImage
              src="/images/frogeum/mining.png"
              alt="Frogeum logo"
              borderRadius="full"
              width="500px"
              height="250px"
            />
          </Box>
          <List my={6}>
            <ListItem>
              <b>1.</b> In the directory where Gfro is located, enter the
              command below and synchronize it with the Frogeum main network.
              <BlockCode>
                ./gfro --syncmode &quot;full&quot; --http --http.port 9506
                console
              </BlockCode>
            </ListItem>
            <ListItem>
              <b>2.</b> Make a wallet for mining rewards. Don&aps;t lose your
              password!
              <BlockCode>
                personal.newAccount(&quot;your_password&quot;)
              </BlockCode>
            </ListItem>
            <ListItem>
              <b>3.</b> Start mining in Gfro. If it is the first mining, it can
              be mined after DAG is created.
              <BlockCode>miner.start(1)</BlockCode>
            </ListItem>
            <ListItem>
              <b>4.</b> In the directory where Ethminer is located, enter the
              command below to connect it to GPU mining in Gfro. If your
              computer GPU is a Radeon, please use the -G option and the -U
              option if it&apos;s Ndivia, please use the -U option. (For Radeon
              GPUs, using too recent graphics card drivers may not be able to
              mine.)
              <BlockCode>
                ./ethminer -G -P http://127.0.0.1:9506 <br />
                or
                <br /> ./ethminer -U -P http://127.0.0.1:9506
              </BlockCode>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Wallet
          </Heading>
          <Paragraph>
            Frogeum can send FRO to others using Metamask and Gfro. Please
            install the{" "}
            <Link
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
              target="_blank"
            >
              Metamask
            </Link>{" "}
            which is Google Chrome extension and do as below. And You can
            install a Metamask app on your smartphone.{" "}
            <Link
              href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
              target="_blank"
            >
              App Store
            </Link>{" "}
            or{" "}
            <Link
              href="https://play.google.com/store/apps/details?id=io.metamask"
              target="_blank"
            >
              Play Store
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Development
          </Heading>
          <Paragraph>
            Frogeum is a public blockchain platform. Create smart contracts with
            Solidity and deploy them to Frogeum main networks. You can use web3,
            truffle, etc., which is a development tool that Ethereum used
            before.
            <SimpleGrid columns={[1, 1, 2]} gap={6} my={8}>
              <GridItem
                href="https://geth.ethereum.org/docs/"
                title="Geth"
                thumbnail={logoGeth}
              />
              <GridItem
                href="https://docs.soliditylang.org/en/v0.8.12/"
                title="Solidity"
                thumbnail={logoSolidity}
              />
              <GridItem
                href="https://trufflesuite.com/docs/truffle/overview"
                title="Truffle"
                thumbnail={logoTruffle}
              />
              <GridItem
                href="https://web3js.readthedocs.io/en/v1.7.0/"
                title="Web3"
                thumbnail={logoWeb3}
              />
            </SimpleGrid>
            If you want to distribute the dapp on the main net of Frogeum, but
            you don&apos;t have a FRO, please send an email to our
            team.(frogeum@gmail.com) We are sending you a little FRO!
          </Paragraph>
        </Section>
      </Container>
    </ArticleLayout>
  );
}

export default Frogeum;
