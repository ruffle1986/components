import React, { Component } from 'react';

import './heading.css';
import './display-text.css';
import './card.css';
import './caption.css';

import Heading from './heading';
import DisplayText from './display-text';
import Card from './card';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="headings">
          <Heading>Heading</Heading>
        </section>
        <section className="display-texts">
          <DisplayText>Display Text (default)</DisplayText>
          <DisplayText size="small">Display Text (small)</DisplayText>
          <DisplayText size="medium">Display Text (medium)</DisplayText>
          <DisplayText size="large">Display Text (large)</DisplayText>
          <DisplayText size="extra-large">Display Text (extra large)</DisplayText>
        </section>
        <section className="cards">
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card title="Card Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card
            title="Card Title And Footer"
            footer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card
            title="Card Title"
            titleCaption="A tiny little caption for fun"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
         </section>
      </div>
    );
  }
}

export default App;
