# XYZ Icon Set for Vue

Official Vue components package for icons from [XYZ Icon Set](https://github.com/bartaxyz/xyz-icon-set).

### 

## Usage

### Installation with NPM

```bash
npm install xyz-icon-set-vue
```

### Importing icon from a package

> Note: Examples are shown with ES6 syntax

You can import icons selectively by its name with suffix "Icon" (to prevent variable name collisions and misuse of keywords in cases such as `return` or `copy` icons).

```typescript
import { PaperPlaneIcon } from 'xyz-icon-set-vue';
```



## Icon Component Reference

```jsx
import { PaperPlaneIcon } from 'xyz-icon-set-vue';

export default {
    components: { PaperPlaneIcon },
};
```

```html
<template>
    <div>
        <PaperPlaneIcon />
    </div>
</template>
```



### Properties

#### `theme`

Either `regular` or `thin`. For icon visual reference, visit [XYZ Icon Set Website](https://ondrejbarta.xyz/xyz-icon-set).

**Default value: `regular`**

```jsx
<template>
    <div>
        <PaperPlaneIcon /> <!-- Theme defaults to "regular" -->
        <PaperPlaneIcon theme="regular" />
        <PaperPlaneIcon theme="thin" />
    </div>
</template>
```



#### `fillOpacity`

Opacity of the transparent fill inside of the icon. Accepts values between `0` and `1`. It is not recommended to use higher values than `0.5` as it could break the legibility and recognizability of the icon.

**Default value: `0`**

```jsx
<template>
    <div>
        <PaperPlaneIcon /> <!-- Fill opacity defaults to 0 -->
        <PaperPlaneIcon fillOpacity="0.25" />
        <PaperPlaneIcon fillOpacity="0.5" />
    </div>
</template>
```
