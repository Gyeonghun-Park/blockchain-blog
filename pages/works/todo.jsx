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
  <ArticleLayout title="ToDo App">
    <Container mt={8}>
      <Title>
        ToDo App <Badge>React Native</Badge>
      </Title>
      <Section>
        <Paragraph>
          ToDo app built with React Native. You can maintain your day-to-day
          tasks or list everything that you have to do
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/Gyeonghun-Park/todo-app-rn"
              target="_blank"
            >
              https://github.com/Gyeonghun-Park/todo-app-rn{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Feature</Meta>
            <span>Animated App, Dark Theme, ToDo List</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, Typescript, Expo</span>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>

          <ListItem>
            <Meta>Mobile Friendly</Meta>
            <span>Good</span>
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
          You need Expo app play the demo.
        </Box>

        <Box align="center" my={4}>
          <Link href="https://expo.dev/@kingpotato/todo-app-rn" target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Demo Site
            </Button>
          </Link>
        </Box>

        <Box align="center" my={4}>
          <WorkImage src="/images/works/todo/2.gif" alt="Todo demo" />
        </Box>
      </Section>
    </Container>
  </ArticleLayout>
);

export default Work;
