for (let index = 0; index < 2; index++) {
    music.play(music.stringPlayable("E F G A D E D C ", 245), music.PlaybackMode.UntilDone)
}
for (let index = 0; index < 2; index++) {
    music.play(music.stringPlayable("F C5 G - F C5 G - ", 55), music.PlaybackMode.UntilDone)
}
