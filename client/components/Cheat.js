import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Cheat extends Component {
  state = {
    copied: false,
  };

  clicked = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  };

  render() {
    const { cheat: { description, commands } } = this.props;
    const { copied } = this.state;
    const [keyword, ...body] = commands.split(' ');
    const remainder = body.join(' ');
    return (
      <div className="header">
        <span>{description}</span>
        <span style={{ display: `${copied ? 'inline' : 'none'}` }} className="cheat-copied">
          Copied!
        </span>
        <pre>
          $&nbsp;
          <code>
            <CopyToClipboard text={commands} onCopy={this.clicked}>
              <span>
                <span className="first">{keyword}</span>
                <span>
                &nbsp;
                  {remainder}
                </span>
              </span>
            </CopyToClipboard>
          </code>
        </pre>
      </div>
    );
  }
}
