let Kompasrichting = 0
basic.forever(function () {
    Kompasrichting = input.compassHeading()
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showString("W")
    }
    if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showString("Z")
    }
    if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
})
