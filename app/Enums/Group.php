<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class Group extends Enum
{
    const Science =   1;
    const Commerce =  2;
    const Arts = 3;
}
