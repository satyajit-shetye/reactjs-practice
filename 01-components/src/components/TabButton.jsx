export default function TabButton({ children, onSelect, isSelected }) {
	return (
		<li>
			<button
				className={isSelected ? "active" : undefined}
				onClick={onSelect.bind(null, children.toLowerCase())}
			>
				{children}
			</button>
		</li>
	);
}
