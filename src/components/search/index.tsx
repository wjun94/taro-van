import { Input } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import { useState, ReactNode } from 'react';
import Icon from '../icon';
import Flex from '../flex';

export type SearchProps = {
  className?: string;
  placeholder?: string;
  rounded?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  maxlength?: number;
  children?: ReactNode;
  background?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
};

const Search = ({
  placeholder = '请输入搜索关键词',
  className,
  rounded,
  leftIcon,
  rightIcon,
  maxlength,
  children,
  background,
  onSearch,
  onChange,
  ...props
}: SearchProps & ViewProps) => {
  const prefixCls = 'tv-search';
  const classes = clsx(prefixCls, className);
  const [value, setValue] = useState('');
  return (
    <Flex
      align='center'
      wrap='nowrap'
      style={{ background }}
      className={classes}
      {...props}
    >
      <Flex
        align='center'
        wrap='nowrap'
        className={`tv-search-content ${rounded && 'tv-search-rounded'}`}
      >
        {leftIcon || (
          <Icon className='tv-search-icon' size='lg' icon='icon-search' />
        )}
        <Input
          onInput={(e) => {
            if (onChange) {
              onChange(e.detail.value);
            }
            setValue(e.detail.value);
          }}
          onConfirm={() => onSearch && onSearch(value)}
          value={value}
          className='tv-search-input'
          maxlength={maxlength}
          placeholder={placeholder}
        />
        {rightIcon || (
          <Icon
            onClick={() => setValue('')}
            className='tv-search-close'
            size='lg'
            icon='icon-close_fill'
          />
        )}
      </Flex>
      {children}
    </Flex>
  );
};

export default Search;
