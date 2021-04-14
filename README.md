# Aperture Components

Your one stop shop for (relativley) custom UI components.

## Setup

The only way to currently import Aperture Components into your project is through the cdn:

```html
<script src="https://cdn.jsdelivr.net/gh/Aperture-Media/Aperture-Components@56879fb3f95f0995654ce08021e7cef021aa5905/dist/main.min.js"></script>
```

## Usage

Simply just look for the tag name of the component you want use and place it in your markup like so:

```html
<am-navbar>
  <am-nav-item link="#" logo>Logo</am-nav-item>
</am-navbar>
```

## Components

---

### Note: All components are prefixed with 'am-' even if it is not specified in the definition you still have to use this prefix.

---

### Navbar

Tag: 

```html
<am-navbar></am-navbar>
```

Children:

- Nav Item

Variables:

```css
:root {
  --am-primary: var(--your-colors);
  --am-secondary: var(--your-colors);
  --am-accent: var(--your-colors);
}
```

### Nav Item

Tag: 

```html
<am-nav-item></am-nav-item>
```

Variables:

```css
:root {
  --am-primary: var(--your-colors);
  --am-secondary: var(--your-colors);
  --am-accent: var(--your-colors);
}
```

Attributes:

- `logo`:
  - type: `Boolean`
  - desc: when set it becomes more prominent inside of the navbar
  - Note: only meant to be used once per navbar element
- `link`:
  - type: `String`
  - desc: makes the component an anchor element and specifies where it links to