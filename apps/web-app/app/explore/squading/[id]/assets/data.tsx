export const assets = [
  {
    transaction_id: "1234567890abcdef1234567890abcdef12345678",
    address: "0x1234567890123456789012345678901234567890",
    contentType: "text",
    subject: "Meeting Notes",
    text: "Meeting with the team to discuss the new project. We need to finalize the project plan and assign tasks. We also need to discuss the budget and timeline.",
    date: "2023-10-22T09:00:00",
    status: true,
    labels: ["meeting", "work", "important"],
  },
  {
    transaction_id: "2345678901234567890123456789012345678901",
    address: "0x9876543210987654321098765432109876543210",
    contentType: "text",
    subject: "To-Do List",
    text: "1. Send out the meeting agenda. 2. Book a conference room. 3. Prepare a presentation on the new project. 4. Follow up with the team on their tasks.",
    date: "2023-10-22T10:30:00",
    status: true,
    labels: ["work"],
  },
  {
    transaction_id: "3456789012345678901234567890123456789012",
    address: "0x1122334455667788990011223344556677889900",
    contentType: "text",
    subject: "Project Plan",
    text: "The project plan is as follows: 1. Define the project scope and objectives. 2. Identify the project stakeholders. 3. Develop a work breakdown structure. 4. Create a project schedule. 5. Assign resources to the project.",
    date: "2023-04-10T11:45:00",
    status: true,
    labels: ["personal"],
  },
  {
    transaction_id: "4567890123456789012345678901234567890123",
    address: "0x2233445566778899001122334455667788990011",
    contentType: "text",
    subject: "Budget and Timeline",
    text: "The project budget is $10,000. The project timeline is 6 weeks.",
    date: "2023-03-25T13:15:00",
    status: false,
    labels: ["work", "budget"],
  },
  {
    transaction_id: "5678901234567890123456789012345678901234",
    address: "0x3344556677889900112233445566778899001122",
    contentType: "text",
    subject: "Meeting Follow-Up",
    text: "I followed up with the team on their tasks. Everyone is on track and there are no major issues to report.",
    date: "2023-03-10T15:00:00",
    status: false,
    labels: ["meeting", "work", "important"],
  },
  {
    transaction_id: "6789012345678901234567890123456789012345",
    address: "0x4455667788990011223344556677889900112233",
    contentType: "text",
    subject: "Project Update",
    text: "The project is progressing well. We are on track to meet the deadline and the budget.",
    date: "2023-02-15T16:30:00",
    status: true,
    labels: ["work"],
  },
  {
    transaction_id: "7890123456789012345678901234567890123456",
    address: "0x5566778899001122334455667788990011223344",
    contentType: "text",
    subject: "Next Steps",
    text: "The next steps for the project are to: 1. Complete the development of the new feature. 2. Test the new feature.3. Deploy the new feature to production.",
    date: "2023-01-28T17:45:00",
    status: false,
    labels: ["meeting", "work", "important"],
  },
  {
    transaction_id: "8901234567890123456789012345678901234567",
    address: "0x6677889900112233445566778899001122334455",
    contentType: "text",
    subject: "Project Completion",
    text: "The project is complete. The new feature has been developed, tested, and deployed to production.",
    date: "2022-12-20T18:30:00",
    status: true,
    labels: ["personal"],
  },
  {
    transaction_id: "9012345678901234567890123456789012345678",
    address: "0x7788990011223344556677889900112233445566",
    contentType: "text",
    subject: "Project Retrospective",
    text: "The project was a success. We met the deadline and the budget. The team worked well together and there were no major issues. We learned a lot from the project and we will use this knowledge to improve our future projects.",
    date: "2022-11-30T19:15:00",
    status: true,
    labels: ["work", "conference"],
  },
  {
    transaction_id: "10123456789012345678901234567890123456789",
    address: "0x8899001122334455667788990011223344556677",
    contentType: "text",
    subject: "New Project Ideas",
    text: "I have some new ideas for projects that we could work on. I will share these ideas with the team and we will discuss them at our next meeting.",
    date: "2022-11-05T20:30:00",
    status: false,
    labels: ["meeting", "work"],
  },
]

export type Asset = (typeof assets)[number]

export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
    phoneNumber: "(555)555-5555",
    address: "0x5566778899001122334455667788990011223344",
  },
]

export type Contact = (typeof contacts)[number]
