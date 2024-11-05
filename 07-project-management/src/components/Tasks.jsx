import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<NewTask onAddTask={onAddTask}></NewTask>
			{tasks && tasks.length ? (
				<ul className="p-4 mt-8 rounded-sm bg-stone-100">
					{tasks.map((task) => {
						return (
							<li className="flex justify-between my-4">
								<span>{task.name}</span>
								<button
									className="text-stone-700 hover:text-red-500"
									onClick={() => onDeleteTask(task.id)}
								>
									Clear
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<p className="text-stone-800 my-4">
					This project does not have any tasks yet.
				</p>
			)}
		</section>
	);
}
