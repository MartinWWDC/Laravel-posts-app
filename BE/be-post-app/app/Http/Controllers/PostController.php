<?php

namespace App\Http\Controllers;

use App\Models\post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()

    {
        /*
         * Implemented without model
        $result=DB::select('SELECT id,content FROM posts');
        return($result);
        */
        //Implemented with model
        $posts=post::all();
        return($posts);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //DB::insert('INSERT INTO post (content) VALUES (?)', [$request['content']]);
/*
        $post = new post;

        $post->content=$request['content'];
        $post->save();
*/
        post::create(['content'=>$request['content']]);


    }

    /**
     * Display the specified resource. on the route /posts/{$id}
     */
    public function show(string $id)
    {
        return($id);
    }

    /**
     * Show the form for editing the specified resource.
     * does not have any return (???)
     */
    public function edit(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
