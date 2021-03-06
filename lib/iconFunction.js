import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_67nelik5o9.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
