import Table from "./table";
import fetchData from "./data";
import { useMemo, useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";

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
        const mpesaResult = await axios.get("https://your-azure-function-url");
        console.log(mpesaResult.data);
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
