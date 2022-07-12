import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const CHATBOT_THEME = {
  background: "#f9fcf7",
  headerBgColor: "#1fa8e3",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

interface Ibot {
  url: string;
  message: string;
}

const BotRedirect = ({ url, message }: Ibot) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

export default function ChatBox() {
  const steps = [
    {
      id: "0",
      message: "인녕하세요 쉐이키관리자 봇입니다.",

      trigger: "user",
    },
    {
      id: "user",

      message: "이름을입력해주세요",
      trigger: "greet",
    },
    {
      id: "greet",

      user: true,
      trigger: "hellow",
    },
    {
      id: "hellow",
      message: " 안녕하세요 {previousValue}, 님 ",
      trigger: "1",
    },
    {
      id: "1",
      message: "잠시만 기다려주세요.",
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
        { value: 1, label: "관리자에게 직접 문의하기", trigger: "qa" },
        { value: 2, label: "자주 묻는 질문", trigger: "faq" },
      ],
    },
    {
      id: "faq",

      options: [
        { value: 1, label: "환불규정", trigger: "refund" },
        { value: 2, label: "개인정보처리방침", trigger: "security" },
        { value: 3, label: "가맹점 문의", trigger: "store" },
      ],
    },
    {
      id: "refund",
      component: <BotRedirect message="환불규정" url="/refund" />,
      trigger: "after",
    },

    {
      id: "security",
      component: (
        <BotRedirect
          message="개인정보처리방침"
          url="<https://lucasbassetti.com.br/react-simple-    chatbot/#/docs/previous-value>"
        />
      ),
      trigger: "after",
    },

    {
      id: "store",
      component: <BotRedirect message="가맹점문의하러가기" url="/store" />,
      trigger: "after",
    },

    {
      id: "qa",
      component: (
        <BotRedirect
          message="1:1문의하러가기"
          url="<https://lucasbassetti.com.br/react-simple-    chatbot/#/docs/previous-value>"
        />
      ),
      trigger: "after",
    },
    {
      id: "after",
      message: "궁금하신게 더 있으신가요?",
      trigger: "2",
    },
  ];

  const config = {
    botAvatar: "/logo.png",
    floating: true,
  };
  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} {...config} headerTitle="💻 관리자 봇" />
      </ThemeProvider>
    </>
  );
}
