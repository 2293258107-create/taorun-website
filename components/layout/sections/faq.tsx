import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "这个模板是免费的吗？",
    answer: "是的，这是一个免费的 Next.js + Shadcn 落地页模板。",
    value: "item-1",
  },
  {
    question: "我可以把它用于商业项目吗？",
    answer:
      "可以。你可以根据项目需要修改页面内容、样式和组件，并用于真实业务场景。",
    value: "item-2",
  },
  {
    question:
      "这个模板支持移动端访问吗？",
    answer:
      "支持。页面已经使用响应式布局，在手机、平板和桌面端都能保持良好展示。",
    value: "item-3",
  },
  {
    question: "我需要掌握哪些技术才能定制它？",
    answer: "了解 React、Next.js、Tailwind CSS 和基础 TypeScript 会更容易上手。",
    value: "item-4",
  },
  {
    question:
      "可以替换颜色、图片和模块顺序吗？",
    answer: "当然可以。你可以按品牌需要调整主题色、替换图片，并重新排列各个页面模块。",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          常见问题
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          你可能想知道的问题
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
