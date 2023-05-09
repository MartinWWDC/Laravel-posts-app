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
        //Utilizza il model Post per eseguire la query e la paginazione
        $posts = Post::paginate(3);
        return $posts;
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
        //return response()->json(['message' => 'Utente creato con successo']);
        return $request;

    }

    /**
     * Display the specified resource. on the route /posts/{$id}
     */
    public function show(string $id)
    {


        return(post::findOrFail($id));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        post::destroy($id);

    }
}
