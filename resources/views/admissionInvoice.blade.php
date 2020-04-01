<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Addmission Invoice</title>
</head>
<body class="container-fluid">
        <div class="text-center m-3">
            <h2>{{settings('school_name')}}</h2>
            <h1>Invoice</h1>
        </div>
        <img height="100" src="{{settings('school_logo')}}" alt="Logo"/>
        <h6>Date : {{$admission->updated_at}}</h6>
        <div class="p-2 pr-0">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Student Name</td>
                        <td>{{$admission->student->user->name}}</td>
                    </tr>
                     <tr>
                        <td>Class</td>
                        <td>{{$admission->studentClass->academicClass->name}}</td>
                    </tr>
                     <tr>
                        <td>Section</td>
                        <td>{{$admission->studentClass->section->name}}</td>
                    </tr>
                    <tr>
                        <td>Roll No.</td>
                        <td>{{$admission->studentClass->roll_no }}</td>
                    </tr>
                    <tr>
                        <td>Total Fee</td>
                        <td>{{$admission->fee->total}}</td>
                    </tr>
                </tbody>
                </table>
        </div>
</body>
</html>