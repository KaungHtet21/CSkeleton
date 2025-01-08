import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";

const CSkeletonContext = createContext<boolean>(false);

interface CSkeletonRootProps {
  isLoading: boolean;
  hasData?: boolean;
  emptyText?: string;
  emptyComponent?: ReactNode;
  children: ReactNode;
}

interface CSkeletonElementProps {
  children: ReactElement;
  style?: ViewStyle;
}

const CSkeleton = {
  Root: ({
    isLoading,
    hasData,
    emptyComponent,
    emptyText,
    children,
  }: CSkeletonRootProps) => {
    if (!isLoading && !hasData) {
      return (
        emptyComponent || (
          <Text style={{ textAlign: "center" }}>{emptyText || "No data"}</Text>
        )
      );
    }

    return (
      <CSkeletonContext.Provider value={isLoading}>
        <View>{children}</View>
      </CSkeletonContext.Provider>
    );
  },

  Element: ({ children, style }: CSkeletonElementProps) => {
    const isLoading = useContext(CSkeletonContext);
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (isLoading) {
        Animated.loop(
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();
      }
    }, [isLoading]);

    const translateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        -Dimensions.get("window").width,
        Dimensions.get("window").width,
      ],
    });

    if (isLoading) {
      return (
        <View
          style={[
            styles.skeleton,
            children.props.style,
            style,
            { backgroundColor: "#e1e1e1" },
          ]}
        >
          <View style={{ opacity: 0 }}>{children}</View>
          <Animated.View
            style={[styles.animatedOverlay, { transform: [{ translateX }] }]}
          />
        </View>
      );
    }
    return children;
  },
};

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: 4,
    overflow: "hidden",
  },
  animatedOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default CSkeleton;
