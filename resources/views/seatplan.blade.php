<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Seat Plan</title>
</head>
<body class="container-fluid">
    <div class="text-center">
        <h3>{{settings('school_name')}}</h3>
        <h5>{{ $seatPlan->exam->name }} exam</h5>
        <h5>Class : {{$seatPlan->class->name}}</h5>
        <h5>Section : {{$seatPlan->section->name}}</h5>
    </div>
    <table class="table">
        @foreach($rollNumbers as $chunkRollNumber)
            <tr>
                @foreach($chunkRollNumber as $rollNumber)
                    <td scope="col" style="border: 1px solid gray">
                        <p class="d-block">Exam: {{ $seatPlan->exam->name }}</p>
                        <p class="d-block">Class: {{ $seatPlan->class->name }}</p>
                        <p class="d-block">Section: {{ $seatPlan->section->name }}</p>
                        <p class="d-block">Roll: {{ $rollNumber }}</p>
                        <p class="d-block">Section: {{ $seatPlan->room_number }}</p>
                    </td>
                @endforeach
            </tr>
        @endforeach
    </table>
</body>
</html>