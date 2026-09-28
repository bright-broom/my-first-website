/** Public, owner-provided profile content. Unverified rankings and private projects are excluded. */
type Profile = {
  name: string;
  firstName: string;
  title: string;
  description: string;
  email: string | null;
};

export const profile: Profile = {
  name: "柴谷 由佳",
  firstName: "Yuka",
  title: "柴谷由佳 | Yuka — 人の可能性を、伝わる価値へ。",
  description:
    "柴谷由佳（Yuka）のプロフィール。小売・デジタル分析・インフルエンサーマーケティングの3領域を横断し、人の強みと伝わる価値を考えます。",
  email: null,
};

export const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#perspective", label: "Perspective" },
] as const;

export const experiences = [
  {
    number: "01",
    title: "Retail",
    subtitle: "小売",
    word: "Listen.",
    lead: "数字になる前の、気持ちに触れる。",
    body: "お客様と直接向き合う現場が、キャリアの出発点。目の前の人の言葉や反応に目を向ける経験を重ねてきました。",
    lens: "生活者の視点",
    tag: "PEOPLE & NEEDS",
    icon: "people",
  },
  {
    number: "02",
    title: "Digital analysis",
    subtitle: "デジタル分析",
    word: "Understand.",
    lead: "感覚に、もうひとつの根拠を。",
    body: "デジタル分析へと広げた経験。現場で感じることに加えて、データから人の行動を捉える視点を持っています。",
    lens: "データから考える視点",
    tag: "DATA & INSIGHT",
    icon: "chart",
  },
  {
    number: "03",
    title: "Influencer marketing",
    subtitle: "インフルエンサーマーケティング",
    word: "Connect.",
    lead: "その人らしさを、伝わる力に。",
    body: "人の魅力と、ブランドの伝えたいこと。その接点を考えるインフルエンサーマーケティングへ、経験をつないでいます。",
    lens: "人の強みを見つける視点",
    tag: "INFLUENCE & STORY",
    icon: "sparkles",
  },
] as const;

export type Perspective = {
  id: string;
  label: string;
  question: string;
  headline: string;
  body: string;
  points: readonly string[];
  from: string;
};
export const perspectives = [
  {
    id: "customer",
    label: "生活者を理解したい",
    question: "生活者の気持ちが、見えている？",
    headline: "「誰に届けるか」を、\nひとりの人から考える。",
    body: "属性だけでは、その人の迷いや期待は見えてこない。現場での接点とデータの両方から、伝える相手を具体的に捉える視点です。",
    points: [
      "どんな場面で、その商品を必要とするか",
      "選ぶときに、何が迷いになるか",
      "数字と現場の声に、どんな違いがあるか",
    ],
    from: "RETAIL × DIGITAL ANALYSIS",
  },
  {
    id: "strength",
    label: "魅力を言葉にしたい",
    question: "その人らしい強みは、どこにある？",
    headline: "足りないものより、\nすでにある価値を探す。",
    body: "比較して弱点を数えるのではなく、その人が自然にできることや独自の経験に目を向ける。「加点」で見る姿勢を、伝え方にも活かします。",
    points: [
      "本人には当たり前でも、他の人にはない経験は何か",
      "誰にとって、その強みが役に立つか",
      "その魅力が伝わる言葉になっているか",
    ],
    from: "PEOPLE × BRAND THINKING",
  },
  {
    id: "message",
    label: "伝え方を考えたい",
    question: "届けたいことと、知りたいことは重なる？",
    headline: "発信する側と、\n受け取る側の間をつなぐ。",
    body: "ブランドが伝えたいこと、人が持つ魅力、受け手が知りたいこと。3つを行き来しながら、伝える内容や順番を考える視点です。",
    points: [
      "受け手にとって、どんな意味があるか",
      "誰の言葉なら、その魅力が自然に伝わるか",
      "使う媒体の文脈や形式に合っているか",
    ],
    from: "INFLUENCER MARKETING × COMMUNICATION",
  },
] as const satisfies readonly Perspective[];

export const values = [
  {
    number: "01",
    en: "Find the good.",
    title: "人を、加点で見る。",
    body: "できていないことより、その人が持っている良さや可能性に目を向ける。それが、人と向き合うときの出発点です。",
  },
  {
    number: "02",
    en: "Feel ready.",
    title: "気持ちも、判断の軸に。",
    body: "時間の区切りだけで決めず、自分の気持ちが整っているかにも耳を傾ける。選ぶときも、手放すときも。",
  },
  {
    number: "03",
    en: "Stay light.",
    title: "次へ動ける、余白を持つ。",
    body: "暮らしでも仕事でも、身軽でいること。変化を前にしたとき、すぐに動ける機動性を大事にしています。",
  },
] as const;

export const faqs = [
  {
    question: "どのような経験がありますか？",
    answer:
      "小売、デジタル分析、インフルエンサーマーケティングの3つの職種を経験しています。現場・データ・発信という異なる角度から、人やブランドの魅力を考えることがプロフィールの軸です。",
  },
  {
    question: "どのような考え方を大切にしていますか？",
    answer:
      "人の弱点を数えるより、強みや可能性を見つけること。自分の気持ちの準備を尊重しながら、変化に向けて身軽に動けることも大切にしています。",
  },
  {
    question: "仕事の相談はできますか？",
    answer:
      "公開用の連絡先は現在準備中です。受付方法が整い次第、このページでお知らせします。",
  },
] as const;
