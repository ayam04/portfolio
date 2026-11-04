export default function sitemap() {
  const base = "https://ayamk.in";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
