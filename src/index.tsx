import { createRoot } from 'react-dom/client';
import { CSSProperties, StrictMode, useState } from "react";
import { ArticleStateType, defaultArticleState } from "./constants/articleProps";
import { Article } from "./components/article/Article";
import { ArticleParamsForm } from "./components/article-params-form/ArticleParamsForm";
import styles from "./styles/index.module.scss";
import clsx from "clsx";

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


const App = () => {
  const [articleState, setArticleState] = useState<ArticleStateType>(defaultArticleState);

  return (
    <main
      className={clsx(styles.main)}
      style={
        {
          '--font-family': articleState.fontFamilyOption.value,
          '--font-size': articleState.fontSizeOption.value,
          '--font-color': articleState.fontColor.value,
          '--container-width': articleState.contentWidth.value,
          '--bg-color': articleState.backgroundColor.value,
        } as CSSProperties
      }
    >
      <ArticleParamsForm setArticleState={setArticleState} />
      <Article />
    </main>
  );
};
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);