import type React from "react";
import {
  FigmaIcon,
  ArcIcon,
  FramerIcon,
  GoogleIcon,
  GithubIcon,
  ChatGPTIcon,
  SlackIcon,
  AirtableIcon,
  MondayIcon,
  LoomIcon,
  IntercomIcon,
  DiscordIcon,
} from "../../components/Common/icon";

export interface AppData {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface CategoryData {
  name: string;
  apps: AppData[];
}

export const appCategories: CategoryData[] = [
  {
    name: "Design",
    apps: [
      {
        name: "Figma",
        icon: <FigmaIcon />,
        description:
          "Leading collaborative design tool for building meaningful products.",
      },
      {
        name: "Arc",
        icon: <ArcIcon />,
        description:
          "Experience a calmer, more personal internet in this browser designed for you.",
      },
      {
        name: "Framer",
        icon: <FramerIcon />,
        description: "Tool is where teams design and publish stunning sites.",
      },
    ],
  },
  {
    name: "Engineering",
    apps: [
      {
        name: "Google",
        icon: <GoogleIcon />,
        description:
          "Tools are designed to help you quickly and securely sign in to the apps",
      },
      {
        name: "Github",
        icon: <GithubIcon />,
        description: "Platform that provides hosting for software development.",
      },
      {
        name: "Chat GPT",
        icon: <ChatGPTIcon />,
        description:
          "Gain insights, automate tasks, and witness the future of AI.",
      },
    ],
  },
  {
    name: "Collaboration",
    apps: [
      {
        name: "Slack",
        icon: <SlackIcon />,
        description:
          "Messaging and collaboration platform designed for teams and workplaces.",
      },
      {
        name: "Airtable",
        icon: <AirtableIcon />,
        description:
          "Cloud-based platform for creating and sharing relational databases.",
      },
      {
        name: "Monday",
        icon: <MondayIcon />,
        description:
          "Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
      },
      {
        name: "Loom",
        icon: <LoomIcon />,
        description:
          "Tool that helps you get your message across through shareable videos.",
      },
      {
        name: "Intercom",
        icon: <IntercomIcon />,
        description:
          "Customer messaging platform that helps businesses communicate.",
      },
      {
        name: "Discord",
        icon: <DiscordIcon />,
        description:
          "Communication platform designed for creating communities.",
      },
    ],
  },
];
