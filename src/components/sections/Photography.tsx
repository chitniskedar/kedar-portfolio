import { motion } from "motion/react";

import { photographyAssets } from "../../assets";
import Container from "../layout/Container";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

type Photo = {
  id: string;
  src: string;
};

const photos: Photo[] = [
  {
    id: "image1",
    src: photographyAssets.image1,
  },
  {
    id: "image2",
    src: photographyAssets.image2,
  },
  {
    id: "image3",
    src: photographyAssets.image10,
  },
  {
    id: "image4",
    src: photographyAssets.image4,
  },
  {
    id: "image5",
    src: photographyAssets.image5,
  },
  {
    id: "image6",
    src: photographyAssets.image6,
  },
  {
    id: "image7",
    src: photographyAssets.image7,
  },
  {
    id: "image8",
    src: photographyAssets.image8,
  },
  {
    id: "image9",
    src: photographyAssets.image9,
  },
  {
    id: "image10",
    src: photographyAssets.image3,
  },
  {
    id: "image11",
    src: photographyAssets.image11,
  },
  {
    id: "image13",
    src: photographyAssets.image13,
  },
  {
    id: "image14",
    src: photographyAssets.image14,
  },
];

export default function Photography() {
  return (
    <Section
      id="photography"
      className="pt-0"
    >
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3x1"
        >

          <Heading level={2} className="text-4xl sm:text-5xl md:text-6xl font-bold">Photography</Heading>

          <Text
            size="lg"
            className="mt-4"
          >
            Photos from places I've been, things I've noticed, and moments I wanted to remember.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3"
        >
          <div className="columns-2 gap-4 sm:columns-3 xl:columns-4">
            {photos.map((photo, index) => (
              <motion.figure
                key={photo.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.45,
                }}
                whileHover={{ y: -6 }}
                className="mb-4 break-inside-avoid"
              >
                  <div className="border border-white bg-white p-1">

                  <img
                    src={photo.src}
                    alt="Photography by Kedar Chitnis"
                    loading="lazy"
                    className="h-auto w-full bg-bg-base object-contain"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
