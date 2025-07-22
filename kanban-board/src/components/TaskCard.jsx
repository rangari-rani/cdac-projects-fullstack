
import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, deleteTask, updateTask }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-gray-800 opacity-30 p-2 lg:p-4 h-[80px] lg:h-[100px] min-h-[80px] lg:min-h-[100px] items-center flex text-left rounded-xl border-2 border-blue-500 cursor-grab relative"
      ></div>
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-gray-800 p-2 lg:p-4 h-[80px] lg:h-[100px] min-h-[80px] lg:min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-400 cursor-grab relative"
      >
        <textarea
          className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white text-sm lg:text-base focus:outline-none"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-gray-800 p-2 lg:p-4 h-[80px] lg:h-[100px] min-h-[80px] lg:min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-400 cursor-grab relative"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap text-sm lg:text-base">
        {task.content}
      </p>
      {mouseIsOver && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering edit mode
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 p-2 rounded opacity-60 hover:opacity-100 bg-gray-900 text-sm lg:text-base"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
