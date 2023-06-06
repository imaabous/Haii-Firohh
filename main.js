// JavaScript code
var currentSong = null;

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function playSong(song) {
    if (currentSong !== null) {
        currentSong.pause();
        currentSong = null;
    }

    var audio = new Audio();

    if (song === 'starla') {
        audio.src = 'assets/audio/starla.mp3';
    } else if (song === 'japan') {
        audio.src = 'assets/audio/withyou.mp3';
    } else if (song === 'zero') {
        audio.src = 'assets/audio/zero.mp3';
    }
    // Add more songs here

    audio.play();
    currentSong = audio;

    sessionStorage.setItem('currentSong', song); // Menyimpan status lagu yang sedang diputar
}

window.addEventListener('load', function() {
    var storedSong = sessionStorage.getItem('currentSong');

    if (storedSong) {
        playSong(storedSong); // Memutar lagu yang terakhir dipilih ketika halaman dimuat kembali
    }
});

function showCustomAlert() {
    var message = 'haii firohh';
    alert(message);
    var message2 = 'ini akuhh masih ingat kahh??!';
    alert(message2);
    var message3 = 'jadi gini broo. aku tau tuhan tau kamu gk tau chuakks';
    alert(message3);
    var message4 = 'sorry joks bpak" soalny tongkrongan kami jokes bpak" sudah merajalela';
    alert(message4);
    var message5 = 'jadi gini mohon untuk di isi form yg ntar ak kasih yaa';
    alert(message5);
    var message6 = 'tolong mental di kuatkan ya dek. soalny ini pertanyaan yang sangat amat danger!!!';
    alert(message6);
}

var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", showCustomAlert);
