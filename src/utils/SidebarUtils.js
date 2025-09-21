import ChartPieSlice from "../assets/ChartPieSlice.png";
import ShoppingBagOpen from "../assets/ShoppingBagOpen.png";
import FolderNotch from "../assets/FolderNotch.png";
import BookOpen from "../assets/BookOpen.png";
import IdentificationBadge from "../assets/IdentificationBadge.png";
import IdentificationCard from "../assets/IdentificationCard.png";
import UsersThree from "../assets/UsersThree.png";
import Notebook from "../assets/Notebook.png";
import ChatsTeardrop from "../assets/ChatsTeardrop.png";

export const favEnums = [
  { key: "overview", label: "Overview" },
  { key: "projects", label: "Projects" },
];

export const dashboardEnums = [
  { key: "default", label: "Default", icon: ChartPieSlice },
  { key: "eCommerce", label: "eCommerce", icon: ShoppingBagOpen },
  { key: "projects", label: "Projects", icon: FolderNotch },
  { key: "onlineCourses", label: "Online Courses", icon: BookOpen },
];

export const pagesEnums = [
  {
    key: "userProfile",
    label: "User Profile",
    icon: IdentificationBadge,
    hasChildren: true,
    children: [
      { key: "overview", label: "Overview" },
      { key: "projects", label: "Projects" },
      { key: "campaigns", label: "Campaigns" },
      { key: "documents", label: "Documents" },
      { key: "followers", label: "Followers" },
    ],
  },
  { key: "account", label: "Account", icon: IdentificationCard },
  { key: "corporate", label: "Corporate", icon: UsersThree },
  { key: "blog", label: "Blog", icon: Notebook },
  { key: "social", label: "Social", icon: ChatsTeardrop },
];

// RightSidebar Data Enums
export const notificationsData = [
  {
    key: "bug1",
    text: "You have a bug that needs...",
    timestamp: "Just now",
    icon: "bug",
  },
  {
    key: "newUser",
    text: "New user registered",
    timestamp: "59 minutes ago",
    icon: "user",
  },
  {
    key: "bug2",
    text: "You have a bug that needs...",
    timestamp: "12 hours ago",
    icon: "bug",
  },
  {
    key: "subscription",
    text: "Andi Lane subscribed to you",
    timestamp: "Today, 11:59 AM",
    icon: "subscription",
  },
];

export const activitiesData = [
  {
    key: "activity1",
    text: "You have a bug that needs...",
    timestamp: "Just now",
    avatar: { initials: "A", gradient: "from-blue-400 to-blue-600", hasOnlineIndicator: true },
  },
  {
    key: "activity2",
    text: "Released a new version",
    timestamp: "59 minutes ago",
    avatar: { initials: "B", gradient: "from-purple-400 to-purple-600" },
  },
  {
    key: "activity3",
    text: "Submitted a bug",
    timestamp: "12 hours ago",
    avatar: { initials: "C", gradient: "from-pink-400 to-pink-600" },
  },
  {
    key: "activity4",
    text: "Modified A data in Page X",
    timestamp: "Today, 11:59 AM",
    avatar: { initials: "D", gradient: "from-indigo-400 to-indigo-600" },
  },
  {
    key: "activity5",
    text: "Deleted a page in Project X",
    timestamp: "Feb 2, 2023",
    avatar: { initials: "E", gradient: "from-orange-400 to-orange-600" },
  },
];

export const contactsData = [
  { key: "contact1", name: "Natali Craig", initials: "NC", gradient: "from-gray-400 to-gray-600" },
  { key: "contact2", name: "Drew Cano", initials: "DC", gradient: "from-red-400 to-red-600" },
  { key: "contact3", name: "Orlando Diggs", initials: "OD", gradient: "from-yellow-400 to-yellow-600" },
  { key: "contact4", name: "Andi Lane", initials: "AL", gradient: "from-green-400 to-green-600" },
  { key: "contact5", name: "Kate Morrison", initials: "KM", gradient: "from-teal-400 to-teal-600" },
  { key: "contact6", name: "Koray Okumus", initials: "KO", gradient: "from-cyan-400 to-cyan-600" },
];
