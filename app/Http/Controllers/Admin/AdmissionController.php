<?php

namespace App\Http\Controllers\Admin;

use App\Models\Fee;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Group;
use App\Models\Shift;
use App\Models\Student;
use App\Models\Admission;
use App\Traits\FileHandler;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use App\Models\AcademicClass;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Builder;
use PDF;

class AdmissionController extends Controller
{
    use FileHandler;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Admissions/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'admissions' => Admission::with('student.user', 'studentClass.academicClass', 'fee')
                ->session()
                ->latest()
                ->filter(request('search'))
                ->paginate(request('perPage') ?? 10),
        ]);
    }

    public function new()
    {
        $class_id = request('class_id');
        $parent = Role::where('slug', 'parent')->first();
        return Inertia::render('Admin/Admissions/New', [
            'requests' => request()->all('class_id'),
            'classes' => AcademicClass::select('id', 'name')->get(),
            'sections' => isset($class_id) ? AcademicClass::find($class_id)->sections : null,
            'groups' => Group::select('id', 'name')->get(),
            'shifts' => Shift::select('id', 'name')->get(),
            'parents' => User::where('role_id', $parent->id)->get(),
            'fees' => Fee::whereHas('feeType', function (Builder $query) {
                $query->where('slug', 'admission');
            })->get()
        ]);
    }

    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function download($id)
    {   
 
        $data['admission'] = Admission::with('student.user', 'fee')
                            ->session()
                            ->findOrFail($id);
        
        $pdf = PDF::loadView('admissionInvoice', $data);
        return $pdf->download('admission_invoice.pdf');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'avatar' => 'required',
            'class' => 'required',
            'section' => 'required',
            'shift' => 'required',
            'group' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'roll_no' => 'required',
            'student_id' => 'required|unique:users,user_id',
            'password' => 'required|string|min:8|confirmed',
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'contact_no' => 'required|regex:/(01)[0-9]{9}/',
            'emergency_no' => 'required|regex:/(01)[0-9]{9}/',
            'address' => 'required',
            'birth_certificate_number' => 'required'
        ]);

        if ($request->new_parent == false) {
            $this->validate($request, [
                'parent' => 'required'
            ]);
            $parent = $request->parent;
        } else {
            $this->validate($request, [
                'parent_avatar' => 'required',
                'parent_name' => 'required|string|max:255',
                'parent_email' => 'required|email|max:255|unique:users,email',
                'parent_id' => 'required|unique:users,user_id',
                'parent_password' => 'required|string|min:8|confirmed',
                'parent_gender' => 'required',
                'parent_date_of_birth' => 'required|date',
                'parent_contact_no' => 'required|regex:/(01)[0-9]{9}/',
                'parent_address' => 'required',
                'parent_nid_number' => 'required',
                'parent_birth_certificate_number' => 'required'
            ]);
            // upload parent avater
            $parent_avatar_path = $this->uploadFile($request->parent_avatar, 'avatars');
            $parent_role = Role::where('slug', 'parent')->first();
            // Create new parent
            $parent = new User();
            $parent->user_id = $request->parent_id;
            $parent->role_id = $parent_role->id;
            $parent->name = $request->parent_name;
            $parent->email = $request->parent_email;
            $parent->password = Hash::make($request->parent_password);
            $parent->gender = $request->parent_gender;
            $parent->dob = $request->parent_date_of_birth;
            $parent->address = $request->parent_address;
            $parent->contact_no = $request->parent_contact_no;
            $parent->avatar_path = $parent_avatar_path;
            $parent->nid_number = $request->parent_nid_number;
            $parent->birth_certificate_number = $request->parent_birth_certificate_number;
            $parent->save();
            // set parent id for student
            $parent = $parent->id;
        }

        // upload student avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');
        $student_role = Role::where('slug', 'student')->first();

        // create new user for student
        $studentUser = new User();
        $studentUser->user_id = $request->student_id;
        $studentUser->role_id = $student_role->id;
        $studentUser->name = $request->name;
        $studentUser->email = $request->email;
        $studentUser->password = Hash::make($request->password);
        $studentUser->gender = $request->gender;
        $studentUser->dob = $request->date_of_birth;
        $studentUser->address = $request->address;
        $studentUser->contact_no = $request->contact_no;
        $studentUser->avatar_path = $avatar_path;
        $studentUser->birth_certificate_number = $request->birth_certificate_number;
        $studentUser->save();

        // create new student profile
        $student = new Student();
        $student->user_id = $studentUser->id;
        $student->parent_id = $parent;
        $student->emergency_no = $request->emergency_no;
        $student->save();

        // store student academic info
        $studentClass = new StudentClass();
        $studentClass->session_id = active_session()->id;
        $studentClass->student_id = $student->id;
        $studentClass->academic_class_id = $request->class;
        $studentClass->section_id = $request->section;
        $studentClass->group_id = $request->group;
        $studentClass->shift_id = $request->shift;
        $studentClass->roll_no = $request->roll_no;
        $studentClass->save();

        // store admission log
        $admission = new Admission();
        $admission->session_id = active_session()->id;
        $admission->student_id = $student->id;
        $admission->student_class_id = $studentClass->id;
        $admission->fee_id = $request->fee;
        $admission->note = $request->note;
        $admission->save();

        return redirect(route('admin.admissions.index'))->with('success', 'Student Admission Successfully Done.');
    }
}
