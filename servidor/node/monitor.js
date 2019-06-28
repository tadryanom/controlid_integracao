module.exports = (url, request, response) => {

    if (!url.pathname.startsWith('/api/notifications')) {
        return;
    }

    const readBody = (request, callback) => {
        let chunks = [];

        request.on('data', (chunk) => {
            chunks.push(chunk);
        }).on('end', () => callback(chunks));
    };

    if (url.pathname === '/api/notifications/dao') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor dao -> ' + textBody);

            //code
        }

        readBody(request, callback);

        return;
    }

    if (url.pathname === '/api/notifications/template') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor template -> ' + textBody);

            //code

        }

        readBody(request, callback);

        return;
    }

    if (url.pathname === '/api/notifications/card') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor card -> ' + textBody);

            //code

        }

        readBody(request, callback);

        return;
    }

    if (url.pathname === '/api/notifications/catra_event') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor catra event -> ' + textBody);

            //code

        }

        readBody(request, callback);

        return;
    }

    if (url.pathname === '/api/notifications/operation_mode') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor operation mode -> ' + textBody);

            //code

        }

        readBody(request, callback);

        return;
    }

    if (url.pathname === '/api/notifications/door') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor door -> ' + textBody);

            //code

        }

        readBody(request, callback);

        return;
    }

    if (url.pathname === '/api/notifications/secbox') {
        const callback = (chunks) => {
            var textBody = Buffer.concat(chunks).toString();
            console.log('Monitor secbox -> ' + textBody);

            //code

        }

        readBody(request, callback);

        return;
    }

}
