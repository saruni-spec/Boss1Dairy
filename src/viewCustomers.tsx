import Table from "./table";
import fetchData from "./data";
import { useMemo, useState, useEffect } from "react";
import Layout from "./Layout";

const ViewCustomers = () => {
  type Entry = {
    phoneNumber: string;
    name: string;
    location: string;
    balance: number;
  };

  const [data, setData] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);

      try {
        fetch("https://bossbox.azurewebsites.net/api/myFuncs", {
          method: "GET", // or 'POST'
          headers: {
            "Content-Type": "application/json",
            // 'x-functions-key': '<your-functions-key>' // if required
          },
          // body: JSON.stringify(data), // include this line if you're making a POST request
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
          })
          .then((data) => {
            if (!data) {
              throw new Error("No response data!");
            }
            return JSON.parse(data);
          })
          .then((data) => {
            if (data && data.body) {
              console.log(`access is ${data.body}`);
            } else {
              console.log("Unexpected response data structure:", data);
            }
          })
          .catch((error) => {
            console.error("Error from fetch:", error);
          });
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `Error calling M-Pesa Azure Function: ${error.message}`
          );
        } else {
          console.error(`An unexpected error occurred: ${error}`);
        }
      }
    };

    fetchDataAsync();
  }, []);

  console.log(data[0]);

  const columns = useMemo(
    () => [
      { Header: "PhoneNumber", accessor: "phoneNumber" },
      { Header: "Name", accessor: "name" },
      { Header: "Location", accessor: "location" },
      { Header: "Balance", accessor: "balance" },
    ],
    []
  );
  console.log("axios 1");
  useEffect(() => {}, []); // Empty array means this effect runs once on mount and not on updates

  console.log("axios 2");
  return (
    <Layout>
      <Table columns={columns} data={data} />
    </Layout>
  );
};

export default ViewCustomers;
