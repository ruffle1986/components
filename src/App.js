import React, { Component } from 'react';

import './heading.css';
import './display-text.css';
import './card.css';
import './caption.css';
import './button.css';
import './button-group.css';

import Heading from './heading';
import DisplayText from './display-text';
import Card from './card';
import Caption from './caption';
import Button from './button';
import ButtonGroup from './button-group';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="body-text">
          Simple body text
        </section>
        <section className="headings">
          <Heading>Heading</Heading>
        </section>
        <section className="captions">
          <Caption>Caption</Caption>
        </section>
        <section className="display-texts">
          <DisplayText>Display Text (default)</DisplayText>
          <DisplayText size="small">Display Text (small)</DisplayText>
          <DisplayText size="medium">Display Text (medium)</DisplayText>
          <DisplayText size="large">Display Text (large)</DisplayText>
          <DisplayText size="extra-large">Display Text (extra large)</DisplayText>
        </section>
        <section className="buttons">
          <ButtonGroup>
            <Button>
              Accept
            </Button>
            <Button danger>
              Remove
            </Button>
            <Button neutral>
              Cancel
            </Button>
          </ButtonGroup>
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
          <Card
            title="Do you agree to our Terms & Conditions?"
            footer={ (
              <ButtonGroup align="right">
                <Button neutral>
                  I agree
                </Button>
                <Button neutral>
                  I do not agree
                </Button>
              </ButtonGroup>
            ) }
          >
            You need to agree to the Terms & Conditions before placing your order.
          </Card>
          <Card
            title="Removing profile picture"
            footer={ (
              <ButtonGroup>
                <Button danger>
                  Yes, remove it
                </Button>
                <Button neutral>
                  Cancel
                </Button>
              </ButtonGroup>
            ) }
          >
            Are you sure you want to remove your profile picture?
          </Card>
         </section>
      </div>
    );
  }
}

export default App;
