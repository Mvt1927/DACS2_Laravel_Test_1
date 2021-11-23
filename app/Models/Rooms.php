<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    use HasFactory;
    protected $table = 'rooms';
    /**
     *
     * @var string[]
     *
     * $fillable description */

    protected $fillable = [
        'id',
        'name',
        'src',
        'info',
        'star',
        'price',
        'defprice',
        'type',
        'stats'

    ];
    protected $primaryKey = 'id';

}
