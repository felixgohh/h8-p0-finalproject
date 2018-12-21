var visitors = [];
var genderPengunjung = [];
var male = "<img src='assets/img/male.svg' height='25'>";
var female = "<img src='assets/img/female.png' height='25'>";
var conceptName = $('#gender').find(":selected").text();

function tambah() {
    $('#tampil').empty();
    var nama = $('#nama').val();

    var gender = $('#gender').val();
    visitors.push(nama);
    genderPengunjung.push(gender);
    for (var i = 0; i < visitors.length; i++) {
        if (visitors[i].length === 0) {
            $('#tampil').append("<li> INVALID CUSTOMER </li>")
        }
        else if (genderPengunjung[i] == "M") {
            $('#tampil').append("<li>" + visitors[i] + " " + male + "</li>")
        } else {
            $('#tampil').append("<li>" + visitors[i] + " " + female + "</li>")
        }
    }
}

function hapus() {
    visitors.pop();
    genderPengunjung.pop();

    $('#tampil').empty();

    for (var i = 0; i < visitors.length; i++) {
        if (visitors[i].length === 0) {
            $('#tampil').append("<li> INVALID CUSTOMER </li>")
        }
        else if (genderPengunjung[i] == "M") {
            $('#tampil').append("<li>" + visitors[i] + " " + male + "</li>")
        } else {
            $('#tampil').append("<li>" + visitors[i] + " " + female + "</li>")

        }
    }
}