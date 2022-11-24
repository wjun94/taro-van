import { Typography, Flex, Icon } from '../../index';

type P = {
  /** 结果的状态，决定图标和颜色 */
  status?: 'success';
  /** title 文字 */
  title?: string;
  /** subTitle 文字 */
  subTitle?: string;
  /** 操作区 */
  extra?: JSX.Element[];
  /** 自定义 icon */
  icon?: JSX.Element;
};

const Result = ({ status = 'success', title, subTitle, extra }: P) => {
  return (
    <>
      <Flex
        className='bg-white pt-70px pb-30px mb-80px'
        direction='column'
        align='center'
      >
        {status === 'success' && (
          <Icon
            className='!text-140px !text-primary-400'
            icon='icon-a-btn_gouxuanpng'
          />
        )}
        <Typography.Text className='mt-30px mb-50px !text-34px'>
          {title}
        </Typography.Text>
        <Typography.Text type='secondary'>{subTitle}</Typography.Text>
        <Flex>{extra && extra.map((item) => item)}</Flex>
      </Flex>
    </>
  );
};

export default Result;
