import express from 'express';
import authRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Permitir requisições do frontend

// Rotas
app.use('/auth', authRoutes); // Prefixo para autenticação

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
export default app;