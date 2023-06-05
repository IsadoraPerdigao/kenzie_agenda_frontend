import { z } from "zod";

export const userSchema = z.object({
  id: z.string().optional(),
  fullName: z.string().nonempty("Insira seu nome completo"),
  phone: z.string().nonempty("Insira seu melhor número de telefone"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória").min(8),
});

export const updateUserSchema = userSchema.deepPartial()
