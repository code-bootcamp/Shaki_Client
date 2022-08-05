import LogInContainer from "../../src/components/units/login/LogIn.Container";
import { useLogInAuth } from "../../src/hooks/useLoginAuth";

function LogInPage() {
  return <LogInContainer />;
}

export default useLogInAuth(LogInPage);
