import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Simulación de una base de datos (esto debe ser reemplazado por una base de datos real)
const users = [
  {
    id: 1,
    email: 'usuario@example.com',
    password: '$2b$10$gp26JmqLhY5ur4pHOLFYDut84T4hjkYG54gDJxpWA.iJxtg8hoDHS', // Contraseña: "123456"
  },
];

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
    
  // 1. Buscar el usuario en la "base de datos"
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  // 2. Comparar la contraseña
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  // 3. Generar un token JWT
  const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

  // 4. Devolver el token
  res.json({ token });
};