import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { fontFamilyOptions } from './constants/articleProps';
import { OptionType } from './constants/articleProps';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);



const App = () => {

	const [visible, setVisible] = useState(false);
	const [font, setFont] = useState<OptionType | null>(fontFamilyOptions[0]);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onClick={() => setVisible(!visible)} isOpen={visible} font={font} setFont={setFont}  />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
