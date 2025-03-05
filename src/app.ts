import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import healthRoutes from './routes/health.routes';
import authRoutes from './routes/auth.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api', authRoutes);

// Error Handler
app.use(errorHandler);

export default app;