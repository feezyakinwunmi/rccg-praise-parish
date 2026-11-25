// Pastors of The Praise Parish and the parishes under Lagos Province 132.
//
// To add a pastor, copy the example at the bottom of this file into the list,
// put their photos in /public, and fill in the fields. Leave out anything you
// do not have: every field after `category` is optional except `image`.

export type PastorCategory = "headquarters" | "branch" | "past";

export interface Pastor {
  id: string;
  name: string;
  /** Name the congregation uses, e.g. "P.S" */
  known?: string;
  spouse?: string;
  role: string;
  category: PastorCategory;
  /** Parish they lead, e.g. "RCCG Grace Parish" */
  parish: string;
  location?: string;
  /** e.g. "Since 2015" or "2004 to 2012" */
  years?: string;
  /** Card photo: a photo of the couple works well */
  image: string;
  imagePosition?: string;
  /** Extra photos shown in the profile, e.g. one of each spouse */
  photos?: { src: string; caption: string }[];
  bio: string[];
  focus?: string[];
  phone?: string;
  email?: string;
}

export const categoryLabels: Record<PastorCategory, string> = {
  headquarters: "Headquarters",
  branch: "Branch pastors",
  past: "Past pastors",
};

export const categoryIntro: Record<PastorCategory, string> = {
  headquarters: "Pastoral leadership at The Praise Parish, Lagos Province 132 headquarters.",
  branch: "Pastors leading the parishes under Lagos Province 132.",
  past: "Pastors who served the parish and the province before.",
};

export const pastors: Pastor[] = [
  {
    id: "sina-and-peace-alabi",
    name: "Pastor Sina Alabi",
    known: "P.S",
    spouse: "Pastor Mrs. Peace Alabi",
    role: "Senior pastor",
    category: "headquarters",
    parish: "RCCG The Praise Parish",
    location: "Ora Estate, Epe",
    image: "/mpps.jpg",
    imagePosition: "center 25%",
    photos: [
      { src: "/ps.jpg", caption: "Pastor Sina Alabi" },
      { src: "/mp1.jpg", caption: "Pastor Mrs. Peace Alabi" },
    ],
    bio: [
      "Pastor Sina Alabi, known around the parish as P.S, leads The Praise Parish and teaches God's Word. He has more than 15 years in ministry, and a heart for people who do not yet know Christ.",
      "Pastor Mrs. Peace Alabi serves alongside him as associate pastor, through pastoral care, counselling and ministry to women.",
    ],
    focus: ["Teaching", "Evangelism", "Pastoral care", "Counselling", "Women's ministry"],
  },

  // Example: copy this block, remove the // marks and fill it in.
  // {
  //   id: "firstname-lastname",
  //   name: "Pastor Firstname Lastname",
  //   spouse: "Pastor Mrs. Firstname Lastname",
  //   role: "Parish pastor",
  //   category: "branch",            // "headquarters", "branch" or "past"
  //   parish: "RCCG Name of Parish",
  //   location: "Area, Epe",
  //   years: "Since 2018",
  //   image: "/photo-of-couple.jpg",
  //   bio: ["A sentence or two about them."],
  //   focus: ["Youth", "Prayer"],
  //   phone: "+234 800 000 0000",
  // },
];
