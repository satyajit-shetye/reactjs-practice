import Button from "./Button";

export default function ProjectsSidebar({
	onCreate,
	onSelect,
	projects,
	selectedProjectId,
}) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				{" "}
				You Projects
			</h2>
			<div>
				<Button onClick={onCreate}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					let classes =
						"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-slate-200 hover:bg-stone-800";

					if (project.id === selectedProjectId) {
						classes += " bg-stone-800 text-stone-200";
					} else {
						classes += " text-stone-400";
					}

					return (
						<li
							className={classes}
							key={project.id}
							onClick={() => onSelect(project.id)}
						>
							{project.title}
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
