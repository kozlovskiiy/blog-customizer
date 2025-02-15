import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator'; 
import { Text } from 'src/ui/text';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr } from '../../constants/articleProps';
import { OptionType } from 'src/constants/articleProps';

interface ArticleParamsFormProps {
  onClick: () => void;
  isOpen: boolean;
  font: OptionType;
  setFont: (font: OptionType) => void;
  fontSize: OptionType;
  setFontSize: (font: OptionType) => void;
  fontColor: OptionType;
  setFontColor: (font: OptionType) => void;
  backgroundColor: OptionType;
  setBackgroundColor: (font: OptionType) => void;
  contentWidth: OptionType;
  setContentWidth: (font: OptionType) => void;
  onSubmit: (event: React.FormEvent) => void;
  onReset: () => void;
}

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({ 
  onClick,
  isOpen,
  font,
  setFont,
  setFontSize,
  fontSize,
  fontColor,
  setFontColor,
  backgroundColor,
  setBackgroundColor,
  contentWidth,
  setContentWidth,
  onSubmit,
  onReset
}) => {
  return (
    <>
      <ArrowButton isOpen={isOpen} onClick={onClick} />
      <aside className={clsx(styles.container, { [styles.container_open]: isOpen })}>
        <form className={styles.form} onSubmit={onSubmit}>
          <Text children="Задайте параметры" weight={800} size={31} family="open-sans" uppercase />
          <Select title="Шрифт" selected={font} options={fontFamilyOptions} onChange={setFont} />
          <RadioGroup title="Размер шрифта" name="font-size" options={fontSizeOptions} selected={fontSize} onChange={setFontSize} />
          <Select title="Цвет шрифта" selected={fontColor} options={fontColors} onChange={setFontColor} />
          <Separator />
          <Select title="Цвет фона" selected={backgroundColor} options={backgroundColors} onChange={setBackgroundColor} />
          <Select title="Ширина контента" selected={contentWidth} options={contentWidthArr} onChange={setContentWidth} />
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" htmlType="reset" type="clear" onClick={onReset} />
            <Button title="Применить" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};