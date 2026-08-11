* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

body {
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 90%;
    max-width: 600px;
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

textarea {
    width: 100%;
    height: 120px;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 12px;
    resize: none;
    font-size: 16px;
    outline: none;
}

textarea:focus {
    border-color: #667eea;
}

button {
    width: 100%;
    margin-top: 15px;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: #667eea;
    color: white;
    font-size: 17px;
    cursor: pointer;
}

button:hover {
    background: #5568d8;
}

#commentList {
    margin-top: 25px;
}

.comment {
    background: #f5f5f5;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    word-wrap: break-word;
}
