import express from 'express';

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
    console.log('Back-end started!');
});

/**
 * First things first:
 * Install express, nodemon and typescript
 * Generate tsconfig.json with "yarn tsc --init"
 * Generate js files with "yarn tsc" 
 */