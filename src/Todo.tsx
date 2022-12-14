import { FC } from "react";
import { TodoType } from "./types/todo";

// 関数コンポーネントの型指定
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
