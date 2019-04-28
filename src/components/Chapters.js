import React, { Component } from 'react'

export default class Chapters extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          activeId: null
        }
    
    }


    addActiveClass = (index) => {
        this.setState({activeId: index})
    }


    openChapter = (chapterNumber) => {


        this.props.handleOpenChapter(chapterNumber)
    }


    render() {
        let chaptersList = this.props.chaptersList

        let ChapterDisplay = chaptersList.map((chapter, index) => {
            return (
                <li 
                    key={chapter.number} 
                    className="chapterBlock"
                >
                    <span 
                        className={index === this.state.activeId? "chapterName active" : "chapterName"} 
                        onMouseOver={() => this.addActiveClass(index)}
                        onClick={() => this.openChapter(chapter.number)}
                    
                    >{chapter.englishNameTranslation}</span>
                    <span className="chapterDetails">
                        <sup className="chapterNumber">{chapter.number}</sup>
                        <span className="chapterTitle">({chapter.englishName})</span>
                    </span>
                    <span className="divider"></span>
                </li>
            )
        })
        

        return (
            <ul className="qrn-chapters">
                {ChapterDisplay}
            </ul>
        )
    }


}
