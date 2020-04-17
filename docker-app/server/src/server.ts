import express, { Request, Response, NextFunction } from 'express';
import database from './database';
import router from './src/routes'; // cała ścieżka docker-app/server/src/routes ??
import morgan from 'morgan';


const app = express();

const port = process.env.PORT || '3000';
app.listen(port, () => {
console.log(`API running on localhost:${port}`);
console.log(`mongo db --v: ${database.version}`);
});


app.use(morgan('nodestart'));
app.use(express.json());


app.use('/api',router);

/* app.use((err: Error,req: Request,res: Response,next: NextFunction) => {

res.status(400).json({message: err.message});
}); */