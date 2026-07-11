import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

import { contactAssets } from "../../assets";
import Container from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

type ContactLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: typeof Github;
  avatarSrc?: string;
};

const links: ContactLink[] = [
  {
    title: "Discord",
    subtitle: "edwardtheenderman",
    href: "https://discord.com/users/1313483179901976631",
    icon: MessageCircle,
    avatarSrc: contactAssets.discordPfp,
  },
  {
    title: "GitHub",
    subtitle: "View my projects",
    href: "https://github.com/chitniskedar",
    icon: Github,
    avatarSrc: contactAssets.githubPfp,
  },
  {
    title: "Instagram",
    subtitle: "@chitnis.kedar",
    href: "https://instagram.com/chitnis.kedar",
    icon: Instagram,
    avatarSrc: contactAssets.instagramPfp,
  },
  {
    title: "LinkedIn",
    subtitle: "Let's connect",
    href: "https://linkedin.com/in/kedarchitnis",
    icon: Linkedin,
    avatarSrc: contactAssets.linkedinPfp,
  },
  {
    title: "Email",
    subtitle: "Kedar Chitnis",
    href: "mailto:chitniskedar7@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Heading level={2}>Contact me on these platforms.</Heading>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="block"
              >
                <Card className="group h-full min-h-[180px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-subtle-hover">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="flex items-start justify-between gap-4">
                      {link.avatarSrc ? (
                        <img
                          src={link.avatarSrc}
                          alt={`${link.title} profile`}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-bg-surface">
                          <Icon className="h-5 w-5 text-text-secondary transition-colors group-hover:text-text-primary" />
                        </div>
                      )}

                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-text-tertiary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <div>
                      <Heading
                        level={3}
                        className="text-left text-[1.85rem] leading-none"
                      >
                        {link.title}
                      </Heading>

                      <Text
                        size="sm"
                        className="mt-3 max-w-[18ch] text-left leading-relaxed break-words"
                      >
                        {link.subtitle}
                      </Text>
                    </div>
                  </div>
                </Card>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
