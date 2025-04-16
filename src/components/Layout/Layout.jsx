import css from './Layout.module.css';
import { AppBar } from '../AppBar/AppBar';

export const Layout = ({ children }) => {
  return <main className={css.container}><AppBar/>{children}</main>;
};