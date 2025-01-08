# React Native CSkeleton

A customizable and lightweight skeleton loading component for React Native. Perfect for displaying placeholder content while data is being loaded. Enhance your app's user experience with smooth, animated skeleton screens.

![Demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3VhazB3bDMyYWpmazlmY3F6NWR5cWw0ZjFndDdianp5eWRoaGg4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/om8qATl2vYp35WetwF/giphy.gif) <!-- Add a demo GIF if possible -->

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
import React from "react";
import { View, Text } from "react-native";
import CSkeleton from "react-native-cskeleton";

const App = () => {
  return (
    <CSkeleton.Root isLoading={true}>
      <CSkeleton.Element>
        <View style={{ width: 100, height: 100, backgroundColor: "#ccc" }} />
      </CSkeleton.Element>
      <CSkeleton.Element>
        <Text>Hello</Text>
      </CSkeleton.Element>
    </CSkeleton.Root>
  );
};

export default App;
```

In this example:

- `CSkeleton.Root` controls the skeleton loading state with the isLoading.
- `CSkeleton.Element` creates a skeleton placeholder for the child component.

You can customize the skeleton's appearance by passing a style prop to CSkeleton.Element. For example:

```javascript
<CSkeleton.Element style={{ borderRadius: 10, backgroundColor: "#e0e0e0" }}>
  <View style={{ width: 200, height: 100 }} />
</CSkeleton.Element>
```

## API Documentation

`CSkeleton.Root`

The root component that controls the skeleton loading state.

| Prop             | Type        | Optional | Default | Description                                                          |
| ---------------- | ----------- | -------- | ------- | -------------------------------------------------------------------- |
| `isLoading`      | `boolean`   | `false`  | `false` | Whether the skeleton loading is active.                              |
| `children`       | `ReactNode` | `false`  | `null`  | The child component to be rendered.                                  |
| `hasData`        | `boolean`   | `true`   | `false` | Whether the data is available.                                       |
| `emptyComponent` | `ReactNode` | `true`   | `null`  | Component to render when no data is available.                       |
| `emptyText`      | `String`    | `true`   | `null`  | Text to render when no data is available and emptyComponent is null. |

`CSkeleton.Element`

The skeleton placeholder component.

| Prop       | Type           | Optional | Default | Description                             |
| ---------- | -------------- | -------- | ------- | --------------------------------------- |
| `children` | `ReactElement` | `false`  | `null`  | The child component to be skeletonized. |
| `style`    | `ViewStyle`    | `true`   | `null`  | Custom styles for the skeleton.         |

## Example

```javascript
<CSkeleton.Root isLoading={false} hasData={true} emptyText={'No data'} emptyComponent={<YourEmptyComponent />}>
  <CSkeleton.Element>
    <View style={{ width: 100, height: 100, backgroundColor: "#ccc" }} />
  </CSkeleton.Element>
  <CSkeleton.Element>
    <Text>Hello</Text>
  </CSkeleton.Element>
</CSkeleton.Root>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you find this package useful, please consider giving it a ⭐️ on GitHub. Your support is greatly appreciated!