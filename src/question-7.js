import net from 'net';

// Create a TCP server
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        // Parse the request data
        const request = data.toString();
        const [headers] = request.split('\r\n\r\n');
        const [requestLine, ...headerLines] = headers.split('\r\n');
        const [method, path] = requestLine.split(' ');

        // Function to send a response
        const sendResponse = async (statusCode, contentType, body) => {
            const response = 
                `HTTP/1.1 ${statusCode}\r\n` +
                `Content-Type: ${contentType}\r\n` +
                `Content-Length: ${Buffer.byteLength(body)}\r\n` +
                `Connection: close\r\n\r\n` +
                body;
            socket.write(response);
            socket.end();
        };

        // setting up routes
        const routeHandlers = {
            GET: {
                '/time': async () => {
                    const currentTime = JSON.stringify({ time: new Date().toISOString() });
                    await sendResponse('200 OK', 'application/json', currentTime);
                },
                '/data': () => {
                    setTimeout(async () => {
                        const dataResponse = JSON.stringify({ data: 'Here is your data!' });
                        await sendResponse('200 OK', 'application/json', dataResponse);
                    }, 1000);
                }
            }
        };

        // call the actual request handler
        const handleRequest = async (method, path) => {
            const handler = routeHandlers[method]?.[path];
            if (handler) {
                handler();
            } else {
                const notFoundResponse = JSON.stringify({ error: 'Not Found' });
                await sendResponse('404 Not Found', 'application/json', notFoundResponse);
            }
        };

        handleRequest(method, path)
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
