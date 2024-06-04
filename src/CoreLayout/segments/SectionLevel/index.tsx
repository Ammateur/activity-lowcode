import { useContext } from "react";
import { CoreContext } from "../../../Context";
const SectionLevel = () => {
  const coreContext = useContext(CoreContext);
  return <div>section-level-{coreContext}</div>;
};
export default SectionLevel;
