import { motion } from "motion/react";
import { ArrowRight, Github, Sparkles } from "lucide-react";

import { Section } from "../layout/Section";
import Container from "../layout/Container";

import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff8c21]/[0.04] blur-[160px]" />

        <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <Container size="wide">
        <div className="max-w-4xl">


          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Heading
              level={1}
              className="max-w-4xl leading-[0.95]"
            >
              Hi, I'm{" "}
              <span className="relative inline-block">
                Kedar Chitnis
                <span className="absolute left-0 bottom-1 h-[2px] w-full rounded-full bg-white/20" />
              </span>

              <br />

              Computer Science student,
              <br />

              <span className="text-text-secondary">
                Learning by Building.
              </span>
            </Heading>
          </motion.div>

          {/* Description */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <Text
              size="lg"
              className="mt-8 max-w-2xl text-text-secondary"
            >
              I'm a Computer Science student at PES University, 
              learning by building projects that turn ideas into 
              useful software. Outside of development, I'm passionate 
              about photography and motorsport.
            </Text>
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              size="lg"
            >
              View Projects

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              <Github className="mr-2 h-4 w-4" />

              GitHub
            </Button>
          </motion.div>

          
        </div>
      </Container>
      
    </Section>
  );
}