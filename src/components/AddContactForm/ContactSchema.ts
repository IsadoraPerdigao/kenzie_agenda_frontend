import { z } from "zod";

export const ContactSchema = z.object({
  id: z.string().optional(),
  fullName: z.string().nonempty("Insira seu nome completo"),
  phone: z.string().nonempty("Insira seu melhor número de telefone"),
  email: z.string().email("Deve ser um e-mail"),
});

export const UpdateContactSchema = ContactSchema.deepPartial()
