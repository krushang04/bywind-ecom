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
    {key: "userProfile", label: "User Profile", icon: ChartPieSlice, isExapneded: true, childEnums : [
        "Overview", "Projects"
    ]},
    {key: "eCommerce", label: "eCommerce", icon: ChartPieSlice},
    {key: "projects", label: "Projects", icon: ChartPieSlice},
    {key: "onlineCourses", label: "Online Courses", icon: ChartPieSlice},
]
