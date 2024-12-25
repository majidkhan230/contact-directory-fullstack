import AddContact from "../pages/AddContact";
import ContactListing from "../pages/ContactListing";
import ViewContact from "../pages/ViewContact";

export const routes = [
    {
        path:"/",
        element:<ContactListing/>
    },
    {
        path:"/view/:id",
        element:<ViewContact/>
    },
    {
        path:"/add",
        element:<AddContact/>
    },
    {
        path:"/edit/:id",
        element:<AddContact isEditContact/>
    },

]