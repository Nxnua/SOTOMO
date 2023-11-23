<?php
namespace app\Http\Controllers;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(){
        return view('resources/Pages/LandingPage.jsx');
    }
}