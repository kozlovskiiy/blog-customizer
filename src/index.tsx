import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr } from './constants/articleProps';
import { OptionType } from './constants/articleProps';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
  const [visible, setVisible] = useState(false);
  const [font, setFont] = useState<OptionType>(fontFamilyOptions[0]);
  const [fontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0]);
  const [fontColor, setFontColor] = useState<OptionType>(fontColors[0]);
  const [backgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColors[0]);
  const [contentWidth, setContentWidth] = useState<OptionType>(contentWidthArr[0]);

  const [appliedSettings, setAppliedSettings] = useState({
    font: fontFamilyOptions[0],
    fontSize: fontSizeOptions[0],
    fontColor: fontColors[0],
    backgroundColor: backgroundColors[0],
    contentWidth: contentWidthArr[0],
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setAppliedSettings({
      font,
      fontSize,
      fontColor,
      backgroundColor,
      contentWidth,
    });
  };


	const handleReset = () => {
		const defaultSettings = {
			font: fontFamilyOptions[0],
			fontSize: fontSizeOptions[0],
			fontColor: fontColors[0],
			backgroundColor: backgroundColors[0],
			contentWidth: contentWidthArr[0],
		};

		setFont(defaultSettings.font);
		setFontSize(defaultSettings.fontSize);
		setFontColor(defaultSettings.fontColor);
		setBackgroundColor(defaultSettings.backgroundColor);
		setContentWidth(defaultSettings.contentWidth);

		setAppliedSettings(defaultSettings);
	};
  return (
    <main
      className={clsx(styles.main)}
      style={
        {
          '--font-family': appliedSettings.font.value,
          '--font-size': appliedSettings.fontSize.value,
          '--font-color': appliedSettings.fontColor.value,
          '--container-width': appliedSettings.contentWidth.value,
          '--bg-color': appliedSettings.backgroundColor.value,
        } as CSSProperties
      }
    >
      <ArticleParamsForm
        onClick={() => setVisible(!visible)}
        isOpen={visible}
        font={font}
        setFont={setFont}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        contentWidth={contentWidth}
        setContentWidth={setContentWidth}
        onSubmit={handleSubmit} 
        onReset={handleReset} 
      />
      <Article />
    </main>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);