import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
	const [projectData, setProjectData] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleAddNewProject() {
		setProjectData((prevState) => ({
			...prevState,
			selectedProjectId: null,
		}));
	}

	function handleCancelProject() {
		setProjectData((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
		}));
	}

	function handleSelectProject(id) {
		setProjectData((prevState) => ({
			...prevState,
			selectedProjectId: id,
		}));
	}

	function handleDeleteProject() {
		setProjectData((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
			projects: prevState.projects.filter(
				(project) => project.id !== prevState.selectedProjectId
			),
			tasks: prevState.tasks.filter(
				(task) => task.projectId !== prevState.selectedProjectId
			),
		}));
	}

	function handleAddTask(task) {
		setProjectData((prevState) => ({
			...prevState,
			tasks: [
				...prevState.tasks,
				{
					...task,
					projectId: prevState.selectedProjectId,
					id: Math.random(),
				},
			],
		}));
	}

	function handleDeleteTask(taskId) {
		setProjectData((prevState) => ({
			...prevState,
			tasks: prevState.tasks.filter((task) => task.id !== taskId),
		}));
	}

	function handleOnSave(newProjectDetails) {
		const id = Math.random();

		setProjectData((prevState) => ({
			...prevState,
			projects: [
				...prevState.projects,
				{
					...newProjectDetails,
					id: id,
				},
			],
			selectedProjectId: id,
		}));
	}

	let content = null;
	let selectedProject = null;
	let selectedTasks = [];

	if (projectData.selectedProjectId === undefined) {
		content = <NoProjectSelected onCreate={handleAddNewProject} />;
	} else if (projectData.selectedProjectId === null) {
		content = (
			<NewProject
				onSave={handleOnSave}
				onCancel={handleCancelProject}
			></NewProject>
		);
	} else {
		selectedProject = projectData.projects.find(
			({ id }) => id === projectData.selectedProjectId
		);

		selectedTasks = projectData.tasks.filter(
			({ projectId }) => projectId === projectData.selectedProjectId
		);

		content = (
			<SelectedProject
				project={selectedProject}
				onDelete={handleDeleteProject}
				onAddTask={handleAddTask}
				onDeleteTask={handleDeleteTask}
				tasks={selectedTasks}
			/>
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar
				onCreate={handleAddNewProject}
				onSelect={handleSelectProject}
				projects={projectData.projects}
				selectedProjectId={selectedProject?.id}
			/>
			{content}
		</main>
	);
}

export default App;
