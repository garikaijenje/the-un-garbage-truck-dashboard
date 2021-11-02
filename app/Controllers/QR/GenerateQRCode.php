<?php

namespace App\Controllers\QR;

use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

use App\Controllers\QR\LogoOptions;
use App\Controllers\QR\QRImageWithLogo;

use App\Controllers\BaseController;

class GenerateQRCode extends BaseController
{

  public function generate($data)
  {

    $options = new LogoOptions(
      [
        'eccLevel' => QRCode::ECC_H,
        'imageBase64' => true,
        'logoSpaceHeight' => 9,
        'logoSpaceWidth' => 15,
        'scale' => 20,
        'version' => 7,
        'addQuietzone' => false,
        'moduleValues' => [
          // finder
          1536 => [0, 92, 71], // dark (true)
          6    => [255, 255, 255], // light (false), white is the transparency color and is enabled by default
          5632 => [0, 92, 71], // finder dot, dark (true)
          // alignment
          2560 => [0, 92, 71],
          10   => [255, 255, 255],
          // timing
          3072 => [0, 0, 0],
          12   => [255, 255, 255],
          // format
          3584 => [0, 0, 0],
          14   => [255, 255, 255],
          // version
          4096 => [0, 0, 0],
          16   => [255, 255, 255],
          // data
          1024 => [0, 0, 0],
          4    => [255, 255, 255],
          // darkmodule
          512  => [0, 0, 0],
          // separator
          8    => [255, 255, 255],
          // quietzone
          18   => [255, 255, 255],
          // logo (requires a call to QRMatrix::setLogoSpace())
          20    => [255, 255, 255],
        ],
      ]
    );

    $qrOutputInterface = new QRImageWithLogo($options, (new QRCode($options))->getMatrix($data));

    $qrcode = $qrOutputInterface->dump(null, ROOTPATH . '/public/logo.png');

    return $qrcode;

  }

}
