import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Whether it's a product opportunity, collaboration, or an
          interesting idea,{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            feel free to reach out
          </Link>
          . I'm always happy to connect with people who are passionate about
          building great products.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild>
            <Link 
              href="https://docs.google.com/document/d/1_UzE1J7fkbtPyHozNC2Vu3iJe7YlW04ekgV6YU2lYiM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`mailto:${DATA.contact.email}`} className="gap-2">
              <Mail className="size-4" aria-hidden />
              Email
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`tel:${DATA.contact.tel}`} className="gap-2">
              <Phone className="size-4" aria-hidden />
              Call
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
