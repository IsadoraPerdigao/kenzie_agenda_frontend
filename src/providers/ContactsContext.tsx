import { z } from "zod";
import { ContactSchema } from "../components/ContactForm/ContactSchema";

export type AddContactParameter = z.infer<typeof ContactSchema>;
