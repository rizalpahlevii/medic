{{--Dashboard--}}
<li class="nav-item side-menus {{ Request::is('dashboard*') ? 'active' : '' }}">
    <a class="nav-link menu-text-wrap" href="{{ route('dashboard') }}" data-toggle="tooltip" data-placement="bottom"
        title="{{ __('messages.dashboard.dashboard') }}" data-delay='{"show":"500", "hide":"50"}'>
        <i class="nav-icon fas fa-chart-pie"></i>
        <span>{{ __('messages.dashboard.dashboard') }}</span>
    </a>
</li>

@if (auth()->user()->hasRole(['owner', 'kasir']))
{{-- Users  --}}
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Registrasi" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-hospital-user"></i>
        Registrasi
    </a>
    <ul class="nav-dropdown-items">
        <li class="nav-item side-menus {{ Request::is('patients*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('patients.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Pengguna" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-user-injured"></i>
                <span>Pasien</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('medics*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('medics.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Jabatan" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-user-md"></i>
                <span>Dokter</span>
            </a>
        </li>
    </ul>
</li>

@if (auth()->user()->hasRole(['kasir']))
@if (getShift())
{{-- layanan --}}
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Layanan" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-list"></i>
        Layanan
    </a>
    <ul class="nav-dropdown-items">
        <li class="nav-item side-menus {{ Request::is('services.generals*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.generals.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Umum" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Umum</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.family_plannings*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.family_plannings.index') }}"
                data-toggle="tooltip" data-placement="bottom" title="KB" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>KB</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.pregnancies*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.pregnancies.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Kehamilan" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Kehamilan</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.laboratories*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.laboratories.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Laboratorium</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.immunizations*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.immunizations.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Imunisasi</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.parturitions*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.parturitions.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Partus</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.inpatients*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.inpatients.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Rawat Inap</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.electrocardiograms*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.electrocardiograms.index') }}"
                data-toggle="tooltip" data-placement="bottom" title="Laboratorium"
                data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>EKG</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.administrations*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.administrations.index') }}"
                data-toggle="tooltip" data-placement="bottom" title="Laboratorium"
                data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Administrasi</span>
            </a>
        </li>
    </ul>
</li>
@endif
@else
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Layanan" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-list"></i>
        Layanan
    </a>
    <ul class="nav-dropdown-items">
        <li class="nav-item side-menus {{ Request::is('services.generals*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.generals.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Umum" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Umum</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.family_plannings*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.family_plannings.index') }}"
                data-toggle="tooltip" data-placement="bottom" title="KB" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>KB</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.pregnancies*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.pregnancies.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Kehamilan" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Kehamilan</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.laboratories*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.laboratories.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Laboratorium</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.immunizations*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.immunizations.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Imunisasi</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.parturitions*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.parturitions.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Partus</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.inpatients*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.inpatients.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Laboratorium" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Rawat Inap</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.electrocardiograms*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.electrocardiograms.index') }}"
                data-toggle="tooltip" data-placement="bottom" title="Laboratorium"
                data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>EKG</span>
            </a>
        </li>
        <li class="nav-item side-menus {{ Request::is('services.administrations*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('services.administrations.index') }}"
                data-toggle="tooltip" data-placement="bottom" title="Laboratorium"
                data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Administrasi</span>
            </a>
        </li>
    </ul>
</li>
@endif
@endif

@if (auth()->user()->hasRole(['kasir']))
@if (getShift())
{{-- Penjualan Obat --}}
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Penjualan Produk" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-list"></i>
        Penjualan Produk
    </a>
    <ul class="nav-dropdown-items">
        <li class="nav-item side-menus {{ Request::is('sales.cashiers*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('sales.cashiers.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Kasir" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Kasir</span>
            </a>
        </li>
    </ul>
</li>

@endif
@endif

@if (auth()->user()->hasRole(['owner']))
{{-- Penjualan Obat --}}
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Penjualan Produk" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-list"></i>
        Penjualan Produk
    </a>
    <ul class="nav-dropdown-items">
        @if (getShift())
        <li class="nav-item side-menus {{ Request::is('sales.cashiers*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('sales.cashiers.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Kasir" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Kasir</span>
            </a>
        </li>
        @endif
        <li class="nav-item side-menus {{ Request::is('sales.datas*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('sales.datas.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Data Penjualan" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Data Penjualan</span>
            </a>
        </li>
    </ul>
</li>
@endif


@if (auth()->user()->hasRole(['owner']))
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Produk" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-list"></i>
        Produk
    </a>
    <ul class="nav-dropdown-items">
        <li class="nav-item side-menus {{ Request::is('categories*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('categories.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Kategori" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-bookmark"></i>
                <span>Daftar Kategori</span>
            </a>
        </li>

        <li class="nav-item side-menus {{ Request::is('suppliers*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('suppliers.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Supplier" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-truck"></i>
                <span>Daftar Supplier</span>
            </a>
        </li>

        <li class="nav-item side-menus {{ Request::is('brands*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('brands.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Merek" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-tags"></i>
                <span>Daftar Merek</span>
            </a>
        </li>

        <li class="nav-item side-menus {{ Request::is('products*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('products.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Produk" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-box-open"></i>
                <span>Daftar Produk</span>
            </a>
        </li>

    </ul>
</li>

{{--Dashboard--}}
<li class="nav-item side-menus {{ Request::is('purchases*') ? 'active' : '' }}">
    <a class="nav-link menu-text-wrap" href="{{ route('purchases.index') }}" data-toggle="tooltip"
        data-placement="bottom" title="Pembelian" data-delay='{"show":"500", "hide":"50"}'>
        <i class="nav-icon fas fa-chart-pie"></i>
        <span>Pembelian</span>
    </a>
</li>

{{-- Users  --}}
<li class="nav-item side-menus nav-dropdown">
    <a class="nav-link nav-dropdown-toggle menu-text-wrap" href="#" data-toggle="tooltip" data-placement="bottom"
        title="Pengguna" data-delay='{"show":"500", "hide":"50"}' data-trigger="hover">
        <i class="nav-icon fas fa-user"></i>
        Pengguna
    </a>
    <ul class="nav-dropdown-items">
        <li class="nav-item side-menus {{ Request::is('users*') ? 'active' : '' }}">
            <a class="nav-link menu-text-wrap" href="{{ route('users.index') }}" data-toggle="tooltip"
                data-placement="bottom" title="Pengguna" data-delay='{"show":"500", "hide":"50"}'>
                <i class="nav-icon fas fa-users"></i>
                <span>Pengguna</span>
            </a>
        </li>
    </ul>
</li>
@endif
