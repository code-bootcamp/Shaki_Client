import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import InquiryContainer from "../../components/units/inquiry/Inquiry.Container";
import CenterTxt from "../../components/commons/faq/faqinfo/FaqInfo";

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
      message: "문의사항을 선택해주세요.",
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
        { value: 2, label: "고객센터정보", trigger: "infofaq" },
        { value: 3, label: "가맹점 문의", trigger: "store" },
      ],
    },
    {
      id: "refund",
      component: <BotRedirect message="환불규정" url="/refund" />,
      trigger: "after",
    },

    {
      id: "infofaq",
      component: <CenterTxt />,
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
      trigger: "endings",
    },

    {
      id: "endings",
      options: [
        { value: 1, label: "궁금증이 해결되었어요!", trigger: "finish" },
        { value: 2, label: "궁금한게 남았어요!", trigger: "2" },
      ],
    },

    {
      id: "finish",
      message: "감사합니다 쉐이키였습니다^^!",
      end: true,
    },
  ];

  const config = {
    botAvatar: "/logo.png",
    floating: true,
  };
  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: "ko" }}
          steps={steps}
          {...config}
          headerTitle="💻 관리자 봇"
        />
      </ThemeProvider>
    </>
  );
}
