<?php

declare(strict_types=1);

namespace App\Controllers\QR;

use chillerlan\QRCode\QROptions;

class LogoOptions extends QROptions
{
  protected int $logoSpaceWidth;
  protected int $logoSpaceHeight;
}
