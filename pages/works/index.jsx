import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { ArticleLayout } from "@components/layouts";
import { Section, WorkGridItem } from "@components/ui";

import openseaThumbnail from "@images/works/opensea/1.png";
import twitterThumbnail from "@images/works/twitter/1.png";
import metaverseSlayerThumbnail from "@images/works/metaverseSlayer/1.png";
import gifMakerThumbnail from "@images/works/gifMaker/1.png";
import frogeumThumbnail from "@images/frogeum/thumbnail.png";

import toDoThumbnail from "@images/works/todo/1.png";
import spotifyThumbnail from "@images/works/spotify/1.png";
import webPortfolioThumbnail from "@images/works/webPortfolio/1.png";
import blogThumbnail from "@images/works/blog/1.png";

const Works = () => (
  <ArticleLayout title="Works">
    <Container mt={8}>
      <Heading as="h3" fontSize={20} mb={4}>
        Blockchain
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="opensea"
            title="Opensea Clone"
            thumbnail={openseaThumbnail}
          >
            A Marketplace buy or sell NFT tokens.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="twitter"
            title="Twitter Clone"
            thumbnail={twitterThumbnail}
          >
            A social media app to connect people and allow people to share their
            thoughts with a big audience
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="gifMaker"
            title="GIF Maker"
            thumbnail={gifMakerThumbnail}
          >
            A GIF Maker to create GIFs using keywords while sending Ethereum
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="metaverseSlayer"
            thumbnail={metaverseSlayerThumbnail}
            title="Metaverse Slayer"
          >
            An Web3.0 game to battle against the Big Boss with your NFT token.
            Defeat the Big Boss!
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="frogeum"
            thumbnail={frogeumThumbnail}
            title="Frogeum"
            isFrogeum={true}
          >
            Frogeum is toy blockchain created by forking go-ethereum, the
            ethereum implementation standard
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Others
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="todo" thumbnail={toDoThumbnail} title="ToDo App">
            An animated ToDo app to help you stay organized and manage your
            day-to-day.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="spotify"
            thumbnail={spotifyThumbnail}
            title="Spotify Clone"
          >
            Spotify to let you enter a digital music world where music, video,
            and podcast streaming are fun
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="webPortfolio"
            thumbnail={webPortfolioThumbnail}
            title="Web Portfolio"
          >
            An interactive Website to show Gyeonghun&apos;s other works.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="blog" thumbnail={blogThumbnail} title="Blog">
            Gyeonghun&apos;s technical blog
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </ArticleLayout>
);

export default Works;
