basic.forever(function () {
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            if (y == 0 || y == x) {
                led.plot(2 - (x - y), 2 + y)
                if (2 - (x - y) == 2 && 2 + y == 2) {
                    continue;
                }
                led.plot(2 + y, 2 - (x - y))
            }
        }
        basic.pause(200)
    }
})
