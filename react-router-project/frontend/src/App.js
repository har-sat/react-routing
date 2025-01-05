import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayoutPage from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";

import { loader as eventsLoader } from "./pages/Events";
import { loader as eventDetailsLoader } from "./pages/EventDetail";
import { action as newEventAction } from "./pages/NewEvent";
import { action as deleteEventAction } from "./pages/EventDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
