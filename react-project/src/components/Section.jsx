/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
          <h2>{title}</h2>
          {children}
        </section>
    );
}