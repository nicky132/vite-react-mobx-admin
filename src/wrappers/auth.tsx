import React from 'react';
import { Redirect } from 'react-router';
import {user} from '@/store/user';

export default function Auth (props: {
  children: React.ReactElement
}): React.ReactElement {
  const isLogin =  !!user.token; // 后续换成自己的 token 校验
  const {children, ...cprops} = props;
  console.log('props==',props,children);
  if(isLogin) {
    return children
  }
  return <Redirect to="/login"></Redirect>;
}