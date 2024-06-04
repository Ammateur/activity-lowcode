import { useReducer, useState } from "react";
import SectionCore from "./segments/SectionCore";
import SectionForm from "./segments/SectionForm";
import SectionLevel from "./segments/SectionLevel";
import SectionMaterial from "./segments/SectionMaterials";
import { Layout } from "@arco-design/web-react";
import { CoreContext } from "../Context";
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

const CoreLayout = () => {
  const materialCollapseTrigger = (collapse: boolean) => {
    setMCollapse(collapse);
  };
  const [mCollapse, setMCollapse] = useState(false);

  const [coreData, setCoreData] = useReducer(
    (state: any, action: any) => {
      return state;
    },
    ["1"],
  );

  return (
    <CoreContext.Provider value={coreData}>
      <Layout className="h-full">
        <Header className="h-20 leading-20 pl-10 b-b-1px b-b-solid b-gray-5 font-bold font-size-8 ">
          Activity Low Code Platform
        </Header>
        <Layout>
          <Sider collapsible onCollapse={materialCollapseTrigger}>
            <SectionMaterial collapse={mCollapse} />
          </Sider>
          <Sider collapsible>
            <SectionLevel />
          </Sider>
          <Content>
            <SectionCore />
            <SectionForm />
          </Content>
        </Layout>
      </Layout>
    </CoreContext.Provider>
  );
};
export default CoreLayout;
