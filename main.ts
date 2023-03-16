basic.forever(function () {
    music.setVolume(12)
    music.playMelody("E B C5 A B G A F ", 120)
    music.rest(music.beat(BeatFraction.Breve))
})
