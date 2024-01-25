import axios from "axios";

const consumer_key: string = "axioOaWgT8LBwX4ZjfzmG7yEsIpX7N1h";
const consumer_secret: string = "V5CTiNxJi4xo6hcP";
const url: string =
  "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
const shortCode = "600978";
const auth: string =
  "Basic " +
  Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

axios
  .get(url, { headers: { Authorization: auth } })
  .then((response) => {
    console.log(response.data.access_token);
  })
  .catch((error) => {
    console.log(error);
  });

const data = {
  ShortCode: shortCode,
  ResponseType: "Completed",
  ConfirmationURL: "https://boss1-dairy.web.app/viewCustomers",
  ValidationURL: "https://boss1-dairy.web.app/editCustomers",
};
axios
  .post(url, data, { headers: { Authorization: "Bearer " + access_token } })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const Newdata = {
  ShortCode: shortCode,
  CommandID: "CustomerPayBillOnline",
  Amount: "1",
  Msisdn: "254708374149",
  BillRefNumber: "TEST",
};

axios
  .post(url, Newdata, { headers: { Authorization: "Bearer " + access_token } })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
