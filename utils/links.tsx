import React from "react";
import { AreaChart, BriefcaseBusiness, ScrollText } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <BriefcaseBusiness />,
  },
  {
    href: "/jobs",
    label: "all jobs",
    icon: <ScrollText />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <AreaChart />,
  },
];

export default links;
