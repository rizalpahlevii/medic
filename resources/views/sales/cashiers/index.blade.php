@extends('layouts.app')
@section('title')
Penjualan Obat
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
                        <strong>Faktur Baru</strong>
                    </div>
                    <div class="card-body">
                        @if (session()->has('newurl'))
                        <input type="hidden" value="{{ session()->get('newurl') }}" name="newurl" id="newurl">
                        @else
                        <input type="hidden" value="no" name="newurl" id="newurl">
                        @endif

                        {{ Form::open(['route' => 'sales.cashiers.store', 'files' => 'true', 'id' => 'createProductForm']) }}

                        @include('sales.cashiers.fields')

                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-load">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 float-right">
                                <input type="submit" name="submit" class="btn btn-primary" value="Simpan">
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
<script>
    $(document).ready(function(){
        newurl = $('#newurl').val()
        if(newurl!="no"){
            window.open(newurl);
        }
    });

    function convertToAngka(param)
    {
        rupiah = String(param);
        return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10);
    }

    $('#discount').keyup(function(){
        value = $(this).val();
        $('#discount_hidden').val(convertToAngka(value));
        $(this).val(formatRupiah(value,'Rp. '))
    });
    $('#tax').keyup(function(){
        value = $(this).val();
        $('#tax_hidden').val(convertToAngka(value));
        $(this).val(formatRupiah(value,'Rp. '))
    });
    $('#member_buyer_name').select2({
        placeholder : 'Input Pasien',
        width :'resolve'
    });
    $('#buyer_type').change(function(){
        const generalForm = document.querySelector('.general_form');
        const memberForm = document.querySelector('.member_form');

        if($(this).val() != "general"){
            $('.member_form').css('display','block');
            $('.general_form').css('display','none');
        }else{
            $('.member_form').css('display','none');
            $('.general_form').css('display','block');
        }
    });
    let cartTableUrl = `{{ route('sales.cashiers.cart_table') }}`;
    let cartDelete = `{{ route('sales.cashiers.cart_delete',':key') }}`;
    let addCartUrl = `{{ route('sales.cashiers.cart_add') }}`;

    $('#discount').keyup(function(){
        tax = $('#tax_hidden').val();
        discount = $('#discount_hidden').val();
        subtotal = $('#subtotal_hid').val();
        endTotal = subtotal - discount - tax;
        console.log(endTotal);
        $('#tax-view').html(formatRupiah(tax));
        $('#discount-view').html(formatRupiah(discount));
        $('#subtotal-view').html(formatRupiah(subtotal));
        $('#end-total').html(formatRupiah(String(endTotal)));
    });
    $('#medic_id').select2({
        placeholder: "Select an option"
    });
    $('#tax').keyup(function(){
        tax = $('#tax_hidden').val();
        discount = $('#discount_hidden').val();
        subtotal = $('#subtotal_hid').val();
        endTotal = subtotal - discount - tax;
        $('#tax-view').html(formatRupiah(tax));
        $('#discount-view').html(formatRupiah(discount));
        $('#subtotal-view').html(formatRupiah(subtotal));
        $('#end-total').html(formatRupiah(String(endTotal)));
    });

    function formatRupiah(angka,prefix){
        if(angka == 0 ){
            return "Rp. 0";
        }else{

            var numberString = angka.replace(/[^,\d]/g, '').toString(),
            split   		= numberString.split(','),
            sisa     		= split[0].length % 3,
            rupiah     		= split[0].substr(0, sisa),
            ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

            if(ribuan){
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            return 'Rp. '+ rupiah;
        }
    }
</script>
<script src="{{ asset('assets/js/sales/cashiers/cashiers.js') }}"></script>
@endsection
