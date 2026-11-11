export function DecorationMD() {
  return (
    <svg
      className="pointer-events-none absolute hidden md:block top-[-8%] left-0 h-[115%] w-full overflow-visible stroke-foreground md:top-[-20%] md:left-[-28%] md:w-[140%] lg:top-[-11%] lg:left-[-27%] lg:w-[130%]"
      viewBox="0 0 400 480"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 150C45 30 255-35 350 35c28 20 40 48 43 75M398 310c-5 120-270 235-365 68" />
      <circle className="fill-accent" cx="105" cy="47" r="8" />
      <path
        className="fill-foreground"
        transform="translate(0 -19)"
        d="m326 416 3 15 12 4-12 3-3 17-3-17-12-3 12-4Z"
      />
    </svg>
  );
}


export function DecorationMobile() {
  return (
    <svg
      className="pointer-events-none absolute top-0 left-1/2 h-44 w-80 max-w-none -translate-x-1/2 stroke-foreground md:hidden"
      width="320"
      height="176"
      viewBox="0 0 320 176"
      fill="none"
      aria-hidden="true"
    >
      <path d="M190 15C230 3 272 7 294 22M308 45C338 106 224 165 112 165C75 165 43 161 23 153M9 142C-10 124 8 91 43 66" />
      <circle className="fill-accent" cx="16" cy="148" r="5" />
      <path className="fill-foreground" d="m304 16 2 14 10 3-10 2-2 15-2-15-10-2 10-3Z" />
    </svg>
  );
}