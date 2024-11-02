export default function Input({ label, $invalid, ...props }) {
	let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
	let inputClasses =
		"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";
	if ($invalid) {
		labelClasses += " text-red-800";
		inputClasses += " bg-red-100 border-red-800 text-red-800";
	} else {
		labelClasses += " text-stone-200";
		inputClasses += " bg-stone-300";
	}
	return (
		<p className="mb-4">
			<label className={labelClasses}>{label}</label>
			<input className={inputClasses} {...props} />
		</p>
	);
}
