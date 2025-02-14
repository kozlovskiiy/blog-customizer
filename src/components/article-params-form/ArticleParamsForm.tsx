import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { fontFamilyOptions } from '../../constants/articleProps';
import { OptionType } from 'src/constants/articleProps';


interface ArticleParamsFormProps {
  onClick: () => void;
  isOpen: boolean;
  font: OptionType | null;
  setFont: (font: OptionType) => void;
}



export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({ onClick, isOpen, font, setFont }) => {
  return (
    <>
      <ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside className={clsx(styles.container, { [styles.container_open]: isOpen })}>
        <form className={styles.form}>
				<Select title="Шрифт" selected={font} options={ fontFamilyOptions } onChange={setFont} />
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" htmlType="reset" type="clear" />
            <Button title="Применить" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};