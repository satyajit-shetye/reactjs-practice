export default function Button({ children, className, ...props }) {
	let allClasses = "px-2 py-2 font-semibold uppercase rounded  " + className;

	if (props.type !== "button") {
		allClasses += " bg-amber-400 hover:bg-amber-500 ";
	} else {
		allClasses += " text-amber-500";
	}
	return (
		<button className={allClasses} {...props}>
			{children}
		</button>
	);
}
