import { useEffect, useRef, useState } from "react";
import { ArticleStateType, OptionType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from "src/constants/articleProps";
import { ArrowButton } from "src/ui/arrow-button";
import { Button } from "src/ui/button";
import { Select } from "src/ui/select";
import { RadioGroup } from "src/ui/radio-group";
import { Separator } from "src/ui/separator";
import { Text } from "src/ui/text";
import clsx from "clsx";
import styles from "./ArticleParamsForm.module.scss";

export const ArticleParamsForm: React.FC<{ setArticleState: (state: ArticleStateType) => void }> = ({ setArticleState }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [font, setFont] = useState<OptionType>(fontFamilyOptions[0]);
  const [fontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0]);
  const [fontColor, setFontColor] = useState<OptionType>(fontColors[0]);
  const [backgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColors[0]);
  const [contentWidth, setContentWidth] = useState<OptionType>(contentWidthArr[0]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setArticleState({
      fontFamilyOption: font,
      fontSizeOption: fontSize,
      fontColor,
      backgroundColor,
      contentWidth,
    });
  };

  const handleReset = () => {
    setFont(defaultArticleState.fontFamilyOption);
    setFontSize(defaultArticleState.fontSizeOption);
    setFontColor(defaultArticleState.fontColor);
    setBackgroundColor(defaultArticleState.backgroundColor);
    setContentWidth(defaultArticleState.contentWidth);
    setArticleState(defaultArticleState);
  };


  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as HTMLElement)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isSidebarOpen, handleClickOutside]);
    
  return (
    <>
      <ArrowButton isOpen={isSidebarOpen} onClick={(e) => { setIsSidebarOpen(!isSidebarOpen), e.stopPropagation() }} />
      <aside ref={sidebarRef} className={clsx(styles.container, { [styles.container_open]: isSidebarOpen })} onClick={(e) => e.stopPropagation()} >
      <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
          <Text children="Задайте параметры" weight={800} size={31} family="open-sans" uppercase as='h2' />
          <Select title="Шрифт" selected={font} options={fontFamilyOptions} onChange={setFont} />
          <RadioGroup title="Размер шрифта" name="font-size" options={fontSizeOptions} selected={fontSize} onChange={setFontSize} />
          <Select title="Цвет шрифта" selected={fontColor} options={fontColors} onChange={setFontColor} />
          <Separator />
          <Select title="Цвет фона" selected={backgroundColor} options={backgroundColors} onChange={setBackgroundColor} />
          <Select title="Ширина контента" selected={contentWidth} options={contentWidthArr} onChange={setContentWidth} />
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" htmlType="reset" type="clear"  />
            <Button title="Применить" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};