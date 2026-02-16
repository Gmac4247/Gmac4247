
import {
  sin,
        cos,
        tan,
        asin,
        acos,
        atan,
        triangleArea,
        polygonArea,
        circleArea, 
        circumference,
        segmentAreaFromHeightAndRadius,
        segmentAreaFromHeightAndChord,
        segmentAreaFromChordAndRadius,
        coneSurface, 
        sphereVolume, 
        capVolume,
        coneVolume,
        pyramidVolume,
        frustumPyramidVolume,
        frustumConeVolume,
        tetrahedronVolume
} from "./core-geometric-system.mjs";

// This function receives the parsed JSON body from worker.js
// and returns a JSON-serializable result.
export async function handleMCPRequest(body) {
  const { method, params } = body;

  switch (method) {
    case "compute_triangle_area":
      return { 
        ok: true,
        result: triangleArea(params.side1, params.side2, params.side3) 
      };
    
    case "compute_polygon_area":
      return { 
        ok: true,
        result: polygonArea(params.sideCount, params.sideLength) 
      };
    
    case "compute_circle_area":
      return { 
        ok: true,
        result: circleArea(params.radius) 
      };

    case "compute_circumference":
      return { 
        ok: true,
        result: circumference(params.radius) 
      };

    case "compute_circle_segment_area_from_height_and_parent_circle_radius":
      return { 
        ok: true,
        result: segmentAreaFromHeightAndRadius(params.height, params.radius) 
      };
    
    case "compute_circle_segment_area_from_height_and_chord_length":
      return { 
        ok: true,
        result: segmentAreaFromHeightAndChord(params.height, params.chordLength) 
      };
    
    case "compute_circle_segment_area_from_chord_length_and_parent_circle_radius":
      return { 
        ok: true,
        result: segmentAreaFromChordAndRadius(params.radius, params.chordLength) 
      };
    
    case "compute_cone_surface_area":
      return { 
        ok: true,
        result: coneSurface(params.radius, params.height) 
      };
    
    case "compute_sphere_volume":
      return { 
        ok: true,
        result: sphereVolume(params.radius) 
      };

    case "compute_spherical_cap_volume":
      return {
        ok: true,
        result: capVolume(params.radius, params.height)
      };
    
    case "compute_cone_volume":
      return {
        ok: true,
        result: coneVolume(params.radius, params.height)
      };

    case "compute_pyramid_volume":
      return {
        ok: true,
        result: pyramidVolume(params.sideCount, params.baseEdgeLength, params.height)
      };

    case "compute_frustum_pyramid_volume":
      return {
        ok: true,
        result: frustumPyramidVolume(params.sideCount, params.baseEdgeLength, params.topEdgeLength, params.height)
      };

    case "compute_frustum_cone_volume":
      return {
        ok: true,
        result: frustumConeVolume(params.baseRadius, params.topRadius, params.height)
      };

    case "compute_tetrahedron_volume":
      return { 
        ok: true,
        result: tetrahedronVolume(params.edge) 
      };

    default:
      return {
        ok: false,
        error: `Unknown MCP method: ${method}`
      };
  }
}
