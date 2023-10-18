import { Dispatch, ReactElement, SetStateAction } from "react";
import { To } from "react-router-dom";
import { Size } from "../enums";

export interface IChildren {
  children: React.ReactNode;
}

export interface IHref {
  to: To;
}

export interface ILogo {
  visible?: boolean;
  className?: string;
}

export interface IMessage {
  message: string;
  prefix?: string;
  expand?: boolean;
}

export interface IPageTitle {
  label: string;
}

export interface ICard extends IChildren {
  outlined?: boolean;
}

export interface ISidebarNavItem {
  icon: string;
  label: string;
  to?: To;
  handler?: () => void;
}

export interface ICardTitled extends IChildren {
  label: string;
  to?: To;
}

export interface IUserItem {
  size?: Size;
  name: string;
  username: string;
  bio?: string;
  avatar: string;
}

export interface IUserTooltip {
  name: string;
  username: string;
  bio?: string;
  avatar: string;
  show: boolean;
}

export interface IFollowCountButton extends IHref {
  label: string;
  count: number;
}

export interface IButton {
  type?: "button" | "submit" | "reset";
  to?: To;
  lite?: boolean;
  liteLabel?: string;
  variant?: "solid" | "outlined";
  loading?: boolean;
  disabled?: boolean;
  withoutLoadingIcon?: boolean;
  danger?: boolean;
  handler?: () => void;
  children?: React.ReactNode;
}

export interface ICreatePost {
  quote: string;
  quoteFor: string;
  isPublic?: boolean;
}

export interface IPostUserInfo {
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers?: IUser[];
  following?: IUser[];
  datetime?: string;
  size: Size;
  children?: React.ReactNode;
}

export interface IDropdownContext {
  openDropdown: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
}

export interface IDropdownItem {
  label: string;
  icon: string;
  large?: boolean;
  handler?: () => void;
}

export interface IDropdownOpenContent extends IChildren {
  name: string;
}

export interface IModalContext {
  open: string;
  setOpen: Dispatch<SetStateAction<string>>;
  close: () => void;
}

export interface IModalOpenContent {
  label: string;
  children: ReactElement<IConfirm>;
}

export interface IPostContext {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  getPost: (postId: string) => IPost | undefined;
}

export interface IPostState {
  handleState: Dispatch<SetStateAction<"public" | "private">>;
  state: "public" | "private";
}

export interface ITabItem extends IChildren {
  dataset: string;
  term: string;
  handleClick: (event: React.MouseEvent) => void;
}

export interface ITabs {
  tabs: { label: string; dataset: string }[];
}

export interface IBadge {
  label: string;
}

export interface IRegister extends IChildren {
  label: string;
}

export interface ITextLink extends IHref {
  label: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ISignup {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IResetPasswordApi {
  token: string | undefined;
  values: {
    password: string;
    confirmPassword: string;
  };
}

export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  oldPassword?: string;
  avatar: string;
  bio?: string;
  role?: string;
  language?: string;
  quoteCount?: number;
  isAdmin?: boolean;
  isActive?: boolean;
  isActiveAccount?: boolean;
  isInfluential?: boolean;
  isDarkMode?: boolean;
  facebook?: string;
  twitter?: string;
  followers?: IUser[];
  following?: IUser[];
  passwordResetToken?: string;
  passwordResetTokenExpiration?: Date;
  accountVerificationToken?: string;
  accountVerificationTokenExpiration?: Date;
}

export type IThemeMode = "dark" | "light";

export interface IAuthContext {
  user?: IUser | null;
  isAuthenticated: boolean;
  theme: IThemeMode;
  setUser: Dispatch<SetStateAction<IUser>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<IThemeMode>>;
}

export interface IPost {
  _id?: string;
  quote: string;
  user: IUser;
  quoteFor: string;
  isPublic: boolean;
  isUserActive: boolean;
  likes: [
    {
      name: string;
      _id: string;
    },
  ];
  dislikes: [
    {
      name: string;
      _id: string;
    },
  ];
  createdAt: Date;
}

export interface IBookmark {
  _id?: string | undefined;
  user: IUser;
  post: IPost;
}

export interface IPostHeadActions {
  postId: string | undefined;
  userId: string | undefined;
}

export interface IConfirm {
  label: string;
  text: string;
  btnActionLabel: string;
  btnCloseLabel: string;
  loading: boolean;
  handler: () => void;
  close?: () => void;
}

export interface ILoadingIcon {
  large?: boolean;
  variant?: "normal" | "primary" | "white";
}

export interface IUpdatePostForm {
  postId: string | undefined;
  close?: () => void;
}

export interface IUpdatePost {
  postId: string | undefined;
  quote: string;
  quoteFor: string;
  isPublic: boolean;
}

export interface IFieldProps {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  id?: string;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelect extends IFieldProps {
  set?: (value: string) => void;
  children: React.ReactNode;
}

export interface ITextarea extends IFieldProps {
  forPost?: boolean;
}

export interface IUploadAvatar {
  username: string | undefined;
  file: File | undefined;
}

export interface IUserInfoDetails {
  quoteCount: number;
  facebook?: string;
  twitter?: string;
}

export interface IUserInfoAvatar {
  alt: string;
  avatar: string;
}

export interface IEditUserInfoForm {
  close?: () => void;
}

export interface ISearchInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILoadMoreData {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isData: boolean;
  message: string;
  fetchNextPage: () => void;
}

export interface ISettingsListItem extends IHref {
  label: string;
  text: string;
  icon: string;
}

export interface IFollowButton {
  size?: Size;
  username: string | undefined;
}

export interface IMostInfluentialUser {
  _id: string;
  user: IUser;
}

export interface IUpdatePassword {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export interface IDeactivateContentItem {
  label: string;
  text: string;
}

export interface IOutsideClick {
  handler: () => void | Dispatch<SetStateAction<string>>;
  eventOption?: boolean;
}

export interface IUserItemSkeleton {
  size?: Size;
}
