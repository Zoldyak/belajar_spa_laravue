<?php

namespace App\Http\Controllers\Api\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    //
    public function __invoke(Request $request)  {
        $request->validate([
            'name'=>['required','string','max:255'],
            'email'=>['required','string','email','unique:users'],
            'password'=>['required','string','min:8']
        ]);
        $user=User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make( $request->password),

        ]);
        if (! Auth::Attempt([$request->only('email','password')])) {
            return response()->json([
                'Message'=>"Login Invalid"
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
            $accessToken=Auth::user()->createToken('access_token')->accessToken;
            return  response()->json([
                'Message'=>"Login Valid",
                "data"=>$user,
                "meta"=>[
                    'token'=>$accessToken
                ]
                ],HTTP_CREATED);

        }
    }
}

