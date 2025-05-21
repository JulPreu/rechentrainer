function addition () {
    Zahl1 = randint(1, 50)
    Zahl2 = randint(1, 50)
    Aufgabe = "Was ist" + Zahl1 + "+" + Zahl2 + "?"
    Antwort = 0
}
let Zahl2 = 0
let Zahl1 = 0
let Antwort = 0
let Aufgabe = ""
let Rechenart = 0
while (input.pinIsPressed(TouchPin.P2) == false) {
    if (input.buttonIsPressed(Button.B)) {
        Rechenart += 1
    } else if (input.buttonIsPressed(Button.A)) {
        Rechenart += -1
    }
    if (Rechenart > 4 || Rechenart < 1) {
        Rechenart = 1
    }
    if (Rechenart == 1) {
        basic.showString("+")
    } else if (Rechenart == 2) {
        basic.showString("-")
    } else if (Rechenart == 3) {
        basic.showString("*")
    } else if (Rechenart == 4) {
        basic.showString(":")
    }
    basic.pause(500)
}
if (Rechenart == 1) {
    addition()
    basic.showString(Aufgabe)
    while (!(input.pinIsPressed(TouchPin.P2))) {
        if (input.buttonIsPressed(Button.B)) {
            Antwort += 1
            basic.showString("" + (Antwort))
        }
        if (input.buttonIsPressed(Button.A)) {
            Antwort += -1
            basic.showString("" + (Antwort))
        }
        if (input.pinIsPressed(TouchPin.P0)) {
            Antwort += -10
            basic.showString("" + (Antwort))
        }
        if (input.pinIsPressed(TouchPin.P3)) {
            Antwort += 10
            basic.showString("" + (Antwort))
        }
    }
    if (Antwort == Zahl1 + Zahl2) {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.setLedColor(0xff0000)
        basic.showString("Loesung" + (Zahl1 + Zahl2))
        basic.showIcon(IconNames.No)
    }
    basic.pause(1500)
    basic.turnRgbLedOff()
}
