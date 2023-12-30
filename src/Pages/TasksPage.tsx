import { useQuery } from "@tanstack/react-query";
import { request_api } from "../request_api";
import Task from "../Models/Task";
import TaskItem from "../Components/TaskItem";

export default function TasksPage() {
  const { data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      return request_api.get("/task").then((res) => res.data);
    },
  });

  if (!data) {
    return <></>;
  }

  return (
    <>
      <header>TO-DO List</header>
      <main>
        {data.map((task, index) => {
          return <TaskItem key={index} task={task} />;
        })}
      </main>
      <footer></footer>
    </>
  );
}
