import Swal from 'sweetalert2'

export default function AlertOut(callback) {
    Swal.fire({
        title: "Apakah anda ingin keluar?",
        text: "Anda akan kembali ke halaman Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Keluar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Berhasil!",
                text: "Anda telah keluar dari akun.",
                icon: "success"
            }).then(() => {
                if (callback) callback();
            });
        }
    });
}

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success ",
        cancelButton: "btn btn-danger",
        
    },
    buttonsStyling: true
});

export function AlertDelete(callback) {
    swalWithBootstrapButtons.fire({
        title: "Apakah Anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Tidak, batalkan!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Dihapus!",
                text: "Data telah berhasil dihapus.",
                icon: "success"
            }).then(() => {
                if (callback) callback();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Dibatalkan",
                text: "Data Anda tetap aman.",
                icon: "error"
            });
        }
    });
}

export function AlertSimpan() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil disimpan",
        showConfirmButton: false,
        timer: 1500
    });
}

export function AlertEdit(callback) {
    Swal.fire({
        title: "Apakah Anda Akan Menyimpan Perubahan?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Simpan",
        denyButtonText: "Jangan Simpan"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Disimpan!", "", "success").then(() => {
                if (typeof callback === 'function') {  // Pastikan callback adalah fungsi
                    callback();
                }
            });
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
}

export function AlertKirim(callback) {
    Swal.fire({
        title: "Apakah Anda Akan Mengirim Pemberitahuan?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Kirim",
        denyButtonText: "Jangan Kirim"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Dikirim!", "", "success").then(() => {
                if (callback) callback();
            });
        } else if (result.isDenied) {
            Swal.fire("Pemberitahuan Tidak Dikirim", "", "info");
        }
    });
}