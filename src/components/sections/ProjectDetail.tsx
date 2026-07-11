import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "../../content/projects";

import Container from "../layout/Container";
import { Section } from "../layout/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

type ProjectDetailProps = {
  project: Project;
  onBack: () => void;
};

export default function ProjectDetail({
  project,
  onBack,
}: ProjectDetailProps) {
  return (
    <Section id={`project-${project.id}`}>
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="button"
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-premium hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </button>

          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              

              <Heading level={1}>{project.title}</Heading>

              <Text
                size="lg"
                className="mt-6 max-w-3xl"
              >
                {project.detailIntro ?? project.longDescription ?? project.description}
              </Text>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="primary">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>

           
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {(project.detailSections ?? []).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + index * 0.08,
                duration: 0.45,
              }}
            >
              <Card className="h-full">
                <Heading level={3}>{section.title}</Heading>
                <Text
                  size="sm"
                  className="mt-4"
                >
                  {section.body}
                </Text>
              </Card>
            </motion.div>
          ))}
        </div>

        {project.detailGallery && project.detailGallery.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mt-16"
          >
            <Heading level={2}>Screens</Heading>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {project.detailGallery.map((item) => (
                <Card
                  key={item.src}
                  className="overflow-hidden p-0"
                >
                  <div className="bg-bg-surface-hover p-2">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-auto w-full rounded-md border border-border-subtle object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        ) : null}
      </Container>
    </Section>
  );
}
