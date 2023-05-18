import { getAllItems } from "@/database";
import { NextResponse } from "next/server";

import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 600 });

interface ParamsData {
  params: {
    type: string;
  };
}

export async function GET(request: Request, { params }: ParamsData) {
  switch (params.type) {
    case "getAll":
      const cachedData = cache.get("allProds");

      if (cachedData) {
        return NextResponse.json(cachedData);
      } else {
        const allProds = await getAllItems({
          path: "products",
        });

        cache.set("allProds", allProds);

        return NextResponse.json(allProds);
      }
    default:
      return NextResponse.json({ message: "ok" });
  }
}
