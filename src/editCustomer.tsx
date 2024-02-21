import Input from "./input";
import Label from "./label";
import Button from "./button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Layout from "./Layout";

const EditCustomer = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      fetch("https://bossbox.azurewebsites.net/api/Confirmation", {
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
        console.error(`Error calling M-Pesa Azure Function: ${error.message}`);
      } else {
        console.error(`An unexpected error occurred: ${error}`);
      }
    }

    // Read the form data
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    try {
      const docRef = await addDoc(collection(db, "CustomerDetails"), {
        name: formJson.name,
        phoneNumber: formJson.phone,
        location: formJson.location,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Layout>
      <form action="" method="post" className="row g-3" onSubmit={handleSubmit}>
        <Label text="Name" />
        <Input
          name="name"
          placeholder="Name"
          inputType="text"
          defaultValue=""
        />
        <Label text="Phone Numer" />
        <Input
          name="phone"
          placeholder="Phone Number"
          inputType="number"
          defaultValue=""
        />
        <Label text="Location" />
        <Input
          name="location"
          placeholder="Location"
          inputType="text"
          defaultValue=""
        />

        <Button type="submit" buttonName="Update" />
      </form>
    </Layout>
  );
};

export default EditCustomer;
