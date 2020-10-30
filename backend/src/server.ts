import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import routes from "@shared/infra/http/routes";

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/', (_, response) => {
    return response.json({ app: "Go-grocery", status: "running" });
});

app.listen(3333, () => {
    console.log('Back-end started on port 3333.');
});

/**
 * First things first:
 * Install express, nodemon and typescript
 * Generate tsconfig.json with "yarn tsc --init"
 * Generate js files with "yarn tsc" 
 * 
 * docker run --name postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
 * docker run --name redis -p 6379:6379 -d -t redis:alpine
 * 
 * yarn typeorm migration:create -n Create[model name]
 * yarn typeorm migration:run
 */