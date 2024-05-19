/**
 * Implement the CurrentlyReading component here
 * This component should have the following,
 * - A container tag with text containing all sentences supplied
 * - A p tag containing the current sentence with testID "current-sentence"
 * - A span tag inside the p tag containing the current word with testID "current-word"
 *
 * See example.gif for an example of how the component should look like, feel free to style it however you want as long as the testID exists
 */
export const CurrentlyReading = ({
  currentWordRange,
  currentSentenceIdx,
  sentences,
}: {
  currentWordRange: [number, number];
  currentSentenceIdx: number;
  sentences: string[];
}) => {
  function renderSpanTagWithCurrentSentence(
    currentWordRange:Array<number>,
    currentSentenceIdx:number,
    sentences:Array<String>)
  {
    let outputRender = ''
    let currentSentence = sentences[currentSentenceIdx]

    for(let word of currentSentence){
      
    }

    return outputRender
  }

  return <>
  <div data-testid="currently-reading">
    ${renderSpanTagWithCurrentSentence(currentWordRange,currentSentenceIdx,sentences)}
  </div>
  <div className="container">
    ${sentences.join('')}
  </div>
  </>;
};
