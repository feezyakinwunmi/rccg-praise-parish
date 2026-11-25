// The weekly order of service. Every time on the site reads from this list.

export type Weekday = "Sunday" | "Tuesday" | "Wednesday" | "Thursday";

export interface Service {
  id: string;
  day: Weekday;
  title: string;
  /** Short start time for the order of service, e.g. "7:30 am" */
  start: string;
  /** Full time, e.g. "7:30 to 9:00 am" */
  range: string;
  description: string;
  location: string;
  note?: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "early-risers",
    day: "Sunday",
    title: "Early risers service",
    start: "7:30 am",
    range: "7:30 to 9:00 am",
    description:
      "An early morning service to start Sunday in worship.",
    location: "Main sanctuary",
    image: "/ch3.jpg",
  },
  {
    id: "sunday-school",
    day: "Sunday",
    title: "Sunday school",
    start: "8:00 am",
    range: "8:00 to 9:00 am",
    description:
      "Bible teaching and discipleship for all ages.",
    location: "Sunday school hall",
    note: "Runs at the same time as the early risers service",
    image: "/sc.jpg",
  },
  {
    id: "second-service",
    day: "Sunday",
    title: "Second service",
    start: "9:00 am",
    range: "9:00 to 11:00 am",
    description: "Our main Sunday gathering, with worship, prayer and the sermon.",
    location: "Main sanctuary",
    image: "/ch4.jpg",
  },
  {
    id: "believers-class",
    day: "Sunday",
    title: "Baptismal and believers class",
    start: "11:00 am",
    range: "Straight after second service",
    description: "For new believers and for anyone preparing to be baptised.",
    location: "Fellowship hall",
  },
  {
    id: "youth",
    day: "Sunday",
    title: "Youth expression service",
    start: "12:30 pm",
    range: "12:30 to 2:30 pm",
    description: "A service for young people, with contemporary worship and teaching.",
    location: "Youth centre",
    note: "2nd, 3rd and 4th Sundays of the month",
    image: "/youth.jpg",
  },
  {
    id: "bible-study",
    day: "Tuesday",
    title: "Bible study",
    start: "5:00 pm",
    range: "5:00 to 6:00 pm",
    description: "An hour of in-depth Bible teaching.",
    location: "Main sanctuary",
  },
  {
    id: "divine-mercy",
    day: "Wednesday",
    title: "Divine mercy hour",
    start: "8:30 am",
    range: "8:30 to 10:30 am",
    description: "A mid-week morning of prayer for mercy, healing and breakthrough.",
    location: "Main sanctuary",
  },
  {
    id: "moving-mountains",
    day: "Thursday",
    title: "Moving mountains",
    start: "5:00 pm",
    range: "5:00 to 6:00 pm",
    description: "An evening of prayer and fasting.",
    location: "Prayer sanctuary",
  },
];

export const weekdays: Weekday[] = ["Sunday", "Tuesday", "Wednesday", "Thursday"];

export const sundayServices = services.filter((s) => s.day === "Sunday");
export const weekdayServices = services.filter((s) => s.day !== "Sunday");
