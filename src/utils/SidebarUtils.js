import ChartPieSlice from "../assests/ChartPieSlice.png"

export const favEnums = [
    { key: "overview", label: "Overview" },
    { key: "projects", label: "Projects" },
]

export const dashboardEnums = [
    {key: "default", label: "Default", icon: ChartPieSlice},
    {key: "eCommerce", label: "eCommerce", icon: ChartPieSlice},
    {key: "projects", label: "Projects", icon: ChartPieSlice},
    {key: "onlineCourses", label: "Online Courses", icon: ChartPieSlice},
]

export const pagesEnums = [
    {key: "userProfile", label: "User Profile", icon: "user", hasChildren: true, children: [
        {key: "overview", label: "Overview"},
        {key: "projects", label: "Projects"},
        {key: "campaigns", label: "Campaigns"},
        {key: "documents", label: "Documents"},
        {key: "followers", label: "Followers"}
    ]},
    {key: "account", label: "Account", icon: "account"},
    {key: "corporate", label: "Corporate", icon: "corporate"},
    {key: "blog", label: "Blog", icon: "blog"},
    {key: "social", label: "Social", icon: "social"}
]
