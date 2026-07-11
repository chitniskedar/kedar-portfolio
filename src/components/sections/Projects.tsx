import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "../../content/projects";

import Container from "../layout/Container";
import { Section } from "../layout/Section";

import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

const carouselProjects = projects;

function wrapIndex(index: number) {
  return (index + carouselProjects.length) % carouselProjects.length;
}

function openProjectPage(projectId: string) {
  window.history.pushState({}, "", `/projects/${projectId}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function Projects() {
  const initialIndex = Math.floor(carouselProjects.length / 2);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <Section
      id="projects"
      className="pb-2"
    >
      <Container size="wide">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <Heading level={1}>
            Projects
          </Heading>

          <Text
            size="lg"
            className="mt-6"
          >
            A selection of projects that reflect how I approach
            software engineering solving real world problems with 
            Android applications and AI-powered tools to developer 
            utilities and modern web experiences.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6"
        >
          <div className="relative overflow-hidden pt-6">
            <div className="hidden min-h-[405px] items-start justify-center lg:flex">
              {carouselProjects.map((project, index) => {
                const relativeIndex =
                  ((index - activeIndex + carouselProjects.length) %
                    carouselProjects.length);
                const normalizedIndex =
                  relativeIndex > carouselProjects.length / 2
                    ? relativeIndex - carouselProjects.length
                    : relativeIndex;
                const isActive = normalizedIndex === 0;
                const isVisible = Math.abs(normalizedIndex) <= 1;

                if (!isVisible) {
                  return null;
                }

                return (
                  <motion.article
                    key={project.id}
                    animate={{
                      x: normalizedIndex * 215,
                      scale: isActive ? 1.08 : normalizedIndex === -1 || normalizedIndex === 1 ? 0.92 : 0.8,
                      opacity: isActive ? 1 : normalizedIndex === -1 || normalizedIndex === 1 ? 0.72 : 0.28,
                      zIndex: isActive ? 30 : 20 - Math.abs(normalizedIndex),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 24,
                    }}
                    className="absolute left-1/2 top-7 w-[min(38rem,84vw)] -translate-x-1/2 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <Card className="group overflow-hidden p-0">
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Text
                              size="xs"
                              variant="tertiary"
                              className="mb-2"
                            >
                              {project.year}
                            </Text>

                            <Heading
                              level={3}
                              className="text-2xl"
                            >
                              {project.title}
                            </Heading>
                          </div>

                          <Badge
                            variant={project.status === "Completed" ? "primary" : "secondary"}
                          >
                            {project.status}
                          </Badge>
                        </div>

                        <Text
                          size="sm"
                          className="mt-4 max-w-xl"
                        >
                          {project.longDescription ?? project.description}
                        </Text>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-6 hidden shrink-0 gap-2 xl:flex">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={(event) => {
                              event.stopPropagation();
                              openProjectPage(project.id);
                            }}
                          >
                            Case Study
                          </Button>

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
                              onClick={(event) => event.stopPropagation()}
                            >
                              <Button
                                variant="primary"
                                size="sm"
                              >
                                Live
                                <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                              </Button>
                            </a>
                          )}

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                            >
                              <Github className="mr-2 h-3.5 w-3.5" />
                              GitHub
                            </Button>
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.article>
                );
              })}
            </div>

            <div className="grid gap-6 lg:hidden">
              {carouselProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden p-0"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <Text
                          size="xs"
                          variant="tertiary"
                          className="mb-2"
                        >
                          {project.year}
                        </Text>
                        <Heading level={3}>{project.title}</Heading>
                      </div>
                      <Badge
                        variant={project.status === "Completed" ? "primary" : "secondary"}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <Text
                      size="sm"
                      className="mt-4"
                    >
                      {project.longDescription ?? project.description}
                    </Text>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={(event) => {
                          event.stopPropagation();
                          openProjectPage(project.id);
                        }}
                      >
                        Case Study
                      </Button>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <Button
                            variant="primary"
                            size="sm"
                          >
                            Live
                            <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                          </Button>
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                        >
                          <Github className="mr-2 h-3.5 w-3.5" />
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
