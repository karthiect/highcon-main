import { Fragment } from "react";

interface ContentSectionProps {
  type: "white-bordered" | "dark" | "gray-shadow";
  title?: string;
  paragraphs?: string[];
  list?: string[];
  paragraphPairs?: { title: string; paragraphs?: string[]; list?: string[] }[];
}

export function ContentSection({
  type,
  title,
  paragraphs,
  list,
  paragraphPairs,
}: ContentSectionProps) {
  const styles = {
    "white-bordered":
      "bg-white border-2 border-[#14385F] rounded-[30px] p-8 lg:p-10",
    dark: "bg-[#14385F] rounded-[30px] p-8 lg:p-10",
    "gray-shadow":
      "bg-gray-100 rounded-[30px] p-8 lg:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.1)]",
  };

  const titleColor = type === "dark" ? "text-white" : "text-[#14385F]";
  const textColor = type === "dark" ? "text-white" : "text-[#14385F]";

  return title && paragraphs ? (
    <div className={styles[type]}>
      <h4
        className={`font-['Manrope'] text-[28px] font-bold lg:text-[32px] ${titleColor} mb-6 tracking-[-0.5px]`}
      >
        {title}
      </h4>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`font-['Manrope'] text-[18px] font-light lg:text-[20px] ${textColor} leading-8 tracking-[-0.5px]`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  ) : title && list ? (
    <div className={styles[type]}>
      <h4
        className={`font-['Manrope'] text-[28px] font-bold lg:text-[32px] ${titleColor} mb-6 tracking-[-0.5px]`}
      >
        {title}
      </h4>
      <ul className="space-y-4">
        {list.map((paragraph, index) => (
          <li
            key={index}
            className={`font-['Manrope'] text-[18px] font-light lg:text-[20px] ${textColor} leading-8 tracking-[-0.5px]`}
          >
            {paragraph}
          </li>
        ))}
      </ul>
    </div>
  ) : paragraphPairs ? (
    <div className={styles[type]}>
      {paragraphPairs?.map((pp,i) => (
        <Fragment key={i}>
          {pp?.title ? (
            <h4
              className={`font-['Manrope'] text-[28px] font-bold lg:text-[32px] ${titleColor} my-3 tracking-[-0.5px]`}
            >
              {pp?.title}
            </h4>
          ) : (
            <></>
          )}
          {pp?.paragraphs ? (
            <div className={`space-y-4`}>
              {pp?.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`font-['Manrope'] text-[18px] font-light lg:text-[20px] ${textColor} leading-8 tracking-[-0.5px]`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : pp?.list ? (
            <ul className="list-disc space-y-2 ps-8">
              {pp?.list.map((paragraph, index) => (
                <li
                  key={index}
                  className={`font-['Manrope'] text-[18px] font-light lg:text-[20px] ${textColor} leading-8 tracking-[-0.5px]`}
                >
                  {paragraph}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </Fragment>
      ))}
    </div>
  ) : (
    <></>
  );
}
