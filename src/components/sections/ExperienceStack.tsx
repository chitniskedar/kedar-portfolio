import { motion } from "motion/react";
import {
  Wrench, Book
} from "lucide-react";

import Container from "../layout/Container";
import { Section } from "../layout/Section";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

type TimelineItem = {
  year: string;
  title: string;
  place: string;
};

type LogoTile = {
  name: string;
  iconUrl: string;
  iconClassName?: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2025 - Present",
    title: "PES University, Bengaluru",
    place: "Bachelor of Technology",
  },
  {
    year: "2023 - 2025",
    title: "Allen Career Institute",
    place: "JEE and PU Education",
  },
  {
    year: "Until 2023",
    title: "VVS Sardar Patel High School",
    place: "Primary schooling and SSLC",
  },
];

const techStack: LogoTile[] = [
  {
    name: "C",
    iconUrl: "https://skillicons.dev/icons?i=c",
  },
  {
    name: "C++",
    iconUrl: "https://skillicons.dev/icons?i=cpp",
  },
  {
    name: "JavaScript",
    iconUrl: "https://skillicons.dev/icons?i=js",
  },
  {
    name: "Python",
    iconUrl: "https://skillicons.dev/icons?i=py",
  },
  {
    name: "CSS3",
    iconUrl: "https://skillicons.dev/icons?i=css",
  },
  {
    name: "HTML5",
    iconUrl: "https://skillicons.dev/icons?i=html",
  },
  {
    name: "React",
    iconUrl: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "TypeScript",
    iconUrl: "https://skillicons.dev/icons?i=ts",
  },
];

const tools: LogoTile[] = [
  {
    name: "VS Code",
    iconUrl: "https://skillicons.dev/icons?i=vscode",
  },
  {
    name: "GitHub",
    iconUrl: "https://skillicons.dev/icons?i=github",
  },
  {
    name: "Vercel",
    iconUrl: "https://skillicons.dev/icons?i=vercel",
  },
  {
    name: "Windows",
    iconUrl: "https://skillicons.dev/icons?i=windows",
  },
  {
    name: "Git",
    iconUrl: "https://skillicons.dev/icons?i=git",
  },
];

function LogoBlock({
  name,
  iconUrl,
  iconClassName,
}: LogoTile) {
  return (
    <div
      title={name}
      aria-label={name}
      className="group h-[52px] w-[52px] overflow-hidden rounded-[14px] border border-border-subtle bg-bg-surface shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition-premium hover:-translate-y-1 hover:border-border-subtle-hover hover:shadow-[0_14px_24px_rgba(0,0,0,0.24)] sm:h-[56px] sm:w-[56px]"
    >
      <img
        src={iconUrl}
        alt={name}
        loading="lazy"
        className={`h-full w-full object-cover ${iconClassName ?? ""}`}
      />
    </div>
  );
}

export default function ExperienceStack() {
  return (
    <Section
      id="skills"
      className="pt-0 sm:pt-0 md:pt-0"
    >
      <Container size="wide">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
          <motion.div
            id="experience"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="scroll-mt-24"
          >
            <Card className="h-full bg-bg-surface">
              <div className="mb-5 flex items-center gap-2">
                    <Book className="h-5 w-5 text-[#ff8c21]" />
                    <Heading level={3}>Education</Heading>
                  </div>
              
              
              <div className="relative mt-5 border-l border-border-subtle pl-5">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    className="relative mb-7 last:mb-0"
                  >
                    <div className="absolute -left-[23px] top-1.5 h-2.5 w-2.5 rounded-full border border-white/15 bg-[#ff8c21] shadow-[0_0_12px_rgba(255,140,33,0.35)]" />

                    <div className="py-0.5">
                      <Text
                        size="xs"
                        className="text-text-tertiary"
                      >
                        {item.year}
                      </Text>

                      <Heading
                        level={4}
                        className="mt-1.5 text-[15px] font-medium"
                      >
                        {item.title}
                      </Heading>

                      <Text
                        size="xs"
                        className="mt-1"
                      >
                        {item.place}
                      </Text>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="scroll-mt-24"
          >
            <Card className="h-full bg-bg-surface">

              <div className="space-y-9">
                <div>
                  <div className="mb-5 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-[#ff8c21]" />
                    <Heading level={3}>Tech Stack</Heading>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {techStack.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.35,
                        }}
                      >
                        <LogoBlock {...item} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-[#ff8c21]" />
                    <Heading level={3}>Tools</Heading>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tools.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.35,
                        }}
                      >
                        <LogoBlock {...item} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
