# XYZ Icon Set for Vue

Official Vue components package for icons from [XYZ Icon Set](https://github.com/bartaxyz/xyz-icon-set).

List of icons available at [XYZ Icon Set Website](https://ondrejbarta.xyz/pet-projects/xyz-icon-set)

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
import XYZIconSet from 'xyz-icon-set-vue';

const { PaperPlaneIcon } = XYZIconSet;
```



## Icon Component Reference

```jsx
import XYZIconSet from 'xyz-icon-set-vue';

const { PaperPlaneIcon } = XYZIconSet;

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

Either `regular` or `thin`.

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


## License

XYZ Icon Set is licensed under the MIT License.


## Authors

Ondřej Bárta &middot; [website](https://ondrejbarta.xyz) &middot; [twitter](https://twitter.com/bartaxyz)
