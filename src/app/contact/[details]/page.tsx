// import React from "react";

// export async function generateStaticParams() {
//   const advertisementIds = ["1", "2", "3", "4", "5"]; // Example IDs

//   return advertisementIds.map((details) => ({
//     details: details,
//   }));
// }

// const staticdata = () => {
//   return (
//     <div>
//       <h1>here all your static data been rendered</h1>
//     </div>
//   );
// };

// export default staticdata;

import { notFound } from "next/navigation";

interface DemoDataType {
  id: string;
  name: string;
  roll: number;
  registrationNumber: string;
  additionalInfo: string;
}

const data: DemoDataType[] = [
  {
    id: "1828err8",
    name: "rudra",
    roll: 21,
    registrationNumber: "REG001",
    additionalInfo: "Information about Rudra",
  },
  {
    id: "2kd2k233",
    name: "tapu",
    roll: 22,
    registrationNumber: "REG002",
    additionalInfo: "Information about Tapu",
  },
  {
    id: "333",
    name: "dugan",
    roll: 23,
    registrationNumber: "REG003",
    additionalInfo: "Information about Dugan",
  },
  {
    id: "kkdkk4",
    name: "sita",
    roll: 24,
    registrationNumber: "REG004",
    additionalInfo: "Information about Sita",
  },
  {
    id: "5weieid3",
    name: "gita",
    roll: 25,
    registrationNumber: "REG005",
    additionalInfo: "Information about Gita",
  },
];

export async function generateStaticParams() {
  // Use the IDs from the data array
  return data.map((item) => ({
    details: item.id,
  }));
}

async function getContactDetails(id: string) {
  // Find the contact with the matching ID
  return data.find((item) => item.id === id) || null;
}

export default async function ContactDetailsPage({
  params,
}: {
  params: { details: string };
}) {
  const contact = await getContactDetails(params.details);

  if (!contact) {
    notFound();
  }

  return (
    <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Contact Details</h1>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">ID:</span> {contact.id}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {contact.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Roll:</span> {contact.roll}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Registration Number:</span>{" "}
          {contact.registrationNumber}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Additional Info:</span>{" "}
          {contact.additionalInfo}
        </p>
      </div>
    </div>
  );
}
