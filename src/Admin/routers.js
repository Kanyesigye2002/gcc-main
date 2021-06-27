import React from 'react';


const Events = React.lazy(() => import('./Components/Events/Events'));
const AddEvent = React.lazy(() => import('./Components/Events/AddEvent'));

const ContactUs = React.lazy(() => import('./Components/ContactUS/Contacts'));

const Donations = React.lazy(() => import('./Components/Donate/Donations'));
const DonationsMobiles = React.lazy(() => import('./Components/Donate/DonateMobileMoney'));
const DonationsCreditCard = React.lazy(() => import('./Components/Donate/DonateCreditCard'));

const AddImage = React.lazy(() => import('./Components/Gallery/AddImage'));

const EditHome = React.lazy(() => import('./Components/Home/EditHome'));

const AddSermon = React.lazy(() => import('./Components/Sermons/AddSermon'));
const Sermons = React.lazy(() => import('./Components/Sermons/Sermons'));

const Dashboard = React.lazy(() => import('./Components/LandingPage/LandingPage'));

const routes = [

    {path: '/admin/Events', exact: true, name: 'Events', component: Events},
    {path: '/admin/Events/AddEvent', exact: true, name: 'Add Event', component: AddEvent},


    {path: '/admin/', exact: true, name: 'Home', component: Dashboard},

    { path: '/admin/ContactUs', name: 'Contact Us', component: ContactUs },

    { path: '/admin/Donations', name: 'Donates', component: Donations, exact: true},
    { path: '/admin/Donations/Details', name: 'Details', component: Donations },
    { path: '/admin/Donations/CreditCards', name: 'Donates on Credit Card', component: DonationsCreditCard },
    { path: '/admin/Donations/MobileMoney', name: 'Donates on Mobile Money', component: DonationsMobiles },

    { path: '/admin/AddImage', name: 'Add Image', component: AddImage },

    { path: '/admin/EditHome', name: 'Edit Home', component: EditHome },

    { path: '/admin/Sermons/AddSermon', name: 'Add Sermon', component: AddSermon },
    { path: '/admin/Sermons', name: 'Sermons', component: Sermons },

];

export default routes;
