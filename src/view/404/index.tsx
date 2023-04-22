import React from 'react';
import { useObserver } from 'mobx-react';
import {user} from '@/store/user'

export default function NotFound(): React.ReactElement {

  console.log('-----------')
  console.log(process.env.NODE_ENV)
  console.log(import.meta.env)
  
  
  console.log('-----------')
  

  return useObserver(() => {
    return <div>
      404页面
    </div>
  });
}