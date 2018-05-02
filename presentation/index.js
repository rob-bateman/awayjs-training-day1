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

import CodeSlide from 'spectacle-code-slide';

// Import theme

//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-typescript'

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
        </Slide>
        <Slide>
          <Heading size={2}>VS Code</Heading>
          <List>
            <ListItem>Workspace, Version Control, Integrated Terminal</ListItem>
            <ListItem>Checkout <Link href="https://github.com/awayjs/awayjs-examples">examples project</Link>, building &amp; testing</ListItem>
            <ListItem>Shortcuts for navigation</ListItem>
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
            <Appear><ListItem><Code>scene</Code> <Text style={inline} >=> </Text><Text style={inline} textColor="pink">display</Text><Text style={inline} > objects, </Text><Text style={inline} textColor="pink">prefab</Text><Text style={inline} > objects, </Text><Text style={inline} >text manipulation...</Text></ListItem></Appear>
            <Appear><ListItem><Code>view</Code> <Text style={inline} >=> </Text><Text style={inline} textColor="pink">partition</Text><Text style={inline} > objects, mouse interactions...</Text></ListItem></Appear>
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
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Introduction to TypeScript</Heading>
          <Text>
            <Link href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">
              Typescript in 5 minutes
            </Link>
          </Text>
        </Slide>
        <CodeSlide textSize="20"
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Rectangle.ts")}
            ranges={[
              { loc: [0, 572], title: "Rectangle.ts" },
              { loc: [0, 1], title: "ES6 import" },
              { loc: [46, 47], title: "Class definition" },
              { loc: [71, 72], title: "Property" },
              { loc: [105, 114], title: "Getter / Setter" },
              { loc: [363, 370], title: "Method with point arg"  },
              // ...
            ]}/>
        <CodeSlide textSize="20"
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/TextureAtlas.ts")}
            ranges={[
              { loc: [0, 140], title: "TextureAtlas.ts" },
              { loc: [0, 3], title: "imports from module dependencies" },
              { loc: [8, 11], title: "primitive object declarations" },
              { loc: [42, 43], title: "static keyword" },
              { loc: [76, 81], title: "constructor keyword" }
              // ...
            ]}/>
        <Slide>
          <Heading size={2} fit>Typescript tricks in VS Code</Heading>
          <List>
            <ListItem>Code hints from comments</ListItem>
            <ListItem>Jump to declaration</ListItem>
            <ListItem>Advanced intellisense</ListItem>
            <ListItem>Auto imports</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Lunch</Text>
        </Slide>
        <CodeSlide textSize="20"
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Basic_View.ts")}
            ranges={[
              { loc: [0, 141], title: "typical boilerplate setup (Basic_View.ts)" },
              { loc: [38, 44], title: "imports using awayjs-full" },
              { loc: [64, 71], title: "init view and camera" },
              { loc: [72, 78], title: "add objects to the scene" },
              { loc: [78, 83], title: "add resize listener" },
              { loc: [128, 135], title: "add resize listener" },
              { loc: [84, 86], title: "setup RAF callback" },
              { loc: [96, 102], title: "setup RAF callback" },
              { loc: [87, 91], title: "load some assets" },
              { loc: [102, 123], title: "load some assets" }
              // ...
            ]}/>
        <Slide>
          <Heading size={2}>AwayJS basics</Heading>
          <List>
            <ListItem>Moving / rotating / scaling objects</ListItem>
            <ListItem>Mouse Events, Keyboard Events, Scene Events</ListItem>
            <ListItem>2D setup for loading AWDs / SWFs</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Stage Exploration</Heading>
          <Text>The <Code>Stage</Code> object wraps a single canvas</Text>
          <Text>GPU methods are exposed through the <Code>IContext</Code> interface.</Text>
          <Text>Stage abstractions hold asset properties unique to each stage</Text>
          <Text>🐙</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Renderer Exploration</Heading>
          <Text>The <Code>Renderer</Code> object wraps the <Code>Stage</Code></Text>
          <Text><Code>IRendererable</Code> objects are collected and rendered by the <Code>Renderer</Code></Text>
          <Text>The <Code>IRendererable</Code> abstraction holds all state data for rendering</Text>
          <Text>🐳</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Partition &amp; Traverser</Heading>
          <Text>A <Code>Traverser</Code> object is used to collect <Code>Entity</Code> objects from a <Code>Partition</Code></Text>
          <Text>Pertitions are created and managed by the <Code>View</Code>, and updated by the <Code>Scene</Code></Text>
          <Text>Both <Code>Renderer</Code> and <Code>RayCastPicker</Code> traverse partitions</Text>
          <Text>🐡</Text>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Freeform hour</Heading>
        </Slide>
        <Slide>
          <Text>End of day 1</Text>
        </Slide>
      </Deck>
    );
  }
}
