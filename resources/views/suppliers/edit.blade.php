@extends('layouts.app')
@section('title')
Edit Supplier
@endsection
@section('page_css')
<link rel="stylesheet" href="{{ asset('css/bootstrap-datetimepicker.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/int-tel/css/intlTelInput.css') }}">
@endsection
@section('content')
<div class="container-fluid">
    <div class="animated fadeIn">
        @include('flash::message')

        <div class="row mt-4">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <strong>Edit Supplier</strong>
                    </div>
                    <div class="card-body">
                        {{ Form::model($supplier, ['route' => ['suppliers.update', $supplier->id], 'method' => 'patch', 'files' => 'true', 'id' => 'editPatientForm']) }}

                        @include('suppliers.edit_fields')
                        <div class="row">
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-primary">Simpan</button>
                                <a href="{{ route('suppliers.index') }}" class="btn btn-secondary">Batal</a>
                            </div>
                        </div>
                        {{ Form::close() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('page_scripts')
<script src="{{ asset('assets/js/moment.min.js') }}"></script>
<script src="{{ asset('js/bootstrap-datetimepicker.min.js') }}"></script>
<script src="{{ asset('assets/js/int-tel/js/intlTelInput.min.js') }}"></script>
<script src="{{ asset('assets/js/int-tel/js/utils.min.js') }}"></script>
@endsection
@section('scripts')
<script>
    let utilsScript = "{{asset('assets/js/int-tel/js/utils.min.js')}}";
        let isEdit = true;
</script>
<script src="{{ mix('assets/js/custom/phone-number-country-code.js') }}"></script>
@endsection
