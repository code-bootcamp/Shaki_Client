import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff",
};

interface Ibot {
  url: string;
  message: string;
}

export default function ChatBox() {
  const BotRedirect = ({ url, message }: Ibot) => {
    return (
      <div>
        <a href={url} target="_blank">
          {message}
        </a>
      </div>
    );
  };

  const steps = [
    {
      id: "1",
      message: "안녕하세요 관리자에게 문의하시고 싶으신가요?",
      trigger: "2",
    },
    {
      id: "2",
      message: "문의사항선택하기",
      trigger: "3",
    },
    {
      id: "3",
      options: [
        { value: 1, label: "관리자에게 직접 문의하기", trigger: "4" },
        { value: 2, label: "지점별 문의하기", trigger: "5" },
      ],
    },
    {
      id: "4",
      component: (
        <BotRedirect
          message="문의"
          url="<https://lucasbassetti.com.br/react-simple-    chatbot/#/docs/previous-value>"
        />
      ),
      trigger: "2",
    },
    {
      id: "5",
      component: (
        <BotRedirect
          message="문의"
          url="<https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot>"
        />
      ),
      trigger: "2",
    },
  ];
  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
}
