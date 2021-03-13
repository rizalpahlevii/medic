@extends('layouts.app')
@section('title')
Dokter
@endsection

@section('page_css')
<link href="{{ asset('assets/css/jquery.dataTables.min.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
<div class="container-fluid">
    <div class="animated fadeIn">
        @include('flash::message')
        <div class="page-header">
            <h3 class="page__heading">Dokter</h3>
            <div class="filter-container">

                <div class="mr-0 actions-btn">
                    <div class="btn-group" role="group">
                        <button id="patientActions" type="button" class="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions
                        </button>
                        <div class="dropdown-menu" aria-labelledby="patientActions" x-placement="bottom-start">
                            <a href="{{ route('medics.create') }}" class="dropdown-item">
                                Input Dokter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        @include('medics.table')
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('medics.templates.templates')
</div>
@endsection

@section('page_scripts')
<script src="{{ asset('assets/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ mix('assets/js/custom/custom-datatable.js') }}"></script>
@endsection

@section('scripts')
<script>
    let medicUrl = "{{url('medics')}}"
</script>
<script src="{{ mix('assets/js/medics/medics.js') }}"></script>
<script src="{{ mix('assets/js/custom/delete.js') }}"></script>
@endsection
