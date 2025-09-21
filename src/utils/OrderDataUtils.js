export const ordersData = Array.from({ length: 50 }, (_, i) => {
  const statuses = [
    { text: "In Progress", color: "#8A8CD9" },
    { text: "Complete", color: "#4AA785" },
    { text: "Pending", color: "#59A8D4" },
    { text: "Approved", color: "#FFC555" },
    { text: "Rejected", color: "#1C1C1C66" },
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
  ];

  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const names = [
    "Natali Craig",
    "Kate Morrison",
    "Drew Cano",
    "Orlando Diggs",
    "Andi Lane",
    "Mia Reed",
    "Ethan Clark",
    "Sophia Turner",
    "Liam Johnson",
    "Emma Scott",
    "Noah Lewis",
    "Olivia Hall",
    "Mason Walker",
    "Ava Allen",
    "Lucas Young",
    "Isabella King",
    "James Wright",
    "Amelia Adams",
    "Benjamin Baker",
    "Harper Rivera",
  ];

  const projects = [
    "Landing Page",
    "CRM Admin Pages",
    "Client Project",
    "Admin Dashboard",
    "E-commerce Website",
    "Mobile App UI",
    "Portfolio Website",
    "Analytics Tool",
    "Internal CRM",
    "Marketing Dashboard",
  ];

  const addresses = [
    "Meadow Lane Oakland",
    "Larry San Francisco",
    "Bagwell Avenue Ocala",
    "Washburn Baton Rouge",
    "Nest Lane Olivette",
    "Pine Street Austin",
    "Cedar Lane Denver",
    "Broadway New York",
    "River Road Miami",
    "Hilltop Drive Dallas",
  ];

  // Predefine human-readable date + timeline pairs
  const now = new Date();
  const dateOptions = [
    { label: "Just now", ts: now.getTime() },
    { label: "A minute ago", ts: now.getTime() - 60 * 1000 },
    { label: "5 minutes ago", ts: now.getTime() - 5 * 60 * 1000 },
    { label: "30 minutes ago", ts: now.getTime() - 30 * 60 * 1000 },
    { label: "1 hour ago", ts: now.getTime() - 60 * 60 * 1000 },
    { label: "3 hours ago", ts: now.getTime() - 3 * 60 * 60 * 1000 },
    { label: "Yesterday", ts: now.getTime() - 24 * 60 * 60 * 1000 },
    { label: "2 days ago", ts: now.getTime() - 2 * 24 * 60 * 60 * 1000 },
    { label: "Sep 15, 2023", ts: new Date("2023-09-15").getTime() },
    { label: "Aug 3, 2023", ts: new Date("2023-08-03").getTime() },
    { label: "Jul 21, 2023", ts: new Date("2023-07-21").getTime() },
    { label: "Jun 11, 2023", ts: new Date("2023-06-11").getTime() },
    { label: "May 29, 2023", ts: new Date("2023-05-29").getTime() },
    { label: "Apr 10, 2023", ts: new Date("2023-04-10").getTime() },
    { label: "Mar 5, 2023", ts: new Date("2023-03-05").getTime() },
    { label: "Feb 2, 2023", ts: new Date("2023-02-02").getTime() },
    { label: "Dec 25, 2022", ts: new Date("2022-12-25").getTime() },
    { label: "Nov 18, 2022", ts: new Date("2022-11-18").getTime() },
    { label: "Oct 2, 2022", ts: new Date("2022-10-02").getTime() },
    { label: "Jan 1, 2022", ts: new Date("2022-01-01").getTime() },
  ];

  const datePick = dateOptions[i % dateOptions.length];

  return {
    id: `#CM98${String(i + 1).padStart(2, "0")}`,
    user: {
      name: names[i % names.length],
      avatar: avatars[i % avatars.length],
    },
    project: projects[i % projects.length],
    address: addresses[i % addresses.length],
    date: datePick.label,
    status: randomStatus,
    timeline: datePick.ts,
  };
});
