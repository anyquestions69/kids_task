const WebSocket = require('ws');
const { XMLParser } = require('fast-xml-parser');
const wsServer = new WebSocket.Server({ port: 3000 });

wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    console.log('Новый пользователь');
    wsClient.send('Привет');

    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });

    wsClient.on('message', function(message) {
        console.log(message);
        const parser = new XMLParser();
        
        try {
          const json = parser.parse(message);
        console.log(json)
        } catch (error) {
            console.log('Ошибка', error);
        }
    });
}

console.log('Сервер запущен на 3000 порту');