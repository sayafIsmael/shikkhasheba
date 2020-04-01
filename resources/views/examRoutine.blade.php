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
            <h3>{{$exam->name}} exam</h3>
            <h4>Class : {{$academiClass->name}}</h4>
        </div>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Shift</th>
                        <th scope="col">Group</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($routines as $routine)
                        <tr>
                            <th scope="row">{{$loop->iteration}}</th>
                            <td>{{$routine->date}}</td>
                            <td>{{$routine->shift->name}}</td>
                            <td>{{$routine->group->name}}</td>
                            <td>{{$routine->subject->name}}</td>
                            <td>{{$routine->start_time}}</td>
                            <td>{{$routine->end_time}}</td>
                        </tr>
                    @endforeach
                    
                    
                </tbody>
        </table>
    
</body>
</html>