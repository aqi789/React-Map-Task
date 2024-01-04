import './App.css';

function App() {
  let data = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    }
  ]
  return (
    <div className="App">
      {data.map(datas => (
        <div key={datas.id} className='joke'>
        <div className='setup'>{datas.setup}</div>
        <div className='punchline'>{datas.punchline}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
