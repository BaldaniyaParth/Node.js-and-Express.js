const http = require('http');
const fs = require('fs');
const path = require('path');

const dataDirectory = path.join(__dirname, 'data');

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
}

const server = http.createServer((req, res) => {
    const { method, url } = req;
    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        // Handle POST request
        if (method === 'POST') {
            if (url === '/create') {
                const { filename, fileType, userData } = JSON.parse(body);
                const uniqueId = Math.random().toString(36).substr(2, 9); // Generate unique ID

                const filePath = path.join(dataDirectory, `${filename}.${fileType}`);

                fs.writeFile(filePath, JSON.stringify({ uniqueId, userData }), (err) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(err.message);
                        return;
                    }
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'File created successfully', uniqueId }));
                });
            }
        }

        // Handle GET request
        else if (method === 'GET') {
            if (url === '/getuser') {
                const { filename, fileType, uniqueId } = JSON.parse(body);
                const filePath = path.join(dataDirectory, `${filename}.${fileType}`);

                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(404);
                        res.end('File not found');
                        return;
                    }
                    const { uniqueId, userData } = JSON.parse(data);
                    const storedUniqueId = uniqueId;
                    if (uniqueId === storedUniqueId) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(userData));
                    } else {
                        res.writeHead(403);
                        res.end('Unauthorized');
                    }
                });
            } else if (url === '/list') {
                fs.readdir(dataDirectory, (err, files) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(err.message);
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(files));
                });
            }
        }

        // Handle PUT request
        else if (method === 'PUT') {
            if (url.startsWith('/update/')) {
                const filename = url.split('/')[2];
                const { uniqueId, newData } = JSON.parse(body);
                const filePath = path.join(dataDirectory, `${filename}`);

                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(404);
                        res.end('File not found');
                        return;
                    }
                    const { uniqueId } = JSON.parse(data);
                    const storedUniqueId = uniqueId;
                    if (uniqueId === storedUniqueId) {
                        const updatedData = { ...JSON.parse(data), userData: newData };
                        fs.writeFile(filePath, JSON.stringify(updatedData), (err) => {
                            if (err) {
                                res.writeHead(500);
                                res.end(err.message);
                                return;
                            }
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ message: 'File updated successfully' }));
                        });
                    } else {
                        res.writeHead(403);
                        res.end('Unauthorized');
                    }
                });
            }
        }

        // Handle DELETE request
        else if (method === 'DELETE') {
            if (url.startsWith('/delete/')) {
                const filename = url.split('/')[2];
                const filePath = path.join(dataDirectory, `${filename}`);

                fs.unlink(filePath, (err) => {
                    if (err) {
                        res.writeHead(404);
                        res.end('File not found');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'File deleted successfully' }));
                });
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
