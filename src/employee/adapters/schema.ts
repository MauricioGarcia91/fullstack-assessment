import { z } from 'zod';

export const employeeSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  hire_date: z.string(),
  department_id: z.string().uuid(),
  phone: z.string(),
  address: z.string()
});
