input.onButtonPressed(Button.A, function () {
    robotbit.GeekServo(robotbit.Servos.S1, -50)
    robotbit.GeekServo(robotbit.Servos.S2, -50)
    robotbit.GeekServo(robotbit.Servos.S3, -50)
    robotbit.GeekServo(robotbit.Servos.S4, -50)
    robotbit.GeekServo(robotbit.Servos.S5, -50)
    robotbit.GeekServo(robotbit.Servos.S6, -50)
    robotbit.GeekServo(robotbit.Servos.S7, -50)
    robotbit.GeekServo(robotbit.Servos.S8, -50)
})
input.onButtonPressed(Button.B, function () {
    robotbit.GeekServo(robotbit.Servos.S1, 290)
    robotbit.GeekServo(robotbit.Servos.S2, 290)
    robotbit.GeekServo(robotbit.Servos.S3, 290)
    robotbit.GeekServo(robotbit.Servos.S4, 290)
    robotbit.GeekServo(robotbit.Servos.S5, 290)
    robotbit.GeekServo(robotbit.Servos.S6, 290)
    robotbit.GeekServo(robotbit.Servos.S7, 290)
    robotbit.GeekServo(robotbit.Servos.S8, 290)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let angle = -60; angle <= 300; angle++) {
        robotbit.GeekServo(robotbit.Servos.S1, angle)
        robotbit.GeekServo(robotbit.Servos.S2, angle)
        robotbit.GeekServo(robotbit.Servos.S3, angle)
        robotbit.GeekServo(robotbit.Servos.S4, angle)
        robotbit.GeekServo(robotbit.Servos.S5, angle)
        robotbit.GeekServo(robotbit.Servos.S6, angle)
        robotbit.GeekServo(robotbit.Servos.S7, angle)
        robotbit.GeekServo(robotbit.Servos.S8, angle)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
