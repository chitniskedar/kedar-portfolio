import { motion } from "motion/react";

import Container from "../layout/Container";
import { Section } from "../layout/Section";

import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

const timeline = [
  {
    year: "2025 — Present",
    title: "PES University, Bengaluru",
    place: "Bachelor of Technology",
  },
  {
    year: "2023 — 2025",
    title: "Allen Career Institute",
    place: "JEE and PU Education",
  },
  {
    year: "Until 2023",
    title: "VVS Sardar Patel High School",
    place: "Primary schooling and SSLC ",
  },
];

export default function Experience() {
  return (
    <Section id="experience">
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
            Journey
          </Badge>

          <Heading level={2}>
            Education & Growth
          </Heading>

          <Text
            size="lg"
            className="mt-6"
          >
            My journey into software development has been driven by
            curiosity, learning by building, and continuously exploring
            new technologies.
          </Text>
        </motion.div>

        <div className="relative mt-20 border-l border-border-subtle pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border border-border-subtle bg-[#ff8c21]" />

              <Card>
                <Badge variant="secondary">
                  {item.year}
                </Badge>

                <Heading
                  level={3}
                  className="mt-5"
                >
                  {item.title}
                </Heading>

                <Text
                  size="sm"
                  className="mt-2"
                >
                  {item.place}
                </Text>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}