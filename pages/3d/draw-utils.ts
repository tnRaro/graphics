import {
  float2, float3,
  cross
} from "./mathematics";
export const getBarycentric = ([x0, x1, x2]: float3, [y0, y1, y2]: float3, [px, py]: float2): float3 => {
  const u: float2 = [x1 - x0, y1 - y0];
  const v: float2 = [x0 - x2, y0 - y2];
  const area = cross(u, v);
  const w1 = cross([px - x0, py - y0], v) / area;
  const w2 = cross([px - x1, py - y1], u) / area;
  const w0 = 1 - w1 - w2;
  return [w0, w1, w2];
}