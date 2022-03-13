import utils from "../../utils";
import CLASS_NAMES from "./CLASS_NAMES.json";

export default () => {
  const elem = document.getElementsByClassName(CLASS_NAMES.message_oneline)[0];
  if (!elem || !elem.lastChild.innerText.startsWith("你与")) return;

  const friendName = utils.reactFiberWalker(
    utils.getFiber(elem),
    "currentChat",
    true
  )?.pendingProps.currentChat.target_info.nickname;

  elem.lastChild.innerText = `You and ${friendName} are now friends.`;
};
