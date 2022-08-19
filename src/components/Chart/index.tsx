import { Canvas, Group, LinearGradient, Path, Skia, useValue, vec, useComputedValue, SkiaValue, useTouchHandler, SkiaMutableValue, add, dist, clamp, runDecay } from '@shopify/react-native-skia';
import React, { useEffect, useMemo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Cursor } from './Cursor';
import { Label } from './Label';
import { getYForX } from './Math';
import { COLORS, getGraph, PADDING } from './Model';

import { styles } from './styles';

export const useGraphTouchHandler = (
  x: SkiaMutableValue<number>,
  y: SkiaValue<number>,
  width: number,
  height: number
) => {
  const translateY = height + PADDING;
  const gestureActive = useValue(false);
  const offsetX = useValue(0);
  const onTouch = useTouchHandler({
    onStart: (pos) => {
      const normalizedCenter = add(
        vec(x.current, y.current),
        vec(0, translateY)
      );
      if (dist(normalizedCenter, pos) < 50) {
        gestureActive.current = true;
        offsetX.current = x.current - pos.x;
      }
    },
    onActive: (pos) => {
      if (gestureActive.current) {
        x.current = clamp(offsetX.current + pos.x, 0, width);
      }
    },
    onEnd: ({ velocityX }) => {
      if (gestureActive.current) {
        gestureActive.current = false;
        runDecay(x, { velocity: velocityX, clamp: [0, width] });
      }
    },
  });
  return onTouch;
};

export function Chart() {
  const window = useWindowDimensions();
  const { width } = window;
  const height = Math.min(window.width, window.height) / 3
  const translateY = height + PADDING;
  const state = useValue({
    next: 0,
    current: 0,
  });
  const transition = useValue(0);
  const graphs = useMemo(() => getGraph(width, height), [width, height]);
  const path = useComputedValue(() => {
    const { current, next } = state.current;
    const start = graphs[current].data.path;
    const end = graphs[next].data.path;
    return end.interpolate(start, transition.current)!;
  }, [state, transition]);

  const x = useValue(0);
  const y = useComputedValue(
    () => getYForX(path.current.toCmds(), x.current),
    [x, path]
    );

  const onTouch = useGraphTouchHandler(x, y, width, height)

  return (
    <View style={styles.chartView}>
      <Canvas style={{ width: width, height: 2 * height + 30 }} onTouch={onTouch}>
        <Group transform={[{ translateY }]}>
          <Path style="stroke"path={path} strokeWidth={4}>
            <LinearGradient 
              start={vec(0, 0)}
              end={vec(width, 0)}
              colors={COLORS}
            />
          </Path>
          <Cursor x={x} y={y} width={width}/>
        </Group>
      </Canvas>
    </View>
  );
}