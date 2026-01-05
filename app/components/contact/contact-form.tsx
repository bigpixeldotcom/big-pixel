'use client';

import { useActionState } from 'react';
import { sendContactForm } from '@/app/actions';
import { InputField, TextArea } from '@/app/components/global/input';

const initialState = {
  message: '',
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactForm, initialState);

  return (
    <div className="mt-12">
      <form action={formAction} className="flex flex-col gap-6">
        <div className="flex justify-between gap-6">
          <InputField
            name="name"
            type="text"
            label="Name"
            required
            placeholder="Jane Smith"
            className="flex-1"
          />
          <InputField
            name="organisation"
            type="text"
            label="Organisation"
            required
            placeholder="Your Organisation"
            className="flex-1"
          />
        </div>
        <div className="flex justify-between gap-6">
          <InputField
            name="email"
            type="email"
            label="Email"
            required
            placeholder="jane@smith.org.uk"
            className="flex-1"
          />
          <InputField
            name="telephone"
            type="text"
            label="Telephone"
            required={false}
            placeholder="01234 567 890"
            className="flex-1"
          />
        </div>
        <TextArea
          name="project"
          label="How can I help you?"
          required
          placeholder="Details of the project here…"
        />
        <button disabled={pending}>Send</button>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
