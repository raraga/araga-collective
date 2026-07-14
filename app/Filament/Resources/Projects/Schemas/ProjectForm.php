<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('thumbnail_path')
                    ->required(),
                Repeater::make('pictures')
                    ->schema([
                        TextInput::make('url')
                            ->url()
                            ->required(),
                    ])
                    ->columnSpanFull(),
                TextInput::make('url')
                    ->url(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
                Checkbox::make('selected'),
            ]);
    }
}
