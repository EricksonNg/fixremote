control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_EVT_ANY, function () {
	
})
radio.setGroup(158)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("R")
        basic.showIcon(IconNames.Sad)
    }
    if (!(input.buttonIsPressed(Button.A))) {
        radio.sendString("STOP")
        basic.showIcon(IconNames.Chessboard)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Sad)
    }
    if (!(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.TShirt)
    }
})
