# Topic Retrieval API

A Node.js/Express API for retrieving topics with search and sorting functionality.

## Features

- Search topics by name (case-insensitive)
- Sort topics by name
- Error handling for invalid requests
- Sample dataset included

## Installation

<div class="installation">
  <h2>🚀 Quick Start</h2>
  
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js (v14 or higher)</li>
    <li>npm (comes with Node.js)</li>
  </ul>

  <h3>Setup Instructions</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/YaswanthMallavarapu/TOTLE_TOPICS_API.git</code></pre>
    </li>
    <li>Navigate to project directory:
      <pre><code>cd topic-api</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the server:
      <pre><code>node app.js</code></pre>
    </li>
    <li>The API will be running at:
      <pre><code>http://localhost:3000</code></pre>
    </li>
  </ol>
</div>

## API Reference

### Endpoints

```http
GET /api/topics
GET /api/topics?search=query
GET /api/topics?sort=name
GET /api/topics?search=query&sort=name
```

<a href="https://www.loom.com/share/b1946bf8e47e4abb897e957c6a6e2d47">Watch the demo video</a>
