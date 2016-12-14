<?php

use Illuminate\Database\Seeder;

class ProducTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Product = new \App\Product([
          'imagepath' => 'https://www.abebooks.com/images/books/harry-potter/sorcerers-stone.jpg',
          'title' => 'Harrey Potter',
          'description' => 'This is the Description of the Product',
          'price' => 10
        ]);
        $Product->save();
        $Product = new \App\Product([
          'imagepath' => 'https://www.abebooks.com/images/books/harry-potter/sorcerers-stone.jpg',
          'title' => 'Harrey Potter2',
          'description' => 'This is the Description of the Product',
          'price' => 12
        ]);
        $Product->save();
        $Product = new \App\Product([
          'imagepath' => 'https://www.abebooks.com/images/books/harry-potter/sorcerers-stone.jpg',
          'title' => 'Harrey Potter3',
          'description' => 'This is the Description of the Product',
          'price' => 13
        ]);
        $Product->save();
        $Product = new \App\Product([
          'imagepath' => 'https://www.abebooks.com/images/books/harry-potter/sorcerers-stone.jpg',
          'title' => 'Harrey Potter4',
          'description' => 'This is the Description of the Product',
          'price' => 14
        ]);
        $Product->save();
        $Product = new \App\Product([
          'imagepath' => 'https://www.abebooks.com/images/books/harry-potter/sorcerers-stone.jpg',
          'title' => 'Harrey Potter5',
          'description' => 'This is the Description of the Product',
          'price' => 15
        ]);
        $Product->save();
        $Product = new \App\Product([
          'imagepath' => 'https://www.abebooks.com/images/books/harry-potter/sorcerers-stone.jpg',
          'title' => 'Harrey Potter6',
          'description' => 'This is the Description of the Product',
          'price' => 16
        ]);
        $Product->save();
    }
}
