
import {
  computeCircleArea,
  computeCircumference,
  computeSphereVolume,
  computeConeVolume,
  computePyramidVolume
} from "./geometry.js";

// This function receives the parsed JSON body from worker.js
// and returns a JSON-serializable result.
export async function handleMCPRequest(body) {
  const { method, params } = body;

  switch (method) {
    case "compute_circle_area":
      return {
        ok: true,
        result: computeCircleArea(params.radius)
      };

    case "compute_circumference":
      return {
        ok: true,
        result: computeCircumference(params.radius)
      };

    case "compute_sphere_volume":
      return {
        ok: true,
        result: computeSphereVolume(params.radius)
      };

    case "compute_cone_volume":
      return {
        ok: true,
        result: computeConeVolume(params.radius, params.height)
      };

    case "compute_pyramid_volume":
      return {
        ok: true,
        result: computePyramidVolume(params.baseArea, params.height)
      };

    default:
      return {
        ok: false,
        error: `Unknown MCP method: ${method}`
      };
  }
}
