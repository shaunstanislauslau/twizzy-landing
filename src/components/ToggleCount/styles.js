import emotion from "styled-components";
import {getThemeColor} from "styles/mixins";

export const ToggleCount = emotion.div(
  {
    marginTop: 15,
    userSelect: 'none'
  },
  getThemeColor('text')
);
