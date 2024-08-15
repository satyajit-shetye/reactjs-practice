/* eslint-disable react/prop-types */
export default function TabButton(props) {
  return (
    <l1>
      <button
        className={props.isActive ? "active" : undefined}
        onClick={() => props.onSelect(props.children.toLowerCase())}
      >
        {props.children}
      </button>
    </l1>
  );
}
