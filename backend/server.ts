import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import errorHandler from './_middleware/error-handler';
import accountsController from './accounts/accounts.controller';
import swaggerDocs from './_helpers/swagger';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// configure CORS requests with CORS_ORIGIN validation
const allowedOrigin = process.env.CORS_ORIGIN;
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (!allowedOrigin || allowedOrigin === '*' || origin === allowedOrigin) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// api routes
app.use('/accounts', accountsController);

// swagger docs route
app.use('/api-docs', swaggerDocs);

// serve angular frontend
app.use(express.static(path.join(__dirname, '../../frontend/dist/ipt-2026-frontend')));
TargetContent="app.get('*', (req, res) => => {\n  res.sendFile(path.join(__dirname, '../../frontend/dist/ipt-2026-frontend/index.html'));\n});",
  ReplacementContent="app.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, '../../frontend/dist/ipt-2026-frontend/index.html'));\n});"

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
