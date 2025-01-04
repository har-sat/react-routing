import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", name: "event1" },
  { id: "e2", name: "event2" },
  { id: "e3", name: "event3" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
