input.onButtonPressed(Button.A, function () {
    robotbit.GeekServo(robotbit.Servos.S1, -50)
    robotbit.GeekServo(robotbit.Servos.S3, -50)
    robotbit.GeekServo(robotbit.Servos.S5, -50)
    robotbit.GeekServo(robotbit.Servos.S7, -50)
})
input.onButtonPressed(Button.B, function () {
    robotbit.GeekServo(robotbit.Servos.S1, 290)
    robotbit.GeekServo(robotbit.Servos.S3, 290)
    robotbit.GeekServo(robotbit.Servos.S5, 290)
    robotbit.GeekServo(robotbit.Servos.S7, 290)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let angle = -60; angle <= 300; angle++) {
        robotbit.GeekServo(robotbit.Servos.S1, angle)
        robotbit.GeekServo(robotbit.Servos.S3, angle)
        robotbit.GeekServo(robotbit.Servos.S5, angle)
        robotbit.GeekServo(robotbit.Servos.S7, angle)
        basic.pause(100)
    }
})
basic.forever(function () {
    robotbit.GeekServo2KG(robotbit.Servos.S1, 180)
})
