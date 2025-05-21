def addition():
    global Zahl1, Zahl2, Aufgabe, Antwort
    Zahl1 = randint(1, 50)
    Zahl2 = randint(1, 50)
    Aufgabe = "" + str(Zahl1) + "+" + str(Zahl2)
    Antwort = 0
Zahl2 = 0
Zahl1 = 0
Antwort = 0
Aufgabe = ""
Rechenart = 0
while input.pin_is_pressed(TouchPin.P2) == False:
    if input.button_is_pressed(Button.B):
        Rechenart += 1
    elif input.button_is_pressed(Button.A):
        Rechenart += -1
    if Rechenart > 4 or Rechenart < 1:
        Rechenart = 1
    if Rechenart == 1:
        basic.show_string("+")
    elif Rechenart == 2:
        basic.show_string("-")
    elif Rechenart == 3:
        basic.show_string("*")
    elif Rechenart == 4:
        basic.show_string(":")
    basic.pause(500)
if Rechenart == 1:
    addition()
    basic.show_string(Aufgabe)
while not (input.pin_is_pressed(TouchPin.P2)):
    if input.button_is_pressed(Button.B):
        Antwort += 1
        basic.show_string("" + str((Antwort)))
    if input.button_is_pressed(Button.A):
        Antwort += -1
        basic.show_string("" + str((Antwort)))
    if input.pin_is_pressed(TouchPin.P0):
        Antwort += -10
        basic.show_string("" + str((Antwort)))
    if input.pin_is_pressed(TouchPin.P3):
        Antwort += 10
        basic.show_string("" + str((Antwort)))
if Antwort == Zahl1 + Zahl2:
    basic.set_led_color(0x00ff00)
    basic.show_icon(IconNames.HAPPY)
else:
    basic.set_led_color(0xff0000)
    basic.show_string("Loesung" + str((Zahl1 + Zahl2)))
    basic.show_icon(IconNames.NO)
basic.pause(1500)
basic.turn_rgb_led_off()
basic.clear_screen()