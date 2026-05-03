"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Clock, Mail, Phone, Printer } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactIcons = [Building2, Phone, Printer, Mail, Clock];

export const ContactSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].contact;

  const formSchema = React.useMemo(
    () =>
      z.object({
        firstName: z.string().min(2, copy.validation.firstName).max(255),
        lastName: z.string().min(1, copy.validation.lastName).max(255),
        email: z.string().email(copy.validation.email),
        subject: z.string().min(2, copy.validation.subject).max(255),
        message: z.string().min(5, copy.validation.message),
      }),
    [copy]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: copy.subjects[0],
      message: "",
    },
  });

  React.useEffect(() => {
    form.setValue("subject", copy.subjects[0]);
  }, [copy.subjects, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const fullName =
      language === "zh" ? `${lastName}${firstName}` : `${firstName} ${lastName}`;
    const mailToLink = `mailto:trade@topcollection.com.cn?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(copy.mailBody(fullName, email, message))}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6">
            <h2 className="mb-2 text-lg tracking-wider text-primary">
              {copy.eyebrow}
            </h2>
            <h3 className="text-3xl font-bold md:text-4xl">{copy.title}</h3>
          </div>
          <p className="mb-8 text-lg leading-8 text-muted-foreground">
            {copy.body}
          </p>

          <div className="grid gap-4">
            {copy.info.map(({ title, value }, index) => {
              const Icon = contactIcons[index];

              return (
                <div
                  key={title}
                  className="rounded-sm border border-secondary p-4"
                >
                  <div className="mb-1 flex gap-2">
                    <Icon className="size-5 text-primary" />
                    <div className="font-bold">{title}</div>
                  </div>
                  <div className="text-muted-foreground">{value}</div>
                </div>
              );
            })}
          </div>
        </div>

        <Card className="rounded-sm bg-muted/50">
          <CardHeader className="text-2xl font-bold">
            {copy.cardTitle}
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col gap-8 md:!flex-row">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{copy.lastName}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={copy.lastNamePlaceholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{copy.firstName}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={copy.firstNamePlaceholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{copy.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={copy.emailPlaceholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{copy.subject}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={copy.subjectPlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {copy.subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{copy.message}</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder={copy.messagePlaceholder}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4">{copy.submit}</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="text-sm text-muted-foreground">
            {copy.footer}
          </CardFooter>
        </Card>
      </section>
    </section>
  );
};
