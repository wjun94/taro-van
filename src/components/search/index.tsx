import { Input } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import { useState, ReactNode, useEffect } from 'react';
import Icon from '../icon';
import Flex from '../flex';

export type SearchProps = {
  className?: string;
  placeholder?: string;
  rounded?: boolean;
  maxlength?: number;
  children?: ReactNode;
  background?: string;
  clearable?: boolean;
  value?: string;
  label?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
  label,
  clearable = true,
  value = '',
  onSearch,
  onChange,
  ...props
}: SearchProps & ViewProps) => {
  const prefixCls = 'tv-search';
  const classes = clsx(prefixCls, className);
  const [text, setText] = useState('');
  useEffect(() => {
    setText(value);
  }, [value]);
  return (
    <Flex
      align='center'
      wrap='nowrap'
      style={{ background }}
      className={classes}
      {...props}
    >
      {label}
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
            setText(e.detail.value);
          }}
          onConfirm={() => onSearch && onSearch(text)}
          value={text}
          className='tv-search-input'
          maxlength={maxlength}
          placeholder={placeholder}
        />
        {text &&
          (rightIcon ||
            (clearable && (
              <Icon
                onClick={() => setText('')}
                className='tv-search-close'
                size='lg'
                icon='icon-close_fill'
              />
            )))}
      </Flex>
      {children}
    </Flex>
  );
};

export default Search;
