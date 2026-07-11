<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactInquiryRequest;
use App\Mail\ContactInquiryMail;
use App\Models\ContactInquiry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactInquiryController extends Controller
{
    public function store(ContactInquiryRequest $request): RedirectResponse
    {
        $inquiry = ContactInquiry::create($request->validated());

        Mail::to(config('mail.inquiry_to', config('mail.from.address')))
            ->send(new ContactInquiryMail($inquiry));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Thank you for your inquiry. We\'ll get back to you soon.',
        ]);
    }
}
