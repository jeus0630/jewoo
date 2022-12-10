const figlet = require("figlet");
const chalk = require("chalk");

figlet("Jewoo Ham", (_, data) => {
  console.clear();
  console.log(chalk.greenBright(data));

  console.log(`
    ${chalk.blue.bold.underline("Jewoo Ham")} \u2022 ${chalk.bold.yellow(
    "Full Stack Developer"
  )}

    사용자 경험 개선을 위해 능동적으로 동료들과 함께 소통하는 개발자 입니다.
    단순 코딩이 아닌 주어진 업무에 필요한 핵심 로직 파악과 새로운 기술 학습
    그리고 팀원들과의 공유를 통해 비즈니스 성공에 일조합니다.
    함께 일하기 좋은 개발자가 되기 위해 항상 노력하며
    개발자로서 더 나은 세상을 만들고자 오픈소스 기여에도 많은 관심을 가지고 있습니다.
    
    Creator of ${chalk.bold("create-vite-react-template")}(${chalk.red.bold.italic(
      "yarn create vite-react-template"
    )}),
    리액트 프로젝트에 사용되는 다양한 라이브러리들이 
    PreConfigure 되어져있는 Vite 기반의 리액트 템플릿입니다.
    
${chalk.dim(`
    NPM: https://www.npmjs.com/~jeus
    Github: https://github.com/jeus0630/
    StudyWiki: https://spicy-damselfly-bd9.notion.site/s-Study-Wiki-bf00fab411e44c6981c9ca183f2964ac
    Blog: https://velog.io/@jewoo
    Resume: https://spicy-damselfly-bd9.notion.site/Frontend-Developer-bb24be2a10204801aa24d75de60171a2`)}
`);
});
