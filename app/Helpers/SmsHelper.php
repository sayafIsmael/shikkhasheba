<?php

if (!function_exists('sendSms')) {

    /**
     * description
     *
     * @param
     * @return
     */
    function sendSms($message, $to)
    {
        $feed = "http://developer.muthofun.com/sms.php?username=" . settings('muthofun_username') . "&password=" . settings('muthofun_password') . "&mobiles=$to&sms=$message&uniccode=0";
        $client = new \GuzzleHttp\Client();
        $xmlResponse = $client->request('GET', $feed)->getBody();
        $xml = simplexml_load_string($xmlResponse);
        $jsonEncode = json_encode($xml);
        $response = json_decode($jsonEncode, TRUE);
        return $response['sms']['smsclientid'];
    }
}


if (!function_exists('getSmsCredit')) {

    /**
     * description
     *
     * @param
     * @return
     */
    function getSmsCredit()
    {
        $feed = "http://clients.muthofun.com:8901/esmsgw/smscredit.jsp?user=" . settings('muthofun_username') . "&password=" . settings('muthofun_password');
        $client = new \GuzzleHttp\Client();
        $xmlResponse = $client->request('GET', $feed)->getBody();
        $xml = simplexml_load_string($xmlResponse);
        $jsonEncode = json_encode($xml);
        $response = json_decode($jsonEncode, TRUE);
        $credit = $response['credit'];
        return $credit;
    }
}
