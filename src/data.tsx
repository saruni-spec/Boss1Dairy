import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const fetchData = async () => {
  type Entry = {
    phoneNumber: string;
    name: string;
    location: string;
    balance: number;
  };

  const data: Entry[] = [];

  const querySnapshot = await getDocs(collection(db, "CustomerDetails"));
  querySnapshot.forEach((doc) => {
    console.log("doc.data()");
    const entry = {
      phoneNumber: doc.data().phoneNumber,
      name: doc.data().name,
      location: doc.data().location,
      balance: 40,
    };

    data.push(entry);
  });
  console.log("data[0]");
  return data;
};

export default fetchData;
