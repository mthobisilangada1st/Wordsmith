/* ===============================
   ELEMENT REFERENCES
================================ */
const playlist = document.getElementById("playlist");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const nowPlaying = document.getElementById("nowPlaying");

/* ===============================
   TRACK LIST
================================ */
const tracks = [
  { title: "Thuma Mina (Intro)", file: "01 Thuma Mina Intro.mp3" },
  { title: "Payday", file: "Payday.mp3" },
  { title: "Tony Montana", file: "03 Tony Montana.mp3" },
  { title: "F Mediocre", file: "02 F Mediocre.mp3" },
  { title: "Legacy", file: "01 Legacy.mp3" },
  { title: "Saiyan I", file: "01 Saiyan I.mp3" },
  { title: "Saiyan II", file: "02 Saiyan II.mp3" },
  { title: "TBTB ft Touchline", file: "02. TBTB FT TOUCHLINE.mp3" },
  { title: "With Fire", file: "2. WITH FIRE.mp3" },
  { title: "Saiyan III", file: "03 Saiyan III.mp3" },
  { title: "Simba", file: "04 Mvelo.mp3" },
  { title: "Saiyan IV", file: "04 Saiyan IV.mp3" },
  { title: "00:00 (Twelve AM)", file: "05 Twelve AM.mp3" },
  { title: "DiamondZ", file: "06 DIAMONDz_ft_R.J..mp3" },
  { title: "TEN (ShadyElilak)", file: "07 TEN.mp3" },
  { title: "Toast", file: "07. TOAST.mp3" },
  { title: "Kush!", file: "08. kush!.mp3" },
  { title: "Reflections", file: "09. REFLECTIONS.mp3" },
  { title: "Mind vs Heart", file: "10. MvH.mp3" },
  { title: "Avengers Freestyle", file: "Avengers Freestyle.mp3" }
];

/* ===============================
   STATE
================================ */
let currentTrackIndex = 0;

/* ===============================
   SHUFFLE PLAYLIST (ONCE)
================================ */
tracks.sort(() => Math.random() - 0.5);

/* ===============================
   LOAD TRACK
================================ */
function loadTrack(index) {
  playlist.src = tracks[index].file;
  nowPlaying.textContent = `Now Playing: ${tracks[index].title}`;
}

/* ===============================
   INITIAL LOAD
================================ */
loadTrack(currentTrackIndex);

/* ===============================
   NEXT TRACK
================================ */
nextBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  playlist.play();
});

/* ===============================
   PREVIOUS TRACK
================================ */
prevBtn.addEventListener("click", () => {
  currentTrackIndex =
    (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  playlist.play();
});

/* ===============================
   AUTO-PLAY NEXT ON END
================================ */
playlist.addEventListener("ended", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  playlist.play();
});
