import React, { Component } from 'react'
import Header from './components/Header'
import Chapters from './components/Chapters'
import ChapterView from './components/ChapterView'
import './css/main.css'

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      chapters : [],
      chapterView : false,
      selectedChapter : [],
      selectedChapterTitle : null,
      selectedChapterNumber : null
    }

  }

  componentDidMount() {
    this.getChapters();
  }

  async fetchAsync(api) {
    let response = await fetch(api)
    let data = await response.json()
    return data
  }
  


  async getChapters(){
    let api = "http://api.alquran.cloud/v1/surah";

    await this.fetchAsync(api)

    .then(data => 
      
      this.setState({
        chapters : Object.values(data.data),
        chapterView : false
      })

    )
    .catch(reason => 
      console.log(reason.message)
    )
  }

  handleOpenChapter(chapterNumber){
    
    console.log(chapterNumber)

    let chapter = chapterNumber + '/'
    let edition = "en.yusufali"
    let url = "http://api.alquran.cloud/v1/surah/"
    let api = url + chapter + edition

    this.fetchAsync(api)

    .then(data => 
      this.setState({
        selectedChapter : data.data.ayahs,
        selectedChapterTitle : data.data.englishNameTranslation,
        selectedChapterNumber : data.data.number,
        chapterView : true
      })
    )
    .catch(reason => 
      console.log(reason.message)
    )

  }
  


  render() {

    let { chapterView } = this.state

    return (
      <div className="qrn-container">

        { !chapterView &&
          <Header 
            headerTitle = 'The English Quran -  For every curious mind'
            chapterNumber = ''
            />
        }

        { chapterView &&
          <Header 
            headerTitle = {this.state.selectedChapterTitle}
            chapterNumber = {this.state.selectedChapterNumber}
          />
        }
        

        { !chapterView &&
          <Chapters 
            chaptersList = {this.state.chapters}
            handleOpenChapter = {this.handleOpenChapter.bind(this)}
          />
        }

        { chapterView &&
          <ChapterView 
            selectedChapter = {this.state.selectedChapter}
          />
        }

      </div>
    )
  }
}
