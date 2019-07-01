<?php

$f = fopen('word_rus.txt', 'r');

$file_str = fread($f, filesize('word_rus.txt'));

//foreach ($file_array as $word){
//    file_put_contents('array.js', '"'.$word.'", ', FILE_APPEND);
//
//}

//echo($file_str);
$file_array = str_replace("\\n", "", $file_str);
print_r($file_array);

$arr = explode('\\n', $file_array);
var_dump($arr);

fclose($f);