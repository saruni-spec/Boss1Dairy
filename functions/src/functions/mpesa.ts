import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import axios from "axios";

export async function mpesa(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const consumerKey = "yourConsumerKey";
  const consumerSecret = "yourConsumerSecret";
  const url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

  const auth =
    "Basic " +
    Buffer.from(consumerKey + ":" + consumerSecret).toString("base64");

  try {
    const response = await axios.get(url, { headers: { Authorization: auth } });
    return { body: response.data };
  } catch (error) {
    context.log(`Error calling M-Pesa API: ${error.message}`);
    return {
      status: 500,
      body: `Error calling M-Pesa API: ${error.message}`,
    };
  } 
}

app.http("mpesa", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: mpesa,
});
