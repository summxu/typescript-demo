/*
 * @Author: Chenxu
 * @Date: 2022-06-02 11:44:37
 * @LastEditTime: 2022-06-02 16:53:27
 * @Msg: Nothing
 */
import './style.css'

import dataType from './dataType';
import classFun from './class';
import interfaceFun from './interface';

dataType()
classFun()
interfaceFun()

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
