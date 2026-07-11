<x-mail::message>
# New Contact Inquiry

**Name:** {{ $name }}
**Email:** {{ $email }}

## Message

{{ $message }}

<x-mail::button :url="config('app.url')">
View Dashboard
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
