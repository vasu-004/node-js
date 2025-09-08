const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #f06, #4a90e2);
          color: white;
          text-align: center;
          padding: 100px;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.5em;
        }
        .emoji {
          font-size: 2em;
        }
      </style>
    </head>
    <body>
      <h1>Hello!</h1>
      <p>Your Node.js app is running 🚀</span></p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
