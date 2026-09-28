import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";
import { experiences, faqs, profile, values } from "@/content/profile";
import { SiteHeader } from "@/components/site-header";
import { OrbitArt } from "@/components/orbit-art";
import { PerspectiveTabs } from "@/components/perspective-tabs";
import { ActionLink, Container, Eyebrow, Wordmark } from "@/components/ui";

const icons = { people: Users, chart: ChartNoAxesCombined, sparkles: Sparkles };

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section
          aria-labelledby="hero-title"
          className="pt-12 md:pt-16 lg:pt-20"
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div className="pb-2">
                <p className="eyebrow mb-7 flex items-center gap-3 text-blue">
                  <span className="size-1.5 rounded-full bg-blue" />
                  YUKA — PERSONAL PROFILE
                </p>
                <h1
                  id="hero-title"
                  className="text-[clamp(2.3rem,4.3vw,4rem)] font-medium leading-[1.55] tracking-[-.065em]"
                >
                  人の可能性を、
                  <br />
                  <span className="text-blue">伝わる価値へ。</span>
                </h1>
                <p className="mt-3 font-serif text-[clamp(2rem,3.7vw,3.5rem)] italic leading-tight text-blue">
                  See people. Find possibilities.
                </p>
                <p className="mt-8 max-w-md text-sm leading-[2.2] text-muted md:text-[.94rem]">
                  現場で聞く。データで捉える。人の魅力を届ける。
                  <br className="hidden sm:block" />
                  異なる3つの経験をつなぎ、
                  <br className="hidden sm:block" />
                  人とブランドの「伝わる」を考えます。
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1">
                  <p className="text-base font-medium tracking-[.12em]">
                    {profile.name}
                  </p>
                  <span className="font-display text-sm text-muted">
                    {profile.firstName}
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink href="#perspective">3つの視点を知る</ActionLink>
                  <ActionLink href="#about" secondary down>
                    プロフィールを読む
                  </ActionLink>
                </div>
              </div>
              <OrbitArt />
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-b border-line py-7 lg:mt-16">
              <p className="eyebrow text-muted">
                A CROSS-FUNCTIONAL PERSPECTIVE
              </p>
              <a
                href="#experience"
                className="inline-flex min-h-11 items-center gap-4 font-display text-xs text-muted"
              >
                Retail <span className="text-blue">/</span> Data{" "}
                <span className="text-blue">/</span> Influence{" "}
                <ArrowDown size={14} aria-hidden="true" />
              </a>
            </div>
          </Container>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="py-20 lg:py-28"
        >
          <Container className="grid gap-8 lg:grid-cols-[.7fr_2fr] lg:gap-16">
            <Eyebrow number="01">ABOUT YUKA</Eyebrow>
            <div>
              <h2 id="about-title" className="section-title">
                ひとつの肩書きでは、
                <br />
                <span className="text-muted">見えない景色がある。</span>
              </h2>
              <div className="mt-8 grid gap-6 text-sm leading-[2.2] text-muted md:grid-cols-2 md:gap-10">
                <p>
                  小売からデジタル分析、そしてインフルエンサーマーケティングへ。性質の異なる3つの職種を経験してきました。
                </p>
                <p>
                  共通して大切にしているのは、人の良さや可能性を見つけること。現場・データ・発信を行き来する視点を、私らしい強みにしていきたいと考えています。
                </p>
              </div>
              <div className="mt-9 flex items-center gap-3 border-l-2 border-blue pl-5">
                <span className="font-serif text-4xl italic text-blue">+</span>
                <p className="text-sm font-medium">
                  足りないものより、その人にあるもの。
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-title"
          className="bg-surface py-20 lg:py-24"
        >
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-7">
              <div>
                <Eyebrow number="02">EXPERIENCE</Eyebrow>
                <h2 id="experience-title" className="section-title mt-5">
                  違う経験が、
                  <br className="sm:hidden" />
                  視点を広げる。
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-loose text-muted">
                人を知る。行動を読み解く。魅力を伝える。
                <br />
                3つの領域で得た、3つのまなざし。
              </p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {experiences.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <article
                    key={item.number}
                    className="group flex flex-col rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-blue/50 md:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-muted">
                        {item.number} / {item.tag}
                      </span>
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className="text-blue"
                      />
                    </div>
                    <p className="mt-9 font-serif text-[clamp(2.8rem,3.6vw,3.7rem)] italic leading-none text-blue">
                      {item.word}
                    </p>
                    <h3 className="mt-7 font-display text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted">{item.subtitle}</p>
                    <p className="mt-8 text-sm font-medium leading-relaxed">
                      {item.lead}
                    </p>
                    <p className="mt-4 grow text-sm leading-[2] text-muted">
                      {item.body}
                    </p>
                    <div className="mt-8 flex items-center gap-2 border-t border-line pt-5 text-xs">
                      <Check
                        size={15}
                        aria-hidden="true"
                        className="text-blue"
                      />
                      {item.lens}
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section
          id="perspective"
          aria-labelledby="perspective-title"
          className="py-20 lg:py-28"
        >
          <Container>
            <Eyebrow number="03">HOW I SEE THINGS</Eyebrow>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <h2 id="perspective-title" className="section-title">
                こんな問いから、
                <br />
                考えはじめます。
              </h2>
              <p className="max-w-sm text-sm leading-[2] text-muted">
                関心のあるテーマを選んでみてください。
                <br />
                経験を通じて育ててきた、私の視点をご紹介します。
              </p>
            </div>
            <PerspectiveTabs />
          </Container>
        </section>

        <section
          id="values"
          aria-labelledby="values-title"
          className="border-y border-line py-20 lg:py-24"
        >
          <Container>
            <div className="grid gap-8 lg:grid-cols-[.7fr_2fr] lg:gap-16">
              <div>
                <Eyebrow number="04">MY VALUES</Eyebrow>
                <p className="mt-8 font-serif text-5xl italic text-blue">
                  A little more
                  <br />
                  human.
                </p>
              </div>
              <div>
                <h2 id="values-title" className="section-title">
                  仕事の前に、
                  <br />
                  大切にしていること。
                </h2>
                <div className="mt-10 space-y-8">
                  {values.map((value) => (
                    <article
                      key={value.number}
                      className="grid gap-4 border-t border-line pt-7 sm:grid-cols-[1fr_1.15fr] sm:gap-8"
                    >
                      <div>
                        <p className="eyebrow text-blue">
                          {value.number} / {value.en}
                        </p>
                        <h3 className="mt-3 text-base font-medium">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-[2.1] text-muted">
                        {value.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section aria-labelledby="faq-title" className="py-20 lg:py-24">
          <Container className="grid gap-8 lg:grid-cols-[.7fr_2fr] lg:gap-16">
            <div>
              <Eyebrow number="05">GOOD TO KNOW</Eyebrow>
              <h2 id="faq-title" className="mt-5 text-2xl font-medium">
                もう少し、Yukaのこと。
              </h2>
            </div>
            <div>
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-line first:border-t"
                >
                  <summary className="faq-summary flex min-h-20 items-center justify-between gap-5 py-5 text-sm font-medium">
                    <span>{faq.question}</span>
                    <Plus
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-blue transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-2xl pb-7 pr-8 text-sm leading-[2.1] text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="bg-ink py-14 text-paper lg:py-20"
        >
          <Container>
            <div className="flex items-center justify-between">
              <Eyebrow number="06" light>
                LET’S CONNECT
              </Eyebrow>
              <Sparkles
                size={32}
                strokeWidth={1}
                aria-hidden="true"
                className="text-lime"
              />
            </div>
            <div className="mt-9 grid items-end gap-9 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <h2
                  id="contact-title"
                  className="font-display text-[clamp(3rem,7.2vw,6.5rem)] leading-[1.1] tracking-[-.065em]"
                >
                  Good things
                  <br />
                  start with{" "}
                  <span className="font-serif italic text-lime">people.</span>
                </h2>
                <p className="mt-7 text-sm leading-[2] text-paper/75">
                  新しい可能性は、人とのつながりから。
                  <br />
                  これからの歩みも、この場所で伝えていきます。
                </p>
              </div>
              <div className="rounded-xl border border-white/20 p-7">
                <p className="eyebrow text-lime">CONTACT</p>
                {profile.email ? (
                  <a
                    className="mt-5 inline-flex min-h-12 items-center gap-5 text-lg underline decoration-white/40 underline-offset-8"
                    href={`mailto:${profile.email}`}
                  >
                    メールで相談する
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                ) : (
                  <>
                    <p className="mt-4 flex items-center gap-3 text-sm">
                      <span className="size-1.5 rounded-full bg-lime" />
                      お問い合わせ窓口は準備中です
                    </p>
                    <p className="mt-4 text-xs leading-[2] text-paper/65">
                      受付方法が整い次第、こちらでお知らせします。
                    </p>
                  </>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer>
        <Container className="flex flex-wrap items-center justify-between gap-5 py-8">
          <div className="flex items-center gap-7">
            <Wordmark />
            <p className="eyebrow text-muted">
              © YUKA. PEOPLE, DATA & STORIES.
            </p>
          </div>
          <a href="#top" className="nav-link gap-3">
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </Container>
      </footer>
    </div>
  );
}
