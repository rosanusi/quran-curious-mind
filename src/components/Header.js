import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="qrn-header">

        <h5>
            <a className="qrn-header_link" href="/" rel="noopener noreferrer">
                {this.props.headerTitle}
            </a>
        </h5>
    
        </header>

    )
  }
}
