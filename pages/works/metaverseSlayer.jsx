import {
  Container,
  List,
  ListItem,
  Badge,
  Link,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, Paragraph, WorkImage, Section } from "@components/ui";
import { ArticleLayout } from "@components/layouts";

const Work = () => (
  <ArticleLayout title="Metaverse Slayer">
    <Container mt={8}>
      <Title>
        Metaverse Slayer <Badge>Next.js</Badge>
      </Title>
      <Section>
        <Paragraph>
          Metaverse Slayer Blockchain Web 3.0 App. You can mint your own NFT and
          battle against the Big Boss with that NFT. Defeat the Big Boss!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/Gyeonghun-Park/epic-game"
              target="_blank"
            >
              https://github.com/Gyeonghun-Park/epic-game{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Feature</Meta>
            <span>
              MetaMask Auth, Minting NFT tokens, Storing NFT tokens via IPFS,
              Play your own NFT token
            </span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next.js, Hardhat, Tailwind</span>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>TESTNET Rinkeby</span>
          </ListItem>

          <ListItem>
            <Meta>Mobile Friendly</Meta>
            <span>Moderate</span>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Box
          borderRadius="lg"
          mt={12}
          mb={6}
          p={3}
          textAlign="center"
          textColor="red.500"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          You need some Rinkeby Eth to play the demo. <br /> Get FREE test
          Rinkeby Ethereum{" "}
          <Link href="https://faucets.chain.link/rinkeby" target="_blank">
            here <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>

        <Box align="center" my={4}>
          <Link href="https://epic-game-nine.vercel.app/" target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Demo Site
            </Button>
          </Link>
        </Box>

        <WorkImage
          src="/images/works/metaverseSlayer/2.png"
          alt="Metaverse Slayer demo"
        />
        <WorkImage
          src="/images/works/metaverseSlayer/3.png"
          alt="Metaverse Slayer demo"
        />
      </Section>
    </Container>
  </ArticleLayout>
);

export default Work;
