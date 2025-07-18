// Define the Id type as string or number
const Id = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

// Define the Column type
const Column = PropTypes.shape({
  id: Id.isRequired,
  title: PropTypes.string.isRequired,
});

// Define the Task type
const Task = PropTypes.shape({
  id: Id.isRequired,
  columnId: Id.isRequired,
  content: PropTypes.string.isRequired,
});

// Exporting as objects for potential reuse
export { Id, Column, Task };
