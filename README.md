## Important dependencies!

```bash
npm install webpack webpack-cli --save-dev
```
```bash
npx webpack
```

### Tagging through CLI
```bash
git tag v1.0.0-alpha
git push origin v1.0.0-alpha
```
### tags prototype
```html
https://cdn.jsdelivr.net/gh/username/repository@version/path/to/file

<script src="https://cdn.jsdelivr.net/gh/myusername/my-library@v1.0.0/dist/my-library.min.js" integrity="sha384-HASH" crossorigin="anonymous"></script>


<script src="https://cdn.jsdelivr.net/gh/kunalatmosoft/mutex@v1.0.0-alpha/dist/mutex.bundle.js"></script>

<script src="https://cdn.jsdelivr.net/gh/myusername/my-library@v1.0.0/dist/my-library.min.js"></script>
```

## Live PROJECT! { MUTEX }

You can view the live demo or documentation of the library [here](https://kunalatmosoft.github.io/mutex/).

### tutorial for Usage
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motion Library Demo</title>
    <style>
        #demoElement {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            top: 50px;
            left: 50px;
            opacity: 0;
        }
    </style>
</head>
<body>

<div id="demoElement"></div>

<script src="https://cdn.jsdelivr.net/gh/kunalatmosoft/mutex@v1.0.0-alpha/dist/mutex.bundle.js"></script><script>
    document.addEventListener('DOMContentLoaded', function() {
        const demoElement = document.getElementById('demoElement');

        // Example usage
        mutex.moveTo(demoElement, 200, 200, 1000);
        setTimeout(() => mutex.fadeIn(demoElement, 1000), 1000);
        setTimeout(() => mutex.scale(demoElement, 1.5, 1000), 2000);
        setTimeout(() => mutex.rotate(demoElement, 45, 1000), 3000);
        setTimeout(() => mutex.skew(demoElement, 30, 20, 1000), 4000);
        setTimeout(() => mutex.translate(demoElement, 100, 100, 1000), 5000);
        setTimeout(() => mutex.changeBackgroundColor(demoElement, 'blue', 1000), 6000);
        setTimeout(() => mutex.changeTextColor(demoElement, 'white', 1000), 7000);
        setTimeout(() => mutex.setWidth(demoElement, '200px', 1000), 8000);
        setTimeout(() => mutex.setHeight(demoElement, '200px', 1000), 9000);
        setTimeout(() => mutex.changeBorderColor(demoElement, 'black', 1000), 10000);
        setTimeout(() => mutex.blur(demoElement, 5, 1000), 11000);
        setTimeout(() => mutex.brighten(demoElement, 150, 1000), 12000);
        setTimeout(() => mutex.grayscale(demoElement, 100, 1000), 13000);
        setTimeout(() => mutex.invert(demoElement, 100, 1000), 14000);
        setTimeout(() => mutex.changeBorderRadius(demoElement, '50%', 1000), 15000);
        setTimeout(() => mutex.changeOpacity(demoElement, 0.5, 1000), 16000);
        setTimeout(() => mutex.slideRight(demoElement, 100, 1000), 17000);
        setTimeout(() => mutex.slideLeft(demoElement, 100, 1000), 18000);
        setTimeout(() => mutex.slideUp(demoElement, 100, 1000), 19000);
        setTimeout(() => mutex.slideDown(demoElement, 100, 1000), 20000);
        setTimeout(() => mutex.rotateX(demoElement, 180, 1000), 21000);
        setTimeout(() => mutex.rotateY(demoElement, 180, 1000), 22000);
        setTimeout(() => mutex.rotateZ(demoElement, 180, 1000), 23000);
        setTimeout(() => mutex.flipHorizontally(demoElement, 1000), 24000);
        setTimeout(() => mutex.flipVertically(demoElement, 1000), 25000);
        setTimeout(() => mutex.changeZIndex(demoElement, 10, 1000), 26000);
        setTimeout(() => mutex.changeBoxShadow(demoElement, '10px 10px 5px gray', 1000), 27000);
        setTimeout(() => mutex.changeTextShadow(demoElement, '2px 2px 5px black', 1000), 28000);
    });
</script>

</body>
</html>
```
