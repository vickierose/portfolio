import { ReactNode } from "react";
import { DecorationMD, DecorationMobile } from "./decor";

function Specialties() {
  return (
    <div className="relative flex items-center justify-center self-stretch md:-ml-4 md:min-h-0 md:items-start md:justify-start lg:items-center">
      <DecorationMD />
      <div className="relative mx-auto w-80 shrink-0 md:mx-0 md:w-full md:pl-1">
        <div className="relative h-44 px-4 pt-4 md:static md:h-auto md:p-0">
          <DecorationMobile />
          <h2 className="relative mb-3 flex items-center gap-3 font-mono text-sm font-semibold uppercase md:mb-4 md:block md:text-lg">
            Specialties
            <span className="h-px w-10 bg-foreground md:hidden" aria-hidden="true" />
          </h2>
          <ul className="relative space-y-1 pl-12 text-base font-semibold tracking-tight md:space-y-2.5 md:pl-0 md:text-[clamp(17px,2.25vw,32px)] md:tracking-[-.045em]">
            <ListItem>Frontend engineering</ListItem>
            <ListItem>Creative development</ListItem>
            <ListItem>Design engineering</ListItem>
          </ul>
        </div>
        <p className="relative mx-4 mt-4 pl-6 font-mono text-xs leading-normal font-semibold uppercase md:mx-0 md:mt-[35px] md:max-w-[285px] md:border-t md:border-muted md:pt-[27px] md:pl-7 md:text-sm md:leading-[1.4]">
          <span className="absolute top-1 left-0 size-3 rounded-full border border-muted bg-accent md:top-[29px] md:size-3.5" />
          Open to frontend &amp;{" "}
          <br className="hidden md:block" />design engineering roles
        </p>
      </div>
    </div>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className="inline-block whitespace-nowrap md:bg-accent md:px-2.5 md:py-1">
        {children}
      </span>
    </li>
  );
}

export default Specialties;
