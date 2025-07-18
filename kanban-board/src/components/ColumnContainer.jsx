// import { SortableContext, useSortable } from "@dnd-kit/sortable";
// import TrashIcon from "../icons/TrashIcon";
// import { CSS } from "@dnd-kit/utilities";
// import { useMemo, useState } from "react";
// import PlusIcon from "../icons/PlusIcon";
// import TaskCard from "./TaskCard";

// function ColumnContainer({ column, deleteColumn, updateColumn, createTask, tasks, deleteTask, updateTask }) {
//   const [editMode, setEditMode] = useState(false);

//   const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

//   const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
//     id: column.id,
//     data: {
//       type: "Column",
//       column,
//     },
//     disabled: editMode,
//   });

//   const style = {
//     transition,
//     transform: CSS.Transform.toString(transform),
//   };

//   if (isDragging) {
//     return (
//       <div
//         ref={setNodeRef}
//         style={style}
//         className="bg-slate-600 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col opacity-40 border-2 border-blue-400"
//       ></div>
//     );
//   }

//   return (
//     <div ref={setNodeRef} style={style} className="bg-slate-600 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
//       <div
//         {...attributes}
//         {...listeners}
//         onClick={() => {
//           setEditMode(true);
//         }}
//         className="bg-blue-700 text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-blue-800 border-4 flex items-center justify-between"
//       >
//         <div className="flex gap-2">
//           <div className="flex justify-center items-center bg-blue-700 px-2 py-1 text-sm text-white rounded-full">0</div>
//           {!editMode && column.title}
//           {editMode && (
//             <input
//               className="bg-black focus:border-blue-500 border rounded outline-none px-2"
//               value={column.title}
//               onChange={(e) => updateColumn(column.id, e.target.value)}
//               autoFocus
//               onBlur={() => {
//                 setEditMode(false);
//               }}
//               onKeyDown={(e) => {
//                 if (e.key !== "Enter") return;
//                 setEditMode(false);
//               }}
//             />
//           )}
//         </div>
//         <button
//           onClick={() => {
//             deleteColumn(column.id);
//           }}
//           className="stroke-blue-300 hover:stroke-white hover:bg-blue-700 rounded px-1 py-3"
//         >
//           <TrashIcon />
//         </button>
//       </div>

//       {/* Task container */}
//       <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
//         <SortableContext items={tasksIds}>
//           {tasks.map((task) => (
//             <TaskCard key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
//           ))}
//         </SortableContext>
//       </div>

//       {/* Footer */}
//       <button
//         className="flex gap-2 items-center border-blue-700 border-2 rounded-md p-4 border-x-blue-950 active:bg-blue-700 text-white"
//         onClick={() => {
//           createTask(column.id);
//         }}
//       >
//         <PlusIcon />
//         Add Task
//       </button>
//     </div>
//   );
// }

// export default ColumnContainer;
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";

function ColumnContainer({ column, deleteColumn, updateColumn, createTask, tasks, deleteTask, updateTask }) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-slate-600 w-[300px] sm:w-[350px] h-[400px] sm:h-[500px] max-h-[400px] sm:max-h-[500px] rounded-md flex flex-col opacity-40 border-2 border-blue-400"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-slate-600 w-[300px] sm:w-[350px] h-[400px] sm:h-[500px] max-h-[400px] sm:max-h-[500px] rounded-md flex flex-col"
    >
      {/* Header */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
        className="bg-blue-700 text-sm sm:text-md h-[50px] sm:h-[60px] cursor-grab rounded-md rounded-b-none p-2 sm:p-3 font-bold border-blue-800 border-4 flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-blue-700 px-2 py-1 text-xs sm:text-sm text-white rounded-full">
            {tasks.length}
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black text-sm sm:text-base focus:border-blue-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => setEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="stroke-blue-300 hover:stroke-white hover:bg-blue-700 rounded px-1 py-1 sm:py-2"
        >
          <TrashIcon />
        </button>
      </div>

      {/* Task container */}
      <div className="flex flex-grow flex-col gap-2 sm:gap-4 p-2 sm:p-3 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
          ))}
        </SortableContext>
      </div>

      {/* Footer */}
      <button
        className="flex gap-2 items-center border-blue-700 border-2 rounded-md p-2 sm:p-4 active:bg-blue-700 text-white text-sm sm:text-base"
        onClick={() => createTask(column.id)}
      >
        <PlusIcon />
        Add Task
      </button>
    </div>
  );
}

export default ColumnContainer;
