'use strict';

const express = require('express');
const fs = require('fs');
const _ = require('lodash');

const app = express();

app.get('/', function (__, res) {
    const quotes = JSON.parse(fs.readFileSync('quotes.json').toString());
    const newQuotes = _.map(quotes, function (item) {
        return {
            quote: item.q,
            author: item.a,
        };
    });
    res.json({ 
        status: 'success',
        message: 'Quotes fetched successfully',
        data: newQuotes,
    });
});

app.get('/random', function (__, res) {
    const quotes = JSON.parse(fs.readFileSync('quotes.json').toString())
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ 
        status: 'success',
        message: 'Random quote fetched successfully',
        data: {
            quote: randomQuote.q,
            author: randomQuote.a,
        },
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
