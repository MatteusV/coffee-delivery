import { z } from "zod";

const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3),
  state: z
    .string()
    .min(2)
    .max(2)
    .transform((val) => val.toUpperCase()),
  city: z.string(),
})

export type FormRegisterData = z.infer<typeof registerFormSchema>