// import { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import Work from "./queries/works";
// import Registration from "./registration";
// import Queries from "./queries";
// import Activity from "./registration/activity";
// import Owner from "./registration/owner";
// import OwnerQuery from "./queries/owners";
// import {Login} from "./login";  // Asegúrate de no usar `{ Login }` si exportas por defecto
// import Inventario from "./inventario";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const location = useLocation();

//   // Determinar si estamos en la ruta de login
//   const isLoginRoute = location.pathname === "/login";

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           {!isLoginRoute && <Sidebar isSidebar={isSidebar} />}
//           <main className="content">
//             {!isLoginRoute && <Topbar setIsSidebar={setIsSidebar} />}
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/work" element={<Work />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/registration" element={<Registration />} />
//               <Route path="/activity" element={<Activity />} />
//               <Route path="/owner" element={<Owner />} />
//               <Route path="/owner/query" element={<OwnerQuery />} />
//               <Route path="/queries" element={<Queries />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//               <Route path="/Inventario" element={<Inventario />} />
//               <Route path="/login" element={<Login />} /> {/* Nueva ruta para el login */}
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;











import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Work from "./queries/works";
import Registration from "./registration";
import Queries from "./queries";
import Activity from "./registration/activity";
import Owner from "./registration/owner";
import OwnerQuery from "./queries/owners";
import { Login } from "./login";  // Asegúrate de no usar `{ Login }` si exportas por defecto
import Inventario from "./inventario";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  // Estado para verificar autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar el token en localStorage
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Convertir el token a un valor booleano
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('authToken');
  //   setIsAuthenticated(false);
  //   navigate('/login');
  // };

  const isLoginRoute = location.pathname === "/login";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLoginRoute && !isAuthenticated && <Navigate to="/login" replace />}
          {!isLoginRoute && isAuthenticated && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {!isLoginRoute && isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/work" element={<Work />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/owner" element={<Owner />} />
              <Route path="/owner/query" element={<OwnerQuery />} />
              <Route path="/queries" element={<Queries />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/Inventario" element={<Inventario />} />
              <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
