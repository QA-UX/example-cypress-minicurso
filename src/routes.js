import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import UserPage from "views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Painel",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificações",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Usuários",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  }
];
export default routes;
