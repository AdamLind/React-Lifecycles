import React, { Component } from 'react';

export default class discussion extends Component {
    constructor() {
        super();

        this.state = {
             pageTitle: "Discussion",
             currentTime: String(new Date())
        };
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            console.log('new chat message')

            this.setState({ currentTime: String(new Date()) })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.liveTime);
    }

  render() {
      const { pageTitle, currentTime } = this.state;
    return (
      <div>
          <h1>{pageTitle}</h1>
          <div>{currentTime}</div>
      </div>
    );
  }
}
