<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookroom_reserve extends Model
{
    use HasFactory;
    protected $table = 'bookroom_reserve';
    /**
     *
     * @var string[]
     *
     * $fillable description */
    public $incrementing = false;
    protected $fillable = [
        'id',
        'name',
        'phone',
        'num',
        'date',
        'regidate',
        'idroom'
    ];
    protected $primaryKey = 'id';
}
