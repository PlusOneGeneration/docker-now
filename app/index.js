const app = require('express')();
const fs = require('fs');

app.get('/', (req, res) => {
    if(fs.existsSync('file.json')) {
        const data = JSON.parse(fs.readFileSync('file.json'));
        data.counter = (data.counter || 1) + 1;

        fs.writeFileSync('file.json', JSON.stringify(data));
        res.json(data)
    } else {
        fs.writeFileSync('file.json', JSON.stringify({counter: 0}));
        res.json('OK');
    }
});

app.listen(3000, () => console.log('started'))