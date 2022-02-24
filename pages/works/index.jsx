import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { ArticleLayout } from "@components/layouts";
import { Section, WorkGridItem } from "@components/ui";

import thumbnailTest from "@images/works/frogeum.png";

const Works = () => (
  <ArticleLayout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="testID" title="testTitle" thumbnail={thumbnailTest}>
            test desc
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="testID" title="testTitle" thumbnail={thumbnailTest}>
            test desc
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="testID" title="testTitle" thumbnail={thumbnailTest}>
            test desc
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="testID" thumbnail={thumbnailTest} title="testTitle">
            test desc
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="testID" thumbnail={thumbnailTest} title="testTitle">
            test desc
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="testID" thumbnail={thumbnailTest} title="testTitle">
            test desc
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="testID" thumbnail={thumbnailTest} title="testTitle">
            test desc
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="testID" thumbnail={thumbnailTest} title="testTitle">
            test desc
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="testID" thumbnail={thumbnailTest} title="testTitle">
            test desc
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </ArticleLayout>
);

export default Works;
