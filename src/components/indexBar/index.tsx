import Panel from './panel';
import Flex from '../flex';

export type IndexBarProps = {
  children?: JSX.Element;
};

const IndexBar = ({ children }: IndexBarProps) => {
  return <Flex>{children}</Flex>;
};

IndexBar.Panel = Panel;

export default IndexBar;
