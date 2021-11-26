<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookrooms extends Model
{
    use HasFactory;
    protected $table = 'bookrooms';
    /**
     *
     * @var string[]
     *
     * $fillable description */
    protected $fillable = [
        'id',
        'name',
        'birth',
        'cccd',
        'phone',
        'num',
        'day',
        'idroom',
        'stats'
    ];
    protected $primaryKey = 'id';
}
