import React from 'react';
import { Dimensions, View } from 'react-native';
import { Canvas, Fill, Text, useClockValue, useComputedValue, useDerivedValue, useValue, vec, Vertices } from '@shopify/react-native-skia';
import cdt2d from 'cdt2d'
import { Triangles } from './Triangles';
import { createNoise2D } from 'simplex-noise'
import Alea from 'alea'

const { width, height } = Dimensions.get("window");
const N = 3;
const n = new Array(N + 1).fill(0).map((_, i) => i);
const hSize = width / N
const vSize = height / N;
const AX = hSize * 0.45;
const AY = vSize * 0.45
const F = 5000;
const palette = ["#61dafb", "#fb61da", "#dafb61", "#61fbcf", "#61dafb", "#fb61da", "#dafb61", "#61fbcf", "#61dafb", "#fb61da", "#dafb61", "#61fbcf"]
palette.sort(() => Math.random() - 0.5)

const defaultVertices = n.map((col) => n.map((row) => vec(col * hSize, row * vSize))).flat()

const triangles = cdt2d(defaultVertices.map(({x, y}) => [x, y]))
const indices = triangles.flat()

const colors = indices.map((i) => palette[i % palette.length])

export function GenZ() {
  const clock = useClockValue()
  const vertices = useComputedValue(() => defaultVertices.map(({x, y}, i) => {
    const noise = createNoise2D(Alea(i))
    const isEdge = x === 0 || y === 0 || x === width || y === height;

    if (isEdge) {
      return { x, y }
    }

    return {
      x: x + AX * noise(clock.current / F, 0),
      y: y + AY * noise(0, clock.current / F),
    }
  }), [clock])
  return (
    <Canvas style={{ width, height }}>
      <Fill color="white" />
      <Vertices vertices={vertices} indices={indices} colors={colors}></Vertices>
    </Canvas>
  );
}