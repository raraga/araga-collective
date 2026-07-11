import { useForm } from '@inertiajs/react';
import type { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface ContactFormProps {
    className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.store'));
    };

    if (wasSuccessful) {
        return (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mb-4 text-4xl">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Message Sent</h3>
                <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className={cn('space-y-6', className)}>
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    required
                    rows={5}
                    className="border-input placeholder:text-muted-foreground flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" disabled={processing} className="w-full">
                {processing ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
}
