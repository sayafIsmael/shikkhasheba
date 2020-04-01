<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Exam Routine</title>
</head>
<body class="container-fluid">
        <div class="text-center m-3">
            <h2>{{settings('school_name')}}</h2>
        </div>
        <table class="table">
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Saturday</td>
                        @foreach($saturday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Sunday</td>
                        @foreach($sunday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Monday</td>
                        @foreach($monday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Tuesday</td>
                        @foreach($tuesday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Wednesday</td>
                        @foreach($wednesday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Thursday</td>
                        @foreach($thursday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
                    <tr>
                        <td class="text-center bg-primary" style="color: white; height: 96px;" scope="col">Friday</td>
                        @foreach($friday as $routine)
                            <td class="text-center bg-white" style="color: black; border: 1px solid gray; height: 96px;" scope="col">
                                Class : {{$routine->class[0]->name}}, Section {{$routine->section->name}}
                                <br />
                                Shift: {{ $routine->shift->name }}
                                <br />
                                Group: {{ $routine->group->name }}
                                <br />
                                {{ $routine->start_time }} - {{ $routine->end_time }}
                                <br />
                                <p>
                                    Sub :
                                    <span style="font-weight: bold; font-size: 18px;">{{ $routine->subject[0]->name }}</span>
                                </p>
                            </td>
                        @endforeach
                    </tr>
        </table>
    
</body>
</html>