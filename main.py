led.enable(False)

def on_forever():
    pins.digital_write_pin(DigitalPin.P6, 1)
    basic.pause(5000)
    pins.digital_write_pin(DigitalPin.P6, 0)
    for index in range(3):
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P4, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P4, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digital_write_pin(DigitalPin.P2, 0)
basic.forever(on_forever)
