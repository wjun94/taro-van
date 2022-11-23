import { Typography, Flex, Button, Icon } from '../../index';

type P = {
  /** 主按钮文案 */
  confirmButtonText?: string;
  /** 主按钮点击事件 */
  onConfirm?: () => void;
  /** 取消按钮文案 */
  cancelButtonText?: string;
  /** 取消按钮点击事件 */
  onCancel?: () => void;
  /** 提示 */
  info?: string;
};

const Result = ({
  info,
  confirmButtonText = '返回首页',
  cancelButtonText,
  onConfirm,
  onCancel,
}: P) => {
  return (
    <>
      <Flex
        className='bg-white pt-70px pb-30px mb-80px'
        direction='column'
        align='center'
      >
        <Icon
          className='!text-140px !text-primary-400'
          icon='icon-a-btn_gouxuanpng'
        />
        <Typography.Text className='mt-30px mb-50px !text-34px'>
          {info}
        </Typography.Text>
        <Flex>
          <Button
            shape='rounded'
            className='!mr-40px'
            onClick={() => onCancel && onCancel()}
          >
            {cancelButtonText}
          </Button>
          <Button
            shape='rounded'
            type='primary'
            onClick={() => onConfirm && onConfirm()}
          >
            {confirmButtonText}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Result;
