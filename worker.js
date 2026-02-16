
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

// A simple MCP-style dispatcher.
async function handleMCPRequest(body) {
  const { method, params } = body;

  switch (method) {
    case "compute_triangle_area":
      return { 
        result: triangleArea(params.side1, params.side2, params.side3) 
      };
    
    case "compute_polygon_area":
      return { 
        result: polygonArea(params.sideCount, params.sideLength) 
      };
    
    case "compute_circle_area":
      return { 
        result: circleArea(params.radius) 
      };

    case "compute_circumference":
      return { 
        result: circumference(params.radius) 
      };

    case "compute_circle_segment_area_from_height_and_parent_circle_radius":
      return { 
        result: segmentAreaFromHeightAndRadius(params.height, params.radius) 
      };
    
    case "compute_circle_segment_area_from_height_and_chord_length":
      return { 
        result: segmentAreaFromHeightAndChord(params.height, params.chordLength) 
      };
    
    case "compute_circle_segment_area_from_chord_length_and_parent_circle_radius":
      return { 
        result: segmentAreaFromChordAndRadius(params.radius, params.chordLength) 
      };
    
    case "compute_cone_surface_area":
      return { 
        result: coneSurface(params.radius, params.height) 
      };
    
    case "compute_sphere_volume":
      return { 
        result: sphereVolume(params.radius) 
      };

    case "compute_spherical_cap_volume":
      return {
        result: capVolume(params.radius, params.height)
      };
    
    case "compute_cone_volume":
      return {
        result: coneVolume(params.radius, params.height)
      };

    case "compute_pyramid_volume":
      return {
        result: pyramidVolume(params.sideCount, params.baseEdgeLength, params.height)
      };

    case "compute_frustum_pyramid_volume":
      return {
        result: frustumPyramidVolume(params.sideCount, params.baseEdgeLength, params.topEdgeLength, params.height)
      };

    case "compute_frustum_cone_volume":
      return {
        result: frustumConeVolume(params.baseRadius, params.topRadius, params.height)
      };

    case "compute_tetrahedron_volume":
      return { 
        result: tetrahedronVolume(params.edge) 
      };
      
    default:
      return {
        error: `Unknown method: ${method}`
      };
  }
}

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response(
        "Geometry MCP server running on Cloudflare Workers",
        { status: 200 }
      );
    }

    try {
      const body = await request.json();
      const response = await handleMCPRequest(body);

      return new Response(JSON.stringify(response), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
};
