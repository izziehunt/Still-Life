/**
 * Waypoint — Figma MCP asset URLs (expire after ~7 days; re-export from Figma if needed).
 * Always an object so main.js never bails out if this file fails to load.
 */
window.WAYPOINT_ASSETS = window.WAYPOINT_ASSETS || {};
window.WAYPOINT_ASSETS = Object.assign(window.WAYPOINT_ASSETS, {
  splashBg: "https://www.figma.com/api/mcp/asset/7a7f9e15-6bb0-4aaf-bb61-aba67d551883",
  mapBg: "https://www.figma.com/api/mcp/asset/5bbcd6f1-2466-4275-9e2c-f0a957ac6f3a",
  postcardFront: "https://www.figma.com/api/mcp/asset/b60b24fb-fc41-4025-924d-1f16a2b7bbbd",
  postcardBack: "https://www.figma.com/api/mcp/asset/cb4653e8-144d-41fb-a8df-eb938acdca90",
  planeLarge: "https://www.figma.com/api/mcp/asset/53a2bb76-7c23-4b8a-ae68-c501fd4f9c78",
  planeSmall: "https://www.figma.com/api/mcp/asset/9ab5e38e-d862-4a1e-8f15-016f7ca5e1c9",
  tags: {
    amsterdam: "https://www.figma.com/api/mcp/asset/4e4ffa26-1905-4fbb-9ee6-6a9cf7884720",
    athens: "https://www.figma.com/api/mcp/asset/065bb614-5bd9-41d6-bb12-d56feb453dfe",
    venice: "https://www.figma.com/api/mcp/asset/68d9f7c6-f3c7-4803-95d7-a5e806541d77",
    sydney: "https://www.figma.com/api/mcp/asset/811b21b3-e8ee-4b9a-ae47-bfb03dc369af",
    berlin: "https://www.figma.com/api/mcp/asset/5e2c3e89-3023-4d93-ab8e-46104c08f09e",
    tokyo: "https://www.figma.com/api/mcp/asset/cd98fef8-34ac-4857-b6cb-9b6075a22c77",
    ny: "https://www.figma.com/api/mcp/asset/6458b5d6-1def-4166-aa4d-9f5b646a0123",
    boston: "https://www.figma.com/api/mcp/asset/ecc4a55a-2170-4447-9bfa-c9ee089190e1",
    sanfran: "https://www.figma.com/api/mcp/asset/0b519d9f-6c7c-4b6e-b7f1-ea83240b87db",
    barcelona: "https://www.figma.com/api/mcp/asset/0df16347-dc16-4e54-943c-fa66d4d564c9",
  },
});
