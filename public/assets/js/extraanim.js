window.onload = function() {

            /* --- config start --- */

            var starfieldCanvasId     = "starfieldCanvas", // id of the canvas to use
                framerate             = 30,                // frames per second this animation runs at (this is not exact)
                numberOfStarsModifier = 5.0,               // Number of stars, higher numbers have performance impact
                flightSpeed           = 0.02;              // speed of the flight, the higher this number the faster

            /* ---- config end ---- */

            var canvas        = document.getElementById(starfieldCanvasId),
                context       = canvas.getContext("2d"),
                width         = canvas.width,
                height        = canvas.height,
                numberOfStars = width * height / 1000 * numberOfStarsModifier,
                dirX          = width / 2,
                dirY          = height / 2,
                stars         = [],
                TWO_PI        = Math.PI * 2;

            // initialize starfield
            for(var x = 0; x < numberOfStars; x++) {
                stars[x] = {
                    x: range(0, width),
                    y: range(0, height),
                    size: range(0, 1)
                };
            }

            // when mouse moves over canvas change middle point of animation

            // start tick at specified fps
//             window.setInterval(tick, Math.floor(1000 / framerate));

            // main routine
            function tick() {
                var oldX,
                    oldY;

                // reset canvas for next frame
                context.clearRect(0, 0, width, height);

                for(var x = 0; x < numberOfStars; x++) {
                    // save old status
                    oldX = stars[x].x;
                    oldY = stars[x].y;

                    // calculate changes to star
                    stars[x].x += (stars[x].x - dirX) * stars[x].size * flightSpeed;
                    stars[x].y += (stars[x].y - dirY) * stars[x].size * flightSpeed;
                    stars[x].size += flightSpeed;

                    // if star is out of bounds, reset
                    if(stars[x].x < 0 || stars[x].x > width || stars[x].y < 0 || stars[x].y > height) {
                        stars[x] = {
                            x: range(0, width),
                            y: range(0, height),
                            size: 0
                        };
                    }

                    // draw star
                    context.strokeStyle = "rgba(255, 255, 255, " + Math.min(stars[x].size, 1) + ")";
                    context.lineWidth = stars[x].size;
                    context.beginPath();
                    context.moveTo(oldX, oldY);
                    context.lineTo(stars[x].x, stars[x].y);
                    context.stroke();
                }
            }

            // get a random number inside a range
            function range(start, end) {
                return Math.random() * (end - start) + start;
            }
        };