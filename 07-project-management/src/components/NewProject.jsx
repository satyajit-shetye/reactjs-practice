import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
	const titleRef = useRef();
	const descriptionRef = useRef();
	const duedateRef = useRef();
	const modalRef = useRef();

	function handleSave() {
		const title = titleRef.current.value.trim();
		const description = descriptionRef.current.value.trim();
		const duedate = duedateRef.current.value.trim();

		if (!title || !description || !duedate) {
			modalRef.current.open();
			return;
		}

		onSave({
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			duedate: duedateRef.current.value,
		});
	}

	return (
		<div className="w-[35rem] mt-16">
			<Modal ref={modalRef} buttonCaption="Okay">
				<h2 className="text-xl font-bold test-stone-500 my-4">Invalid Input</h2>
				<p className="text-stone-700 mb-4">
					Oops ... looks like you forgot to enter a value.
				</p>
				<p className="text-stone-700 mb-4">
					Please make sure you provide a valid value for every input field.
				</p>
			</Modal>
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button
						className="text-stone-800 hover:text-stone-950"
						onClick={onCancel}
					>
						Cancel
					</button>
				</li>
				<li>
					<button
						className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
						onClick={handleSave}
					>
						Save
					</button>
				</li>
			</menu>
			<div>
				<Input ref={titleRef} type="text" label="Title" />
				<Input ref={descriptionRef} label="Description" textarea />
				<Input ref={duedateRef} type="date" label="Due Date" />
			</div>
		</div>
	);
}
