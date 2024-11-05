import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialogRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialogRef.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog
			ref={dialogRef}
			className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md"
		>
			{children}
			<form method="dialog" className="mt-4 text-right">
				<Button data-autofocus>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById("modal-root")
	);
});

export default Modal;
