# React Native CSkeleton

A customizable and lightweight skeleton loading component for React Native. Perfect for displaying placeholder content while data is being loaded. Enhance your app's user experience with smooth, animated skeleton screens.

![Demo](https://media.giphy.com/media/your-demo-gif-url.gif) <!-- Add a demo GIF if possible -->

---

## Features

- **Easy to Use:** Simply wrap your components with `CSkeleton.Root` and `CSkeleton.Element`.
- **Customizable:** Add custom styles to fit your app's design.
- **Smooth Animations:** Built-in shimmer effect for a polished look.
- **Lightweight:** Minimal dependencies and optimized for performance.

---

## Installation

Install the package using npm or yarn:

```bash
npm install react-native-cskeleton
```

or

```bash
yarn add react-native-cskeleton
```

## Usage

To use `react-native-cskeleton`, wrap your components with `CSkeleton.Root` and use `CSkeleton.Element` to create skeleton placeholders. Here's a basic example:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import CSkeleton from 'react-native-cskeleton';

const App = () => {
  return (
    <CSkeleton.Root isLoading={true}>
      <CSkeleton.Element>
        <View style={{ width: 100, height: 100, backgroundColor: '#ccc' }} />
      </CSkeleton.Element>
    </CSkeleton.Root>
  );
};

export default App;
```

By default, `CSkeleton.Element` will create the skeleton loading with the exact style of the children. And if you want to customize the CSkeleton.Element, you can add style prop to `CSkeleton.Element`. Here's a basic example:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import CSkeleton from 'react-native-cskeleton';

const App = () => {
  return (
    <CSkeleton.Root isLoading={true}>
      <CSkeleton.Element style={{width: 200, height: 200}}>
        <View style={{ width: 100, height: 100, backgroundColor: '#ccc' }} />
      </CSkeleton.Element>
    </CSkeleton.Root>
  );
};

export default App;
```