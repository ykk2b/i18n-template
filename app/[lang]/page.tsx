import { getDictionary } from "@/get-dictionaries";
import Switcher from "./components/Switcher";

export default async function Page({
  params: { lang },
}: {
  params: { lang: "en" | "ge" };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center gap-24 p-12 sm:p-24">
      <h1 className="text-xl sm:text-3xl font-semibold">{dict.title}</h1>
      <div className="text-sm sm:text-base">
        {dict["stanza-4"].map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
        <small className="italic">{dict["stanza-4-footer"]}</small>
      </div>
      <div>
        <Switcher lang={lang}>{dict.translate}</Switcher>
      </div>
    </main>
  );
}
