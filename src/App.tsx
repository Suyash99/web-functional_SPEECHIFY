import './App.css';

import { useState,useEffect } from 'react'
import { Controls } from './components/Controls';
import { CurrentlyReading } from './components/CurrentlyReading';
import { fetchContent, parseContentIntoSentences } from './lib/content'
import { useSpeech } from './lib/useSpeech'

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const { currentSentenceIdx, currentWordRange, play, pause, playbackState } = useSpeech(sentences);

  useEffect(() => {
    let ignore = false;
    setSentences([]);
    fetchContent().then(ssmlSentence => {
      if(!ignore) setSentences(parseContentIntoSentences(ssmlSentence))
    })
    return () => {
      ignore = true;
    };
  }, [sentences]);

  function loadNewContent(){
    //Assuming the API always returns a new sentence and the logic handling is done on back-end
    useEffect(() => {
      let ignore = false;
      setSentences([]);
      fetchContent().then(ssmlSentence => {
        if(!ignore) setSentences(parseContentIntoSentences(ssmlSentence))
      })
      return () => {
        ignore = true;
      };
    }, [sentences]);

    return sentences
  }

  return (
    <div className="App">
      <h1>Text to speech</h1>
      <div>
        <CurrentlyReading currentWordRange={currentWordRange} currentSentenceIdx={currentSentenceIdx} sentences={sentences}/>
      </div>
      <div>
        <Controls play={play} pause={pause} loadNewContent={loadNewContent} state={playbackState}/>
      </div>
    </div>
  );
}

export default App;
