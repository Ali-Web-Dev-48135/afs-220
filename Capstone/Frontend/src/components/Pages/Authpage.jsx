import AuthForm from "../Auth/AuthForm";
import Avatar from "../Avatar/Avatar";

import Card from "../UIElement/Card";
import classes from "./Authpage.module.css";

const Authpage = () => {
  return (
    <Card className={classes["auth-page-container"]}>
      {/* <Avatar
        url="https://i5.walmartimages.com/asr/94e6d8d9-1487-4bc3-a916-aee7fd81b70c.4af05c232d72462f69c3d08c1029777c.jpeg"
        title="playstation"
      /> */}
      <AuthForm />
      {/* <Avatar
        url="https://i.etsystatic.com/30210083/r/il/73e37c/3489934566/il_fullxfull.3489934566_hbrr.jpg"
        title="xbox"
      /> */}
    </Card>
  );
};

export default Authpage;
