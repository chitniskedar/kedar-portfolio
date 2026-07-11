import { ArrowUpRight } from "lucide-react";

import Container from "./Container";
import { Divider } from "../ui/Divider";
import { Text } from "../ui/Text";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container size="wide">
        <div className="py-8 sm:py-10">
          

          <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <Text
              size="sm"
              variant="tertiary"
            >
              © {new Date().getFullYear()} Kedar Chitnis. 
            </Text>

            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-text-secondary transition hover:text-text-primary"
            >
              <span>Back to top</span>
              <ArrowUpRight className="h-4 w-4 -rotate-45" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
