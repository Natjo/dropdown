
# Dropdown

![version](https://img.shields.io/github/manifest-json/v/Natjo/dropdown)

Not shure of what I want => see disclosure

## Usage

### html
```html
<div class="dropdown">
	<button class="summary" type="button" aria-expanded="false" aria-controls="more_links">More links</button>
	<div id="more_links" class="panel">
		<div class="content">
			<!-- content more_links -->
		</div>
	</div>
</div>
```
### javascript
```javascript
import dropdown from './modules/dropdown/dropdown';
dropdown();
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/ZZrBMg?editors=0011)
