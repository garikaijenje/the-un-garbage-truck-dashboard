<?php

namespace App\Controllers;

use App\Controllers\QR\GenerateQRCode;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

use Config\Services;
class Home extends ResourceController
{

    use ResponseTrait;

    public function index()
    {
        return view('index');
    }
    
    public function uuid()
    {
        $uuid = service('uuid');
        $uuid4 = $uuid->uuid4();
        $string = $uuid4->toString();
        var_dump($string);
    }

    public function qr(){

        $qr = new GenerateQRCode();
        $qrcode = $qr->generate('https://facebook.com/shonacss');

        // return "<img src='{$qrcode}' alt='QR Code' width='500' height='500'>";

        $response_code = ResponseInterface::HTTP_OK;
        $data = [
            'status' => 'SUCCESS',
            'code' => $response_code,
            'qrcode' => $qrcode,
        ];

        return Services::response()->setJSON($data)->setStatusCode($response_code);

    }

}
