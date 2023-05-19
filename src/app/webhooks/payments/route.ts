import { getItems } from "@/database";
import { sendProduct } from "@/services/nodemailer";

export async function GET(request: Request) {
  return new Response("Ok", {
    status: 200,
  });
}

export async function POST(request: Request, response: Response) {
  const webhookData: any = request.body;

  if (Object.keys(webhookData).length === 0)
    return new Response("Error", {
      status: 400,
    });

  switch (webhookData.event) {
    case "PAYMENT_CREATED":
      return new Response("Ok", {
        status: 200,
      });
    case "PAYMENT_RECEIVED":
      const payment = webhookData.payment;
      const pdata = await getItems({
        path: `payments/qr/${payment.pixQrCodeId}`,
      });
      console.log(pdata);
      if (pdata) {
        return Promise.resolve(sendProduct(pdata.email, pdata.filepath))
          .then((result: any) => {
            if (result) {
              return new Response("Ok", {
                status: 200,
              });
            } else {
              return new Response("Not found", {
                status: 404,
              });
            }
          })
          .catch((error: any) => {
            console.error(error);
            return new Response("Not found", {
              status: 404,
            });
          });
      } else {
        return new Response("bad request", {
          status: 400,
        });
      }
    default:
      return new Response("Ok", {
        status: 200,
      });
  }
}
