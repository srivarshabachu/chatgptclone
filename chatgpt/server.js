const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors)
const API_KEY = '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'
app.post('/completions', async (req, resp) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "How are you?" }],
            max_tokens: 100,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        resp.send(data)
    } catch (error) {
        console.error(error)
    }
})
app.listen(PORT, () => console.log('Your server is running on port ' + PORT))