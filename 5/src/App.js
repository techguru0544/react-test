import { useEffect, useState } from "react";
function App() {
  const [word, setWord] = useState(null);
  const [wordRhymes, setWordRhymes] = useState([]);
  useEffect(() => {
    if (word && word.length) {
      fetch(`https://api.datamuse.com/words?rel_rhy=${encodeURIComponent(word)}`)
        .then(data => data.json())
        .then((data) => {
          setWordRhymes((data || []).map(({ word }) => word));
        })
        .catch(error => {
          console.log({ error })
        })
    } else {
      setWord(null);
      setWordRhymes([]);
    }
  }, [word]);

  return (
    <div className="container">
      <h1 className="search-heading">Search Rhymes</h1>
      <input value={word||''} onChange={({ target }) => setWord(target.value)} placeholder="Enter a word" className="search-input" />
      {
        wordRhymes.length ?        
          <div className="word-rhymes-container">
               {wordRhymes.map(word => <div key={word} className="word-rhymes-item">{word}</div>)}
          </div>
          :
          !!word && <h1 className="result-heading">No Rhymes found</h1>
      }
    </div>
  );
}

export default App;
