import React, { Component } from 'react'

export default class ChapterView extends Component {

  render() {

    console.log(this.props.selectedChapter);
    let verses = this.props.selectedChapter
    let versesDisplay = verses.map((verse) => {
      return (
        <div className="qrn-verse" key={verse.number}>
          <span className="qrn-verse_text">{verse.text}</span>
          <sup className="qrn-verse_number">{verse.numberInSurah}</sup>
        </div>
      )
    })

    return (
      <div className="qrn-verses">
        {versesDisplay}
      </div>
    )
  }

}
