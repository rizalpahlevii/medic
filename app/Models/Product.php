<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{

    use SoftDeletes;

    protected $table = 'products';

    protected $fillable = [
        'product_code',
        'name',
        'category_id',
        'brand_id',
        'unit',
        'selling_price',
        'current_stock',
        'total_minimum_stock',
        'side_effects',
        'notes'
    ];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'category_id', 'id');
    }

    public function brand()
    {
        return $this->belongsTo(ProductBrand::class, 'brand_id', 'id');
    }
}
