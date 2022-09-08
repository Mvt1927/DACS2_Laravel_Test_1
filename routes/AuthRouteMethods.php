<?php

use Illuminate\Support\Facades\Route;
class AuthRouteMethods
{
    /**
     * Register the typical authentication routes for an application.
     *
     * @param  array  $options
     * @return callable
     */
    public function auth()
    {
        return function ($options = []) {
            $namespace = class_exists(Route::prependGroupNamespace('Auth\LoginController')) ? null : 'App\Http\Controllers';

            Route::group(['namespace' => $namespace], function() use($options) {
                // Login Routes...
                if ($options['login'] ?? true) {
                    Route::get('Classic-Hotel/login', 'Auth\LoginController@showLoginForm')->name('login');
                    Route::post('Classic-Hotel/login', 'Auth\LoginController@login');
                }

                // Logout Routes...
                if ($options['logout'] ?? true) {
                    Route::post('Classic-Hotel/logout', 'Auth\LoginController@logout')->name('logout');
                }

                // Registration Routes...
                if ($options['register'] ?? true) {
                    Route::get('Classic-Hotel/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
                    Route::post('Classic-Hotel/register', 'Auth\RegisterController@register');
                }

                // Password Reset Routes...
                if ($options['reset'] ?? true) {
                    $this->resetPassword();
                }

                // Password Confirmation Routes...
                if ($options['confirm'] ??
                    class_exists(Route::prependGroupNamespace('Auth\ConfirmPasswordController'))) {
                    $this->confirmPassword();
                }

                // Email Verification Routes...
                if ($options['verify'] ?? false) {
                    $this->emailVerification();
                }
            });
        };
    }

    /**
     * Register the typical reset password routes for an application.
     *
     * @return callable
     */
    public function resetPassword()
    {
        return function () {
            Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
            Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
            Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
            Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
        };
    }

    /**
     * Register the typical confirm password routes for an application.
     *
     * @return callable
     */
    public function confirmPassword()
    {
        return function () {
            Route::get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
            Route::post('password/confirm', 'Auth\ConfirmPasswordController@confirm');
        };
    }

    /**
     * Register the typical email verification routes for an application.
     *
     * @return callable
     */
    public function emailVerification()
    {
        return function () {
            Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
            Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
            Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
        };
    }
}
