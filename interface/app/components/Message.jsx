import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes}>{this.props.message}</div>
    );
  }
}

export default Message;
