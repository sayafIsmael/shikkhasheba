<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Traits\FileHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PostController extends Controller
{
    use FileHandler;

    public function store(Request $request)
    {
        $this->validate($request,[
            'content' => 'nullable|string|required_without:image',
            'image' => 'nullable|string|required_without:content',
        ]);

        // upload avater
        $image_path = $this->uploadFile($request->image, 'posts');

        $post = new Post();
        $post->session_id = active_session()->id;
        $post->user_id = Auth::id();
        $post->content = $request->content;
        $post->image_path = $image_path;
        $post->save();
        return Redirect::route('admin.dashboard')->with('success', 'Post Successfully Published.');
    }

    public function destroy($id)
    {
        $post = Post::session()->findOrFail($id);
        $this->deleteFile($post->getOriginal('image_path'));
        $post->delete();
        return Redirect::back()->with('success', 'Post Successfully Delete.');
    }
}
