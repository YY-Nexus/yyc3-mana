"use server"

// 服务端地图配置 - 保护敏感信息
export async function getMapConfig() {
  return {
    provider: "amap",
    apiKey: process.env.AMAP_KEY || "",
    defaultCenter: [116.397428, 39.90923] as [number, number],
    defaultZoom: 10,
  }
}

// 获取地图 API Key（仅服务端使用）
export async function getMapApiKey(): Promise<string> {
  return process.env.AMAP_KEY || ""
}
