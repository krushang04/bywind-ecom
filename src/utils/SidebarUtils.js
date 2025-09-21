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
  { key: "default", label: "Default", icon: ChartPieSlice, isHighlighted: true },
  { key: "eCommerce", label: "eCommerce", icon: ShoppingBagOpen, isHighlighted: false },
  { key: "projects", label: "Projects", icon: FolderNotch, isHighlighted: false },
  { key: "onlineCourses", label: "Online Courses", icon: BookOpen, isHighlighted: false },
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
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    key: "activity2",
    text: "Released a new version",
    timestamp: "59 minutes ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
  {
    key: "activity3",
    text: "Submitted a bug",
    timestamp: "12 hours ago",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
  },
  {
    key: "activity4",
    text: "Modified A data in Page X",
    timestamp: "Today, 11:59 AM",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
  },
  {
    key: "activity5",
    text: "Deleted a page in Project X",
    timestamp: "Feb 2, 2023",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
  },
];

export const contactsData = [
  {
    key: "contact1",
    name: "Natali Craig",
    initials: "NC",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=40&h=40&fit=crop&crop=face", // Female
  },
  {
    key: "contact2",
    name: "Drew Cano",
    initials: "DC",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face", // Male
  },
  {
    key: "contact3",
    name: "Orlando Diggs",
    initials: "OD",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face", // Male
  },
  {
    key: "contact4",
    name: "Andi Lane",
    initials: "AL",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face", // Female
  },
  {
    key: "contact5",
    name: "Kate Morrison",
    initials: "KM",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face", // Female
  },
  {
    key: "contact6",
    name: "Koray Okumus",
    initials: "KO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face", // Male
  },
];
