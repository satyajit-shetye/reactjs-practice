export default function Log({ logs }) {
	const logTemplate = logs.map((log) => {
		return (
			<li key={`${log.square.row}${log.square.column}`}>
				Player : {log.player} [{log.square.row},{log.square.column} ]{" "}
			</li>
		);
	});
	return <ol id="log">{logTemplate}</ol>;
}
