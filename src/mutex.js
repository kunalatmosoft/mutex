/**
 * @file motionLibrary.js
 * @description A library for basic motion and animation tasks.
@license MIT 
* 
 * MIT License
 * 
 * Copyright (c) 2024 [Your Name or Your Company]
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

/**
 * Moves an element to a specified position.
 * @param {HTMLElement} element - The element to move.
 * @param {number} x - The target x position.
 * @param {number} y - The target y position.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function moveTo(element, x, y, duration) {
    const startX = element.offsetLeft;
    const startY = element.offsetTop;
    const changeX = x - startX;
    const changeY = y - startY;
    const startTime = performance.now();

    function animate() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        element.style.left = startX + changeX * progress + 'px';
        element.style.top = startY + changeY * progress + 'px';

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

/**
 * Fades an element in.
 * @param {HTMLElement} element - The element to fade in.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = '';

    let startTime = performance.now();

    function animate() {
        let currentTime = performance.now();
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);

        element.style.opacity = progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

/**
 * Fades an element out.
 * @param {HTMLElement} element - The element to fade out.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function fadeOut(element, duration) {
    let startTime = performance.now();

    function animate() {
        let currentTime = performance.now();
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);

        element.style.opacity = 1 - progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    }

    animate();
}

/**
 * Scales an element.
 * @param {HTMLElement} element - The element to scale.
 * @param {number} scaleFactor - The factor to scale the element by.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function scale(element, scaleFactor, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `scale(${scaleFactor})`;
}

/**
 * Rotates an element.
 * @param {HTMLElement} element - The element to rotate.
 * @param {number} angle - The angle to rotate the element by (in degrees).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function rotate(element, angle, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `rotate(${angle}deg)`;
}

/**
 * Skews an element.
 * @param {HTMLElement} element - The element to skew.
 * @param {number} xAngle - The angle to skew the element along the X-axis.
 * @param {number} yAngle - The angle to skew the element along the Y-axis.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function skew(element, xAngle, yAngle, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `skew(${xAngle}deg, ${yAngle}deg)`;
}

/**
 * Translates an element.
 * @param {HTMLElement} element - The element to translate.
 * @param {number} x - The distance to translate along the X-axis (in pixels).
 * @param {number} y - The distance to translate along the Y-axis (in pixels).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function translate(element, x, y, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `translate(${x}px, ${y}px)`;
}

/**
 * Changes the background color of an element.
 * @param {HTMLElement} element - The element to change background color of.
 * @param {string} color - The target background color.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeBackgroundColor(element, color, duration) {
    element.style.transition = `background-color ${duration}ms ease`;
    element.style.backgroundColor = color;
}

/**
 * Changes the text color of an element.
 * @param {HTMLElement} element - The element to change text color of.
 * @param {string} color - The target text color.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeTextColor(element, color, duration) {
    element.style.transition = `color ${duration}ms ease`;
    element.style.color = color;
}

/**
 * Sets the width of an element.
 * @param {HTMLElement} element - The element to set width of.
 * @param {string} width - The target width (with units).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function setWidth(element, width, duration) {
    element.style.transition = `width ${duration}ms ease`;
    element.style.width = width;
}

/**
 * Sets the height of an element.
 * @param {HTMLElement} element - The element to set height of.
 * @param {string} height - The target height (with units).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function setHeight(element, height, duration) {
    element.style.transition = `height ${duration}ms ease`;
    element.style.height = height;
}

/**
 * Changes the border color of an element.
 * @param {HTMLElement} element - The element to change border color of.
 * @param {string} color - The target border color.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeBorderColor(element, color, duration) {
    element.style.transition = `border-color ${duration}ms ease`;
    element.style.borderColor = color;
}

/**
 * Blurs an element.
 * @param {HTMLElement} element - The element to blur.
 * @param {number} blurAmount - The amount to blur (in pixels).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function blur(element, blurAmount, duration) {
    element.style.transition = `filter ${duration}ms ease`;
    element.style.filter = `blur(${blurAmount}px)`;
}

/**
 * Brightens an element.
 * @param {HTMLElement} element - The element to brighten.
 * @param {number} brightness - The brightness percentage.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function brighten(element, brightness, duration) {
    element.style.transition = `filter ${duration}ms ease`;
    element.style.filter = `brightness(${brightness}%)`;
}

/**
 * Adds grayscale to an element.
 * @param {HTMLElement} element - The element to add grayscale to.
 * @param {number} percentage - The grayscale percentage.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function grayscale(element, percentage, duration) {
    element.style.transition = `filter ${duration}ms ease`;
    element.style.filter = `grayscale(${percentage}%)`;
}

/**
 * Inverts the colors of an element.
 * @param {HTMLElement} element - The element to invert colors of.
 * @param {number} percentage - The inversion percentage.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function invert(element, percentage, duration) {
    element.style.transition = `filter ${duration}ms ease`;
    element.style.filter = `invert(${percentage}%)`;
}

/**
 * Changes the border radius of an element.
 * @param {HTMLElement} element - The element to change border radius of.
 * @param {string} radius - The target border radius (with units).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeBorderRadius(element, radius, duration) {
    element.style.transition = `border-radius ${duration}ms ease`;
    element.style.borderRadius = radius;
}

/**
 * Changes the opacity of an element.
 * @param {HTMLElement} element - The element to change opacity of.
 * @param {number} opacity - The target opacity value.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeOpacity(element, opacity, duration) {
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = opacity;
}

/**
 * Slides an element to the right.
 * @param {HTMLElement} element - The element to slide.
 * @param {number} distance - The distance to slide (in pixels).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function slideRight(element, distance, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `translateX(${distance}px)`;
}

/**
 * Slides an element to the left.
 * @param {HTMLElement} element - The element to slide.
 * @param {number} distance - The distance to slide (in pixels).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function slideLeft(element, distance, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `translateX(-${distance}px)`;
}

/**
 * Slides an element up.
 * @param {HTMLElement} element - The element to slide.
 * @param {number} distance - The distance to slide (in pixels).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function slideUp(element, distance, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `translateY(-${distance}px)`;
}

/**
 * Slides an element down.
 * @param {HTMLElement} element - The element to slide.
 * @param {number} distance - The distance to slide (in pixels).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function slideDown(element, distance, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `translateY(${distance}px)`;
}

/**
 * Rotates an element around its X-axis.
 * @param {HTMLElement} element - The element to rotate.
 * @param {number} angle - The angle to rotate (in degrees).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function rotateX(element, angle, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `rotateX(${angle}deg)`;
}

/**
 * Rotates an element around its Y-axis.
 * @param {HTMLElement} element - The element to rotate.
 * @param {number} angle - The angle to rotate (in degrees).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function rotateY(element, angle, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `rotateY(${angle}deg)`;
}

/**
 * Rotates an element around its Z-axis.
 * @param {HTMLElement} element - The element to rotate.
 * @param {number} angle - The angle to rotate (in degrees).
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function rotateZ(element, angle, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `rotateZ(${angle}deg)`;
}

/**
 * Flips an element horizontally.
 * @param {HTMLElement} element - The element to flip.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function flipHorizontally(element, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `scaleX(-1)`;
}

/**
 * Flips an element vertically.
 * @param {HTMLElement} element - The element to flip.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function flipVertically(element, duration) {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `scaleY(-1)`;
}

/**
 * Changes the z-index of an element.
 * @param {HTMLElement} element - The element to change z-index of.
 * @param {number} zIndex - The target z-index value.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeZIndex(element, zIndex, duration) {
    element.style.transition = `z-index ${duration}ms ease`;
    element.style.zIndex = zIndex;
}

/**
 * Changes the box shadow of an element.
 * @param {HTMLElement} element - The element to change box shadow of.
 * @param {string} shadow - The target box shadow.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeBoxShadow(element, shadow, duration) {
    element.style.transition = `box-shadow ${duration}ms ease`;
    element.style.boxShadow = shadow;
}

/**
 * Changes the text shadow of an element.
 * @param {HTMLElement} element - The element to change text shadow of.
 * @param {string} shadow - The target text shadow.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function changeTextShadow(element, shadow, duration) {
    element.style.transition = `text-shadow ${duration}ms ease`;
    element.style.textShadow = shadow;
}

// Export the functions for use in other files
export {
    moveTo,
    fadeIn,
    fadeOut,
    scale,
    rotate,
    skew,
    translate,
    changeBackgroundColor,
    changeTextColor,
    setWidth,
    setHeight,
    changeBorderColor,
    blur,
    brighten,
    grayscale,
    invert,
    changeBorderRadius,
    changeOpacity,
    slideRight,
    slideLeft,
    slideUp,
    slideDown,
    rotateX,
    rotateY,
    rotateZ,
    flipHorizontally,
    flipVertically,
    changeZIndex,
    changeBoxShadow,
    changeTextShadow
};