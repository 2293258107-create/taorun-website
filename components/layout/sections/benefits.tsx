"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BenefitsSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].story;

  return (
    <section id="story" className="bg-muted/40 py-24 sm:py-32">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/taorunhui/about-heritage-8.jpg"
            alt={copy.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "11% center" }}
          />
        </div>

        <div className="space-y-7">
          <div>
            <Badge variant="outline" className="mb-4">
              {copy.eyebrow}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.title}
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              {copy.body}
            </p>
          </div>

          <div className="grid gap-3">
            {copy.points.map((point) => (
              <div key={point} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {copy.stats.map(({ value, label }) => (
              <Card key={label} className="rounded-sm bg-background">
                <CardContent className="p-5">
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button asChild variant="secondary">
            <Link
              href="http://www.taorunhui.com/about.html"
              target="_blank"
            >
              {copy.button}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
