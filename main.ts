basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (20 <= input.temperature() && 25 > input.temperature()) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (25 <= input.temperature() && 31 > input.temperature()) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (31 <= input.temperature() && 35 > input.temperature()) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
