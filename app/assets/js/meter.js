/*
jquery.percentageloader.js 
 
Copyright (c) 2015, David Jeffrey & Piotr Kwiatkowski
All rights reserved.

This jQuery plugin is licensed under the Simplified BSD License. Please
see the file license.txt that was included with the plugin bundle.

*/

(function() {
      "use strict";
    /*jslint browser: true */

    var imageLoaded = false;
    /* Our spiral gradient data */
    //var imgdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM4RjdFNzQ5MzAyMTFFMUFFQTdENUVDNDUwOEI2RUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4RjdFNzU5MzAyMTFFMUFFQTdENUVDNDUwOEI2RUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzhGN0U3MjkzMDIxMUUxQUVBN0Q1RUM0NTA4QjZFRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzhGN0U3MzkzMDIxMUUxQUVBN0Q1RUM0NTA4QjZFRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv4BSzoAAA+OSURBVHja1F1bkutK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",
    var imgdata = "data:image/png;base64,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",
        gradient = new Image();

    gradient.src = imgdata;
    gradient.addEventListener('load', function() {
       imageLoaded = true;
    });


    window.PercentageLoader = function(el, params) {
      var settings, canvas, percentageText, valueText, items, i, item, selectors, s, ctx, progress,
            value, cX, cY, lingrad, innerGrad, tubeGrad, innerRadius, innerBarRadius, outerBarRadius,
            radius, startAngle, endAngle, counterClockwise, completeAngle, setProgress, setValue,
            applyAngle, drawLoader, clipValue, outerDiv, ready, plugin;

        plugin = this;

        /* Specify default settings */
        settings = {
            width: 256,
            height: 256,
            progress: 0,
            value: '0',
            controllable: false
        };

        /* Override default settings with provided params, if any */
        if (params !== undefined) {
            var prop;
            for (prop in settings) {
                if (settings.hasOwnProperty(prop) && !params.hasOwnProperty(prop)) {
                    params[prop] = settings[prop];
                }
            }
        } else {
            params = settings;
        }

        outerDiv = document.createElement('div');
        outerDiv.style.width = settings.width + 'px';
        outerDiv.style.height = settings.height + 'px';
        outerDiv.style.position = 'relative';

        el.appendChild(outerDiv);

        /* Create our canvas object */
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', settings.width);
        canvas.setAttribute('height', settings.height);
        outerDiv.appendChild(canvas);

        /* Create div elements we'll use for text. Drawing text is
         * possible with canvas but it is tricky working with custom
         * fonts as it is hard to guarantee when they become available
         * with differences between browsers. DOM is a safer bet here */
        percentageText = document.createElement('div');
        percentageText.style.width = (settings.width.toString() - 2) + 'px';
        percentageText.style.textAlign = 'center';
        percentageText.style.height = '50px';
        percentageText.style.left = 0;
        percentageText.style.position = 'absolute';

        valueText = document.createElement('div');
        valueText.style.width = (settings.width - 2).toString() + 'px';
        valueText.style.textAlign = 'center';
        valueText.style.height = '0px';
        valueText.style.overflow = 'hidden';
        valueText.style.left = 0;
        valueText.style.position = 'absolute';

        /* Force text items to not allow selection */
        items = [valueText, percentageText];
        for (i  = 0; i < items.length; i += 1) {
            item = items[i];
            selectors = [
                '-webkit-user-select',
                '-khtml-user-select',
                '-moz-user-select',
                '-o-user-select',
                'user-select'];

            for (s = 0; s < selectors.length; s += 1) {
                item.style[selectors[s]] = 'none';
            }
        }

        /* Add the new dom elements to the containing div */
        outerDiv.appendChild(percentageText);
        outerDiv.appendChild(valueText);

        /* Get a reference to the context of our canvas object */
        ctx = canvas.getContext("2d");


        /* Set various initial values */

        /* Centre point */
        cX = (canvas.width / 2) - 1;
        cY = (canvas.height / 2) - 1;

        /* Create our linear gradient for the outer ring */
        lingrad = ctx.createLinearGradient(cX, 0, cX, canvas.height);
        //lingrad.addColorStop(0, '#d6eeff');
        //lingrad.addColorStop(1, '#b6d8f0');
        
        lingrad.addColorStop(0, '#FFFFFF');
        lingrad.addColorStop(1, '#FFFFFF');

        /* Create inner gradient for the outer ring */
        innerGrad = ctx.createLinearGradient(cX, cX * 0.133333, cX, canvas.height - cX * 0.133333);
        //innerGrad.addColorStop(0, '#f9fcfe');
        //innerGrad.addColorStop(1, '#d9ebf7');
        
        innerGrad.addColorStop(0, '#FFFFFF');
        innerGrad.addColorStop(1, '#FFFFFF');

        /* Tube gradient (background, not the spiral gradient) */
        tubeGrad = ctx.createLinearGradient(cX, 0, cX, canvas.height);
        //tubeGrad.addColorStop(0, '#c1dff4');
        //tubeGrad.addColorStop(1, '#aacee6');
        
        tubeGrad.addColorStop(0, '#dbe3f0');
        tubeGrad.addColorStop(1, '#dbe3f0');

        /* The inner circle is 2/3rds the size of the outer one */
        innerRadius = cX * 0.6666;
        /* Outer radius is the same as the width / 2, same as the centre x
        * (but we leave a little room so the borders aren't truncated) */
        radius = cX - 5;

        /* Calculate the radii of the inner tube */
        innerBarRadius = innerRadius + (cX * 0.06);
        outerBarRadius = radius - (cX * 0.06);

        /* Bottom left angle */
        startAngle = 2.1707963267949;
        /* Bottom right angle */
        endAngle = 0.9707963267949 + (Math.PI * 2.0);

        /* Nicer to pass counterClockwise / clockwise into canvas functions
        * than true / false */
        counterClockwise = false;

        /* Borders should be 1px */
        ctx.lineWidth = 1;

        /**
         * Little helper method for transforming points on a given
         * angle and distance for code clarity
         */
        applyAngle = function (point, angle, distance) {
            return {
                x : point.x + (Math.cos(angle) * distance),
                y : point.y + (Math.sin(angle) * distance)
            };
        };


        /**
         * render the widget in its entirety.
         */
        drawLoader = function () {
            /* Clear canvas entirely */
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            /*** IMAGERY ***/

            /* draw outer circle */
            ctx.fillStyle = lingrad;
            ctx.beginPath();
            //ctx.strokeStyle = '#b2d5ed';
            ctx.strokeStyle = '#FFFFFF';
            ctx.arc(cX, cY, radius, 0, Math.PI * 2, counterClockwise);
            ctx.fill();
            ctx.stroke();

            /* draw inner circle */
            ctx.fillStyle = innerGrad;
            ctx.beginPath();
            ctx.arc(cX, cY, innerRadius, 0, Math.PI * 2, counterClockwise);
            ctx.fill();
            //ctx.strokeStyle = '#b2d5edaa';
            ctx.strokeStyle = '#FFFFFF';
            ctx.stroke();

            ctx.beginPath();

            /**
             * Helper function - adds a path (without calls to beginPath or closePath)
             * to the context which describes the inner tube. We use this for drawing
             * the background of the inner tube (which is always at 100%) and the
             * progress meter itself, which may vary from 0-100% */
            function makeInnerTubePath(startAngle, endAngle) {
                var centrePoint, startPoint, controlAngle, capLength, c1, c2, point1, point2;
                centrePoint = {
                    x : cX,
                    y : cY
                };

                startPoint = applyAngle(centrePoint, startAngle, innerBarRadius);

                ctx.moveTo(startPoint.x, startPoint.y);

                point1 = applyAngle(centrePoint, endAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, endAngle, outerBarRadius);

                controlAngle = endAngle + (3.142 / 2.0);
                /* Cap length - a fifth of the canvas size minus 4 pixels */
                capLength = (cX * 0.20) - 4;

                c1 = applyAngle(point1, controlAngle, capLength);
                c2 = applyAngle(point2, controlAngle, capLength);

                ctx.arc(cX, cY, innerBarRadius, startAngle, endAngle, false);
                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point2.x, point2.y);
                ctx.arc(cX, cY, outerBarRadius, endAngle, startAngle, true);

                point1 = applyAngle(centrePoint, startAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, startAngle, outerBarRadius);

                controlAngle = startAngle - (3.142 / 2.0);

                c1 = applyAngle(point2, controlAngle, capLength);
                c2 = applyAngle(point1, controlAngle, capLength);

                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point1.x, point1.y);
            }

            /* Background tube */
            ctx.beginPath();
            //ctx.strokeStyle = '#bcd4e5';
            ctx.strokeStyle = '#bcd4e5';
            makeInnerTubePath(startAngle, endAngle);

            ctx.fillStyle = tubeGrad;
            ctx.fill();
            ctx.stroke();

            /* Calculate angles for the the progress metre */
            completeAngle = startAngle + (progress * (endAngle - startAngle));

            ctx.beginPath();
            makeInnerTubePath(startAngle, completeAngle);

            /* We're going to apply a clip so save the current state */
            ctx.save();
            /* Clip so we can apply the image gradient */
            ctx.clip();

            /* Draw the spiral gradient over the clipped area */
            ctx.drawImage(gradient, 0, 0, canvas.width, canvas.height);

            /* Undo the clip */
            ctx.restore();

            /* Draw the outline of the path */
            ctx.beginPath();
            makeInnerTubePath(startAngle, completeAngle);
            ctx.stroke();

            /*** TEXT ***/
            (function () {
                var fontSize, stringval, string, smallSize, heightRemaining, score;
                /* Calculate the size of the font based on the canvas size */
                fontSize = cX / 2;

                percentageText.style.top = ((settings.height / 2) - (fontSize / 2)).toString() + 'px';
                percentageText.style.color = '#80a9c8';
                percentageText.style.font = fontSize.toString() + 'px BebasNeueRegular';
                percentageText.style.textShadow = '0 1px 1px #FFFFFF';

                /* Calculate the text for the given percentage */
                stringval = (progress * 100.0).toFixed(0);
                string = stringval + '%';
                

                    if(stringval < 50)
                        score = "Low Score";
                    else if(stringval < 75)
                        score = "Medium Medium";
                    else
                        score = "High Score";

                
                percentageText.innerHTML = string + "<div style='font-size:2.3rem;color:#ff0058;'>"+ score +"</div>";

                /* Calculate font and placement of small 'value' text */
                smallSize = cX / 5.5;
                valueText.style.color = '#80a9c8';
                valueText.style.font = smallSize.toString() + 'px BebasNeueRegular';
                valueText.style.height = smallSize.toString() + 'px';
                valueText.style.textShadow = 'None';

                /* Ugly vertical align calculations - fit into bottom ring.
                 * The bottom ring occupes 1/6 of the diameter of the circle */
                heightRemaining = (settings.height * 0.16666666) - smallSize;
                valueText.style.top = ((settings.height * 0.8333333) + (heightRemaining / 4)).toString() + 'px';
            }());
        };

        /**
        * Check the progress value and ensure it is within the correct bounds [0..1]
        */
        clipValue = function () {
            if (progress < 0) {
                progress = 0;
            }

            if (progress > 1.0) {
                progress = 1.0;
            }
        };

        /* Sets the current progress level of the loader
         *
         * @param value the progress value, from 0 to 1. Values outside this range
         * will be clipped
         */
        setProgress = function (value) {
            /* Clip values to the range [0..1] */
            progress = value;
            clipValue();
            drawLoader();
        };

        this.setProgress = setProgress;

        setValue = function (val) {
            value = val;
            valueText.innerHTML = value;
        };

        ready = function(fn) {
            if (imageLoaded) {
                fn();
            } else {
                gradient.addEventListener('load', fn);
            }
        };

        this.setValue = setValue;
        this.setValue(settings.value);

        this.loaded = ready;

        progress = settings.progress;
        clipValue();

        /* Do an initial draw */
        drawLoader();


        /* In controllable mode, add event handlers */
        if (params.controllable === true) {
            (function () {
                var mouseDown, getDistance, adjustProgressWithXY;
                getDistance = function (x, y) {
                    return Math.sqrt(Math.pow(x - cX, 2) + Math.pow(y - cY, 2));
                };

                mouseDown = false;

                adjustProgressWithXY = function (x, y) {
                    /* within the bar, calculate angle of touch point */
                    var pX, pY, angle, startTouchAngle, range, posValue;
                    pX = x - cX;
                    pY = y - cY;

                    angle = Math.atan2(pY, pX);
                    if (angle > Math.PI / 2.0) {
                        angle -= (Math.PI * 2.0);
                    }

                    startTouchAngle = startAngle - (Math.PI * 2.0);
                    range = endAngle - startAngle;
                    posValue = (angle - startTouchAngle) / range;
                    setProgress(posValue);

                    if (params.onProgressUpdate !== undefined) {
                        /* use the progress value as this will have been clipped
                         * to the correct range [0..1] after the call to setProgress
                         */
                        params.onProgressUpdate.call(plugin, progress);
                    }
                };

                outerDiv.addEventListener('mousedown', function (e) {
                    var offset, x, y, distance;
                    offset = this.getBoundingClientRect();
                    x = e.pageX - offset.left;
                    y = e.pageY - offset.top;

                    distance = getDistance(x, y);

                    if (distance > innerRadius && distance < radius) {
                        mouseDown = true;
                        adjustProgressWithXY(x, y);
                    }
                });

                outerDiv.addEventListener('mouseup', function () {
                    mouseDown = false;
                });

                outerDiv.addEventListener('mousemove', function (e) {
                    var offset, x, y;
                    if (mouseDown) {
                        offset = this.getBoundingClientRect();
                        x = e.pageX - offset.left;
                        y = e.pageY - offset.top;
                        adjustProgressWithXY(x, y);
                    }
                });

                outerDiv.addEventListener('mouseleave', function (e) {
                    mouseDown = false;
                });
            }());
        }

        return this;
    }
})();

// If jQuery is available, define this as a jQuery plugin
if (typeof jQuery !== 'undefined') {
    /*global jQuery */
    (function ($) {
        /* Strict mode for this plugin */

        /** Percentage loader
         * @param    params    Specify options in {}. May be on of width, height, progress or value.
         *
         * @example $("#myloader-container).percentageLoader({
                width : 256,  // width in pixels
                height : 256, // height in pixels
                progress: 0,  // initialise progress bar position, within the range [0..1]
                value: '0kb'  // initialise text label to this value
            });
         */
        $.fn.percentageLoader = function (params) {
            return this.each(function () {
                if (!$.data(this, 'dj_percentageloader')) {
                    $.data(this, 'dj_percentageloader', new PercentageLoader(this, params));
                } else {
                    var plugin = $.data(this, 'dj_percentageloader');
                    if (params['value'] !== undefined) {
                        plugin.setValue(params['value']);
                    }

                    if (params['progress'] !== undefined) {
                        plugin.setProgress(params['progress']);
                    }

                    if (params['onready'] !== undefined) {
                        plugin.loaded(params['onready']);
                    }
                }
            });
        };
    }(jQuery));
}
