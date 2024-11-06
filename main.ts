led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P6, 0)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
