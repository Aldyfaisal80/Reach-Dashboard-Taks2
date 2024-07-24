export default function CalendarDashboard() {
    return (
        <div>
            <h1>Calendar</h1>
        </div>
//         <div className="bg-gray-100 font-family-karla flex">

//     <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
//         <div className="p-6">
//             <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
//             <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
//                 <i className="fas fa-plus mr-3"></i> New Report
//             </button>
//         </div>
//         <nav className="text-white text-base font-semibold pt-3">
//             <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//                 <i className="fas fa-tachometer-alt mr-3"></i>
//                 Dashboard
//             </a>
//             <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//                 <i className="fas fa-sticky-note mr-3"></i>
//                 Blank Page
//             </a>
//             <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//                 <i className="fas fa-table mr-3"></i>
//                 Tables
//             </a>
//             <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//                 <i className="fas fa-align-left mr-3"></i>
//                 Forms
//             </a>
//             <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//                 <i className="fas fa-tablet-alt mr-3"></i>
//                 Tabbed Content
//             </a>
//             <a href="calendar.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
//                 <i className="fas fa-calendar mr-3"></i>
//                 Calendar
//             </a>
//         </nav>
//         <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
//             <i className="fas fa-arrow-circle-up mr-3"></i>
//             Upgrade to Pro!
//         </a>
//     </aside>

//     <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
//         {/* <!-- Desktop Header --> */}
//         <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
//             <div className="w-1/2"></div>
//             <div className="relative w-1/2 flex justify-end">
//                 <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
//                     <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"/>
//                 </button>
//                 <button className="h-full w-full fixed inset-0 cursor-default"></button>
//                 <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
//                     <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
//                     <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
//                     <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
//                 </div>
//             </div>
//         </header>

//         {/* <!-- Mobile Header & Nav --> */}
//         <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
//             <div className="flex items-center justify-between">
//                 <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
//                 <button  className="text-white text-3xl focus:outline-none">
//                     <i className="fas fa-bars"></i>
//                     <i className="fas fa-times"></i>
//                 </button>
//             </div>

//             {/* <!-- Dropdown Nav --> */}
//             <nav className="flex flex-col pt-4">
//                 <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-tachometer-alt mr-3"></i>
//                     Dashboard
//                 </a>
//                 <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-sticky-note mr-3"></i>
//                     Blank Page
//                 </a>
//                 <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-table mr-3"></i>
//                     Tables
//                 </a>
//                 <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-align-left mr-3"></i>
//                     Forms
//                 </a>
//                 <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-tablet-alt mr-3"></i>
//                     Tabbed Content
//                 </a>
//                 <a href="calendar.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
//                     <i className="fas fa-calendar mr-3"></i>
//                     Calendar
//                 </a>
//                 <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-cogs mr-3"></i>
//                     Support
//                 </a>
//                 <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-user mr-3"></i>
//                     My Account
//                 </a>
//                 <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
//                     <i className="fas fa-sign-out-alt mr-3"></i>
//                     Sign Out
//                 </a>
//                 <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
//                     <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
//                 </button>
//             </nav>
//             <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
//                 <i className="fas fa-plus mr-3"></i> New Report
//             </button>
//         </header>
    
//         <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
//             <div className="w-full flex-grow p-6">
//                 <h1 className="text-3xl text-black pb-6">Calendar</h1>

//                 <div className="w-full">
//                     {/* <!-- source: https://tailwindcomponents.com/component/calendar-ui-with-tailwindcss-and-alpinejs --> */}
//                     <div className="antialiased sans-serif bg-gray-100">
//                         <div>
//                             <div className="container py-2">
//                                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                                     <div className="flex items-center justify-between py-2 px-6">
//                                         <div>
//                                             <span className="text-lg font-bold text-gray-800"></span>
//                                             <span className="ml-1 text-lg text-gray-600 font-normal"></span>
//                                         </div>
//                                         <div className="border rounded-lg px-1" style="padding-top: 2px;">
//                                             <button 
//                                                 type="button"
//                                                 className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center">
//                                                 <svg className="h-6 w-6 text-gray-500 inline-flex leading-none"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
//                                                 </svg>  
//                                             </button>
//                                             <div className="border-r inline-flex h-6"></div>		
//                                             <button 
//                                                 type="button"
//                                                 className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1" 
//                                                 >
//                                                 <svg className="h-6 w-6 text-gray-500 inline-flex leading-none"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
//                                                 </svg>									  
//                                             </button>
//                                         </div>
//                                     </div>	

//                                     <div className="-mx-1 -mb-1">
//                                         <div className="flex flex-wrap" style="margin-bottom: -40px;">
//                                             <template>	
//                                                 <div style="width: 14.26%" className="px-2 py-2">
//                                                     <div
//                                                         className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center"></div>
//                                                 </div>
//                                             </template>
//                                         </div>

//                                         <div className="flex flex-wrap border-t border-l">
//                                             <template>
//                                                 <div 
//                                                     style="width: 14.28%; height: 120px"
//                                                     className="text-center border-r border-b px-4 pt-2"	
//                                                 ></div>
//                                             </template>	
//                                             <template >	
//                                                 <div style="width: 14.28%; height: 120px" className="px-4 pt-2 border-r border-b relative">
//                                                     <div
//                                                         className="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"
//                                                     ></div>
//                                                     <div style="height: 80px;" className="overflow-y-auto mt-1">
//                                                         <template>	
//                                                             <div
//                                                                 className="px-2 py-1 rounded-lg mt-1 overflow-hidden border"
//                                                             >
//                                                                 <p className="text-sm truncate leading-tight"></p>
//                                                             </div>
//                                                         </template>
//                                                     </div>
//                                                 </div>
//                                             </template>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div style=" background-color: rgba(0, 0, 0, 0.8)" className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">
//                                 <div className="p-4 max-w-xl mx-auto relative absolute left-0 right-0 overflow-hidden mt-24">
//                                     <div className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer">
//                                         <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                                             <path
//                                                 d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
//                                         </svg>
//                                     </div>

//                                     <div className="shadow w-full rounded-lg bg-white overflow-hidden w-full block p-8">
                                        
//                                         <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Add Event Details</h2>
                                    
//                                         <div className="mb-4">
//                                             <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event title</label>
//                                             <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text"/>
//                                         </div>

//                                         <div className="mb-4">
//                                             <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event date</label>
//                                             <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text"/>
//                                         </div>

//                                         <div className="inline-block w-64 mb-4">
//                                             <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Select a theme</label>
//                                             <div className="relative">
//                                                 <select className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700">
//                                                         <template>
//                                                             <option></option>
//                                                         </template>
                                                    
//                                                 </select>
//                                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//                                                 </div>
//                                             </div>
//                                         </div>
                    
//                                         <div className="mt-8 text-right">
//                                             <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2" >
//                                                 Cancel
//                                             </button>	
//                                             <button type="button" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm" >
//                                                 Save Event
//                                             </button>	
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <p className="py-6 text-gray-500">
//                         Source: <a href="https://tailwindcomponents.com/component/calendar-ui-with-tailwindcss-and-alpinejs" className="underline">https://tailwindcomponents.com/component/calendar-ui-with-tailwindcss-and-alpinejs</a>
//                     </p>
//                 </div>
//             </div>
    
//             <footer className="w-full bg-white text-right p-4">
//                 Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
//             </footer>
//         </div>
        
//     </div>

//     {/* <!-- AlpineJS -->
//     <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
//     <!-- Font Awesome -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>

//     <script>
// 		const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// 		const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 		function app() {
// 			return {
// 				month: '',
// 				year: '',
// 				no_of_days: [],
// 				blankdays: [],
// 				days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

// 				events: [
// 					{
// 						event_date: new Date(2020, 3, 1),
// 						event_title: "April Fool's Day",
// 						event_theme: 'blue'
// 					},

// 					{
// 						event_date: new Date(2020, 3, 10),
// 						event_title: "Birthday",
// 						event_theme: 'red'
// 					},

// 					{
// 						event_date: new Date(2020, 3, 16),
// 						event_title: "Upcoming Event",
// 						event_theme: 'green'
// 					}
// 				],
// 				event_title: '',
// 				event_date: '',
// 				event_theme: 'blue',

// 				themes: [
// 					{
// 						value: "blue",
// 						label: "Blue Theme"
// 					},
// 					{
// 						value: "red",
// 						label: "Red Theme"
// 					},
// 					{
// 						value: "yellow",
// 						label: "Yellow Theme"
// 					},
// 					{
// 						value: "green",
// 						label: "Green Theme"
// 					},
// 					{
// 						value: "purple",
// 						label: "Purple Theme"
// 					}
// 				],

// 				openEventModal: false,

// 				initDate() {
// 					let today = new Date();
// 					this.month = today.getMonth();
// 					this.year = today.getFullYear();
// 					this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
// 				},

// 				isToday(date) {
// 					const today = new Date();
// 					const d = new Date(this.year, this.month, date);

// 					return today.toDateString() === d.toDateString() ? true : false;
// 				},

// 				showEventModal(date) {
// 					// open the modal
// 					this.openEventModal = true;
// 					this.event_date = new Date(this.year, this.month, date).toDateString();
// 				},

// 				addEvent() {
// 					if (this.event_title == '') {
// 						return;
// 					}

// 					this.events.push({
// 						event_date: this.event_date,
// 						event_title: this.event_title,
// 						event_theme: this.event_theme
// 					});

// 					console.log(this.events);

// 					// clear the form data
// 					this.event_title = '';
// 					this.event_date = '';
// 					this.event_theme = 'blue';

// 					//close the modal
// 					this.openEventModal = false;
// 				},

// 				getNoOfDays() {
// 					let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

// 					// find where to start calendar day of week
// 					let dayOfWeek = new Date(this.year, this.month).getDay();
// 					let blankdaysArray = [];
// 					for ( var i=1; i <= dayOfWeek; i++) {
// 						blankdaysArray.push(i);
// 					}

// 					let daysArray = [];
// 					for ( var i=1; i <= daysInMonth; i++) {
// 						daysArray.push(i);
// 					}
					
// 					this.blankdays = blankdaysArray;
// 					this.no_of_days = daysArray;
// 				}
// 			}
// 		}
// 	</script> */}
// </div>
    )
}