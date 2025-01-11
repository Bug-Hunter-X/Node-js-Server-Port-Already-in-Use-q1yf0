# Node.js Server Port Already in Use

This repository demonstrates a common Node.js error: attempting to start a server on a port that is already in use.

## The Bug

The `bug.js` file contains a simple HTTP server that listens on port 8080. If another process is already using this port (e.g., another Node.js server, or another application), the server will fail to start and an error will be thrown.

## The Solution

The `bugSolution.js` file provides a solution that handles this error gracefully using the `'listening'` event and error handling. It checks if the port is in use before starting the server and provides informative messages to the user.