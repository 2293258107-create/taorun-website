"use client";

import { Bot, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] max-w-[420px] overflow-hidden rounded-sm border border-stone-200 bg-background shadow-2xl shadow-stone-950/20 md:max-w-[460px]">
          <div className="h-1 bg-primary" />
          <div className="flex items-center justify-between border-b border-stone-200 bg-white px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground shadow-sm">
                <Bot className="size-5" />
              </span>
              <div>
                <div className="text-sm font-bold tracking-wide text-stone-950">
                  智能客服
                </div>
                <div className="text-xs text-muted-foreground">
                  陶润陶瓷在线咨询
                </div>
              </div>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="关闭智能客服"
              onClick={() => setIsOpen(false)}
              className="rounded-full hover:bg-stone-100"
            >
              <X className="size-5" />
            </Button>
          </div>

          <div className="h-[min(680px,calc(100vh-9rem))] overflow-hidden bg-[#f7f1ea]">
            <iframe
              src="https://udify.app/chatbot/cfoROdQTaDtToRcB"
              style={{
                width: "100%",
                height: "calc(100% + 56px)",
                minHeight: "736px",
                marginTop: "-56px",
              }}
              frameBorder="0"
              allow="microphone"
              title="陶润陶瓷智能客服"
            />
          </div>
        </div>
      )}

      <Button
        type="button"
        size="icon"
        aria-label={isOpen ? "关闭智能客服" : "打开智能客服"}
        onClick={() => setIsOpen((current) => !current)}
        className="size-14 rounded-full border border-primary/20 bg-primary text-primary-foreground shadow-xl shadow-stone-950/25 hover:bg-primary/90"
      >
        {isOpen ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-6" />
        )}
      </Button>
    </div>
  );
};
