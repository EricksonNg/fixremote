control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_EVT_ANY, function () {
	
})
radio.setGroup(158)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (input.buttonIsPressed(Button.B)) {
            radio.sendString("GO")
            basic.showIcon(IconNames.House)
        } else {
            radio.sendString("R")
            basic.showIcon(IconNames.Sad)
        }
    } else {
        if (input.buttonIsPressed(Button.B)) {
            radio.sendString("L")
            basic.showIcon(IconNames.Duck)
        } else {
            radio.sendString("STOP")
            basic.showIcon(IconNames.SmallSquare)
        }
    }
})
