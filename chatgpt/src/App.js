import { useState, useEffect } from 'react'
const App = () => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "Hello How are you?",
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('https://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>BLUGH</li>
        </ul>
        <nav>
          <p>made by varsha</p>
        </nav>
      </section>
      <section className="main">
        <h1>ChatGPT</h1>
        <ul className="feed"></ul>
        <div className="bottum-section">
          <div className="input-container">
            <input />
            <div id="submit" onClick={getMessages}>➤</div>
          </div>
          <p className="info">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
