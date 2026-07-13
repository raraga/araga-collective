<?php

use App\Mail\ContactInquiryMail;
use Illuminate\Support\Facades\Mail;

test('the contact form can be submitted with valid data', function () {
    Mail::fake();

    $response = $this->post(route('contact.store'), [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'message' => 'I would like to discuss a project.',
    ]);

    $response->assertRedirect();
    $response->assertSessionHas('toast', [
        'type' => 'success',
        'message' => 'Thank you for your inquiry. We\'ll get back to you soon.',
    ]);

    $this->assertDatabaseHas('contact_inquiries', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'message' => 'I would like to discuss a project.',
    ]);

    Mail::assertSent(ContactInquiryMail::class, 1);
});

test('the contact form validates required fields', function () {
    $response = $this->post(route('contact.store'), []);

    $response->assertSessionHasErrors(['name', 'email', 'message']);
});

test('the contact form validates email format', function () {
    $response = $this->post(route('contact.store'), [
        'name' => 'John Doe',
        'email' => 'not-an-email',
        'message' => 'Hello',
    ]);

    $response->assertSessionHasErrors(['email']);
});

test('the contact form validates maximum lengths', function () {
    $response = $this->post(route('contact.store'), [
        'name' => str_repeat('a', 256),
        'email' => 'john@example.com',
        'message' => 'Hello',
    ]);

    $response->assertSessionHasErrors(['name']);

    $response = $this->post(route('contact.store'), [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'message' => str_repeat('a', 2001),
    ]);

    $response->assertSessionHasErrors(['message']);
});
