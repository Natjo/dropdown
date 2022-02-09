
# Dropdown

![version](https://img.shields.io/github/manifest-json/v/Natjo/dropdown)

see mdn : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
## Usage

### html
```html
<div class="dropdown">
    <button id="dropdown-more_links" class="summary" aria-haspopup="menu" aria-expanded="false" aria-controls="more_links">More links</button>
    <div class="panel" role="menu" aria-labelledby="dropdown-more_links">
        <div class="panel-content">
            <ul>
                <li><a href="">Lorem ipsum dolor sit</a></li>
                <li><a href="">Quos molestiae numquam</a></li>
                <li><a href="">Fcusantium perferendis</a></li>
                <li><a href="">Quasi nam vel</a></li>
            </ul>
        </div>
    </div>
</div>
```

### javascript
```javascript
import dropdown from './modules/dropdown/dropdown';
dropdown(document.querySelector(".dropdown"));
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/ZZrBMg)
