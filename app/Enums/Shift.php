<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class Shift extends Enum
{
    const Morning =   1;
    const Day =   2;
    const Night = 3;
}
