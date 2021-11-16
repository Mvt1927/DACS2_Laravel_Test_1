<?php
$hostname = 'localhost:3306';
$username = 'root';
$password = '1927';
$dbname = "dacs2";

if (!$conn = mysqli_connect($hostname, $username, $password, $dbname)) {
    die('cannot connect');
    exit();
}
return [
    'v3' => [
        'site' => '6LepPQwcAAAAABC_YEYjyH35U6uvJJ4a_GdR9jtg',
        'secret' => '6LepPQwcAAAAAGtS8eQ8TQGm7vX9lbGkk51n1fx5',
    ],
    'v2' => [
        'site' => '6LdKVAwcAAAAAB6BP1FRIKEZX8CjG1vM0Gev3dH3',
        'secret' => '6LdKVAwcAAAAACJh_zMUm_20dIlMIZpKGF8ljuwJ',
    ]
];
