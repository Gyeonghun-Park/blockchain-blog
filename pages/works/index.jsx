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
            Opensea
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="twitter"
            title="Twitter Clone"
            thumbnail={twitterThumbnail}
          >
            Twitter
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="gifMaker"
            title="Gif Maker"
            thumbnail={gifMakerThumbnail}
          >
            Gif Maker
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="metaverseSlayer"
            thumbnail={metaverseSlayerThumbnail}
            title="Metaverse Slayer"
          >
            Metaverse Slayer
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="frogeum"
            thumbnail={frogeumThumbnail}
            title="Frogeum"
            isFrogeum={true}
          >
            Frogeum
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
            Animated ToDo App built with React Native
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="spotify"
            thumbnail={spotifyThumbnail}
            title="Spotify Clone"
          >
            Spotify Clone with Next.js (Middleware, NextAuth)
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="webPortfolio"
            thumbnail={webPortfolioThumbnail}
            title="Web Portfolio"
          >
            Web Portfolio
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </ArticleLayout>
);

export default Works;
