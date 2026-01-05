'use server';

import { z } from 'zod';

const schema = z.strictObject({
  name: z.string().min(2, { error: 'Please provide a name' }),
  organisation: z.string({ error: 'Please provide the name of your organisation' }),
  email: z.email(),
  telephone: z.string().optional(),
  project: z.string().min(20, { error: 'Please give me more information on the project' }),
});

export async function sendContactForm(initialState: unknown, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    organisation: formData.get('organisation'),
    email: formData.get('email'),
    telephone: formData.get('telephone'),
    project: formData.get('project'),
  });

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error),
    };
  }

  return { message: 'Contact form sent!' };
}
