import { z } from 'zod';

export const employeeSchema = z.object({
  first_name: z.string().min(1, { message: 'first_name is required.' }),
  last_name: z.string().min(1, { message: 'last_name is required.' }),
  hire_date: z.string().min(1, { message: 'hire_date is required.' }),
  department_id: z.string().uuid({ message: 'Invalid department ID.' }),
  phone: z.string().min(1, { message: 'Phone number is required.' }),
  address: z.string().min(1, { message: 'Address is required.' })
});
