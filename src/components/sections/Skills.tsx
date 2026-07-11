import { motion } from "motion/react";

import Container from "../layout/Container";
import { Section } from "../layout/Section";

import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

const skillGroups = [
  {
    title: "Languages",
    description: "Programming languages I use regularly.",
    skills: [
      "C",
      "C++",
      "Python",
      "Kotlin",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    description: "Building responsive and modern web interfaces.",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    description: "Working with APIs, databases and cloud services.",
    skills: [
      "Node.js",
      "Express",
      "Firebase",
      "Firestore",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    description: "Daily development workflow.",
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "VS Code",
      "Figma",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Container size="wide">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Badge
            variant="outline"
            className="mb-5"
          >
            Skills
          </Badge>

          <Heading level={2}>
            Technologies I enjoy working with.
          </Heading>

          <Text
            size="lg"
            className="mt-6"
          >
            I focus on learning technologies by building real projects
            rather than collecting buzzwords. These are the tools I
            currently use most often.
          </Text>

        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >

              <Card className="h-full">

                <Heading
                  level={3}
                  className="mb-3"
                >
                  {group.title}
                </Heading>

                <Text
                  size="sm"
                  className="mb-6"
                >
                  {group.description}
                </Text>

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (

                    <Badge
                      key={skill}
                      variant="secondary"
                    >
                      {skill}
                    </Badge>

                  ))}

                </div>

              </Card>

            </motion.div>

          ))}

        </div>

      </Container>
    </Section>
  );
}