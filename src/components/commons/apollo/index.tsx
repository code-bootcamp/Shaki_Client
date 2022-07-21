import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/library/getAccessToken";

interface IProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // 로그인 유지
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://shaki-server.shop/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accessToken 재발급 받기.
          getAccessToken().then((newAccessToken) => {
            // 2 - 2 재발급 받은 토큰 다시 저장하기
            setAccessToken(newAccessToken);
            operation.setContext({
              // 직전쿼리 정보들 바꿀 수 있음.
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
                // accessToken만 새걸로 바꿔준다.
              },
            });
          });
          // newAccessToken = restoreAccessToken

          // 3 - 1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기.

          // 3-02 변겯된opreration 재요청하기
          return forward(operation);
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
