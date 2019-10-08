const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const LinkedList = require('./dataStructures/SinglyLinkedList');
const DoublyLinkedList = require('./dataStructures/DoublyLinkedList');
const Queue = require('./dataStructures/Queue');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
});

server.listen(port, hostname, () => {
});