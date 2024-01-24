import Table from "./table";
import fetchData from "./data";
import { useMemo, useState, useEffect } from "react";
import Layout from "./Layout";

const ViewCustomers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
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

  return (
    <Layout>
      <Table columns={columns} data={data} />
    </Layout>
  );
};

export default ViewCustomers;
