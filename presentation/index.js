// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Markdown,
  S,
  Appear,
  Table,
  TableItem,
  TableHeaderItem,
  TableRow,
  TableBody,
  Layout,
  Fill,
  Fit,
  CodePane,
  Code,
  Image,
} from "spectacle";

// Import theme
import createTheme from "spectacle-theme-nova";

// Require CSS
require("normalize.css");

const theme = createTheme();

const inline = { display:'inline', margin:0 };
const gutter = '25px';
const images = {
  pug: require('../assets/745px-Carl_Reichert_Mops.jpg'),
  nyan: require('../assets/nyancat.gif'),
  background: require('../assets/Blue-Computer-Backgrounds2.jpg')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Heading size={1} fit>AwayJS Training Day 1</Heading>
          <Heading size={3}>Setup, Overview, Examples</Heading>
          <Text>
            <Link href="https://github.com/rob-bateman/awayjs-training-day1">
              View on Github
            </Link>
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>VS Code</Heading>
          <List>
            <ListItem>Workspace, Version Control, Integrated Terminal</ListItem>
            <ListItem>Checkout sample project, building &amp; editing</ListItem>
            <ListItem>Shortcuts for navigation (CTRL-P, CTRL-N, CTRL-W etc)</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>Module Structures in AwayJS</Heading>
          <List fit>
            <Appear><ListItem><Code>core</Code> <Text style={inline} >=> base </Text><Text style={inline} textColor="pink">asset </Text><Text style={inline}>object, library, event dispatcher, geom objects...</Text></ListItem></Appear>
            <Appear><ListItem><Code>stage</Code> <Text style={inline} >=> display context, shading assembler, </Text><Text style={inline} textColor="pink">image </Text><Text style={inline} >&amp; </Text><Text style={inline} textColor="pink">attribute </Text><Text style={inline}>objects</Text></ListItem></Appear>
            <Appear><ListItem><Code>renderer</Code> <Text style={inline} >=> </Text><Text style={inline} textColor="pink">renderer</Text><Text style={inline}> types, base interfaces for rendering objects...</Text></ListItem></Appear>
            <Appear><ListItem><Code>materials</Code> <Text style={inline} >=> Standard </Text><Text style={inline} textColor="pink">material</Text><Text style={inline} >, </Text><Text style={inline} textColor="pink">light</Text><Text style={inline}> &amp; </Text><Text style={inline} textColor="pink">shadowmap</Text><Text style={inline}> objects...</Text></ListItem></Appear>
            <Appear><ListItem><Code>graphics</Code> <Text style={inline} >=> Standard </Text><Text style={inline} textColor="pink">renderable</Text><Text style={inline}> objects, drawing API, GPU animators...</Text></ListItem></Appear>
            <Appear><ListItem><Code>scene</Code> <Text style={inline} >=> </Text><Text style={inline} textColor="pink">display</Text><Text style={inline} > objects, base interfaces for rendering objects...</Text></ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>Dev setup with npm</Heading>
          <List>
            <ListItem>The <Code>awayjs-full</Code> module</ListItem>
            <ListItem>Creating npm links (by hand or with batch script)</ListItem>
            <ListItem>Linking <Code>awayjs-full</Code> module to an AwayJS project</ListItem>
            <ListItem>Using watchers to update modules</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>Introduction to TypeScript</Heading>
          <List>
            <ListItem>The <Code>awayjs-full</Code> module</ListItem>
            <ListItem>Creating npm links (by hand or with batch script)</ListItem>
            <ListItem>Linking <Code>awayjs-full</Code> module to an AwayJS project</ListItem>
            <ListItem>Using watchers to update modules</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Some text that is styled with <S type="strikethrough">strikethrough</S>.</Text>
          <Text>🐙</Text>
          <Text style={inline} textColor="cyan">All </Text>
          <Text style={inline} textColor="blue">Nova </Text>
          <Text style={inline} textColor="purple">theme </Text>
          <Text style={inline} textColor="pink">colors </Text>
          <Text style={inline} textColor="red">are </Text>
          <Text style={inline} textColor="orange">available </Text>
          <Text style={inline} textColor="yellow">here </Text>
          <Text style={inline} textColor="green">! </Text>
          <Text>🐳</Text>
          <Text style={inline} textColor="gray0">This </Text>
          <Text style={inline} textColor="gray1">is </Text>
          <Text style={inline} textColor="gray2">also </Text>
          <Text style={inline} textColor="gray3">true </Text>
          <Text style={inline} textColor="gray4">for </Text>
          <Text style={inline} textColor="gray5">gray </Text>
          <Text style={inline} textColor="gray6">! </Text>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote>Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.</Quote>
            <Cite>Kathryn Barrett</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={2}>A wild List appears...</Heading>
          <List>
            <Appear><ListItem>One</ListItem></Appear>
            <Appear><ListItem>Two</ListItem></Appear>
            <Appear><ListItem>Three</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Image src={images.pug} height="500px"/>
          <Text>
            <Link href="https://commons.wikimedia.org/wiki/File:Carl_Reichert_Mops.jpg">A Pug by Carl Reichert (1836-1918)</Link>
          </Text>
        </Slide>
        <Slide bgDarken="0.7" bgImage={images.nyan}>
          <Heading size={1}>Block of Text</Heading>
        </Slide>
        <Slide>
          <Heading>Columns</Heading>
          <Layout>
            <Fill>
              <Text margin={`0 ${gutter} 0 0`} textAlign="left">
                JSON for Linked Data. Ionic is a realtime MVC Framework for Node. JavaScript language that compiles into JavaScript. Express is a JavaScript library for JavaScript programmers. MVC Framework for Node.
              </Text>
            </Fill>
            <Fill>
              <Text margin={`0 0 0 ${gutter}`} textAlign="left">
                Applications such as PDF documents, site-specific browsers, and desktop widgets. JavaScript developer. MongoDB, ExpressJS, AngularJS, and Node. JavaScript code linter. Patterns is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of JavaScript for server-side Web applications.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading>Fitting</Heading>
          <Layout>
            <Fit>
              <Image src={images.pug} width="500px" height="300px" margin="0 2rem 0 0"/>
            </Fit>
            <Fill>
              <List>
                <ListItem>One</ListItem>
                <ListItem>Two</ListItem>
                <ListItem>Three</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <CodePane
            lang="typescript"
            source={require('raw-loader!../assets/example.ts')}
          ></CodePane>
        </Slide>
        <Slide>
          <Text>Some text that das inline <Code>code</Code>!</Text>
          <Text>This <Code>global</Code> is another piece of inline code!</Text>
        </Slide>
      </Deck>
    );
  }
}
