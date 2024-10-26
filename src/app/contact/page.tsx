// "use client";
// import React from "react";

// const Contact = () => {
//   interface DemoDataType {
//     id: string; // Change to string if the ID is a string
//     name: string;
//     roll: number;
//     registrationNumber: string;
//     additionalInfo: string;
//   }

//   const data: DemoDataType[] = [
//     {
//       id: "1828err", // Enclosed in quotes
//       name: "rudra",
//       roll: 21,
//       registrationNumber: "REG001",
//       additionalInfo: "Information about Rudra",
//     },
//     {
//       id: "2kd2k233", // Enclosed in quotes
//       name: "tapu",
//       roll: 22,
//       registrationNumber: "REG002",
//       additionalInfo: "Information about Tapu",
//     },
//     {
//       id: "333", // Enclosed in quotes
//       name: "dugan",
//       roll: 23,
//       registrationNumber: "REG003",
//       additionalInfo: "Information about Dugan",
//     },
//     {
//       id: "kkdkk4", // Enclosed in quotes
//       name: "sita",
//       roll: 24,
//       registrationNumber: "REG004",
//       additionalInfo: "Information about Sita",
//     },
//     {
//       id: "5weieid3", // Enclosed in quotes
//       name: "gita",
//       roll: 25,
//       registrationNumber: "REG005",
//       additionalInfo: "Information about Gita",
//     },
//   ];

//   return (
//     <div>
//       {/* Parent container with grid classes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {data.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="p-3 bg-yellow-300 text-black font-[600]"
//             >
//               <h1>{item.name}</h1>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button className="p-2 pl-4 pr-4 rounded-md font-[600] bg-orange-400 text-black">
//           View
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// "use client";
// import React from "react";
// import Link from "next/link";
// // import { notFound } from "next/navigation";

// const Contact = () => {
//   interface DemoDataType {
//     id: string;
//     name: string;
//     roll: number;
//     registrationNumber: string;
//     additionalInfo: string;
//   }

//   const data: DemoDataType[] = [
//     {
//       id: "1828err8ee",
//       name: "rudra",
//       roll: 21,
//       registrationNumber: "REG001",
//       additionalInfo: "Information about Rudra",
//     },
//     {
//       id: "2kd2k233",
//       name: "tapu",
//       roll: 22,
//       registrationNumber: "REG002",
//       additionalInfo: "Information about Tapu",
//     },
//     {
//       id: "333",
//       name: "dugan",
//       roll: 23,
//       registrationNumber: "REG003",
//       additionalInfo: "Information about Dugan",
//     },
//     {
//       id: "kkdkk4",
//       name: "sita",
//       roll: 24,
//       registrationNumber: "REG004",
//       additionalInfo: "Information about Sita",
//     },
//     {
//       id: "5weieid3",
//       name: "gita",
//       roll: 25,
//       registrationNumber: "REG005",
//       additionalInfo: "Information about Gita",
//     },
//   ];

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="p-3 bg-yellow-300 text-black font-[600]"
//           >
//             <h1>{item.name}</h1>
//             <Link href={`/contact/${item.id}`}>
//               <button className="mt-2 p-2 pl-4 pr-4 rounded-md font-[600] bg-orange-400 text-black">
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface DemoDataType {
  id: string;
  name: string;
  roll: number;
  registrationNumber: string;
  additionalInfo: string;
}

const data: DemoDataType[] = [
  {
    id: "1828err8ee",
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

const Contact = () => {
  const [contacts, setContacts] = useState<DemoDataType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate an API call that might fail
    const fetchData = () => {
      try {
        // Simulate an error condition (e.g., 20% chance of error)
        if (Math.random() < 0.2) {
          throw new Error("Failed to fetch contacts");
        }
        setContacts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      }
    };

    fetchData();
  }, []);

  if (error) {
    throw error; // This will trigger the nearest error boundary
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contacts.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-yellow-300 text-black font-[600]"
          >
            <h1>{item.name}</h1>
            <Link href={`/contact/${item.id}`}>
              <button className="mt-2 p-2 pl-4 pr-4 rounded-md font-[600] bg-orange-400 text-black">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
