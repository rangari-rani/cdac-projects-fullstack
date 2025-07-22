
import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import ColumnContainer from "./ColumnContainer";
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";

const KanbanBoard = () => {
    const [columns, setColumns] = useState([]);
    const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

    const [tasks, setTasks] = useState([]);

    const [activeColumn, setActiveColumn] = useState(null);

    const [activeTask, setActiveTask] = useState(null);

    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 3,
        },
    }));

    return (
        <div className="flex flex-col lg:flex-row w-full items-start overflow-hidden px-4 lg:px-[40px]">
            <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
                <div className="flex flex-col lg:flex-row gap-4 w-full overflow-x-auto ">
                    <SortableContext items={columnsId}>
                        {columns.map((col) => (
                            <ColumnContainer
                                key={col.id}
                                column={col}
                                deleteColumn={deleteColumn}
                                updateColumn={updateColumn}
                                createTask={createTask}
                                tasks={tasks.filter((task) => task.columnId === col.id)}
                                deleteTask={deleteTask}
                                updateTask={updateTask}
                            />
                        ))}
                    </SortableContext>
                    <button
                        onClick={createNewColumn}
                        className="h-[60px] w-full lg:w-[350px] cursor-pointer rounded-lg text-white bg-blue-700 border-2 border-blue-950 p-4 ring-blue-800 hover:ring-2 flex gap-2 items-center justify-center"
                    >
                        <PlusIcon />
                        Add Column
                    </button>
                </div>
                {createPortal(
                    <DragOverlay>
                        {activeColumn && (
                            <ColumnContainer
                                column={activeColumn}
                                deleteColumn={deleteColumn}
                                updateColumn={updateColumn}
                                createTask={createTask}
                                deleteTask={deleteTask}
                                updateTask={updateTask}
                                tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
                            />
                        )}
                        {activeTask && (
                            <TaskCard task={activeTask} deleteTask={deleteTask} updateTask={updateTask} />
                        )}
                    </DragOverlay>,
                    document.body
                )}
            </DndContext>
        </div>
    );

    function createTask(columnId) {
        const newTask = {
            id: generateId(),
            columnId,
            content: `Task ${tasks.length + 1}`,
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    function updateTask(id, content) {
        const newTasks = tasks.map((task) => {
            if (task.id !== id) return task;
            return { ...task, content };
        });
        setTasks(newTasks);
    }

    function createNewColumn() {
        const columnToAdd = {
            id: generateId(),
            title: `Column ${columns.length + 1}`,
        };
        setColumns([...columns, columnToAdd]);
    }

    function deleteColumn(id) {
        const filteredColumns = columns.filter((col) => col.id !== id);
        setColumns(filteredColumns);
        const newTasks = tasks.filter((t) => t.columnId !== id);
        setTasks(newTasks);
    }

    function updateColumn(id, title) {
        const newColumns = columns.map((col) => {
            if (col.id !== id) return col;
            return { ...col, title };
        });
        setColumns(newColumns);
    }

    function onDragStart(event) {
        if (event.active.data.current?.type === "Column") {
            setActiveColumn(event.active.data.current.column);
            return;
        }
        if (event.active.data.current?.type === "Task") {
            setActiveTask(event.active.data.current.task);
            return;
        }
    }

    function onDragEnd(event) {
        setActiveColumn(null);
        setActiveTask(null);
        const { active, over } = event;
        if (!over) return;

        const activeColumnId = active.id;
        const overColumnId = over.id;

        if (activeColumnId === overColumnId) return;

        setColumns((columns) => {
            const activeColumnIndex = columns.findIndex((col) => col.id === activeColumnId);
            const overColumnIndex = columns.findIndex((col) => col.id === overColumnId);
            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
    }

    function onDragOver(event) {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveTask = active.data.current?.type === "Task";
        const isOverTask = over.data.current?.type === "Task";

        if (!isActiveTask) return;

        if (isActiveTask && isOverTask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                tasks[activeIndex].columnId = tasks[overIndex].columnId;

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverColumn = over.data.current?.type === "Column";

        if (isActiveTask && isOverColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);

                tasks[activeIndex].columnId = overId;

                return arrayMove(tasks, activeIndex, activeIndex);
            });
        }
    }
};

function generateId() {
    return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
