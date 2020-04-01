<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class LeaveStatus extends Enum
{
    const Pending =   0;
    const Approved =   1;
    const Rejected = 2;
}
