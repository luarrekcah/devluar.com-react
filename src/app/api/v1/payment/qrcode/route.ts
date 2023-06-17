import { NextResponse } from "next/server";
import { getItems, setItem } from "@/database";
import { genQrCode } from "@/utils/payments";

export async function GET(request: Request) {
    return NextResponse.json({"message": "ok"});
}

export async function POST(request: Request) {
    const data: any = await request.json()

    if (data.email === "" || !data.email || data.prodId === "" || !data.prodId) {
        return new Response(`Missing data\n\n${JSON.stringify(data)}`, {
            status: 404,
          });
    }
  
    const product = await getItems({
      path: `products/${data.prodId}`
    });
  
    const qrdata = await genQrCode({ description: product.desc, value: Number(product.valor) });
  
    setItem({
      path: `payments/qr/${qrdata.id}`,
      params: {
        email: data.email,
        prodId: data.prodId,
        filepath: product.filepath
      },
    });

    return NextResponse.json(qrdata);
}
