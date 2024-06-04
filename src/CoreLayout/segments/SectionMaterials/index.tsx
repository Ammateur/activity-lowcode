import { Menu } from "@arco-design/web-react";
import { IconBook } from "@arco-design/web-react/icon";
const MenuItem = Menu.Item;
type IProps = {
  collapse: boolean;
};
const SectionMaterial = (props: IProps) => {
  return (
    <Menu collapse={props.collapse}>
      <MenuItem key="menu1">
        <IconBook /> menu1
      </MenuItem>
    </Menu>
  );
};
export default SectionMaterial;
