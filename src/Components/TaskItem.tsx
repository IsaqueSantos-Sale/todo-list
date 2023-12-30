import Task from "../Models/Task";

export type Props = {
  task: Task;
};

export default function TaskItem(props: Props) {
  const { task } = props;

  if (!task) {
    return <></>;
  }

  return (
    <div className="flex justify-between items-center border-2">
      <span className="bg-blue-400">{task.id}</span>
      <h1 className="bg-blue-600">{task.title}</h1>
      <p className="overflow-hidden overflow-ellipsis">{task.text}</p>
      <div>
        <button className="button--red">DELETE</button>
        <button className="button--blue">EDIT</button>
      </div>
    </div>
  );
}
