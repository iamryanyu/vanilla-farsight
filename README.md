# Farsight in Vanilla JavaScript

A smooth 3D parallax library forked from [Farsight](https://github.com/OhDeerGames/Farsight-Example) by [OhDeerGames](http://ohdeergames.com/) (jQuery version).

## Demo

See the demo from [CodePen here](https://codepen.io/iamryanyu/pen/JLBBJb/).

## ✌️ How to use

### 1. Include JS files

```js
<script src="js/libs/underscore-min.js"></script>
<script src="js/libs/TweenLite.min.js"></script>
<script src="js/libs/ScrollToPlugin.min.js"></script>
<script src="js/farsight.js"></script>
```

### 2. Include CSS styles

Update the styles (`css/index.css`) as necessary.

### 3. Add HTML markup

```html
<body>
  <header class="header">
    <nav class="menu">
      <a href="#layer1" class="menu__item">1</a>
      <a href="#layer2" class="menu__item">2</a>
      <a href="#layer3" class="menu__item">3</a>
      <a href="#layer4" class="menu__item">4</a>
      <a href="#layer5" class="menu__item">5</a>
      <a href="#layer6" class="menu__item">6</a>
    </nav>
  </header>

  <div class="wrapper">
    <div class="environment">
      <div class="scene">

        <div id="layer1" class="layer" data-depth="0">
          <h1>Layer 1</h1>
        </div>

        <div id="layer2" class="layer" data-depth="500">
          <h1>Layer 2</h1>
        </div>

        <div id="layer3" class="layer" data-depth="1000">
          <h1>Layer 3</h1>
        </div>

        <div id="layer4" class="layer" data-depth="1500">
          <h1>Layer 4</h1>
        </div>

        <div id="layer5" class="layer" data-depth="2000">
          <h1>Layer 5</h1>
        </div>

        <div id="layer6" class="layer" data-depth="2500">
          <h1>Layer 6</h1>
        </div>

      </div>
    </div>
  </div>

  <div class="scene__depth"></div>
</body>
```

## 👊 Todo
- Make it as a npm package.

## 👍  Download, Fork, Commit

If you have any feedback or suggestions, please feel free to leave those over on the Github.

## 👌 License
MIT
